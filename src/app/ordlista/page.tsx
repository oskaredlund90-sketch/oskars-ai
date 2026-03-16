'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { BookOpen, Search, Shuffle, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GLOSSARY_TERMS, type GlossaryTerm } from '@/lib/glossary-data'

const CATEGORIES = [
  { value: null, label: 'Alla' },
  { value: 'grundläggande', label: 'Grundläggande' },
  { value: 'promptteknik', label: 'Promptteknik' },
  { value: 'verktyg', label: 'Verktyg' },
  { value: 'etik', label: 'Etik' },
  { value: 'tekniskt', label: 'Tekniskt' },
] as const

const CATEGORY_COLORS: Record<GlossaryTerm['category'], string> = {
  grundläggande: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  promptteknik: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  verktyg: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  etik: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
  tekniskt: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function OrdlistaPage() {
  const [mode, setMode] = useState<'glossary' | 'flashcards'>('glossary')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const [shuffledOrder, setShuffledOrder] = useState<number[]>([])
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const filteredTerms = useMemo(() => {
    let terms = [...GLOSSARY_TERMS]

    if (category) {
      terms = terms.filter((t) => t.category === category)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      terms = terms.filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q)
      )
    }

    terms.sort((a, b) => a.term.localeCompare(b.term, 'sv'))
    return terms
  }, [search, category])

  const flashcardTerms = useMemo(() => {
    let terms = [...GLOSSARY_TERMS]
    if (category) {
      terms = terms.filter((t) => t.category === category)
    }
    terms.sort((a, b) => a.term.localeCompare(b.term, 'sv'))

    if (shuffled && shuffledOrder.length === terms.length) {
      return shuffledOrder.map((i) => terms[i])
    }
    return terms
  }, [category, shuffled, shuffledOrder])

  const handleShuffle = useCallback(() => {
    const indices = Array.from({ length: flashcardTerms.length }, (_, i) => i)
    setShuffledOrder(shuffleArray(indices))
    setShuffled(true)
    setCurrentIndex(0)
    setFlipped(false)
  }, [flashcardTerms.length])

  const handleResetOrder = useCallback(() => {
    setShuffled(false)
    setShuffledOrder([])
    setCurrentIndex(0)
    setFlipped(false)
  }, [])

  const handleCategoryChange = useCallback((value: string | null) => {
    setCategory(value)
    setCurrentIndex(0)
    setFlipped(false)
    setShuffled(false)
    setShuffledOrder([])
  }, [])

  const scrollToTerm = useCallback((id: string) => {
    const el = cardRefs.current[id]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      el.classList.add('ring-2', 'ring-primary')
      setTimeout(() => {
        el.classList.remove('ring-2', 'ring-primary')
      }, 2000)
    }
  }, [])

  // Reset flashcard state when switching modes
  useEffect(() => {
    if (mode === 'flashcards') {
      setCurrentIndex(0)
      setFlipped(false)
    }
  }, [mode])

  const currentTerm = flashcardTerms[currentIndex]

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="size-8 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Ordlista</h1>
        </div>
        <p className="text-muted-foreground text-lg mb-6">
          Viktiga begrepp inom AI och promptteknik förklarade på ett enkelt sätt
          för lärare. Använd ordlistan som uppslagsverk eller öva med flashcards.
        </p>

        {/* Mode toggle */}
        <div className="flex gap-2">
          <Button
            variant={mode === 'glossary' ? 'default' : 'outline'}
            onClick={() => setMode('glossary')}
          >
            <BookOpen className="size-4" />
            Ordlista
          </Button>
          <Button
            variant={mode === 'flashcards' ? 'default' : 'outline'}
            onClick={() => setMode('flashcards')}
          >
            <RotateCcw className="size-4" />
            Flashcards
          </Button>
        </div>
      </div>

      {/* Category filter (shared) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <Badge
            key={cat.label}
            className={`cursor-pointer transition-colors ${
              category === cat.value
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
            onClick={() => handleCategoryChange(cat.value)}
          >
            {cat.label}
          </Badge>
        ))}
      </div>

      {/* Glossary mode */}
      {mode === 'glossary' && (
        <>
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Sök bland termer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-10 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                &times;
              </button>
            )}
          </div>

          {/* Term count */}
          <p className="text-sm text-muted-foreground mb-4">
            Visar {filteredTerms.length} av {GLOSSARY_TERMS.length} termer
          </p>

          {/* Term cards */}
          <div className="flex flex-col gap-4">
            {filteredTerms.map((term) => (
              <Card
                key={term.id}
                ref={(el) => { cardRefs.current[term.id] = el }}
                className="transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{term.term}</CardTitle>
                    <Badge
                      className={`shrink-0 ${CATEGORY_COLORS[term.category]}`}
                    >
                      {term.category.charAt(0).toUpperCase() + term.category.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed">{term.definition}</p>

                  {term.example && (
                    <div className="rounded-lg bg-muted/50 p-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Exempel: </span>
                        {term.example}
                      </p>
                    </div>
                  )}

                  {term.relatedTerms && term.relatedTerms.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-xs text-muted-foreground">Relaterade:</span>
                      {term.relatedTerms.map((relId) => {
                        const related = GLOSSARY_TERMS.find((t) => t.id === relId)
                        if (!related) return null
                        return (
                          <Badge
                            key={relId}
                            variant="outline"
                            className="cursor-pointer hover:bg-accent text-xs"
                            onClick={() => {
                              setSearch('')
                              setCategory(null)
                              setTimeout(() => scrollToTerm(relId), 100)
                            }}
                          >
                            {related.term.split('(')[0].trim()}
                          </Badge>
                        )
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {filteredTerms.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg mb-2">Inga termer hittades</p>
                <p className="text-sm">Prova att ändra din sökning eller välj en annan kategori.</p>
              </div>
            )}
          </div>
        </>
      )}

      {/* Flashcard mode */}
      {mode === 'flashcards' && (
        <div className="flex flex-col items-center">
          {/* Controls */}
          <div className="flex items-center gap-3 mb-8">
            <Button variant="outline" size="sm" onClick={handleShuffle}>
              <Shuffle className="size-4" />
              Blanda
            </Button>
            {shuffled && (
              <Button variant="outline" size="sm" onClick={handleResetOrder}>
                <RotateCcw className="size-4" />
                Återställ ordning
              </Button>
            )}
          </div>

          {currentTerm ? (
            <>
              {/* Counter */}
              <p className="text-sm text-muted-foreground mb-6">
                Kort {currentIndex + 1} av {flashcardTerms.length}
              </p>

              {/* Flashcard */}
              <div
                className="w-full max-w-xl mb-8 cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => setFlipped((prev) => !prev)}
              >
                <div
                  className="relative w-full transition-transform duration-500"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    minHeight: '280px',
                  }}
                >
                  {/* Front */}
                  <Card
                    className="absolute inset-0 flex flex-col items-center justify-center p-8"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <Badge className={`mb-4 ${CATEGORY_COLORS[currentTerm.category]}`}>
                      {currentTerm.category.charAt(0).toUpperCase() + currentTerm.category.slice(1)}
                    </Badge>
                    <CardTitle className="text-2xl text-center">
                      {currentTerm.term}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-4">
                      Klicka för att vända
                    </p>
                  </Card>

                  {/* Back */}
                  <Card
                    className="absolute inset-0 flex flex-col justify-center p-8 overflow-auto"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <CardContent className="space-y-4 p-0">
                      <p className="text-sm leading-relaxed">{currentTerm.definition}</p>
                      {currentTerm.example && (
                        <div className="rounded-lg bg-muted/50 p-3">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Exempel: </span>
                            {currentTerm.example}
                          </p>
                        </div>
                      )}
                    </CardContent>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      Klicka för att vända tillbaka
                    </p>
                  </Card>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentIndex((prev) => Math.max(0, prev - 1))
                    setFlipped(false)
                  }}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="size-4" />
                  Föregående
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentIndex((prev) =>
                      Math.min(flashcardTerms.length - 1, prev + 1)
                    )
                    setFlipped(false)
                  }}
                  disabled={currentIndex === flashcardTerms.length - 1}
                >
                  Nästa
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg mb-2">Inga termer i denna kategori</p>
              <p className="text-sm">Välj en annan kategori för att börja öva.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
