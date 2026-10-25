import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito, Pacifico } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-fredoka' })
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-nunito' })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' })

export const metadata: Metadata = {
  title: 'X-MIKU | WhatsApp Bot Pair Code',
  description: 'X-MIKU — Get your WhatsApp bot pair code easily. Enter your WhatsApp number and pair your bot in seconds.',
  generator: 'v0.app',
  icons: {
    icon: '/images/miku-chibi.webp',
    apple: '/images/miku-chibi.webp',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#bfe6ff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${pacifico.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
