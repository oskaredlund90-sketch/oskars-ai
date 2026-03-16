import Link from 'next/link'
import type { Metadata } from 'next'
import { ShieldCheck, CheckCircle, FileText, Users, HelpCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Validitet & bedömning | Oskars AI',
  description: 'Strategier för valid bedömning i en tid med AI. Checklistor, klassrumskontrakt och praktiska tips.',
}

export default function ValiditetPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Validitet & bedömning med AI
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Hur säkerställer vi att bedömningen förblir valid och rättvis när AI-verktyg finns
          tillgängliga? Här hittar du strategier, checklistor och konkreta verktyg.
        </p>
      </div>

      {/* Section 1: Vad är validitet? */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Vad är validitet i AI-kontexten?</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Validitet handlar om att bedömningen verkligen mäter det den är tänkt att mäta. När
            elever har tillgång till AI-verktyg ställs denna fråga på sin spets: Bedömer vi
            elevens kunskap och förmåga &ndash; eller bedömer vi hur bra eleven är på att använda AI?
          </p>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-foreground">Validitet i tre dimensioner:</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Innehållsvaliditet:</strong> Testar uppgiften verkligen det centrala
                  innehållet och kunskapskraven? AI kan göra det möjligt att fuska sig förbi
                  ytliga uppgifter.
                </div>
                <div>
                  <strong>Konstruktvaliditet:</strong> Mäter vi den förmåga vi vill mäta? Om
                  uppgiften är att skriva en argumenterande text och eleven låter AI skriva den,
                  mäter vi inte skrivförmågan.
                </div>
                <div>
                  <strong>Konsekvensvaliditet:</strong> Vilka konsekvenser får bedömningen?
                  Är det rättvist att vissa elever har bättre AI-verktyg än andra?
                </div>
              </div>
            </CardContent>
          </Card>
          <p>
            Lösningen är inte att förbjuda AI, utan att designa bedömning som är valid oavsett
            om AI används eller inte. Det handlar om att bedöma det som verkligen räknas.
          </p>
        </div>
      </section>

      {/* Section 2: Strategier */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Strategier för valid bedömning</h2>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Variera bedömningsformer</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Använd en mix av muntliga och skriftliga bedömningsmoment. Muntliga presentationer,
                seminarier och samtal är svåra att låta AI göra åt sig. Komplettera skriftliga
                inlämningar med muntlig uppföljning där eleven förklarar sitt resonemang.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. Bedöm processen, inte bara produkten</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Be eleverna visa sin arbetsprocess genom loggbok, utkast eller reflektioner.
                En elev som kan redogöra för sina val, svårigheter och lärdomar visar genuin
                förståelse oavsett vilka verktyg som använts.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. Designa AI-resistenta uppgifter</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Uppgifter som kräver personliga erfarenheter, lokala kopplingar eller nyligen
                genomförda aktiviteter är naturligt svåra för AI att besvara. Koppla uppgifter
                till klassrumsaktiviteter som bara deltagarna känner till.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">4. Gör AI till en del av uppgiften</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Istället för att försöka utesluta AI, designa uppgifter där AI-användning ingår
                på ett transparent sätt. Bedöm elevens förmåga att kritiskt granska AI-genererat
                material, ställa rätt frågor och vidareutveckla med egna reflektioner.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5. Triangulera bedömningsunderlaget</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Basera betyg på flera olika bedömningstillfällen och -former. Om en elevs
                skriftliga arbete plötsligt avviker kraftigt från muntlig prestation, är det
                en signal att undersöka vidare &ndash; inte nödvändigtvis att anklaga.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Checklista */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Checklista: Valid bedömning med AI</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {[
                'Har jag tydligt kommunicerat till eleverna när och hur AI får användas?',
                'Mäter uppgiften den förmåga jag vill bedöma, även om AI används?',
                'Finns det moment där eleven måste visa sin förståelse muntligt?',
                'Har jag flera bedömningstillfällen att triangulera mot?',
                'Kräver uppgiften personlig reflektion eller unik kontext?',
                'Har jag en plan för hur jag hanterar misstänkt AI-användning?',
                'Vet eleverna vad som händer om de inte följer riktlinjerna?',
                'Har jag dokumenterat mina bedömningsgrunder för transparens?',
                'Finns det möjlighet till processbedömning (utkast, loggbok)?',
                'Har jag pratat med kollegor om gemensamma riktlinjer?',
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 text-sm cursor-pointer">
                  <div className="mt-0.5 h-5 w-5 rounded border-2 border-muted-foreground/30 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground mt-3">
          Tips: Skriv ut denna checklista och gå igenom den innan du designar nästa
          bedömningsuppgift.
        </p>
      </section>

      {/* Section 4: Klassrumskontrakt */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Klassrumskontrakt för AI</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Ett klassrumskontrakt skapar tydlighet och trygghet för både dig och eleverna. Det
            bästa kontraktet skapas <em>tillsammans</em> med eleverna &ndash; det ger ägande och
            ökar efterlevnaden.
          </p>

          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Guide: Så skapar ni ett AI-kontrakt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Steg 1: Diskutera</strong> (15 min)<br />
                  Inled med en öppen diskussion: Vad tycker eleverna om AI? När kan det vara
                  hjälpsamt? När kan det vara problematiskt? Skriv upp tankar på tavlan.
                </div>
                <div>
                  <strong>Steg 2: Identifiera principer</strong> (10 min)<br />
                  Sammanfatta diskussionen i 4-6 principer. Exempel: &quot;Vi är ärliga med
                  när vi använder AI&quot;, &quot;AI är ett hjälpmedel, inte en genväg&quot;.
                </div>
                <div>
                  <strong>Steg 3: Formulera regler</strong> (10 min)<br />
                  Omvandla principerna till konkreta regler. Var specifik: &quot;Vi skriver
                  alltid [Jag har använt AI till...] när vi lämnar in uppgifter.&quot;
                </div>
                <div>
                  <strong>Steg 4: Konsekvenser</strong> (5 min)<br />
                  Bestäm tillsammans vad som händer om reglerna inte följs. Fokusera på
                  lärande snarare än straff.
                </div>
                <div>
                  <strong>Steg 5: Skriv under</strong><br />
                  Alla i klassen (inklusive du) skriver under. Sätt upp kontraktet i
                  klassrummet och hänvisa till det regelbundet.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mall: AI-kontrakt</CardTitle>
              <CardDescription>Anpassa efter din klass och årskurs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4 text-sm space-y-3">
                <p className="font-semibold text-center text-foreground">Vårt AI-kontrakt &ndash; Klass ___</p>
                <p>Vi i klass ___ har tillsammans kommit överens om följande regler för hur vi
                använder AI-verktyg i skolan:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Vi är alltid ärliga med om och hur vi har använt AI.</li>
                  <li>Vi använder AI som ett verktyg för lärande, inte för att slippa tänka själva.</li>
                  <li>Vi skriver &quot;Jag har använt AI till...&quot; på alla inlämningar där AI använts.</li>
                  <li>Vi kontrollerar alltid AI:ns svar mot tillförlitliga källor.</li>
                  <li>Vi delar aldrig personlig information med AI-verktyg.</li>
                  <li>Vi respekterar lärarens instruktioner om när AI får och inte får användas.</li>
                </ol>
                <p>Om någon bryter mot kontraktet: ___</p>
                <p className="mt-2">Datum: ___ Underskrifter: ___</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Vanliga frågor</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              q: 'Kan jag förbjuda AI helt på prov och inlämningar?',
              a: 'Ja, du kan definiera bedömningstillfällen utan AI. Men tänk på att det långsiktigt är mer hållbart att designa uppgifter som är valida oavsett AI-tillgång. Kombinera gärna med muntliga moment.',
            },
            {
              q: 'Hur vet jag om en elev har använt AI?',
              a: 'AI-detektorer är opålitliga och bör inte användas som enda bevis. Istället: känn dina elever, triangulera bedömningen, och skapa en kultur av transparens. Om en text avviker kraftigt från elevens muntliga förmåga, ta ett samtal.',
            },
            {
              q: 'Vad gör jag om en elev erkänner att de använt AI "för mycket"?',
              a: 'Se det som ett lärande tillfälle, inte bara ett disciplinärende. Diskutera: Vad lärde du dig? Vad missade du? Hur kan du använda AI som stöd utan att det tar över? Fokusera framåt.',
            },
            {
              q: 'Ska alla lärare ha samma regler?',
              a: 'Sträva efter gemensamma grundprinciper på skolnivå, men tillåt ämnesspecifika anpassningar. En mattelärare kan ha andra regler än en svensklärare. Det viktigaste är tydlighet och konsistens inom varje ämne.',
            },
            {
              q: 'Hur hanterar jag att elever har olika tillgång till AI-verktyg?',
              a: 'Det är en viktig likvärdighetsfrå. Se till att alla har tillgång till grundläggande gratisverktyg. Undvik att ge fördelar till elever med betalkonton. Erbjud AI-tid i skolan för alla.',
            },
          ].map((faq, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{faq.a}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Nästa steg */}
      <section className="rounded-xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-bold mb-3">Läs vidare</h2>
        <p className="text-muted-foreground mb-6">
          Fördjupa dig i promptteknik eller utforska hur AI kan stödja elevernas studieteknik.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild>
            <Link href="/promptteknik">
              Promptteknik (RUKF)
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/studieteknik">
              Studieteknik & AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
