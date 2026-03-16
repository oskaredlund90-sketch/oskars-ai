import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Heart, Target, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Om Oskars AI',
  description: 'Om Oskar och syftet bakom Oskars AI - en lärandeplattform för lärare om AI i undervisningen.',
}

export default function OmPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Om Oskars AI
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          En plattform skapad av en lärare, för lärare &ndash; med målet att göra AI tillgängligt,
          tryggt och pedagogiskt genomtänkt.
        </p>
      </div>

      {/* Om Oskar */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Heart className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Hej, jag heter Oskar</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Jag är lärare och teknikentusiast med en passion för att hitta nya sätt att stödja
            lärande. När jag först började utforska AI-verktyg insåg jag snabbt vilken enorm
            potential de har för oss i skolan &ndash; men också hur svårt det kan vara att veta
            var man ska börja.
          </p>
          <p>
            Det var den insikten som ledde till Oskars AI. Jag ville skapa en resurs som
            tar lärare i handen och visar vägen framåt &ndash; steg för steg, utan jargong
            och med fokus på det som faktiskt gör skillnad i klassrummet.
          </p>
          <p>
            Allt innehåll på den här sidan bygger på min egen erfarenhet som lärare, på samtal
            med hundratals kollegor, och på den senaste forskningen om lärande och teknik. Jag
            tror att AI är det mest transformativa verktyget vi fått i skolan sedan internet
            &ndash; och jag vill hjälpa dig använda det på bästa möjliga sätt.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Target className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Visionen</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
          <p>
            Jag tror att varje lärare i Sverige borde ha tillgång till kunskap och verktyg
            för att använda AI på ett tryggt och pedagogiskt genomtänkt sätt. Inte för att
            ersätta lärare &ndash; utan för att ge dem superkrafter.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Tillgänglighet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  All kunskap ska vara gratis och öppen. Inga betalväggar, inga prenumerationer.
                  AI-kompetens ska inte vara en klassfråga.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Praktisk nytta</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Allt innehåll ska vara direkt användbart. Konkreta tips du kan testa
                  redan nästa lektion. Teori bara när det behövs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Pedagogisk grund</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  AI är ett medel, inte ett mål. Allt utgår från pedagogiska principer
                  och evidensbaserade metoder.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vad plattformen erbjuder */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Vad du hittar här</h2>
        </div>
        <div className="space-y-3">
          {[
            {
              title: 'Nivåanpassat lärande',
              desc: 'Ta nivåtestet och få innehåll anpassat efter just din erfarenhet och komfortnivå.',
              href: '/nivatest',
            },
            {
              title: 'Grunder till avancerat',
              desc: 'Från AI-grunder till avancerad promptteknik och skolledning - allt i en progression.',
              href: '/grunder',
            },
            {
              title: 'Ämnesspecifika tips',
              desc: 'Konkreta förslag för varje skolämne, med exempelprompts och lektionsidéer.',
              href: '/amnen',
            },
            {
              title: 'Interaktivt promptbibliotek',
              desc: 'Fyll i dina variabler och få pedagogiskt genomtänkta prompts redo att använda.',
              href: '/promptbibliotek',
            },
            {
              title: 'Validitet & bedömning',
              desc: 'Ramverk och checklistor för att säkerställa valid bedömning i en AI-tid.',
              href: '/validitet',
            },
            {
              title: 'Verktyg & projekt',
              desc: 'AI-drivna verktyg jag byggt specifikt för lärare och elevers behov.',
              href: '/projekt',
            },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
                <CardContent className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Bidra */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Bidra och ge feedback</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Oskars AI är ett levande projekt som ständigt utvecklas. Din feedback och dina
            erfarenheter gör plattformen bättre. Har du förslag, hittat ett fel, eller vill
            dela dina erfarenheter av AI i undervisningen? Hör av dig!
          </p>
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-sm">
                Plattformen är byggd med öppen källkod-mentalitet. Allt innehåll
                granskas och uppdateras löpande baserat på ny forskning, nya verktyg och
                feedback från lärare runt om i Sverige.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border bg-muted/30 p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Redo att börja?</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Oavsett om du aldrig testat AI eller redan är en erfaren användare &ndash; här finns
          något för dig.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/nivatest">
              Testa din nivå
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/grunder">
              Börja lära dig
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
