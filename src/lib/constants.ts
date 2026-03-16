export const SITE_NAME = 'Oskars AI'
export const SITE_DESCRIPTION = 'Lär dig använda AI i din undervisning – steg för steg, från nybörjare till expert.'

export const LEVELS = [
  { id: 1, name: 'Nyfiken', description: 'Helt ny till AI, vill förstå grunden', color: 'bg-sky-100 text-sky-700 border-sky-200', iconColor: 'text-sky-500' },
  { id: 2, name: 'Grundläggande', description: 'Har testat ChatGPT någon gång', color: 'bg-emerald-100 text-emerald-700 border-emerald-200', iconColor: 'text-emerald-500' },
  { id: 3, name: 'Bekväm', description: 'Använder AI regelbundet', color: 'bg-amber-100 text-amber-700 border-amber-200', iconColor: 'text-amber-500' },
  { id: 4, name: 'Självständig', description: 'Integrerar AI i undervisningen', color: 'bg-orange-100 text-orange-700 border-orange-200', iconColor: 'text-orange-500' },
  { id: 5, name: 'Expert', description: 'Leder AI-arbete på skolan', color: 'bg-violet-100 text-violet-700 border-violet-200', iconColor: 'text-violet-500' },
] as const

export const SUBJECTS = [
  { slug: 'svenska', name: 'Svenska', icon: '📝' },
  { slug: 'matematik', name: 'Matematik', icon: '🔢' },
  { slug: 'engelska', name: 'Engelska', icon: '🌍' },
  { slug: 'so', name: 'SO', icon: '🏛️' },
  { slug: 'no', name: 'NO', icon: '🔬' },
  { slug: 'teknik', name: 'Teknik', icon: '⚙️' },
  { slug: 'moderna-sprak', name: 'Moderna språk', icon: '💬' },
  { slug: 'idrott', name: 'Idrott & hälsa', icon: '🏃' },
  { slug: 'musik', name: 'Musik', icon: '🎵' },
  { slug: 'bild', name: 'Bild', icon: '🎨' },
  { slug: 'slojd', name: 'Slöjd', icon: '🔨' },
  { slug: 'hkk', name: 'Hem- & konsumentkunskap', icon: '🍳' },
] as const

export const PROMPT_PURPOSES = [
  'Planering',
  'Bedömning',
  'Differentiering',
  'Materialframställning',
  'Elevstöd',
  'Studieteknik',
] as const

export const NAV_ITEMS = [
  { href: '/nivatest', label: 'Nivåtest' },
  { href: '/larresa', label: 'Lärresa' },
  {
    label: 'Lärande',
    children: [
      { href: '/grunder', label: 'AI-grunder' },
      { href: '/ai-verktyg', label: 'AI-verktyg' },
      { href: '/studieteknik', label: 'Studieteknik' },
      { href: '/promptteknik', label: 'Promptteknik' },
      { href: '/avancerat', label: 'Avancerat' },
    ],
  },
  { href: '/amnen', label: 'Ämnen' },
  { href: '/promptbibliotek', label: 'Promptbibliotek' },
  { href: '/fortbildning', label: 'Fortbildning' },
  { href: '/projekt', label: 'Projekt' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
