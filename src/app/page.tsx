import Link from 'next/link'
import { ArrowRight, BookOpen, Brain, Target, Lightbulb, GraduationCap, Sparkles, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LEVELS, SUBJECTS } from '@/lib/constants'

const FEATURES = [
  {
    icon: Brain,
    title: 'Nivåanpassat lärande',
    description: 'Testa din nivå och få innehåll anpassat efter just dig - från nyfiken nybörjare till expert.',
  },
  {
    icon: Target,
    title: 'Ämnesspecifika tips',
    description: 'Konkreta förslag för varje skolämne om hur AI kan stärka din undervisning.',
  },
  {
    icon: Lightbulb,
    title: 'Interaktivt promptbibliotek',
    description: 'Fyll i dina egna variabler och få färdiga, pedagogiskt genomtänkta prompts att använda direkt.',
  },
  {
    icon: GraduationCap,
    title: 'Validitet & bedömning',
    description: 'Känn dig trygg i betygsättningen. Ramverk och checklistor för valid bedömning med AI.',
  },
]

const PROJECTS = [
  {
    name: 'Jurni',
    description: 'AI-driven plattform för personligt lärande och reflektion.',
    url: '#',
  },
  {
    name: 'Feedbacker',
    description: 'Verktyg för effektiv, AI-stödd återkoppling till elever.',
    url: '#',
  },
  {
    name: 'LektionsFlow',
    description: 'Smarta lektionsplaneringar med AI som sparar tid och höjer kvaliteten.',
    url: '#',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 text-sm font-medium px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              För lärare i grundskola & gymnasium
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Lär dig använda AI i din undervisning
              <span className="text-primary"> – steg för steg</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              AI är ett fantastiskt redskap när det används rätt. Här får du konkreta verktyg,
              pedagogiskt genomtänkta strategier och en personlig lärresa anpassad efter din nivå.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base px-6">
                <Link href="/nivatest">
                  Testa din nivå
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-6">
                <Link href="/grunder">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Börja lära dig
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nivåer */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Din väg genom AI-lärande</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fem nivåer som tar dig från nyfiken nybörjare till trygg AI-användare i klassrummet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LEVELS.map((level) => (
              <Card key={level.id} className="relative overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={level.color}>
                      Nivå {level.id}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{level.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{level.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/nivatest">
                Vilken nivå är du på?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Allt du behöver - på ett ställe</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pedagogiskt genomtänkt innehåll som hjälper dig att integrera AI i din undervisning med trygghet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ämnen */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">AI-tips för ditt ämne</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specifika strategier och promptar anpassade för varje skolämne.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {SUBJECTS.map((subject) => (
              <Link key={subject.slug} href={`/amnen/${subject.slug}`}>
                <Badge
                  variant="outline"
                  className="text-base px-4 py-2 hover:bg-primary/5 hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <span className="mr-2">{subject.icon}</span>
                  {subject.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projekt */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Mina projekt</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Verktyg och plattformar jag har byggt för att stödja lärande och undervisning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <Card key={project.name} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {project.name}
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/projekt">
                Se alla projekt
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Redo att börja din AI-resa?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Ta nivåtestet och få en personlig lärresa - det tar bara ett par minuter.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/nivatest">
              Starta nivåtestet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
