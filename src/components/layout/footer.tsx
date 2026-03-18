import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3 hover:opacity-80 transition-opacity">
              OSKARS <span className="text-primary">AI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              En lärandeplattform för lärare som vill integrera AI i sin undervisning - steg för steg.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Lär dig</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/nivatest" className="hover:text-foreground transition-colors">Nivåtest</Link></li>
              <li><Link href="/larresa" className="hover:text-foreground transition-colors">Din lärresa</Link></li>
              <li><Link href="/grunder" className="hover:text-foreground transition-colors">AI-grunder</Link></li>
              <li><Link href="/ai-verktyg" className="hover:text-foreground transition-colors">AI-verktyg</Link></li>
              <li><Link href="/promptteknik" className="hover:text-foreground transition-colors">Promptteknik</Link></li>
              <li><Link href="/avancerat" className="hover:text-foreground transition-colors">Avancerat</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Resurser</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/amnen" className="hover:text-foreground transition-colors">Ämnesguider</Link></li>
              <li><Link href="/promptbibliotek" className="hover:text-foreground transition-colors">Promptbibliotek</Link></li>
              <li><Link href="/studieteknik" className="hover:text-foreground transition-colors">Studieteknik</Link></li>
              <li><Link href="/validitet" className="hover:text-foreground transition-colors">Validitet</Link></li>
              <li><Link href="/fortbildning" className="hover:text-foreground transition-colors">Fortbildning</Link></li>
              <li><Link href="/ordlista" className="hover:text-foreground transition-colors">Ordlista</Link></li>
              <li><Link href="/studieteknik-elever" className="hover:text-foreground transition-colors">Studieteknik (elever)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Övrigt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/projekt" className="hover:text-foreground transition-colors">Mina projekt</Link></li>
              <li><Link href="/presentation" className="hover:text-foreground transition-colors">Presentation (60 min)</Link></li>
              <li><Link href="/om" className="hover:text-foreground transition-colors">Om Oskars AI</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_NAME}. Skapat med passion för pedagogik och AI.
        </div>
      </div>
    </footer>
  )
}
