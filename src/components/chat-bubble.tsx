'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, ArrowUp, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { QUICK_QUESTIONS } from '@/lib/chat-config'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleSend = useCallback(async (messageText?: string) => {
    const text = (messageText || input).trim()
    if (!text || isStreaming) return

    setError(null)
    setInput('')

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
    }

    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: '',
    }

    const updatedMessages = [...messages, userMessage]
    setMessages([...updatedMessages, assistantMessage])
    setIsStreaming(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'Något gick fel. Försök igen.')
      }

      const reader = response.body!.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        const currentAccumulated = accumulated
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: currentAccumulated,
          }
          return updated
        })
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Något gick fel. Försök igen.'
      setError(errorMessage)
      // Remove empty assistant message on error
      setMessages(prev => prev.filter(m => m.content !== '' || m.role !== 'assistant'))
    } finally {
      setIsStreaming(false)
    }
  }, [input, isStreaming, messages])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  // Closed state — bubble button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="no-print fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
        aria-label="Öppna chatten med Oskars klon"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    )
  }

  // Open state — chat window
  return (
    <div className="no-print fixed z-[60] bottom-0 right-0 left-0 h-[75dvh] sm:bottom-6 sm:right-6 sm:left-auto sm:h-[520px] sm:w-[400px] flex flex-col bg-card border border-border shadow-2xl sm:rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground sm:rounded-t-xl">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold">Oskars klon</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="rounded-lg p-1 hover:bg-white/20 transition-colors"
          aria-label="Stäng chatten"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground text-center py-2">
              Hej! Jag är Oskars klon — din AI-pedagogikassistent. Ställ en fråga eller välj nedan!
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {QUICK_QUESTIONS.map((q) => (
                <Button
                  key={q.label}
                  variant="outline"
                  size="xs"
                  onClick={() => handleSend(q.message)}
                  className="text-xs"
                >
                  {q.label}
                </Button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-3 py-2 text-sm whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-primary/10 text-foreground rounded-br-sm'
                  : 'bg-muted text-foreground rounded-bl-sm'
              }`}
            >
              {msg.content}
              {isStreaming && msg.role === 'assistant' && msg === messages[messages.length - 1] && (
                <span className="inline-block w-1.5 h-4 bg-foreground/60 ml-0.5 animate-pulse" />
              )}
            </div>
          </div>
        ))}

        {error && (
          <div className="text-center text-sm text-destructive py-1">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border px-3 py-2 bg-card">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ställ en fråga om AI i undervisning..."
            rows={1}
            className="flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring max-h-24"
            style={{ minHeight: '40px' }}
            disabled={isStreaming}
          />
          <Button
            size="icon-sm"
            onClick={() => handleSend()}
            disabled={!input.trim() || isStreaming}
            aria-label="Skicka meddelande"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
