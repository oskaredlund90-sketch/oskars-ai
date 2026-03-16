import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { TooltipProvider } from '@/components/ui/tooltip'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – Lär dig använda AI i din undervisning`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://oskarsai.se'),
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Lär dig använda AI i din undervisning`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} – Lär dig använda AI i din undervisning`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} antialiased`}>
        <TooltipProvider>
          <Header />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  )
}
