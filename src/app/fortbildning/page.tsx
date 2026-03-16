'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Target,
  Lightbulb,
  MessageCircle,
  ClipboardList,
  Clock,
  ArrowRight,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const STORAGE_KEY = 'oskarsai_fortbildning'

interface Session {
  number: number
  title: string
  learningGoals: string[]
  exercises: { title: string; duration: string; description: string }[]
  discussionQuestions: string[]
  documentation: string[]
}

const SESSIONS: Session[] = [
  {
    number: 1,
    title: 'Introduktion till AI',
    learningGoals: [
      'F\u00f6rst\u00e5 vad generativ AI \u00e4r och inte \u00e4r',
      'Skapa ett AI-konto och formulera sin f\u00f6rsta prompt',
      'Diskutera m\u00f6jligheter OCH risker med AI i skolan',
    ],
    exercises: [
      {
        title: 'Min f\u00f6rsta prompt',
        duration: '20 min',
        description:
          'Alla skapar ett ChatGPT/Gemini-konto och testar att st\u00e4lla en fr\u00e5ga om sitt \u00e4mne',
      },
      {
        title: 'J\u00e4mf\u00f6r AI-svar',
        duration: '15 min',
        description:
          'St\u00e4ll samma fr\u00e5ga i tv\u00e5 olika verktyg, j\u00e4mf\u00f6r och diskutera skillnaderna',
      },
      {
        title: 'Hallucinationsjakten',
        duration: '15 min',
        description:
          'Be AI:n om fakta i ditt \u00e4mne och faktagranska svaret',
      },
    ],
    discussionQuestions: [
      'Vad \u00f6verraskade dig mest med AI:ns svar?',
      'Vilka risker ser du med AI i undervisningen?',
      'Hur tror du AI kommer p\u00e5verka ditt \u00e4mne de kommande \u00e5ren?',
      'Vilka etiska fr\u00e5gor v\u00e4cker AI-anv\u00e4ndning i skolan?',
    ],
    documentation: [
      'Skriv ner tre m\u00f6jligheter och tre risker med AI som du identifierat',
      'Spara dina b\u00e4sta prompts fr\u00e5n \u00f6vningarna',
    ],
  },
  {
    number: 2,
    title: 'Promptteknik och planering',
    learningGoals: [
      'Beh\u00e4rska RUKF-modellen (Roll, Uppgift, Kontext, Format)',
      'Skapa en lektionsplanering med AI-st\u00f6d',
      'Utforska NotebookLM, Gemini och Canva som verktyg',
    ],
    exercises: [
      {
        title: 'RUKF i praktiken',
        duration: '20 min',
        description:
          'Formulera tre prompts med RUKF-modellen f\u00f6r ditt \u00e4mne',
      },
      {
        title: 'Lektionsplanering',
        duration: '25 min',
        description:
          'Skapa en komplett lektionsplan med AI, granska och f\u00f6rb\u00e4ttra',
      },
      {
        title: 'Verktygsl\u00e5dan',
        duration: '15 min',
        description:
          'Testa NotebookLM med ett dokument, eller skapa en presentation i Gemini/Canva',
      },
    ],
    discussionQuestions: [
      'Hur f\u00f6r\u00e4ndrades kvaliteten p\u00e5 AI:ns svar med RUKF?',
      'Vad beh\u00f6ver du som l\u00e4rare tillf\u00f6ra som AI:n inte kan?',
      'Vilket verktyg ser du mest potential i f\u00f6r ditt \u00e4mne?',
    ],
    documentation: [
      'Spara din b\u00e4sta lektionsplan',
      'Notera vilka verktyg du vill utforska vidare',
    ],
  },
  {
    number: 3,
    title: 'AI i klassrummet',
    learningGoals: [
      'Planera elevaktiviteter med AI-inslag',
      'F\u00f6rst\u00e5 hur AI kan st\u00f6dja studieteknik',
      'Skapa en sokratisk AI-\u00f6vning f\u00f6r elever',
    ],
    exercises: [
      {
        title: 'AI-detektiven',
        duration: '20 min',
        description:
          'Skapa en text med medvetna fel, testa p\u00e5 varandra',
      },
      {
        title: 'Sokratisk dialog',
        duration: '20 min',
        description:
          'Testa och utv\u00e4rdera en sokratisk AI-prompt som eleverna kan anv\u00e4nda',
      },
      {
        title: 'Studieteknik med NotebookLM',
        duration: '15 min',
        description:
          'Ladda upp kursmaterial och skapa en studiesession',
      },
    ],
    discussionQuestions: [
      'Hur s\u00e4kerst\u00e4ller vi att elever l\u00e4r sig MED AI ist\u00e4llet f\u00f6r att bara kopiera?',
      'Vilka regler beh\u00f6ver vi ha f\u00f6r elevers AI-anv\u00e4ndning?',
      'Hur kan vi anv\u00e4nda AI utan att \u00f6ka sk\u00e4rmtiden on\u00f6digt?',
    ],
    documentation: [
      'Skapa ett utkast till klassrumsregler f\u00f6r AI-anv\u00e4ndning',
      'Dokumentera en elevaktivitet du vill testa',
    ],
  },
  {
    number: 4,
    title: 'Validitet, etik och k\u00e4llkritik',
    learningGoals: [
      'F\u00f6rst\u00e5 hur AI p\u00e5verkar bed\u00f6mningens validitet',
      'Kunna designa AI-resistenta uppgifter',
      'Genomf\u00f6ra k\u00e4llkritiska \u00f6vningar med AI-genererat material',
    ],
    exercises: [
      {
        title: 'Uppgiftsdesign',
        duration: '25 min',
        description:
          'Granska en befintlig uppgift: kan AI l\u00f6sa den? Omarbeta den f\u00f6r \u00f6kad validitet',
      },
      {
        title: 'K\u00e4llkritik\u00f6vning',
        duration: '20 min',
        description:
          'Be AI skapa en vilseledande text, analysera vad som g\u00f6r den \u00f6vertygande',
      },
      {
        title: 'Etiskt dilemma',
        duration: '15 min',
        description:
          'Diskutera case: en elev har anv\u00e4nt AI utan att ange det, hur hanterar vi det?',
      },
    ],
    discussionQuestions: [
      'Beh\u00f6ver vi \u00e4ndra hur vi bed\u00f6mer n\u00e4r AI finns?',
      'Var g\u00e5r gr\u00e4nsen mellan hj\u00e4lpmedel och fusk?',
      'Hur kan vi l\u00e4ra elever att vara k\u00e4llkritiska mot AI?',
      'Vilka GDPR-aspekter beh\u00f6ver vi t\u00e4nka p\u00e5?',
    ],
    documentation: [
      'Omarbeta en uppgift f\u00f6r \u00f6kad validitet',
      'Skapa ett utkast till skolans st\u00e4llningstagande om AI och bed\u00f6mning',
    ],
  },
  {
    number: 5,
    title: 'F\u00f6rdjupning och fram\u00e5tblick',
    learningGoals: [
      'Beh\u00e4rska avancerade prompttekniker',
      'Skapa en handlingsplan f\u00f6r AI p\u00e5 skolan',
      'Planera f\u00f6r fortsatt kollegialt l\u00e4rande',
    ],
    exercises: [
      {
        title: 'Avancerade tekniker',
        duration: '20 min',
        description:
          'Testa few-shot prompting och chain-of-thought i ditt \u00e4mne',
      },
      {
        title: 'AI-policy',
        duration: '25 min',
        description:
          'Skapa ett utkast till skolans AI-policy tillsammans',
      },
      {
        title: 'Min handlingsplan',
        duration: '15 min',
        description:
          'Varje deltagare skapar en personlig plan f\u00f6r AI-anv\u00e4ndning n\u00e4sta termin',
      },
    ],
    discussionQuestions: [
      'Vad har f\u00f6r\u00e4ndrats i din syn p\u00e5 AI sedan tillf\u00e4lle 1?',
      'Hur kan vi forts\u00e4tta utvecklas kollegialt?',
      'Vilka verktyg och metoder vill vi prioritera fram\u00f6ver?',
    ],
    documentation: [
      'AI-policy-utkast',
      'Personlig handlingsplan',
      'Utv\u00e4rdering av fortbildningen',
    ],
  },
]

export default function FortbildningPage() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setChecked(JSON.parse(stored))
      }
    } catch {
      // ignore
    }
  }, [])

  function toggleExpanded(sessionNumber: number) {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(sessionNumber)) {
        next.delete(sessionNumber)
      } else {
        next.add(sessionNumber)
      }
      return next
    })
  }

  function toggleCheck(key: string) {
    setChecked((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <GraduationCap className="size-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Fortbildning: AI i skolan
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ett f&auml;rdigt fortbildningspaket med fem tillf&auml;llen som tar ert
          kollegium fr&aring;n nyb&ouml;rjare till trygg AI-anv&auml;ndare. Varje
          tillf&auml;lle &auml;r ca 90 minuter och inneh&aring;ller &ouml;vningar,
          diskussioner och dokumentation.
        </p>
      </div>

      {/* Tips card */}
      <Card className="mb-8 border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20">
        <CardContent className="flex gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-sm text-amber-900 dark:text-amber-100">
            <span className="font-semibold">Tips: Niv&aring;gruppera deltagarna!</span>{' '}
            L&aring;t kollegorna g&ouml;ra niv&aring;testet p&aring;{' '}
            <Link href="/nivatest" className="font-medium underline underline-offset-2">
              oskarsai.se/nivatest
            </Link>{' '}
            innan f&ouml;rsta tillf&auml;llet. Gruppera sedan i blandade eller
            niv&aring;anpassade grupper beroende p&aring; vad som passar er skola.
          </p>
        </CardContent>
      </Card>

      {/* Sessions */}
      <div className="space-y-4">
        {SESSIONS.map((session) => {
          const isExpanded = expanded.has(session.number)
          return (
            <Card key={session.number}>
              <CardHeader
                className="cursor-pointer select-none"
                onClick={() => toggleExpanded(session.number)}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="default" className="shrink-0">
                      {session.number}
                    </Badge>
                    <CardTitle className="text-lg">
                      {session.title}
                    </CardTitle>
                    <Badge variant="outline" className="hidden sm:inline-flex">
                      <Clock className="size-3" />
                      90 min
                    </Badge>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="size-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="size-5 shrink-0 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>

              {isExpanded && (
                <CardContent className="space-y-6 pt-0">
                  {/* L\u00e4randem\u00e5l */}
                  <div>
                    <SectionHeader icon={Target} title="L\u00e4randem\u00e5l" />
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                      {session.learningGoals.map((goal, i) => (
                        <li key={i}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  {/* \u00d6vningar */}
                  <div>
                    <SectionHeader icon={Lightbulb} title="\u00d6vningar" />
                    <div className="mt-2 space-y-3">
                      {session.exercises.map((ex, i) => (
                        <div
                          key={i}
                          className="rounded-lg border bg-muted/30 p-3"
                        >
                          <div className="flex items-start gap-2">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              {i + 1}
                            </span>
                            <div>
                              <p className="font-medium">
                                {ex.title}{' '}
                                <span className="font-normal text-muted-foreground">
                                  ({ex.duration})
                                </span>
                              </p>
                              <p className="mt-0.5 text-sm text-muted-foreground">
                                {ex.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Diskussionsfr\u00e5gor */}
                  <div>
                    <SectionHeader icon={MessageCircle} title="Diskussionsfr\u00e5gor" />
                    <ol className="ml-6 mt-2 list-decimal space-y-1 text-sm text-muted-foreground">
                      {session.discussionQuestions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Dokumentation (checklists) */}
                  <div>
                    <SectionHeader icon={ClipboardList} title="Dokumentation" />
                    <div className="mt-2 space-y-2">
                      {session.documentation.map((doc, i) => {
                        const key = `${session.number}-doc-${i}`
                        const isDone = !!checked[key]
                        return (
                          <button
                            key={key}
                            onClick={() => toggleCheck(key)}
                            className="flex w-full items-start gap-2 rounded-lg p-2 text-left text-sm transition-colors hover:bg-muted/50"
                          >
                            {isDone ? (
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            ) : (
                              <Circle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                            )}
                            <span
                              className={
                                isDone
                                  ? 'line-through text-muted-foreground'
                                  : 'text-foreground'
                              }
                            >
                              {doc}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>G&ouml;r niv&aring;testet</CardTitle>
            <p className="text-sm text-muted-foreground">
              L&aring;t alla deltagare testa sin AI-niv&aring; innan fortbildningen
              startar.
            </p>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/nivatest">
                Till niv&aring;testet
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Utforska AI-verktyg</CardTitle>
            <p className="text-sm text-muted-foreground">
              Se &ouml;versikten av verktyg som anv&auml;nds i fortbildningen.
            </p>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <Link href="/ai-verktyg">
                Till verktygen
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" />
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  )
}
