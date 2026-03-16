import Link from 'next/link'
import type { Metadata } from 'next'
import { ExternalLink, Sparkles, MessageCircle, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Mina projekt',
  description: 'Verktyg och plattformar byggda för att stödja lärande och undervisning med AI.',
}

const PROJECTS = [
  {
    name: 'Jurni',
    tagline: 'AI-driven plattform för personligt lärande',
    description:
      'Jurni är en plattform som hjälper elever att reflektera över sitt lärande med hjälp av AI. Genom strukturerade reflektionsfrågor och intelligent uppföljning får varje elev en personlig lärresa som synliggör progression och stärker metakognitiva förmågor.',
    features: [
      'Personliga reflektionsfrågor anpassade efter elevens nivå',
      'AI-driven uppföljning som identifierar mönster i lärandet',
      'Visuell progression som motiverar och synliggör utveckling',
      'Integritetssäker hantering av elevdata',
    ],
    icon: Sparkles,
    color: 'bg-violet-100 text-violet-700 border-violet-200',
    url: 'https://www.jurni.se',
  },
  {
    name: 'LektionsFlow',
    tagline: 'Smarta lektionsplaneringar med AI',
    description:
      'LektionsFlow är ett verktyg som hjälper lärare att snabbt skapa genomtänkta lektionsplaneringar. Ange ämne, årskurs och tema, och få en strukturerad lektionsplan med aktiverande start, elevaktivt huvudmoment och reflekterande avslutning &ndash; allt kopplat till Lgr22.',
    features: [
      'Snabb lektionsplanering kopplad till centralt innehåll',
      'Inbyggd differentiering med förslag på anpassningar',
      'Tidsuppskattningar och materiallistor',
      'Exportera till ditt befintliga planeringssystem',
    ],
    icon: Calendar,
    color: 'bg-amber-100 text-amber-700 border-amber-200',
    url: 'https://www.lektionsflow.se',
  },
  {
    name: 'Feedbacker',
    tagline: 'Effektiv, AI-stödd återkoppling',
    description:
      'Feedbacker hjälper lärare att ge snabb, personlig och framåtsyftande feedback till varje elev. Genom att analysera elevtexter mot kunskapskrav och bedömningskriterier genererar verktyget utkast till feedback som läraren sedan granskar och anpassar.',
    features: [
      'Analyserar elevtexter mot angivna kunskapskrav',
      'Genererar framåtsyftande feedback-utkast',
      'Sparar tid utan att tumma på kvalitet',
      'Läraren har alltid sista ordet',
    ],
    icon: MessageCircle,
    color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    url: 'https://feedbacker-nine.vercel.app/',
  },
]

export default function ProjektPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Mina projekt
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Verktyg och plattformar jag har byggt för att stödja lärare och elever. Alla projekt
          bygger på samma grund: AI som ett kraftfullt komplement till pedagogisk expertis.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <Card key={project.name} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${project.color}`}>
                  <project.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-sm">{project.tagline}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div>
                <h3 className="text-sm font-semibold mb-2">Funktioner:</h3>
                <ul className="grid gap-1.5 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">&#x2022;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <Button asChild variant="outline" size="sm">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Besök {project.name}
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="mt-16 rounded-xl border bg-muted/30 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Vill du veta mer?</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Läs mer om mig och visionen bakom plattformen, eller utforska hur du kan använda
          AI i din undervisning redan idag.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/om">
              Om Oskars AI
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/grunder">
              Kom igång med AI
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
