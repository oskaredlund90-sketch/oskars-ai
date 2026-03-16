import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, BookOpen, MessageSquare, Lightbulb, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SUBJECTS } from '@/lib/constants'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const subject = SUBJECTS.find((s) => s.slug === slug)
  if (!subject) return { title: 'Ämne hittades inte | Oskars AI' }
  return {
    title: `AI i ${subject.name} | Oskars AI`,
    description: `Konkreta AI-tips, exempelprompts och lektionsidéer för ${subject.name.toLowerCase()}undervisningen.`,
  }
}

export function generateStaticParams() {
  return SUBJECTS.map((subject) => ({
    slug: subject.slug,
  }))
}

export default async function SubjectPage({ params }: Props) {
  const { slug } = await params
  const subject = SUBJECTS.find((s) => s.slug === slug)

  if (!subject) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Back link */}
      <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
        <Link href="/amnen">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Alla ämnen
        </Link>
      </Button>

      {/* Header */}
      <div className="mb-12">
        <div className="text-4xl mb-4">{subject.icon}</div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI i {subject.name}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Konkreta tips, exempelprompts och lektionsidéer för hur du kan använda AI i din
          {' '}{subject.name.toLowerCase()}undervisning &ndash; på ett pedagogiskt genomtänkt sätt.
        </p>
      </div>

      {/* Section 1: AI i ämnet */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">AI i {subject.name.toLowerCase()}</h2>
        </div>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                AI erbjuder spännande möjligheter specifikt för {subject.name.toLowerCase()}undervisningen.
                Från att generera anpassat övningsmaterial till att skapa engagerande aktiviteter
                &ndash; här utforskar vi hur du kan använda AI som ett komplement till din
                professionella kompetens.
              </p>
              <p>
                Det viktigaste är att AI:n alltid används som ett verktyg under din ledning.
                Din ämnesexpertis och din kunskap om elevgruppen är det som gör skillnaden
                mellan generiskt AI-material och pedagogiskt genomtänkt undervisning.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Exempelprompts */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Exempelprompts</h2>
        </div>
        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit mb-1">Planering</Badge>
              <CardTitle className="text-base">Lektionsplanering</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-3 text-sm font-mono">
                &quot;Skapa en lektionsplan för 60 minuter i {subject.name.toLowerCase()} för
                årskurs [X]. Temat är [tema]. Inkludera aktiverande start, huvudaktivitet med
                elevaktivt arbetssätt och en avslutande reflektion. Koppla till centralt innehåll
                i Lgr22.&quot;
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit mb-1">Bedömning</Badge>
              <CardTitle className="text-base">Bedömningsstöd</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-3 text-sm font-mono">
                &quot;Skapa en bedömningsmatris för en uppgift i {subject.name.toLowerCase()} där
                eleverna ska [uppgiftsbeskrivning]. Matrisen ska ha tre nivåer (E, C, A) och
                täcka relevanta kunskapskrav. Ge tydliga, elevvänliga formuleringar.&quot;
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit mb-1">Differentiering</Badge>
              <CardTitle className="text-base">Anpassat material</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-3 text-sm font-mono">
                &quot;Skapa tre versioner av en övning om [ämnesområde] i {subject.name.toLowerCase()}:
                en grundläggande version med stödfrågor, en standardversion, och en utmanande
                version med fördjupning. Alla ska behandla samma centrala innehåll.&quot;
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Fler ämnesspecifika prompts hittar du i{' '}
          <Link href="/promptbibliotek" className="text-primary hover:underline">promptbiblioteket</Link>.
        </p>
      </section>

      {/* Section 3: Lektionsidéer */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Lektionsidéer</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">AI-genererad quiz</CardTitle>
              <Badge variant="secondary" className="w-fit">15 min</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Använd AI för att snabbt generera quiz-frågor på olika nivåer om aktuellt
                ämnesområde. Låt eleverna diskutera svaren i par innan ni går igenom tillsammans.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Faktagranskning</CardTitle>
              <Badge variant="secondary" className="w-fit">20 min</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Be AI:n skriva en text om ämnet med inlagda fel. Eleverna granskar texten och
                hittar felen &ndash; tränar både ämneskunskap och källkritiskt tänkande.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Begreppsförklaring</CardTitle>
              <Badge variant="secondary" className="w-fit">10 min</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Eleverna förklarar ett begrepp för AI:n och ber den bedöma om förklaringen
                är korrekt. Bra övning för att fördjupa begreppsförståelsen.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Debatt med AI-stöd</CardTitle>
              <Badge variant="secondary" className="w-fit">30 min</Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Låt AI generera argument för båda sidor i en ämnesrelevant fråga. Eleverna
                granskar, kompletterar och debatterar med stöd av sina egna kunskaper.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Har du en egen aktivitetsidé som fungerat bra? Dela gärna med dig via{' '}
          <Link href="/om" className="text-primary hover:underline">kontaktsidan</Link>.
        </p>
      </section>

      {/* Section 4: Validitetstips */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Validitetstips</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Att säkerställa valid bedömning när AI finns tillgängligt är en viktig fråga
                inom {subject.name.toLowerCase()}. Här är några grundprinciper:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span>
                    <strong>Variera bedömningsformer:</strong> Kombinera skriftliga uppgifter med
                    muntliga presentationer, praktiska moment och processbedömning.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span>
                    <strong>Bedöm processen:</strong> Låt eleverna visa sin tankeprocess genom
                    loggbok, utkast eller reflektioner om hur de arbetat.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span>
                    <strong>Transparens:</strong> Var tydlig med när AI får och inte får användas.
                    Skapa ett klassrumskontrakt.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span>
                    <strong>Autentiska uppgifter:</strong> Designa uppgifter som kräver personliga
                    erfarenheter, lokala kopplingar eller unik kontext som AI inte kan generera.
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <div className="mt-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/validitet">
              Läs mer om validitet
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Utforska mer</h2>
        <p className="text-muted-foreground mb-6">
          Hitta prompts i vårt bibliotek eller lär dig mer om AI-grunder.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/promptbibliotek">
              <MessageSquare className="mr-2 h-4 w-4" />
              Promptbiblioteket
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/amnen">
              Alla ämnen
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
