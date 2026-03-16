# Oskars AI - Projektkonventioner

## Översikt
Lärandeplattform för svenska lärare (grundskola + gymnasium) om AI i undervisningen. Nivåbaserat lärande med 5 nivåer, interaktivt promptbibliotek, nivåtest och personlig lärresa.

## Tech stack
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Komponenter**: shadcn/ui med anpassad Button-komponent (Radix Slot-baserad, inte base-ui)
- **Backend**: Supabase (PostgreSQL + Auth + RLS) - ännu ej konfigurerad
- **Deploy**: Vercel
- **Språk**: Svenska (lang="sv")

## Projektstruktur
```
oskars-ai/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── admin/            # Admin-dashboard (skyddad)
│   │   ├── amnen/[slug]/     # Dynamiska ämnessidor
│   │   ├── nivatest/         # Nivåtest med quiz + självskattning
│   │   ├── larresa/          # Personlig lärresa
│   │   ├── promptbibliotek/  # Interaktivt promptbibliotek
│   │   └── ...               # Övriga sidor
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   └── ui/               # shadcn/ui-komponenter
│   └── lib/
│       ├── constants.ts      # LEVELS, SUBJECTS, NAV_ITEMS, etc.
│       ├── prompt-data.ts    # Promptbiblioteket (statisk data)
│       ├── quiz-data.ts      # Nivåtest-frågor + resultatberäkning
│       ├── supabase.ts       # Supabase-klient
│       └── utils.ts          # cn() helper
```

## Viktiga konventioner

### Button-komponenten
Vi använder en **anpassad Button** (`src/components/ui/button.tsx`) med `@radix-ui/react-slot` för `asChild`-stöd. shadcn/ui v4 använder `@base-ui/react` som inte stöder `asChild`, så vi har ersatt den.

**Korrekt användning:**
```tsx
<Button asChild><Link href="/path">Text</Link></Button>
```

### Storleksvarianter
Button har dessa storlekar: `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

### Nivåsystem
5 nivåer definierade i `constants.ts`:
1. Nyfiken (ljusblå)
2. Grundläggande (grön)
3. Bekväm (amber)
4. Självständig (orange)
5. Expert (lila)

### Nivåtest-viktning
- 60% kunskapsfrågor, 40% självskattning
- Profiler: balanced, knowledge-high, confidence-high
- Smart justering: hög fakta + låg självskattning → nivå ner

### Promptbibliotek
- Prompts har variabler i `[VARIABEL]`-format
- Varje prompt har `pedagogicalNote` som förklarar didaktiska val
- RUKF-modellen: Roll, Uppgift, Kontext, Format

### Design
- Modern & varm med oklch-färger
- Primär: varm blå, Accent: amber/orange
- Bakgrund: varm off-white
- Mobile-first responsive design

### Admin
- Utvecklingsläge: hårdkodad inloggning (admin/admin123)
- Produktion: Supabase Auth (oskar.edlund@osteraker.se)
- Sidor: Statistik, Innehåll, Prompts, Inställningar

## Kommandon
```bash
npm run dev    # Starta dev-server
npm run build  # Bygg för produktion
npm run lint   # Kör linter
```

## Status
- MVP frontend: klar (alla sidor skapade med statisk data)
- Supabase: ej konfigurerad (placeholder-nycklar)
- Vercel: ej deployad
- Innehåll: placeholder/AI-genererat, behöver granskas
