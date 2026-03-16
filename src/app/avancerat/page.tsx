import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Brain, ClipboardCheck, Users, FileText, Sparkles, Target, Lightbulb, Zap, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Avancerade AI-strategier',
  description: 'Fördjupa dig i avancerade AI-tekniker för undervisning. Anpassade modeller, API-integrationer och mer.',
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

export default function AvanceratPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-200">Nivå 4</Badge>
          <Badge variant="outline" className="bg-violet-100 text-violet-700 border-violet-200">Nivå 5</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Avancerade AI-strategier
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          För dig som redan använder AI regelbundet och vill ta nästa steg. Här utforskar vi
          avancerad promptteknik, systematisk bedömning och hur du leder AI-arbete på din skola.
        </p>
      </div>

      {/* Section 1: Avancerad promptteknik */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Avancerad promptteknik</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Bortom grundläggande prompting finns tekniker som kan ge avsevärt bättre resultat,
            särskilt för komplexa pedagogiska uppgifter.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Few-shot prompting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-sm">
                Istället för att bara beskriva vad du vill ha, ger du AI:n ett eller flera exempel
                på önskat resultat. AI:n lär sig mönstret och replikerar det.
              </CardDescription>
              <div className="rounded-lg bg-muted p-4 text-sm font-mono">
                <p className="text-muted-foreground mb-2">Exempel-prompt:</p>
                <p>&quot;Jag vill att du skapar quiz-frågor i följande format:</p>
                <p className="mt-2"><strong>Fråga:</strong> Vad heter processen där växter omvandlar solljus till energi?</p>
                <p><strong>Rätt svar:</strong> Fotosyntes</p>
                <p><strong>Felaktiga svar:</strong> Cellandning, Osmos, Diffusion</p>
                <p><strong>Förklaring:</strong> Fotosyntes sker i kloroplasterna och...</p>
                <p className="mt-2">Skapa nu 5 liknande frågor om ekosystem.&quot;</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Chain-of-thought (steg-för-steg-tänkande)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-sm">
                Be AI:n att tänka steg för steg innan den ger sitt svar. Denna teknik förbättrar
                avsevärt kvaliteten på komplexa resonemang och analyser.
              </CardDescription>
              <div className="rounded-lg bg-muted p-4 text-sm font-mono">
                <p className="text-muted-foreground mb-2">Exempel-prompt:</p>
                <p>&quot;Analysera den här elevtexten steg för steg:</p>
                <p>1. Identifiera först textens styrkor.</p>
                <p>2. Identifiera sedan utvecklingsområden.</p>
                <p>3. Koppla varje punkt till kunskapskraven i svenska åk 9.</p>
                <p>4. Ge slutligen konkreta, framåtsyftande förslag.&quot;</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                Rollbaserad expert-prompting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-sm">
                Ge AI:n en specifik expertroll med detaljerad bakgrund. Ju mer specifik rollen,
                desto mer nyanserat och relevant blir svaret.
              </CardDescription>
              <div className="rounded-lg bg-muted p-4 text-sm font-mono">
                <p className="text-muted-foreground mb-2">Exempel-prompt:</p>
                <p>&quot;Du är en erfaren specialpedagog med 15 års erfarenhet av att stödja
                elever med läs- och skrivsvårigheter i grundskolan. Du har djup kunskap om
                Skolverkets stödmaterial och evidensbaserade metoder. Analysera följande
                åtgärdsprogram och föreslå förbättringar.&quot;</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <QuickWin title="Kombinera teknikerna">
          Prova att kombinera alla tre tekniker i samma prompt: Ge AI:n en expertroll, be den
          tänka steg för steg, och inkludera ett exempel på önskat format. Jämför resultatet med
          en enkel prompt utan dessa tekniker.
        </QuickWin>
      </section>

      {/* Section 2: Formativ bedömning */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <ClipboardCheck className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">AI för formativ bedömning</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Formativ bedömning &ndash; att kontinuerligt kartlägga var eleverna befinner sig och
            anpassa undervisningen därefter &ndash; är tidskrävande men avgörande. AI kan hjälpa
            dig göra den processen mer effektiv.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Snabb responsanalys</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Klistra in elevernas exit tickets eller svar och be AI:n identifiera
                  vanliga missförstånd, mönster och grupperingar.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Personlig feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Generera utkast till individuell, framåtsyftande feedback kopplad till
                  specifika kunskapskrav. Du granskar och anpassar innan det når eleven.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Bedömningsrubriker</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Skapa detaljerade bedömningsrubriker med tydliga nivåbeskrivningar som
                  elever kan använda för själv- och kamratbedömning.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Progressionsanalys</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Jämför elevers texter över tid och identifiera progression i specifika
                  förmågor med AI:ns hjälp.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 text-foreground">Viktigt om validitet</h3>
              <p className="text-sm">
                AI-genererad feedback och bedömning ska alltid ses som ett utkast. Det är du
                som lärare som gör den slutliga professionella bedömningen. AI kan missa nyanser,
                kontextuell kunskap om eleven och aspekter som kräver pedagogisk fingertoppskänsla.
              </p>
            </CardContent>
          </Card>
        </div>
        <QuickWin title="Exit ticket-analys">
          Samla elevernas exit tickets digitalt, klistra in dem och skriv: &quot;Analysera dessa
          elevresponer. Kategorisera dem efter förståelsenivå (god, delvis, bristande). Identifiera
          de tre vanligaste missförstånd och föreslå en 10-minutersaktivitet för nästa lektion som
          adresserar dem.&quot;
        </QuickWin>
      </section>

      {/* Section 3: Leda AI-arbete */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Leda AI-arbete på skolan</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Som erfaren AI-användare har du en viktig roll i att hjälpa kollegor och skolan som
            helhet. Här är strategier för att sprida kunskap och bygga en hållbar AI-kultur.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Starta en AI-grupp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription className="text-sm">
                Samla intresserade kollegor för regelbundna träffar. Fokusera på att dela konkreta
                erfarenheter snarare än teori. Struktur:
              </CardDescription>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>&#x2022; Veckovis eller varannan vecka, 30 minuter</li>
                <li>&#x2022; &quot;Show and tell&quot;-format: En person visar hur de använt AI</li>
                <li>&#x2022; Gemensam prövning av nya verktyg eller tekniker</li>
                <li>&#x2022; Dela promptar som fungerat bra</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Workshops för kollegor</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Planera hands-on workshops istället för föreläsningar. Låt kollegorna skapa
                något de faktiskt behöver under workshopen &ndash; en lektionsplan, en bedömningsmatris
                eller differentierat material. Konkret nytta direkt minskar motståndet.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Systematisk kompetensutveckling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Skapa en progression för hela kollegiet. Börja med grundläggande förståelse
                (alla behöver inte bli experter), identifiera early adopters som kan bli lokala
                ambassadörer, och bygg stöd för att kollegor kan prova i sin egen takt.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <QuickWin title="Micro-workshop">
          Boka 20 minuter på nästa ämneslagsmöte. Visa kollegorna en enda, konkret prompt som
          löser ett vardagsproblem (t.ex. att skapa differentierade läsförståelsefrågor). Låt
          dem testa direkt på sina mobiler. Ingen teori, bara praktisk nytta.
        </QuickWin>
      </section>

      {/* Section 4: AI-policy */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Bygga en AI-policy</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            En tydlig AI-policy skapar trygghet för lärare, elever och vårdnadshavare. Den
            behöver inte vara lång eller juridiskt komplex &ndash; men den bör vara konkret.
          </p>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-foreground">En bra AI-policy innehåller:</h3>
              <ol className="list-decimal list-inside space-y-3 text-sm">
                <li>
                  <strong>Syfte och vision:</strong> Varför skolan använder AI och vad ni vill uppnå.
                </li>
                <li>
                  <strong>Riktlinjer för lärare:</strong> Vilka verktyg som godkänts, hur elevdata
                  får hanteras, och vad som gäller kring GDPR.
                </li>
                <li>
                  <strong>Riktlinjer för elever:</strong> När AI får användas, krav på transparens
                  (&quot;jag använde AI till...&quot;), och vad som räknas som fusk.
                </li>
                <li>
                  <strong>Bedömning och validitet:</strong> Hur säkerställs att bedömningen är valid
                  när AI finns som verktyg? Vilka uppgifter anpassas?
                </li>
                <li>
                  <strong>Etik och värdegrund:</strong> Diskussion om bias, integritet och
                  ansvarsfull användning.
                </li>
                <li>
                  <strong>Uppföljning:</strong> Hur och när policyn revideras (minst en gång per läsår).
                </li>
              </ol>
            </CardContent>
          </Card>

          <p>
            Involvera kollegor, elever och vårdnadshavare i processen. En policy som skapas
            tillsammans har mycket större chans att efterlevas.
          </p>
        </div>
        <QuickWin title="Policy-utkast på 10 minuter">
          Använd denna prompt: &quot;Hjälp mig skapa ett utkast till en AI-policy för en svensk
          grundskola. Den ska vara på max en A4-sida, skriven på enkel svenska, och täcka: syfte,
          regler för elever, riktlinjer för lärare, och datum för revidering. Tonen ska vara
          positiv och uppmuntrande.&quot;
        </QuickWin>
      </section>

      {/* Section 5: Etik och ansvarsfullt AI-ledarskap */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Scale className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Etik och ansvarsfullt AI-ledarskap</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Som den som leder AI-arbetet på skolan har du ett särskilt ansvar att också lyfta de
            svåra frågorna. AI är inte neutralt &ndash; det är ett verktyg format av de val vi gör
            och den data det tränats på.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Akademisk integritet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Var går gränsen mellan hjälpmedel och fusk? Det finns inget universellt svar.
                  Skolan behöver en tydlig, gemensam hållning som kommuniceras till alla parter.
                  Fokusera på lärande snarare än kontroll.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Människan i centrum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  AI ska aldrig ersätta den mänskliga relationen i klassrummet. Lärarens professionella
                  omdöme, empati och förmåga att möta varje elev är och förblir det viktigaste.
                  AI är ett komplement, inte en ersättare.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Likvärdighet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Elever har olika tillgång till AI-verktyg hemma. Var medveten om att AI-uppgifter
                  kan förstärka ojämlikhet. Säkerställ att alla elever får tillgång till verktyg
                  och utbildning i skolan.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Transparens</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Var öppen med hur du och skolan använder AI. Dela med er av både framgångar
                  och utmaningar. Bjud in vårdnadshavare i dialogen. Transparens bygger förtroende.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nästa steg */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Fördjupa dig ytterligare</h2>
        <p className="text-muted-foreground mb-6">
          Utforska validitetsfrågor på djupet eller hitta ämnesspecifika strategier.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/validitet">
              <ClipboardCheck className="mr-2 h-4 w-4" />
              Validitet & bedömning
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/amnen">
              Ämnesspecifika tips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
