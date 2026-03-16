'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  ChevronLeft,
  ChevronRight,
  StickyNote,
  Clock,
  Brain,
  Wrench,
  MessageSquare,
  Users,
  BookOpen,
  AlertTriangle,
  ClipboardCheck,
  Play,
  GraduationCap,
  HelpCircle,
  Sparkles,
  Search,
  ShieldAlert,
  Leaf,
  Eye,
  Zap,
  ExternalLink,
  Target,
  Maximize,
  Minimize,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Slide {
  title: string
  subtitle?: string
  duration: number // minutes
  content: React.ReactNode
  speakerNotes: string[]
}

// ---------------------------------------------------------------------------
// Slide data
// ---------------------------------------------------------------------------

const slides: Slide[] = [
  // ---- 1. Välkommen ----
  {
    title: 'AI i skolan – möjligheter, risker och praktik',
    subtitle: 'En presentation från Oskars AI',
    duration: 3,
    content: (
      <div className="flex flex-col items-center gap-8">
        <Sparkles className="size-16 text-primary" />
        <ul className="mx-auto max-w-xl space-y-3 text-lg md:text-xl text-muted-foreground text-left">
          <li>Vad AI egentligen är</li>
          <li>Verktyg för lärare</li>
          <li>Promptteknik (RUKF)</li>
          <li>AI i klassrummet</li>
          <li>Risker och begränsningar</li>
          <li>Nästa steg</li>
        </ul>
      </div>
    ),
    speakerNotes: [
      'Välkomna alla. Det här är en 60-minutersöversikt.',
      'Interaktiv session – ställ gärna frågor under tiden.',
      'Vi kommer även göra några praktiska övningar.',
    ],
  },

  // ---- 2. Vad är AI? ----
  {
    title: 'Vad är generativ AI?',
    duration: 5,
    content: (
      <div className="mx-auto grid max-w-3xl gap-6 text-lg md:text-xl text-muted-foreground">
        <p>
          AI hittar <strong className="text-foreground">mönster i data</strong>.
          Generativ AI skapar nytt innehåll – text, bilder, kod.
        </p>
        <p>
          Den förutsäger det{' '}
          <strong className="text-foreground">mest troliga nästa ordet</strong> –
          den &quot;förstår&quot; eller &quot;tänker&quot; inte.
        </p>
        <div className="mt-4 flex items-center gap-3 rounded-xl border bg-muted/50 px-6 py-4 text-base">
          <Brain className="size-8 shrink-0 text-primary" />
          <span className="font-medium text-foreground">
            AI är ett verktyg, inte en kollega.
          </span>
        </div>
      </div>
    ),
    speakerNotes: [
      'Viktigt att avmystifiera. Visa att det är imponerande men har tydliga begränsningar.',
      'AI är tränad på enorma mängder data men kan inte resonera som en människa.',
    ],
  },

  // ---- 3. AI-verktyg ----
  {
    title: 'Verktyg som förändrar spelplanen',
    duration: 7,
    content: (
      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
        {[
          {
            name: 'NotebookLM',
            desc: 'Källbaserad AI – sammanfattar och svarar utifrån dina egna dokument.',
            icon: BookOpen,
          },
          {
            name: 'Gemini',
            desc: 'Skapar presentationer och exporterar direkt till Google Slides.',
            icon: Zap,
          },
          {
            name: 'Canva',
            desc: 'Magic Design – skapar visuellt material anpassat för lärare. Gratis för lärare.',
            icon: Sparkles,
          },
        ].map((tool) => (
          <Card key={tool.name}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <tool.icon className="size-5 text-primary" />
                <CardTitle>{tool.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{tool.desc}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
    speakerNotes: [
      'Kort demo av varje verktyg om möjligt.',
      'NotebookLM är extra bra eftersom det minskar hallucinationer.',
      'Geminis presentation-export imponerar på folk.',
      'Canva är gratis för lärare.',
    ],
  },

  // ---- 4. Promptteknik – RUKF ----
  {
    title: 'Konsten att fråga rätt',
    subtitle: 'RUKF-modellen',
    duration: 7,
    content: (
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { letter: 'R', word: 'Roll', desc: 'Vem är AI:n?' },
            { letter: 'U', word: 'Uppgift', desc: 'Vad ska den göra?' },
            { letter: 'K', word: 'Kontext', desc: 'Bakgrundsinformation' },
            { letter: 'F', word: 'Format', desc: 'Hur ska svaret se ut?' },
          ].map((item) => (
            <div
              key={item.letter}
              className="flex items-start gap-3 rounded-xl border bg-muted/50 px-5 py-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                {item.letter}
              </span>
              <div>
                <p className="font-semibold text-foreground">{item.word}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
            <p className="mb-1 font-semibold text-destructive">Utan RUKF</p>
            <p className="text-muted-foreground">
              &quot;Gör en lektionsplanering om fotosyntesen&quot;
            </p>
          </div>
          <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
            <p className="mb-1 font-semibold text-green-700 dark:text-green-400">Med RUKF</p>
            <p className="text-muted-foreground">
              &quot;Du är en erfaren NO-lärare (R). Skapa en lektionsplanering om fotosyntesen (U)
              för åk 7, 60 min, blandad grupp (K). Ge mål, aktiviteter och exit ticket i
              tabellformat (F).&quot;
            </p>
          </div>
        </div>
      </div>
    ),
    speakerNotes: [
      'Det här är det mest effektfulla lärare kan lära sig.',
      'Skillnaden mellan en enkel fråga och en RUKF-prompt är enorm.',
    ],
  },

  // ---- 5. AI i klassrummet ----
  {
    title: 'Från lärarverktyg till klassrumsaktivitet',
    duration: 8,
    content: (
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {[
          {
            name: 'AI-detektiven',
            desc: 'Elever hittar fel i AI-genererade svar.',
            icon: Search,
          },
          {
            name: 'Prompt-tävling',
            desc: 'Vem skriver den bästa prompten? Klassen röstar.',
            icon: MessageSquare,
          },
          {
            name: 'Sokratisk dialog',
            desc: 'AI ställer frågorna – eleven svarar och resonerar.',
            icon: Users,
          },
          {
            name: 'Faktagranskning',
            desc: 'Verifiera AI:ns påståenden mot riktiga källor.',
            icon: ClipboardCheck,
          },
        ].map((activity) => (
          <Card key={activity.name}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <activity.icon className="size-5 text-primary" />
                <CardTitle>{activity.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {activity.desc}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
    speakerNotes: [
      'Dessa aktiviteter fungerar i alla ämnen.',
      'Nyckelprincip: elever ska tänka MER med AI, inte mindre.',
      'AI som lärpartner, inte svarsmaskin.',
    ],
  },

  // ---- 6. Studieteknik ----
  {
    title: 'AI som studieverktyg för elever',
    duration: 5,
    content: (
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-center text-lg text-muted-foreground">
          Evidensbaserade studiemetoder förstärkta med AI
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              method: 'Retrieval practice',
              desc: 'AI genererar quiz och frågor utifrån materialet.',
              icon: Brain,
            },
            {
              method: 'Elaborering',
              desc: 'Eleven förklarar för AI:n – som ställer följdfrågor.',
              icon: MessageSquare,
            },
            {
              method: 'Spacing',
              desc: 'AI skapar studieplanering med spridda repetitioner.',
              icon: Clock,
            },
            {
              method: 'NotebookLM',
              desc: 'Källbaserat studerande – AI svarar enbart utifrån elevens egna material.',
              icon: BookOpen,
            },
          ].map((item) => (
            <div
              key={item.method}
              className="flex items-start gap-3 rounded-xl border bg-muted/50 px-5 py-4"
            >
              <item.icon className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">{item.method}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    speakerNotes: [
      'Elever vill naturligt använda AI för att få svar.',
      'Vi behöver styra om till att använda AI som studieverktyg.',
      'NotebookLM är perfekt eftersom det är grundat i elevens eget material.',
    ],
  },

  // ---- 7. Risker ----
  {
    title: 'Det AI inte kan – och vad som kan gå fel',
    duration: 7,
    content: (
      <div className="mx-auto max-w-4xl space-y-4">
        {[
          {
            risk: 'Hallucinationer',
            desc: 'AI låter övertygande men kan ha helt fel.',
            mitigation: 'Verifiera alltid mot läroplanen och primärkällor.',
            icon: AlertTriangle,
          },
          {
            risk: 'Bias',
            desc: 'Speglar fördomar i träningsdata.',
            mitigation: 'Diskutera bias med elever – bra övningstillfälle.',
            icon: Eye,
          },
          {
            risk: 'Integritet / GDPR',
            desc: 'Elevdata ska inte matas in i AI-verktyg.',
            mitigation: 'Använd anonymiserade exempel. Följ skolans riktlinjer.',
            icon: ShieldAlert,
          },
          {
            risk: 'Överdriven tillit',
            desc: 'När vi slutar ifrågasätta AI:ns svar.',
            mitigation: 'Bygg in källkritik som standardrutin.',
            icon: Brain,
          },
          {
            risk: 'Miljöpåverkan',
            desc: 'AI-modeller kräver stor energiförbrukning.',
            mitigation: 'Var medveten. Använd AI med syfte, inte slentrianmässigt.',
            icon: Leaf,
          },
        ].map((item) => (
          <div
            key={item.risk}
            className="flex items-start gap-4 rounded-xl border bg-muted/50 px-5 py-4"
          >
            <item.icon className="mt-0.5 size-5 shrink-0 text-destructive" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="font-semibold text-foreground">{item.risk}</p>
                <p className="text-sm text-muted-foreground">– {item.desc}</p>
              </div>
              <p className="mt-1 text-sm text-green-700 dark:text-green-400">
                Strategi: {item.mitigation}
              </p>
            </div>
          </div>
        ))}
      </div>
    ),
    speakerNotes: [
      'Det här är INTE en anledning att undvika AI.',
      'Men vi måste vara ärliga med begränsningar.',
      'Speciellt hallucinationer i kursplanerelaterat innehåll – verifiera alltid mot kursplanen.',
    ],
  },

  // ---- 8. Validitet och bedömning ----
  {
    title: 'Bedömning i en AI-tid',
    duration: 5,
    content: (
      <div className="mx-auto max-w-3xl space-y-4">
        {[
          'Variera bedömningsformer – inte bara skriftligt',
          'Bedöm processen – loggar, reflektioner, muntligt',
          'Var transparent – när är AI okej?',
          'Autentiska uppgifter – personlig kontext som AI inte kan generera',
          'Skapa ett klassrumskontrakt kring AI-användning',
        ].map((principle, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl border bg-muted/50 px-5 py-4"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <p className="text-base md:text-lg text-foreground">{principle}</p>
          </div>
        ))}
      </div>
    ),
    speakerNotes: [
      'Det här är en av de största frågorna lärare har.',
      'Svaret är inte att förbjuda AI utan att designa bättre bedömning.',
      'Fokusera på process, inte bara produkt.',
    ],
  },

  // ---- 9. Live-demo ----
  {
    title: 'Nu testar vi!',
    subtitle: 'Live-demo',
    duration: 5,
    content: (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <Play className="size-16 text-primary" />
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            1. Öppna{' '}
            <strong className="text-foreground">ChatGPT eller Gemini</strong>
          </p>
          <p>
            2. Skriv en <strong className="text-foreground">RUKF-prompt</strong>{' '}
            tillsammans – publiken väljer ämne
          </p>
          <p>
            3. Diskutera resultatet kritiskt:{' '}
            <strong className="text-foreground">
              Vad är bra? Vad behöver redigeras?
            </strong>
          </p>
        </div>
      </div>
    ),
    speakerNotes: [
      'Låt publiken välja ämne.',
      'Skriv prompten tillsammans med RUKF.',
      'Diskutera: Vad är bra? Vad behöver redigeras? Skulle du använda det här?',
      'Det här gör det verkligt.',
    ],
  },

  // ---- 10. Fortbildningsmodulen ----
  {
    title: 'Fortsätt lärandet: 5 tillfällen',
    duration: 3,
    content: (
      <div className="mx-auto max-w-3xl space-y-4">
        {[
          { nr: 1, name: 'Introduktion', desc: 'Vad är AI? Verktyg och möjligheter.' },
          { nr: 2, name: 'Promptteknik', desc: 'RUKF-modellen med praktiska övningar.' },
          { nr: 3, name: 'Klassrummet', desc: 'Aktiviteter och studieteknik med AI.' },
          { nr: 4, name: 'Validitet & etik', desc: 'Bedömning, risker och riktlinjer.' },
          { nr: 5, name: 'Fördjupning', desc: 'Avancerade verktyg och egna projekt.' },
        ].map((session) => (
          <div
            key={session.nr}
            className="flex items-center gap-4 rounded-xl border bg-muted/50 px-5 py-3"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {session.nr}
            </span>
            <div>
              <p className="font-semibold text-foreground">{session.name}</p>
              <p className="text-sm text-muted-foreground">{session.desc}</p>
            </div>
          </div>
        ))}
        <p className="text-center text-sm text-muted-foreground">
          Varje tillfälle 90 min med övningar, diskussion och dokumentation.
        </p>
        <p className="text-center text-base font-medium text-primary">
          oskarsai.se/fortbildning
        </p>
      </div>
    ),
    speakerNotes: [
      'Om er skola vill jobba systematiskt med AI-kompetens är det här vägen.',
      'Fem 90-minuterstillfällen över en termin.',
      'Allt material finns på sajten.',
    ],
  },

  // ---- 11. Nästa steg ----
  {
    title: 'Dina nästa steg',
    duration: 3,
    content: (
      <div className="mx-auto max-w-2xl space-y-5">
        {[
          {
            step: 'Gör nivåtestet',
            link: 'oskarsai.se/nivatest',
            icon: Target,
          },
          {
            step: 'Testa EN sak den här veckan',
            link: null,
            icon: Zap,
          },
          {
            step: 'Dela din erfarenhet med en kollega',
            link: null,
            icon: Users,
          },
          {
            step: 'Utforska promptbiblioteket',
            link: 'oskarsai.se/promptbibliotek',
            icon: BookOpen,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl border bg-muted/50 px-5 py-4"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div className="flex flex-wrap items-baseline gap-2">
              <p className="text-base md:text-lg font-medium text-foreground">
                {item.step}
              </p>
              {item.link && (
                <span className="text-sm text-primary">{item.link}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
    speakerNotes: [
      'Det viktigaste är att börja.',
      'Försök inte göra allt på en gång.',
      'Välj en sak, testa, och iterera.',
    ],
  },

  // ---- 12. Frågor ----
  {
    title: 'Frågor?',
    duration: 2,
    content: (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <HelpCircle className="size-16 text-primary" />
        <p className="text-2xl font-medium text-foreground">Tack för idag!</p>
        <div className="space-y-2 text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <ExternalLink className="size-4" />
            oskarsai.se
          </p>
          <p className="flex items-center justify-center gap-2">
            <GraduationCap className="size-4" />
            oskarsai.se/fortbildning
          </p>
          <p className="flex items-center justify-center gap-2">
            <Wrench className="size-4" />
            oskarsai.se/ai-verktyg
          </p>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Skapad av Oskars AI</p>
      </div>
    ),
    speakerNotes: [
      'Öppna för frågor.',
      'Påminn om resurserna som finns tillgängliga.',
    ],
  },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNotes, setShowNotes] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const totalSlides = slides.length
  const slide = slides[currentSlide]

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))
  }, [totalSlides])

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const toggleNotes = useCallback(() => {
    setShowNotes((prev) => !prev)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  // Fullscreen change listener
  useEffect(() => {
    function handleFsChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault()
        toggleNotes()
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev, toggleNotes, toggleFullscreen])

  const progressPercent = ((currentSlide + 1) / totalSlides) * 100

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Progress bar */}
      <div className="h-1.5 w-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Slide content */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-10 md:px-12 md:py-16">
        <div className="w-full max-w-5xl space-y-6 text-center">
          {slide.subtitle && (
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {slide.subtitle}
            </p>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {slide.title}
          </h1>
          <div className="mx-auto mt-8">{slide.content}</div>
        </div>
      </main>

      {/* Speaker notes */}
      {showNotes && (
        <div className="border-t bg-muted/60 px-6 py-4 md:px-12">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <StickyNote className="size-3.5" />
            Talarnoteringar
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {slide.speakerNotes.map((note, i) => (
              <li key={i}>• {note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Bottom bar */}
      <div className="flex items-center justify-between border-t bg-background px-4 py-3 md:px-8">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="font-medium tabular-nums">
            {currentSlide + 1} / {totalSlides}
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <Clock className="size-3.5" />
            {slide.duration} min
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleNotes}
            className={showNotes ? 'bg-muted' : ''}
          >
            <StickyNote className="size-4" />
            <span className="hidden sm:inline">Noteringar</span>
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Avsluta fullskärm' : 'Fullskärm'}
          >
            {isFullscreen ? <Minimize className="size-4" /> : <Maximize className="size-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={goPrev}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={goNext}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
