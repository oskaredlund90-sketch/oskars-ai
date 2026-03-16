'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Wrench,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BookOpen,
  GraduationCap,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Presentation,
  Palette,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Tool {
  id: string
  name: string
  provider: string
  icon: React.ReactNode
  description: string
  link: string
  steps: string[]
  teacherUse: string[]
  studentUse?: string[]
  tips: string[]
}

const tools: Tool[] = [
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    provider: 'Google',
    icon: <BookOpen className="h-5 w-5" />,
    description:
      'AI-driven anteckningsbok som grundar sina svar i dina egna uppladdade dokument. Minskar hallucinationer eftersom svaren baseras p\u00e5 k\u00e4llmaterialet.',
    link: 'https://notebooklm.google.com',
    steps: [
      'G\u00e5 till notebooklm.google.com',
      'Skapa nytt projekt',
      'Ladda upp dokument (PDF, Google Docs, webbsidor)',
      'St\u00e4ll fr\u00e5gor \u2013 svaren grundas i dina k\u00e4llor',
      'Prova \u201cAudio Overview\u201d f\u00f6r att skapa en podcast om inneh\u00e5llet',
    ],
    teacherUse: [
      'Ladda upp kursplan + centralt inneh\u00e5ll',
      'Skapa studieguider baserade p\u00e5 l\u00e4romedel',
      'F\u00f6rbered lektioner genom att fr\u00e5ga om specifika delar',
    ],
    studentUse: [
      'Ladda upp anteckningar och bokkapitel',
      'St\u00e4ll fr\u00e5gor om materialet',
      'Skapa sammanfattningar',
    ],
    tips: [
      'Mindre hallucinationer tack vare k\u00e4llf\u00f6rankring',
      'Perfekt f\u00f6r studieteknik',
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    provider: 'Google',
    icon: <Sparkles className="h-5 w-5" />,
    description:
      'Googles AI-assistent med kraftfulla funktioner som Canvas (interaktiv redigering) och m\u00f6jligheten att skapa presentationer som kan exporteras till Google Slides.',
    link: 'https://gemini.google.com',
    steps: [
      'G\u00e5 till gemini.google.com',
      'Logga in med ditt Google-konto',
      'Be Gemini skapa en presentation: \u201cSkapa en presentation om [\u00e4mne] med [antal] slides\u201d',
      'Klicka \u201cExportera till Google Slides\u201d',
      'Redigera i Google Slides efter behov',
    ],
    teacherUse: [
      'Skapa presentationer snabbt',
      'Anv\u00e4nd Canvas f\u00f6r interaktiv textredigering',
      'Generera bildmaterial',
    ],
    tips: [
      'Canvas-funktionen l\u00e5ter dig redigera AI-genererad text inline',
      'Exportera presentationer imponerar p\u00e5 kollegor',
      'Bra f\u00f6r att snabbt skapa visuellt material',
    ],
  },
  {
    id: 'canva',
    name: 'Canva',
    provider: 'Canva',
    icon: <Palette className="h-5 w-5" />,
    description:
      'Designverktyg med kraftfulla AI-funktioner. Magic Design skapar presentationer och grafik automatiskt, och AI-bildgenerering g\u00f6r det enkelt att skapa visuellt material.',
    link: 'https://www.canva.com',
    steps: [
      'Skapa konto p\u00e5 canva.com (gratis f\u00f6r l\u00e4rare via Canva for Education)',
      'V\u00e4lj mall eller starta med Magic Design',
      'Beskriv vad du vill skapa \u2013 AI genererar f\u00f6rslag',
      'Redigera och anpassa efter behov',
      'Ladda ner eller dela direkt',
    ],
    teacherUse: [
      'Skapa snygga presentationer och arbetsblad',
      'AI-genererade bilder f\u00f6r undervisning',
      'Mallar anpassade f\u00f6r skolan',
    ],
    tips: [
      'Canva for Education ger gratis premium-funktioner',
      'Magic Design sparar enormt med tid',
      'Bra f\u00f6r elever att l\u00e4ra sig visuell kommunikation',
    ],
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              {tool.icon}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <CardTitle className="text-lg">{tool.name}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {tool.provider}
                </Badge>
              </div>
              <CardDescription className="text-sm">{tool.description}</CardDescription>
            </div>
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0">
            <a href={tool.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1.5" />
              \u00d6ppna
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="text-muted-foreground hover:text-foreground -ml-2"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1.5" />
              Visa mindre
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1.5" />
              Visa mer
            </>
          )}
        </Button>

        {expanded && (
          <div className="mt-4 space-y-6">
            {/* Kom ig\u00e5ng */}
            <div>
              <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                <Wrench className="h-4 w-4 text-primary" />
                Kom ig\u00e5ng
              </h3>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
                {tool.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            {/* L\u00e4raranv\u00e4ndning */}
            <div>
              <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                <GraduationCap className="h-4 w-4 text-primary" />
                L\u00e4raranv\u00e4ndning
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
                {tool.teacherUse.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Elevanv\u00e4ndning */}
            {tool.studentUse && (
              <div>
                <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Elevanv\u00e4ndning
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
                  {tool.studentUse.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tips */}
            <div>
              <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Tips
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground">
                {tool.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function AIVerktygPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">AI-verktyg f\u00f6r skolan</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          H\u00e4r samlar vi AI-verktyg som \u00e4r s\u00e4rskilt anv\u00e4ndbara f\u00f6r l\u00e4rare och elever. Varje verktyg
          har en snabbguide, konkreta anv\u00e4ndningsomr\u00e5den och tips f\u00f6r att komma ig\u00e5ng.
        </p>
      </div>

      {/* Verktyg */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Wrench className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Verktyg</h2>
        </div>
        <div className="space-y-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Utforska vidare</h2>
        <p className="text-muted-foreground mb-6">
          Hitta f\u00e4rdiga prompts att anv\u00e4nda med dessa verktyg, eller f\u00f6rdjupa dig med v\u00e5ra fortbildningsmoduler.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/promptbibliotek">
              <BookOpen className="mr-2 h-4 w-4" />
              Promptbibliotek
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/fortbildning">
              Fortbildning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
