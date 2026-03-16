import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Brain, BookOpen, RefreshCcw, AlertTriangle, GraduationCap, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Studieteknik med AI',
  description: 'Hur elever kan använda AI som studieverktyg. Konkreta metoder och vägledning för lärare.',
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

export default function StudieteknikPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Studieteknik & AI
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          AI kan vara en fantastisk studiepartner &ndash; om den används rätt. Här visar vi hur
          evidensbaserade studietekniker kan förstärkas med AI, och vilka fallgropar du bör
          hjälpa eleverna undvika.
        </p>
      </div>

      {/* Section 1: AI som studiepartner */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">AI som studiepartner</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Den stora risken med AI som studieverktyg är att eleverna använder det passivt
            &ndash; att de läser AI:ns svar istället för att tänka själva. Men om vi lär
            eleverna att använda AI <em>aktivt</em>, kan det bli en av de mest effektiva
            studiemetoderna som finns.
          </p>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-foreground">Principen: AI ska ställa frågor, inte ge svar</h3>
              <p className="text-sm">
                Den gyllene regeln är att AI:n ska agera som en kunnig studiekamrat som
                utmanar elevens tänkande &ndash; inte som ett uppslagsverk som levererar
                färdiga svar. Eleven ska göra det kognitiva arbetet.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-red-200">
              <CardHeader className="pb-2">
                <Badge variant="outline" className="w-fit text-red-600 border-red-200">Passivt (undvik)</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  &quot;Förklara fotosyntes för mig.&quot; &ndash; Eleven läser svaret utan att
                  engagera sig kognitivt. Lika passivt som att läsa en lärobok.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader className="pb-2">
                <Badge variant="outline" className="w-fit text-green-600 border-green-200">Aktivt (bra)</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  &quot;Jag ska förklara fotosyntes. Ställ mig frågor och rätta mig om jag
                  har fel.&quot; &ndash; Eleven måste tänka aktivt och formulera sig.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <QuickWin title="Introduera sokratisk AI">
          Ge eleverna denna prompt att använda som studiepartner: &quot;Du är min studiepartner.
          Ställ mig frågor om [ämnet] en i taget. Ge mig inte svaret. Om jag har fel, ge mig
          en ledtråd istället. Berätta efteråt vad jag behöver repetera.&quot;
        </QuickWin>
      </section>

      {/* Section 2: Konkreta metoder */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <RefreshCcw className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Evidensbaserade metoder med AI</h2>
        </div>
        <div className="space-y-6">
          {/* Retrieval Practice */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-violet-100 text-violet-700 border-violet-200">Forskning</Badge>
              </div>
              <CardTitle className="text-lg">Retrieval practice (aktivt framplockning)</CardTitle>
              <CardDescription>
                En av de mest effektiva studiemetoderna enligt forskningen.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Retrieval practice innebär att aktivt försöka plocka fram information ur minnet,
                istället för att passivt läsa om den. AI kan automatisera skapandet av
                övningsmaterial.
              </p>
              <div className="rounded-lg bg-muted p-4 text-sm font-mono">
                <p className="text-muted-foreground mb-1">Prompt för eleven:</p>
                <p>&quot;Skapa 10 quiz-frågor om [ämne] som testar min förståelse. Ge mig frågorna
                en i taget. Jag svarar, och du berättar om jag hade rätt och förklarar varför.
                Sammanfatta i slutet vilka områden jag behöver repetera.&quot;</p>
              </div>
            </CardContent>
          </Card>

          {/* Elaboration */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-violet-100 text-violet-700 border-violet-200">Forskning</Badge>
              </div>
              <CardTitle className="text-lg">Elaboration (fördjupning)</CardTitle>
              <CardDescription>
                Att koppla ny kunskap till det man redan vet.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Elaboration handlar om att bygga kopplingar mellan ny och befintlig kunskap.
                Eleven förklarar, exemplifierar och sätter kunskapen i sammanhang. AI kan
                vara en utmärkt samtalspartner för detta.
              </p>
              <div className="rounded-lg bg-muted p-4 text-sm font-mono">
                <p className="text-muted-foreground mb-1">Prompt för eleven:</p>
                <p>&quot;Jag ska förklara [begrepp] med mina egna ord och ge ett exempel.
                Bedöm min förklaring: Är den korrekt? Vad saknas? Ställ sedan en följdfråga
                som hjälper mig koppla begreppet till [relaterat ämne].&quot;</p>
              </div>
            </CardContent>
          </Card>

          {/* Spacing */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-violet-100 text-violet-700 border-violet-200">Forskning</Badge>
              </div>
              <CardTitle className="text-lg">Spacing (utspridd repetition)</CardTitle>
              <CardDescription>
                Att sprida ut studierna över tid istället för att plugga allt på en gång.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Spacing är en av de mest robusta fynden inom inlärningsforskning. AI kan hjälpa
                genom att skapa repetitionsscheman och variera frågorna vid varje tillfälle.
              </p>
              <div className="rounded-lg bg-muted p-4 text-sm font-mono">
                <p className="text-muted-foreground mb-1">Prompt för eleven:</p>
                <p>&quot;Jag ska ha prov om [ämne] om 2 veckor. Skapa ett studieplan med utspridd
                repetition. Föreslå vad jag ska repetera varje dag, med fokus på svårare delar
                oftare. Skapa 5 quiz-frågor för dag 1.&quot;</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Vad läraren kan göra */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Vad läraren kan göra</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Som lärare har du en avgörande roll i att hjälpa eleverna använda AI som studieverktyg
            på ett produktivt sätt. Här är konkreta strategier:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Modellera bra användning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Visa eleverna i realtid hur du använder AI som studieverktyg. Demonstrera
                  bra prompts, visa hur du kritiskt granskar svar och hur du itererar.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Ge färdiga prompts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Skapa en samling studieprompts som eleverna kan använda. Anpassa dem till
                  ert aktuella arbetsområde och specifika lärandemål.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Reflektera tillsammans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Avsätt tid för att diskutera studietekniker. Låt eleverna dela vad som
                  fungerar och inte fungerar. Bygg en gemensam förståelse.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Skapa AI-studiepass</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Boka in strukturerade pass där eleverna aktivt använder AI som studieverktyg
                  under din handledning. Du kan cirkula och coacha.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <QuickWin title="Studieteknik-lektion">
          Avsätt 30 minuter för att lära eleverna retrieval practice med AI. Ge dem prompten
          ovan, låt dem testa med aktuellt ämnesinnehåll, och diskutera efteråt: Vad lärde du
          dig? Var det svårare än du trodde?
        </QuickWin>
      </section>

      {/* Section 4: Risker och fallgropar */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Risker och fallgropar</h2>
        </div>
        <div className="space-y-4">
          <Card className="border-red-200/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-red-700 dark:text-red-400">Passivt konsumerande</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Den största risken. Om eleven bara ber AI förklara saker och läser svaren
                sker inget djupare lärande. Eleven måste vara den som arbetar kognitivt.
                Lösning: Lär eleverna att använda AI för att testa sig själva, inte för att
                få svar.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-red-200/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-red-700 dark:text-red-400">Felaktig information</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                AI kan ge felaktiga svar med stor övertygelse. Om eleven lär sig fel fakta
                från AI:n kan det vara svårt att korrigera. Lösning: Betona alltid att AI-svar
                ska kontrolleras, särskilt specifika fakta, datum och siffror.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-red-200/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-red-700 dark:text-red-400">Övertillit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Eleverna kan utveckla ett beroende av AI och tappa tron på sin egen förmåga.
                Lösning: Varva AI-assisterade och AI-fria moment. Visa att eleven klarar
                saker på egen hand. Fira framsteg utan AI.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-red-200/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-red-700 dark:text-red-400">Integritetsfrågor</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">
                Eleverna kan omedvetet dela känslig information med AI-verktyg. Lösning:
                Etablera tydliga regler &ndash; inga namn, personnummer eller annan känslig
                information delas med AI. Diskutera GDPR och dataintegritet.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nästa steg */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Fördjupa dig</h2>
        <p className="text-muted-foreground mb-6">
          Lär dig skriva bättre prompts med RUKF-modellen eller utforska validitetsfrågor.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/promptteknik">
              <BookOpen className="mr-2 h-4 w-4" />
              Promptteknik (RUKF)
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/validitet">
              Validitet & bedömning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
