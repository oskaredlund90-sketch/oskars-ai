import Link from 'next/link'
import type { Metadata } from 'next'
import { Brain, AlertTriangle, Lightbulb, Copy, Search, BookOpen, ArrowRight, ShieldAlert, MessageSquare, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Studieteknik med AI – För elever',
  description: 'Lär dig använda AI smart i dina studier. Praktiska tips, promptmallar och källkritik.',
}

export default function StudieteknikEleverPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Hero */}
      <div className="mb-12">
        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Brain className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Plugga smartare med AI
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          AI kan vara ett riktigt bra verktyg när du pluggar – men det ersätter inte ditt eget
          tänkande. Här får du konkreta tips på hur du använder AI för att faktiskt lära dig
          mer, inte bara få svar snabbare.
        </p>
      </div>

      {/* Varningsruta */}
      <Card className="border-amber-300 bg-amber-50/60 dark:bg-amber-950/20 dark:border-amber-800 mb-12">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="h-5 w-5" />
            Viktigt att veta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-amber-900/80 dark:text-amber-200/80">
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
              AI kan ha fel – även när det låter jättesäkert. Kontrollera alltid fakta.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
              Kopiera aldrig AI:ns svar rakt av. Det är varken smart eller tillåtet.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
              Din lärares regler gäller alltid. Om hen säger nej till AI – respektera det.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-700 dark:text-amber-400">•</span>
              Dela aldrig personlig information (namn, personnummer, etc.) med AI.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* 5 studiestrategier */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">5 smarta sätt att plugga med AI</h2>
        </div>
        <div className="grid gap-4">
          {/* Strategi 1 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">Strategi 1</Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <Copy className="h-4 w-4 text-primary" />
                Sammanfatta och jämför
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Be AI sammanfatta det du pluggar på.</li>
                <li>Jämför med dina egna anteckningar.</li>
                <li>Hitta luckor – vad hade du missat? Vad hade AI fel om?</li>
              </ol>
            </CardContent>
          </Card>

          {/* Strategi 2 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">Strategi 2</Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <Search className="h-4 w-4 text-primary" />
                Testa dig själv
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Be AI skapa quiz-frågor om det du ska lära dig.</li>
                <li>Försök svara själv – utan att kolla i boken.</li>
                <li>Be AI rätta och förklara vad du missat.</li>
              </ol>
            </CardContent>
          </Card>

          {/* Strategi 3 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">Strategi 3</Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                Förklara på nytt sätt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Förstår du inte? Be AI förklara som om du var 10 år, eller med en liknelse.
                Ibland behöver man bara höra samma sak på ett annat sätt för att det ska klicka.
              </p>
            </CardContent>
          </Card>

          {/* Strategi 4 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">Strategi 4</Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Sokratisk dialog
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Istället för att be AI ge dig svaret – be den ställa frågor till dig. Då tvingas
                du tänka själv och lär dig mycket mer. Det är som att ha en studiekompis som
                hela tiden utmanar dig.
              </p>
            </CardContent>
          </Card>

          {/* Strategi 5 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">Strategi 5</Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <Headphones className="h-4 w-4 text-primary" />
                NotebookLM
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Ladda upp dina anteckningar till{' '}
                  <a href="https://notebooklm.google.com" target="_blank" rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium">NotebookLM</a>.
                </li>
                <li>Ställ frågor – AI:n svarar bara utifrån ditt material (mycket mindre risk för fel).</li>
                <li>Testa Audio Overview – lyssna på en &quot;podcast&quot; av dina anteckningar.</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gör INTE så här */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
            <ShieldAlert className="h-5 w-5 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold">Gör INTE så här</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="border-red-200/60 dark:border-red-800/40">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                ❌ Kopiera AI:ns svar rakt in i din uppgift
              </p>
            </CardContent>
          </Card>
          <Card className="border-red-200/60 dark:border-red-800/40">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                ❌ Lita blint på fakta utan att kolla
              </p>
            </CardContent>
          </Card>
          <Card className="border-red-200/60 dark:border-red-800/40">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                ❌ Dela personlig information med AI
              </p>
            </CardContent>
          </Card>
          <Card className="border-red-200/60 dark:border-red-800/40">
            <CardContent className="pt-6">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                ❌ Använda AI när din lärare sagt att du inte ska
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Promptmallar */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Copy className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Promptmallar du kan använda</h2>
        </div>
        <p className="text-muted-foreground mb-4 text-sm">
          Kopiera och klistra in i ChatGPT, Copilot eller valfri AI. Byt ut det som står i [hakparenteser].
        </p>
        <div className="space-y-3">
          <div className="bg-muted font-mono p-3 rounded-lg text-sm">
            Skapa 10 quiz-frågor om [ämne] på gymnasienivå. Ge mig svaren efteråt.
          </div>
          <div className="bg-muted font-mono p-3 rounded-lg text-sm">
            Förklara [begrepp] som om jag aldrig hört talas om det. Använd vardagliga exempel.
          </div>
          <div className="bg-muted font-mono p-3 rounded-lg text-sm">
            Jag förstår inte [koncept]. Ställ mig frågor som hjälper mig förstå steg för steg,
            istället för att bara förklara.
          </div>
          <div className="bg-muted font-mono p-3 rounded-lg text-sm">
            Sammanfatta det viktigaste från detta kapitel i 5 punkter: [klistra in text]
          </div>
        </div>
      </section>

      {/* Källkritik-checklista */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Search className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Källkritik-checklista</h2>
        </div>
        <Card>
          <CardHeader>
            <CardDescription>
              Ställ dig de här frågorna varje gång du använder information från AI:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Stämmer det här verkligen? Kan jag hitta samma info på en annan sida?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Finns källan AI hänvisar till? (Kolla! AI hittar ofta på referenser)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Är informationen aktuell?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Låter det för bra eller för enkelt för att vara sant?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>Skulle min lärare hålla med om detta?</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Bottom CTA */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Vill du lära dig mer?</h2>
        <p className="text-muted-foreground mb-6">
          Kolla in mer om studieteknik eller lär dig vad AI-orden betyder.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/studieteknik">
              <BookOpen className="mr-2 h-4 w-4" />
              Mer om studieteknik
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/ordlista">
              AI-ordlista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
