import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { SYSTEM_PROMPT, CHAT_CONFIG } from '@/lib/chat-config'

// In-memory rate limiting (resets on server restart / cold start)
const rateLimits = new Map<string, {
  minute: { count: number; resetAt: number }
  day: { count: number; resetAt: number }
}>()

function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown'
}

function checkRateLimit(ip: string): { allowed: boolean; message?: string } {
  const now = Date.now()
  let entry = rateLimits.get(ip)

  if (!entry) {
    entry = {
      minute: { count: 0, resetAt: now + 60_000 },
      day: { count: 0, resetAt: now + 86_400_000 },
    }
    rateLimits.set(ip, entry)
  }

  // Reset windows if expired
  if (now > entry.minute.resetAt) {
    entry.minute = { count: 0, resetAt: now + 60_000 }
  }
  if (now > entry.day.resetAt) {
    entry.day = { count: 0, resetAt: now + 86_400_000 }
  }

  if (entry.day.count >= CHAT_CONFIG.rateLimitPerDay) {
    return { allowed: false, message: 'Du har nått dagens gräns för antal meddelanden. Försök igen imorgon!' }
  }
  if (entry.minute.count >= CHAT_CONFIG.rateLimitPerMinute) {
    return { allowed: false, message: 'Du skickar meddelanden för snabbt. Vänta en stund och försök igen.' }
  }

  entry.minute.count++
  entry.day.count++

  // Clean up stale entries periodically
  if (rateLimits.size > 1000) {
    for (const [key, val] of rateLimits) {
      if (now > val.minute.resetAt && now > val.day.resetAt) {
        rateLimits.delete(key)
      }
    }
  }

  return { allowed: true }
}

export async function POST(request: NextRequest) {
  try {
    // Check API key
    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: 'Chatten är inte konfigurerad ännu. Kontakta administratören.' },
        { status: 500 }
      )
    }

    // Rate limiting
    const ip = getClientIP(request)
    const rateCheck = checkRateLimit(ip)
    if (!rateCheck.allowed) {
      return Response.json({ error: rateCheck.message }, { status: 429 })
    }

    // Parse and validate input
    const body = await request.json().catch(() => null)
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return Response.json(
        { error: 'Ogiltigt meddelande. Försök igen.' },
        { status: 400 }
      )
    }

    const messages = body.messages as Array<{ role: string; content: string }>

    // Validate last message is from user
    const lastMessage = messages[messages.length - 1]
    if (lastMessage.role !== 'user' || typeof lastMessage.content !== 'string') {
      return Response.json(
        { error: 'Ogiltigt meddelande. Försök igen.' },
        { status: 400 }
      )
    }

    // Check input length
    if (lastMessage.content.trim().length === 0) {
      return Response.json(
        { error: 'Meddelandet kan inte vara tomt.' },
        { status: 400 }
      )
    }
    if (lastMessage.content.length > CHAT_CONFIG.maxInputLength) {
      return Response.json(
        { error: `Meddelandet är för långt. Max ${CHAT_CONFIG.maxInputLength} tecken.` },
        { status: 400 }
      )
    }

    // Limit conversation history
    const validatedMessages = messages
      .slice(-CHAT_CONFIG.maxMessageHistory)
      .map(m => ({
        role: m.role as 'user' | 'assistant',
        content: String(m.content).slice(0, CHAT_CONFIG.maxInputLength),
      }))

    // Create streaming response
    const client = new Anthropic()
    const stream = client.messages.stream({
      model: CHAT_CONFIG.model,
      max_tokens: CHAT_CONFIG.maxTokens,
      system: SYSTEM_PROMPT,
      messages: validatedMessages,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
          controller.close()
        } catch {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch {
    return Response.json(
      { error: 'Något gick fel. Försök igen senare.' },
      { status: 500 }
    )
  }
}
