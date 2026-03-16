import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Bot, Brain, MessageSquare, Sparkles, Lightbulb, BookOpen, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'AI-grunder',
  description: 'Lär dig grunderna i AI och hur det fungerar. Perfekt för dig som är ny till artificiell intelligens.',
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

export default function GrunderPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="bg-sky-100 text-sky-700 border-sky-200">Nivå 1</Badge>
          <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-200">Nivå 2</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI-grunder
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Allt du behöver veta för att komma igång med AI som lärare. Inga förkunskaper krävs
          &ndash; vi börjar från grunden och bygger förståelse steg för steg.
        </p>
      </div>

      {/* Section 1: Vad är AI? */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Vad är AI egentligen?</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Artificiell intelligens (AI) är ett samlingsbegrepp för datorprogram som kan utföra uppgifter
            som normalt kräver mänsklig intelligens. Det handlar om att maskiner kan lära sig mönster
            från data och använda dem för att fatta beslut, skapa text, analysera bilder och mycket mer.
          </p>
          <p>
            Viktigt att förstå: AI &quot;tänker&quot; inte som vi gör. Den har ingen medvetenhet, inga
            känslor och ingen verklig förståelse. Istället är den extremt bra på att hitta mönster i
            enorma mängder data och använda dem för att generera svar som ser rimliga ut.
          </p>
          <p>
            För dig som lärare innebär det att AI kan vara ett kraftfullt verktyg för att spara tid
            och höja kvaliteten i din undervisning &ndash; men du behöver alltid vara den som granskar
            och kvalitetssäkrar resultatet.
          </p>
        </div>
        <QuickWin title="Testa att ställa en fråga">
          Öppna ChatGPT (chat.openai.com) och skriv: &quot;Förklara begreppet fotosyntes för en elev
          i årskurs 6 på ett enkelt och engagerande sätt.&quot; Se hur AI:n svarar och fundera på
          vad du skulle ändra.
        </QuickWin>
      </section>

      {/* Section 2: Generativ AI */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Generativ AI &ndash; AI som skapar</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Generativ AI är den typ av AI som har revolutionerat vardagen för många lärare. Till
            skillnad från traditionell AI som sorterar eller klassificerar information, kan generativ
            AI <em>skapa nytt innehåll</em>: texter, bilder, kod, musik och mer.
          </p>
          <p>
            De mest kända verktygen just nu är ChatGPT (från OpenAI), Claude (från Anthropic) och
            Gemini (från Google). Alla fungerar på liknande sätt: du skriver en instruktion (en
            &quot;prompt&quot;) och AI:n genererar ett svar baserat på mönster den lärt sig från
            enorma textmängder.
          </p>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Hur fungerar det rent tekniskt?</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>AI:n har tränats på miljarder texter från internet, böcker och andra källor.</li>
                <li>Den lär sig sannolikheter &ndash; vilka ord som troligtvis kommer efter varandra.</li>
                <li>När du ställer en fråga, genererar den det mest sannolika svaret ord för ord.</li>
                <li>Resultatet ser intelligent ut, men AI:n &quot;förstår&quot; inte innehållet på det sätt vi gör.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <QuickWin title="Jämför två AI-verktyg">
          Ställ exakt samma fråga till ChatGPT och till Claude (claude.ai). Jämför svaren. Vilka
          skillnader ser du? Det är en bra övning för att förstå att AI inte ger &quot;det rätta
          svaret&quot; utan ett av många möjliga svar.
        </QuickWin>
      </section>

      {/* Section 3: Dina första steg */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Dina första steg med en chatbot</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Att komma igång med AI handlar inte om att bli expert direkt. Det viktigaste är att
            du börjar experimentera. Tänk på det som att lära sig använda en ny app &ndash; du
            behöver inte förstå allt för att ha nytta av den.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">1. Skapa ett konto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Börja med ChatGPT (gratis) eller Claude. Skapa ett konto och bekanta dig med
                  gränssnittet.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">2. Ställ enkla frågor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Börja med frågor du redan vet svaret på. Det gör det lättare att bedöma kvaliteten
                  på AI:ns svar.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">3. Iterera och förfina</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Om svaret inte är perfekt, skriv en följdfråga. AI:n lär sig av kontexten i
                  konversationen.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">4. Var kritisk</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  AI kan hitta på fakta (&quot;hallucinera&quot;). Kontrollera alltid viktiga uppgifter
                  mot tillförlitliga källor.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <QuickWin title="Din första nyttiga prompt">
          Prova denna prompt: &quot;Ge mig fem frågor jag kan använda som exit tickets efter en
          lektion om [ditt ämne]. Frågorna ska testa förståelse, inte bara minne.&quot; Byt ut
          [ditt ämne] mot det du undervisar i.
        </QuickWin>
      </section>

      {/* Section 4: Vanliga begrepp */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Vanliga begrepp du bör känna till</h2>
        </div>
        <div className="space-y-3 mb-6">
          {[
            { term: 'Prompt', desc: 'Den instruktion eller fråga du ger till AI:n. Ju tydligare prompt, desto bättre svar.' },
            { term: 'Hallucination', desc: 'När AI:n genererar information som ser trovärdig ut men som är helt påhittad. Vanligt med fakta, namn och källor.' },
            { term: 'LLM (Large Language Model)', desc: 'Den typ av AI-modell som driver ChatGPT, Claude och liknande verktyg. Tränad på enorma textmängder.' },
            { term: 'Token', desc: 'AI:ns sätt att dela upp text i bitar. En token motsvarar ungefär ett ord eller en ordbit. Modeller har en maxgräns för tokens.' },
            { term: 'Kontext / Context window', desc: 'Mängden text AI:n kan "komma ihåg" i en konversation. Längre kontext = bättre förståelse av ditt behov.' },
            { term: 'Fine-tuning', desc: 'Att anpassa en AI-modell för ett specifikt syfte genom att träna den på specialiserad data.' },
            { term: 'RAG (Retrieval-Augmented Generation)', desc: 'Teknik där AI:n hämtar information från specifika dokument innan den svarar, vilket minskar hallucinationer.' },
          ].map((item) => (
            <Card key={item.term}>
              <CardContent className="py-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <Badge variant="secondary" className="shrink-0 w-fit">{item.term}</Badge>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <QuickWin title="Testa hallucinationer">
          Fråga AI:n om en specifik vetenskaplig artikel med titel och författare du hittar på.
          Troligtvis kommer AI:n att &quot;bekräfta&quot; att artikeln finns och ge dig en sammanfattning
          av den &ndash; trots att den aldrig existerat. Det är en hallucination.
        </QuickWin>
      </section>

      {/* Nästa steg */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Redo för nästa steg?</h2>
        <p className="text-muted-foreground mb-6">
          Nu när du har grunderna på plats är det dags att lära dig skriva bättre prompts
          och hitta din AI-nivå.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/promptteknik">
              <Lightbulb className="mr-2 h-4 w-4" />
              Lär dig promptteknik
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/nivatest">
              Testa din nivå
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
