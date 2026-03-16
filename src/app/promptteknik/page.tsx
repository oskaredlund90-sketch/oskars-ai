import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, UserCircle, Target, LayoutList, FileOutput, Lightbulb, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Promptteknik & RUKF-modellen',
  description: 'Lär dig skriva effektiva AI-prompts med RUKF-modellen: Roll, Uppgift, Kontext, Format.',
}

export default function PromptteknikPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Promptteknik &ndash; RUKF-modellen
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          En enkel men kraftfull modell för att skriva bättre prompts. RUKF står för
          Roll, Uppgift, Kontext och Format &ndash; fyra byggstenar som ger dig kontroll
          över AI:ns svar.
        </p>
      </div>

      {/* Overview */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { letter: 'R', word: 'Roll', color: 'bg-sky-100 text-sky-700 border-sky-200', icon: UserCircle },
            { letter: 'U', word: 'Uppgift', color: 'bg-emerald-100 text-emerald-700 border-emerald-200', icon: Target },
            { letter: 'K', word: 'Kontext', color: 'bg-amber-100 text-amber-700 border-amber-200', icon: LayoutList },
            { letter: 'F', word: 'Format', color: 'bg-violet-100 text-violet-700 border-violet-200', icon: FileOutput },
          ].map((item) => (
            <Card key={item.letter} className="text-center">
              <CardContent className="pt-6">
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${item.color} text-2xl font-bold mb-2`}>
                  {item.letter}
                </div>
                <p className="font-semibold">{item.word}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Du behöver inte alltid använda alla fyra delarna. Ibland räcker det med Uppgift
              och Kontext. Men ju fler delar du inkluderar, desto mer precist och användbart
              blir AI:ns svar. Tänk på RUKF som en verktygslåda &ndash; välj de verktyg
              du behöver för uppgiften.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* R - Roll */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-sky-100 flex items-center justify-center">
            <UserCircle className="h-5 w-5 text-sky-700" />
          </div>
          <h2 className="text-2xl font-bold">R &ndash; Roll</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Genom att ge AI:n en specifik roll styr du perspektivet och tonen i svaret.
            En roll aktiverar relevant &quot;kunskap&quot; i modellen och ger mer fokuserade svar.
          </p>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Varför roll?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Utan roll svarar AI:n som en generell assistent. Med roll anpassar den sitt
                språk, sin detaljnivå och sitt fokus. Ju mer specifik rollen, desto bättre resultat.
              </CardDescription>
            </CardContent>
          </Card>
          <div className="space-y-3">
            <div className="rounded-lg bg-muted p-4">
              <p className="text-xs text-muted-foreground mb-1">Grundläggande:</p>
              <p className="text-sm font-mono">&quot;Du är en erfaren svensklärare.&quot;</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-xs text-muted-foreground mb-1">Fördjupad:</p>
              <p className="text-sm font-mono">&quot;Du är en erfaren svensklärare i årskurs 7-9 med
              specialkompetens inom skrivutveckling och formativ bedömning. Du använder
              Lgr22 som grund.&quot;</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-xs text-muted-foreground mb-1">Annan vinkel:</p>
              <p className="text-sm font-mono">&quot;Du är en specialpedagog med expertis inom
              läs- och skrivsvårigheter och neuropsykiatriska funktionsnedsättningar.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* U - Uppgift */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
            <Target className="h-5 w-5 text-emerald-700" />
          </div>
          <h2 className="text-2xl font-bold">U &ndash; Uppgift</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Uppgiften är kärnan i din prompt &ndash; vad vill du att AI:n ska göra? Var så
            tydlig och specifik som möjligt. En vag uppgift ger ett vagt svar.
          </p>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Nycklar till en bra uppgiftsbeskrivning:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">&#x2713;</span>
                  <span>Börja med ett verb: &quot;Skapa&quot;, &quot;Analysera&quot;, &quot;Jämför&quot;, &quot;Förklara&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">&#x2713;</span>
                  <span>Ange exakt vad du vill ha: antal frågor, längd på text, nivå</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">&#x2713;</span>
                  <span>Beskriv vad du <em>inte</em> vill ha om det behövs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">&#x2713;</span>
                  <span>Var specifik om målgrupp och syfte</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-red-200 p-4">
              <p className="text-xs text-red-600 mb-1 font-semibold">Vagt (undvik):</p>
              <p className="text-sm font-mono">&quot;Ge mig lite mattefrågor.&quot;</p>
            </div>
            <div className="rounded-lg border border-green-200 p-4">
              <p className="text-xs text-green-600 mb-1 font-semibold">Tydligt (bra):</p>
              <p className="text-sm font-mono">&quot;Skapa 8 uppgifter om procenträkning för
              årskurs 8. Inkludera 3 enkla, 3 medelsvåra och 2 utmanande. Alla ska ha
              vardagsnära kontext.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* K - Kontext */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
            <LayoutList className="h-5 w-5 text-amber-700" />
          </div>
          <h2 className="text-2xl font-bold">K &ndash; Kontext</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Kontexten ger AI:n den bakgrundsinformation den behöver för att ge ett relevant
            svar. Tänk: Vad vet du som AI:n inte vet?
          </p>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Viktig kontext att inkludera:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>&#x2022; <strong>Årskurs och nivå:</strong> &quot;Elever i årskurs 6&quot;, &quot;nyanlända elever&quot;</li>
                <li>&#x2022; <strong>Vad eleverna redan kan:</strong> &quot;De har arbetat med bråkräkning men inte procent&quot;</li>
                <li>&#x2022; <strong>Läroplan:</strong> &quot;Enligt Lgr22, centralt innehåll i NO åk 7-9&quot;</li>
                <li>&#x2022; <strong>Tid och ramar:</strong> &quot;En 50-minuterslektion&quot;, &quot;en hemuppgift på 30 min&quot;</li>
                <li>&#x2022; <strong>Särskilda behov:</strong> &quot;Inkludera stöd för elever med dyslexi&quot;</li>
              </ul>
            </CardContent>
          </Card>
          <div className="rounded-lg bg-muted p-4">
            <p className="text-xs text-muted-foreground mb-1">Exempel med rik kontext:</p>
            <p className="text-sm font-mono">&quot;Eleverna i min klass (åk 8) har just avslutat ett
            arbetsområde om andra världskriget. Nästa vecka har vi muntliga redovisningar.
            Många elever tycker det är svårt med muntliga presentationer och behöver struktur
            och stöd.&quot;</p>
          </div>
        </div>
      </section>

      {/* F - Format */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-violet-100 flex items-center justify-center">
            <FileOutput className="h-5 w-5 text-violet-700" />
          </div>
          <h2 className="text-2xl font-bold">F &ndash; Format</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Beskriv hur du vill att svaret ska se ut. Utan formatanvisningar kan AI:n leverera
            en lång löpande text när du egentligen ville ha en punktlista.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { format: 'Tabell', example: '"Presentera i en tabell med kolumnerna: fråga, rätt svar, vanligt fel"' },
              { format: 'Punktlista', example: '"Ge mig en punktlista med max 8 punkter"' },
              { format: 'Steg-för-steg', example: '"Skriv instruktioner steg för steg, numrerade"' },
              { format: 'Mall', example: '"Skapa en mall jag kan fylla i, med rubriker och platshållare"' },
              { format: 'Kort svar', example: '"Svara på max 3 meningar"' },
              { format: 'Elevvänligt', example: '"Skriv på ett språk som en 12-åring förstår"' },
            ].map((item) => (
              <Card key={item.format}>
                <CardContent className="pt-4 pb-4">
                  <Badge variant="secondary" className="mb-2">{item.format}</Badge>
                  <p className="text-xs font-mono text-muted-foreground">{item.example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Komplett exempel */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Komplett RUKF-exempel</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="rounded-lg bg-muted p-5 text-sm font-mono space-y-3">
              <div>
                <Badge className="bg-sky-100 text-sky-700 border-sky-200 mb-1">Roll</Badge>
                <p>&quot;Du är en erfaren NO-lärare i årskurs 7-9 med fokus på praktiska experiment och
                elevaktivt lärande.&quot;</p>
              </div>
              <div>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-1">Uppgift</Badge>
                <p>&quot;Skapa en laborationshandledning för ett enkelt experiment om densitet som
                eleverna kan göra med vardagsmaterial.&quot;</p>
              </div>
              <div>
                <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-1">Kontext</Badge>
                <p>&quot;Eleverna går i årskurs 7 och har grundläggande kunskaper om materia och massa.
                Laborationen ska gå att genomföra på 40 minuter med material som finns i ett vanligt
                kök. Koppla till centralt innehåll i Lgr22.&quot;</p>
              </div>
              <div>
                <Badge className="bg-violet-100 text-violet-700 border-violet-200 mb-1">Format</Badge>
                <p>&quot;Strukturera som en elevhandledning med: Syfte, Material (punktlista),
                Genomförande (numrerade steg), Resultat (tabell att fylla i), och
                Reflektionsfrågor (3 stycken på olika svårighetsnivåer).&quot;</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick win */}
      <section className="mb-16">
        <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2 text-amber-800 dark:text-amber-300">
              <Zap className="h-4 w-4" />
              Quick win: Testa RUKF direkt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm text-amber-900/80 dark:text-amber-200/80">
              Välj en uppgift du ändå behöver göra den här veckan &ndash; kanske en lektionsplanering
              eller ett bedömningsunderlag. Skriv en prompt med alla fyra RUKF-delar och jämför
              resultatet med en enkel prompt utan struktur. Du kommer märka skillnaden direkt.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Nästa steg */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Fortsätt utforska</h2>
        <p className="text-muted-foreground mb-6">
          Hitta färdiga prompts i vårt bibliotek eller utforska avancerade strategier.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/promptbibliotek">
              Promptbiblioteket
              <ArrowRight className="ml-2 h-4 w-4" />
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
