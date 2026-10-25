import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito, Pacifico } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-fredoka' })
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-nunito' })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' })

const socialPreviewImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000028235_optimized_900-KLYBLSAL5fZusRWMtdVO9wZKO5HFKp.webp'

export const metadata: Metadata = {
  title: 'Miku WhatsApp Bot Pairing | Fast & Easy Setup',
  description: 'Miku WhatsApp Bot Pairing — generate your pair code and connect your WhatsApp bot in seconds with a fast, simple setup.',
  keywords: ['Miku WhatsApp bot', 'WhatsApp bot pairing', 'pair code', 'Baileys bot'],
  generator: 'v0.app',
  openGraph: {
    title: 'Miku WhatsApp Bot Pairing | Fast & Easy Setup',
    description: 'Generate your WhatsApp bot pair code and connect in seconds. Free, fast, and easy setup with Miku Bot.',
    type: 'website',
    siteName: 'Miku WhatsApp Bot Pairing',
    images: [
      {
        url: socialPreviewImage,
        width: 900,
        height: 506,
        alt: 'Miku Bot pairing — free and easy WhatsApp bot setup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miku WhatsApp Bot Pairing | Fast & Easy Setup',
    description: 'Generate your WhatsApp bot pair code and connect in seconds with Miku Bot.',
    images: [socialPreviewImage],
  },
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
