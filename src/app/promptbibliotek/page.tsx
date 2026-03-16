'use client'

import { useState, useMemo } from 'react'
import { Search, Copy, Check, ChevronDown, ChevronUp, BookOpen, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { PROMPTS, type Prompt } from '@/lib/prompt-data'
import { LEVELS, PROMPT_PURPOSES } from '@/lib/constants'

function PromptCard({ prompt }: { prompt: Prompt }) {
  const [variables, setVariables] = useState<Record<string, string>>({})
  const [showNote, setShowNote] = useState(false)
  const [copied, setCopied] = useState(false)

  const filledPrompt = useMemo(() => {
    let text = prompt.promptText
    prompt.variables.forEach((v) => {
      const value = variables[v.name] || `[${v.name}]`
      text = text.replaceAll(`[${v.name}]`, value)
    })
    return text
  }, [prompt, variables])

  const allFilled = prompt.variables.every((v) => variables[v.name]?.trim())

  function handleCopy() {
    navigator.clipboard.writeText(filledPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline" className={LEVELS[prompt.level - 1].color}>
                Nivå {prompt.level}
              </Badge>
              <Badge variant="secondary">{prompt.subject}</Badge>
              <Badge variant="outline">{prompt.purpose}</Badge>
            </div>
            <CardTitle className="text-lg">{prompt.title}</CardTitle>
          </div>
        </div>
        <CardDescription>{prompt.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Variables */}
        {prompt.variables.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prompt.variables.map((v) => (
              <div key={v.name}>
                <label className="text-sm font-medium mb-1 block">{v.label}</label>
                <Input
                  placeholder={v.placeholder}
                  value={variables[v.name] || ''}
                  onChange={(e) => setVariables((prev) => ({ ...prev, [v.name]: e.target.value }))}
                />
              </div>
            ))}
          </div>
        )}

        {/* Live preview */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Förhandsgranska prompt</span>
            <Button
              size="sm"
              variant={copied ? 'default' : 'outline'}
              onClick={handleCopy}
              className="gap-1.5"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Kopierad!' : 'Kopiera'}
            </Button>
          </div>
          <div className="bg-muted/50 border rounded-lg p-4 text-sm leading-relaxed whitespace-pre-wrap font-mono max-h-64 overflow-y-auto">
            {filledPrompt}
          </div>
          {!allFilled && (
            <p className="text-xs text-muted-foreground mt-2">
              Fyll i alla fält ovan för att få en komplett prompt.
            </p>
          )}
        </div>

        {/* Pedagogical note */}
        <button
          onClick={() => setShowNote(!showNote)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <BookOpen className="h-4 w-4" />
          Varför denna prompt?
          {showNote ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
        </button>
        {showNote && (
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 text-sm leading-relaxed text-foreground/80">
            {prompt.pedagogicalNote}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function PromptbibliotekPage() {
  const [search, setSearch] = useState('')
  const [filterSubject, setFilterSubject] = useState<string>('alla')
  const [filterPurpose, setFilterPurpose] = useState<string>('alla')
  const [filterLevel, setFilterLevel] = useState<number>(0)
  const [showFilters, setShowFilters] = useState(false)

  const subjects = useMemo(() => {
    const set = new Set(PROMPTS.map((p) => p.subject))
    return Array.from(set).sort()
  }, [])

  const filtered = useMemo(() => {
    return PROMPTS.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.description.toLowerCase().includes(search.toLowerCase())) return false
      if (filterSubject !== 'alla' && p.subject !== filterSubject) return false
      if (filterPurpose !== 'alla' && p.purpose !== filterPurpose) return false
      if (filterLevel > 0 && p.level !== filterLevel) return false
      return true
    })
  }, [search, filterSubject, filterPurpose, filterLevel])

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 md:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Promptbibliotek</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pedagogiskt genomtänkta prompts med fyllbara variabler. Varje prompt har en förklaring
          av de didaktiska valen bakom formuleringen.
        </p>
      </div>

      {/* Search + filter */}
      <div className="mb-8 space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Sök bland prompts..."
              className="pl-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-muted/30 rounded-lg border">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Ämne</label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
              >
                <option value="alla">Alla ämnen</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Syfte</label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                value={filterPurpose}
                onChange={(e) => setFilterPurpose(e.target.value)}
              >
                <option value="alla">Alla syften</option>
                {PROMPT_PURPOSES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Nivå</label>
              <select
                className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm"
                value={filterLevel}
                onChange={(e) => setFilterLevel(Number(e.target.value))}
              >
                <option value={0}>Alla nivåer</option>
                {LEVELS.map((l) => (
                  <option key={l.id} value={l.id}>Nivå {l.id}: {l.name}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <p className="text-sm text-muted-foreground mb-4">{filtered.length} prompts</p>
      <div className="space-y-6">
        {filtered.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg mb-2">Inga prompts matchar din sökning.</p>
          <p className="text-sm">Testa att ändra filter eller sökord.</p>
        </div>
      )}
    </div>
  )
}
