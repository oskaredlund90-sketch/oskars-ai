import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, FileText, Users, Puzzle, Lightbulb, Zap, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'AI i undervisningen',
  description: 'Praktiska strategier för att använda AI i klassrummet. Lektionsplanering, differentiering och bedömning.',
}

function QuickWin({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2 text-amber-800 dark:text-amber-300">
          <Zap className="h-4 w-4" />
          Quick win: {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-amber-900/80 dark:text-amber-200/80">
          {children}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default function IUndervisningenPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-200">Nivå 2</Badge>
          <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">Nivå 3</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI i undervisningen
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Praktiska strategier för att integrera AI i ditt dagliga arbete som lärare. Från
          lektionsplanering till elevaktiviteter &ndash; konkreta tips du kan använda redan imorgon.
        </p>
      </div>

      {/* Section 1: Lektionsplanering */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">AI i lektionsplanering</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Lektionsplanering är ett av de områden där AI kan spara mest tid. Istället för att
            börja med ett blankt dokument kan du använda AI som en kollega att bolla idéer med.
          </p>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-foreground">Så här kan AI hjälpa med planering:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span><strong>Skapa utkast till lektionsplaner</strong> baserat på centralt innehåll och kunskapskrav.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span><strong>Generera frågor och diskussionsunderlag</strong> på olika taxonomiska nivåer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span><strong>Föreslå aktiviteter</strong> som tränar specifika förmågor i ditt ämne.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#x2022;</span>
                  <span><strong>Skapa bedömningsmatriser</strong> kopplade till kunskapskraven.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <p>
            Kom ihåg: AI:n ger dig ett utkast. Din professionella bedömning av vad som passar
            just din elevgrupp är det som gör lektionen riktigt bra.
          </p>
        </div>
        <QuickWin title="Snabb lektionsplanering">
          Prova: &quot;Skapa en lektionsplan för 60 minuter i [ämne] för årskurs [X]. Temat är [tema].
          Inkludera en aktiverande start, huvudaktivitet och avslutning med exit ticket. Koppla till
          centralt innehåll i Lgr22.&quot;
        </QuickWin>
      </section>

      {/* Section 2: Differentiering */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Layers className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Skapa differentierat material</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Differentiering är en av de mest tidskrävande delarna av lärarjobbet. AI kan vara en
            gamechanger &ndash; du kan snabbt skapa samma innehåll på flera nivåer.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Textanpassning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Be AI:n förenkla eller fördjupa en text till olika läsnivåer. Du kan ange
                  exakt vilken årskurs eller CEFR-nivå du siktar på.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Stödfrågor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Generera ledande frågor för elever som behöver stöd, och fördjupningsfrågor
                  för elever som behöver utmaningar.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Visuellt stöd</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Skapa begreppskartor, sammanfattningar i punktform eller förklaringar med
                  analogier anpassade för olika elever.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Flerspråkigt stöd</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Översätt nyckelbegrepp eller skapa ordlistor på elevernas modersmål som
                  komplement till svenskan.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <QuickWin title="Differentiering på 2 minuter">
          Klistra in en text du ska använda i undervisningen och skriv: &quot;Skapa tre versioner
          av denna text: en förenklad version för elever med lässvårigheter, en standardversion, och
          en fördjupad version med mer avancerat ordförråd. Behåll samma kärninnehåll.&quot;
        </QuickWin>
      </section>

      {/* Section 3: AI som elevverktyg */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">AI som elevverktyg</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            AI kan också vara ett värdefullt verktyg för eleverna själva &ndash; men det kräver
            tydlig vägledning. Nyckeln är att använda AI som ett <em>lärande</em>verktyg, inte
            som ett <em>fuskvektyg</em>.
          </p>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-foreground">Exempel på produktiv elevanvändning:</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong>Sokratisk dialog:</strong> Lär eleverna att använda AI som en studiekamrat
                  som ställer frågor istället för att ge svar direkt.
                </li>
                <li>
                  <strong>Kamratgranskning med AI:</strong> Eleverna ber AI:n om feedback på sina texter
                  innan de lämnar in &ndash; med fokus på specifika kriterier.
                </li>
                <li>
                  <strong>Begreppskoll:</strong> Eleverna förklarar ett begrepp för AI:n och ber den
                  bedöma om förklaringen är korrekt.
                </li>
                <li>
                  <strong>Källkritisk övning:</strong> Eleverna kontrollerar AI:ns svar mot tillförlitliga
                  källor och diskuterar eventuella fel.
                </li>
              </ul>
            </CardContent>
          </Card>
          <p>
            Tänk på att ha tydliga riktlinjer för <em>när</em> och <em>hur</em> eleverna får
            använda AI. Transparens och öppenhet är nyckeln.
          </p>
        </div>
        <QuickWin title="Sokratisk AI-prompt för elever">
          Ge eleverna denna prompt: &quot;Jag ska lära mig om [ämne]. Ställ mig frågor en i taget
          för att hjälpa mig förstå. Ge mig inte svaret direkt, utan vägled mig med följdfrågor.
          Om jag har fel, hjälp mig tänka om.&quot;
        </QuickWin>
      </section>

      {/* Section 4: Klassrumsaktiviteter */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Puzzle className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Klassrumsaktiviteter med AI</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Här kommer konkreta aktiviteter du kan använda direkt i klassrummet &ndash; oavsett ämne.
          </p>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI-detektiven</CardTitle>
                <Badge variant="secondary" className="w-fit">20-30 min</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Generera en text med AI som innehåller medvetna fel. Eleverna arbetar i par
                  för att hitta och rätta felen med hjälp av sina kunskaper och källor. Tränar
                  källkritik och ämneskunskap samtidigt.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prompt-tävling</CardTitle>
                <Badge variant="secondary" className="w-fit">30-40 min</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Ge eleverna samma uppgift men låt dem tävla om att skriva den bästa prompten.
                  Klassen röstar om vilken prompt som gav bäst resultat. Lär eleverna att formulera
                  tydliga instruktioner &ndash; en nyckelkompetens.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI vs. Eleven</CardTitle>
                <Badge variant="secondary" className="w-fit">15-20 min</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Eleverna löser en uppgift själva och jämför sedan med AI:ns svar. Diskutera:
                  Vem hade bäst svar? Varför? Vad gör människan bättre? Vad gör AI:n bättre?
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Debatt med AI-argument</CardTitle>
                <Badge variant="secondary" className="w-fit">40-50 min</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Låt AI generera argument för båda sidor i en debattfråga. Eleverna granskar,
                  väljer ut och utvecklar argumenten med egna erfarenheter och källor. Tränar
                  kritiskt tänkande och argumentation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <QuickWin title="Prova AI-detektiven imorgon">
          Be ChatGPT: &quot;Skriv en kort faktatext om [ämne] för årskurs [X]. Infoga medvetet
          3-5 sakfel i texten utan att markera dem.&quot; Skriv ut texten och låt eleverna jaga felen!
        </QuickWin>
      </section>

      {/* Nästa steg */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Vill du fördjupa dig?</h2>
        <p className="text-muted-foreground mb-6">
          Utforska ämnesspecifika tips eller ta ditt AI-arbete till nästa nivå med avancerade
          strategier.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/amnen">
              <BookOpen className="mr-2 h-4 w-4" />
              AI i ditt ämne
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/avancerat">
              Avancerade strategier
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
