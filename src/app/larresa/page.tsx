'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, Circle, Lock, ArrowRight, Sparkles, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LEVELS } from '@/lib/constants'

interface LevelData {
  level: number
  profile: string
  timestamp: number
}

const LEARNING_STEPS = [
  {
    level: 1,
    title: 'AI-grunder',
    description: 'Förstå vad AI är, hur chatbots fungerar och ta dina första steg.',
    href: '/grunder',
    items: ['Vad är AI och generativ AI?', 'Dina första chatbot-steg', 'Quick win: Ställ din första smarta fråga'],
  },
  {
    level: 1,
    title: 'Promptteknik - grunder',
    description: 'Lär dig RUKF-modellen och formulera effektiva prompts.',
    href: '/promptteknik',
    items: ['RUKF-modellen (Roll, Uppgift, Kontext, Format)', 'Vanliga misstag', 'Quick win: Testa RUKF på en lektionsplanering'],
  },
  {
    level: 2,
    title: 'AI i din planering',
    description: 'Använd AI som stöd i lektionsplanering och materialframställning.',
    href: '/i-undervisningen',
    items: ['Planera lektioner med AI', 'Skapa differentierat material', 'Quick win: Generera en uppgift för din klass'],
  },
  {
    level: 2,
    title: 'Utforska promptbiblioteket',
    description: 'Hitta färdiga, pedagogiskt genomtänkta prompts för ditt ämne.',
    href: '/promptbibliotek',
    items: ['Filtrera per ämne och syfte', 'Fyll i dina variabler', 'Quick win: Kopiera och testa en prompt'],
  },
  {
    level: 3,
    title: 'AI i klassrummet',
    description: 'Integrera AI i din undervisning med eleverna.',
    href: '/i-undervisningen',
    items: ['AI som elevverktyg', 'Studieteknik med AI', 'Quick win: Introducera AI för dina elever'],
  },
  {
    level: 3,
    title: 'Validitet & bedömning',
    description: 'Säkerställ valid bedömning när AI används.',
    href: '/validitet',
    items: ['Validitetsramverket', 'Checklistor per bedömningstyp', 'Quick win: Granska en uppgift med checklistan'],
  },
  {
    level: 4,
    title: 'Avancerade strategier',
    description: 'Fördjupa dig i avancerad promptteknik och differentiering.',
    href: '/avancerat',
    items: ['Few-shot prompting', 'Kedja av prompts', 'AI för formativ bedömning'],
  },
  {
    level: 4,
    title: 'Ditt ämne på djupet',
    description: 'Ämnesspecifika strategier och exempel.',
    href: '/amnen',
    items: ['Fördjupning i ditt ämne', 'Skapa egna promptar', 'Dela med kollegor'],
  },
  {
    level: 5,
    title: 'Leda AI-arbete',
    description: 'Inspirera och utbilda kollegor på din skola.',
    href: '/avancerat',
    items: ['Kollegialt lärande om AI', 'AI-policy på skolnivå', 'Workshop-design'],
  },
]

export default function LarresaPage() {
  const [levelData, setLevelData] = useState<LevelData | null>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const saved = localStorage.getItem('oskarsai_level')
    if (saved) {
      setLevelData(JSON.parse(saved))
    }
    const savedSteps = localStorage.getItem('oskarsai_completed_steps')
    if (savedSteps) {
      setCompletedSteps(JSON.parse(savedSteps))
    }
    const savedItems = localStorage.getItem('oskarsai_completed_items')
    if (savedItems) {
      setCompletedItems(JSON.parse(savedItems))
    }
  }, [])

  function toggleStep(index: number) {
    setCompletedSteps((prev) => {
      const next = prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      localStorage.setItem('oskarsai_completed_steps', JSON.stringify(next))
      return next
    })
  }

  function toggleItem(stepIndex: number, itemIndex: number) {
    const key = `${stepIndex}-${itemIndex}`
    setCompletedItems((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      localStorage.setItem('oskarsai_completed_items', JSON.stringify(next))
      return next
    })
  }

  const userLevel = levelData?.level || 0

  if (!levelData) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Din personliga lärresa</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Gör nivåtestet först så skapar vi en lärresa anpassad efter just din nivå.
        </p>
        <Button asChild size="lg">
          <Link href="/nivatest">
            Ta nivåtestet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    )
  }

  const currentLevel = LEVELS[userLevel - 1]

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-16">
      <div className="text-center mb-10">
        <Badge className={`${currentLevel.color} text-sm px-3 py-1 mb-3`}>
          Nivå {currentLevel.id}: {currentLevel.name}
        </Badge>
        <h1 className="text-3xl font-bold mb-3">Din lärresa</h1>
        <p className="text-muted-foreground">
          Steg anpassade efter din nivå. Markera steg som avklarade allt eftersom du lär dig.
        </p>
      </div>

      {/* Horizontal stepper - desktop */}
      <div className="hidden md:flex justify-center gap-1 mb-12">
        {LEVELS.map((level, i) => (
          <div key={level.id} className="flex items-center">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                level.id < userLevel
                  ? 'bg-emerald-100 text-emerald-700'
                  : level.id === userLevel
                    ? `${level.color} ring-2 ring-offset-1 ring-primary/30`
                    : 'bg-muted text-muted-foreground/50'
              }`}
            >
              {level.id < userLevel ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : level.id === userLevel ? (
                <Circle className="h-4 w-4 fill-current" />
              ) : (
                <Lock className="h-3.5 w-3.5" />
              )}
              {level.name}
            </div>
            {i < LEVELS.length - 1 && (
              <div className={`w-6 h-0.5 mx-1 ${level.id < userLevel ? 'bg-emerald-300' : 'bg-border'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile stepper */}
      <div className="flex md:hidden justify-center gap-1 mb-8 overflow-x-auto pb-2">
        {LEVELS.map((level, i) => (
          <div key={level.id} className="flex items-center shrink-0">
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                level.id < userLevel
                  ? 'bg-emerald-100 text-emerald-700'
                  : level.id === userLevel
                    ? `${level.color}`
                    : 'bg-muted text-muted-foreground/50'
              }`}
            >
              {level.id < userLevel && <CheckCircle2 className="h-3 w-3" />}
              {level.name}
            </div>
            {i < LEVELS.length - 1 && <div className="w-3 h-px mx-0.5 bg-border" />}
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {LEARNING_STEPS.map((step, i) => {
          const isCompleted = completedSteps.includes(i)
          const isAccessible = step.level <= userLevel
          const isCurrentLevel = step.level === userLevel
          const isFuture = step.level > userLevel

          return (
            <Card
              key={i}
              className={`transition-all ${
                isCompleted
                  ? 'border-emerald-200 bg-emerald-50/30'
                  : isCurrentLevel
                    ? 'border-primary/30 shadow-sm'
                    : isFuture
                      ? 'opacity-50'
                      : ''
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => isAccessible && toggleStep(i)}
                      disabled={!isAccessible}
                      className="mt-0.5 shrink-0"
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                      ) : isFuture ? (
                        <Lock className="h-5 w-5 text-muted-foreground/40" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground/40 hover:text-primary transition-colors" />
                      )}
                    </button>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className={LEVELS[step.level - 1].color}>
                          Nivå {step.level}
                        </Badge>
                        {isCurrentLevel && !isCompleted && (
                          <Badge variant="secondary" className="text-xs">Aktuellt</Badge>
                        )}
                      </div>
                      <CardTitle className={`text-lg ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                  {isAccessible && (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={step.href}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pl-14">
                <CardDescription className="mb-2">{step.description}</CardDescription>
                <ul className="space-y-1.5">
                  {step.items.map((item, j) => {
                    const itemKey = `${i}-${j}`
                    const isItemDone = completedItems[itemKey]
                    return (
                      <li key={j} className="text-sm flex items-start gap-2">
                        <button
                          onClick={() => isAccessible && toggleItem(i, j)}
                          disabled={!isAccessible}
                          className="mt-0.5 shrink-0"
                        >
                          {isItemDone ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground/30 hover:text-primary/60 transition-colors" />
                          )}
                        </button>
                        <span className={isItemDone ? 'line-through text-muted-foreground/50' : 'text-muted-foreground'}>
                          {item}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center mt-8">
        <Button asChild variant="outline" size="sm">
          <Link href="/nivatest">
            <RotateCcw className="mr-2 h-4 w-4" />
            Gör om nivåtestet
          </Link>
        </Button>
      </div>
    </div>
  )
}
