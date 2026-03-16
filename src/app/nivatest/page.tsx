'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { QUIZ_QUESTIONS, SELF_ASSESSMENTS, calculateResult, type QuizResult } from '@/lib/quiz-data'
import { LEVELS } from '@/lib/constants'

const LIKERT_LABELS = [
  'Stämmer inte alls',
  'Stämmer till viss del',
  'Stämmer ganska bra',
  'Stämmer bra',
  'Stämmer helt',
]

export default function NivatestPage() {
  const [phase, setPhase] = useState<'intro' | 'quiz' | 'self' | 'result'>('intro')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [selfAnswers, setSelfAnswers] = useState<Record<number, number>>({})
  const [result, setResult] = useState<QuizResult | null>(null)

  const totalSteps = QUIZ_QUESTIONS.length + SELF_ASSESSMENTS.length
  const currentStep =
    phase === 'quiz'
      ? currentQuestion
      : phase === 'self'
        ? QUIZ_QUESTIONS.length + currentQuestion
        : 0
  const progressPercent = phase === 'result' ? 100 : (currentStep / totalSteps) * 100

  function handleQuizAnswer(questionId: number, answerIndex: number) {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answerIndex }))
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setPhase('self')
      setCurrentQuestion(0)
    }
  }

  function handleSelfAnswer(statementId: number, value: number) {
    setSelfAnswers((prev) => ({ ...prev, [statementId]: value }))
  }

  function handleSelfNext() {
    if (currentQuestion < SELF_ASSESSMENTS.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      const res = calculateResult(quizAnswers, selfAnswers)
      setResult(res)
      setPhase('result')
      // Save to localStorage
      localStorage.setItem(
        'oskarsai_level',
        JSON.stringify({ level: res.level, profile: res.profile, timestamp: Date.now() })
      )
    }
  }

  function handleRestart() {
    setPhase('intro')
    setCurrentQuestion(0)
    setQuizAnswers({})
    setSelfAnswers({})
    setResult(null)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-10 md:py-16">
      {/* Progress bar */}
      {(phase === 'quiz' || phase === 'self') && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
            <span>
              {phase === 'quiz' ? 'Del 1: Kunskapsfrågor' : 'Del 2: Självskattning'}
            </span>
            <span>
              {currentStep + 1} / {totalSteps}
            </span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
      )}

      {/* Intro */}
      {phase === 'intro' && (
        <div className="text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Testa din AI-nivå</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Testet tar cirka 3-5 minuter och består av två delar: kunskapsfrågor och
            självskattning. Du får en personlig nivåbedömning och en rekommenderad lärresa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Del 1: Kunskapsfrågor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {QUIZ_QUESTIONS.length} frågor om AI-begrepp och användning (60% vikt)
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Del 2: Självskattning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {SELF_ASSESSMENTS.length} påståenden om din erfarenhet (40% vikt)
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="text-base px-8" onClick={() => { setPhase('quiz'); setCurrentQuestion(0) }}>
            Starta testet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Quiz questions */}
      {phase === 'quiz' && (
        <div>
          <h2 className="text-xl font-semibold mb-6">
            Fråga {currentQuestion + 1} av {QUIZ_QUESTIONS.length}
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg leading-relaxed">
                {QUIZ_QUESTIONS[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleQuizAnswer(QUIZ_QUESTIONS[currentQuestion].id, i)}
                  className={`w-full text-left p-4 rounded-lg border transition-all hover:border-primary/50 hover:bg-primary/5 ${
                    quizAnswers[QUIZ_QUESTIONS[currentQuestion].id] === i
                      ? 'border-primary bg-primary/5'
                      : 'border-border'
                  }`}
                >
                  <span className="text-sm font-medium text-muted-foreground mr-3">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {option}
                </button>
              ))}
            </CardContent>
          </Card>
          {currentQuestion > 0 && (
            <Button
              variant="ghost"
              className="mt-4"
              onClick={() => setCurrentQuestion((prev) => prev - 1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Föregående
            </Button>
          )}
        </div>
      )}

      {/* Self-assessment */}
      {phase === 'self' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Påstående {currentQuestion + 1} av {SELF_ASSESSMENTS.length}
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Markera hur väl påståendet stämmer in på dig.
          </p>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg leading-relaxed">
                {SELF_ASSESSMENTS[currentQuestion].statement}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {LIKERT_LABELS.map((label, i) => (
                <button
                  key={i}
                  onClick={() =>
                    handleSelfAnswer(SELF_ASSESSMENTS[currentQuestion].id, i)
                  }
                  className={`w-full text-left p-4 rounded-lg border transition-all hover:border-primary/50 hover:bg-primary/5 ${
                    selfAnswers[SELF_ASSESSMENTS[currentQuestion].id] === i
                      ? 'border-primary bg-primary/5'
                      : 'border-border'
                  }`}
                >
                  {label}
                </button>
              ))}
            </CardContent>
          </Card>
          <div className="flex justify-between mt-4">
            <Button
              variant="ghost"
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion((prev) => prev - 1)
                } else {
                  setPhase('quiz')
                  setCurrentQuestion(QUIZ_QUESTIONS.length - 1)
                }
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Föregående
            </Button>
            <Button
              onClick={handleSelfNext}
              disabled={selfAnswers[SELF_ASSESSMENTS[currentQuestion].id] === undefined}
            >
              {currentQuestion < SELF_ASSESSMENTS.length - 1 ? (
                <>
                  Nästa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Visa resultat
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Result */}
      {phase === 'result' && result && (
        <div className="text-center">
          <div className="mb-8">
            <Badge className={`${LEVELS[result.level - 1].color} text-lg px-4 py-2 mb-4`}>
              Nivå {result.level}: {LEVELS[result.level - 1].name}
            </Badge>
            <h1 className="text-3xl font-bold mb-4">Ditt resultat</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              {result.dynamicMessage}
            </p>
          </div>

          {/* Score breakdown */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Kunskapsfrågor</CardDescription>
                <CardTitle className="text-2xl">
                  {result.knowledgeScore}/{result.knowledgeMax}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Självskattning</CardDescription>
                <CardTitle className="text-2xl">
                  {result.selfAssessmentScore}/{result.selfAssessmentMax}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Level visualization */}
          <div className="flex justify-center gap-2 mb-8">
            {LEVELS.map((level) => (
              <div
                key={level.id}
                className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                  level.id === result.level
                    ? `${level.color} border-2 scale-105 shadow-sm`
                    : level.id < result.level
                      ? 'bg-muted/50 border-border text-muted-foreground'
                      : 'bg-background border-border/50 text-muted-foreground/50'
                }`}
              >
                <span className="text-xs font-medium">Nivå {level.id}</span>
                <span className="text-sm font-semibold">{level.name}</span>
                {level.id < result.level && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-1" />
                )}
                {level.id === result.level && (
                  <span className="text-xs mt-1 font-medium">Du är här</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="text-base px-6">
              <Link href="/larresa">
                Börja din lärresa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={handleRestart}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Gör om testet
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
