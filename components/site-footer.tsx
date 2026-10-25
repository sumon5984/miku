import { CircleHelp, Crown, Heart, Home, Lock, ScrollText, Sparkle } from 'lucide-react'
import { TelegramIcon, WhatsAppIcon, YouTubeIcon } from './brand-icons'

const LINKS = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Pair Code', href: '#pair', icon: Lock },
  { label: 'About', href: '#about', icon: Heart },
  { label: 'FAQ', href: '#faq', icon: CircleHelp },
  { label: 'Terms', href: '#terms', icon: ScrollText },
  { label: 'Contact', href: '#contact', icon: TelegramIcon },
]

const SOCIALS = [
  { label: 'Telegram', href: 'https://t.me/', icon: TelegramIcon, bg: 'bg-[#2aa3e8]' },
  { label: 'WhatsApp', href: 'https://whatsapp.com/', icon: WhatsAppIcon, bg: 'bg-whatsapp' },
  { label: 'YouTube', href: 'https://youtube.com/', icon: YouTubeIcon, bg: 'bg-lilac' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="relative z-10 scroll-mt-4 px-3 pb-4 sm:px-5">
      <div className="glass grid grid-cols-[1fr_1.3fr_1.2fr] gap-2 rounded-3xl border-2 border-white p-4 shadow-[0_10px_30px_rgba(43,182,245,0.15)] sm:gap-6 sm:p-6">
        <nav aria-label="Quick links">
          <h2 className="font-display text-base font-bold text-miku-deep sm:text-lg">Quick Links</h2>
          <ul className="mt-2 space-y-1.5">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} className="flex items-center gap-2 text-xs text-[#1f3a7a] transition hover:text-miku sm:text-sm">
                  <Icon className="size-3.5 text-miku-deep" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center justify-center text-center">
          <Crown className="animate-sway size-5 text-miku-deep" aria-hidden="true" />
          <p className="flex items-center gap-1.5 font-display text-2xl font-bold sm:text-3xl">
            <Heart className="size-3 fill-miku text-miku" aria-hidden="true" />
            <span className="bg-gradient-to-b from-[#2fd0ff] to-[#1666c9] bg-clip-text text-transparent">X-MIKU</span>
            <Heart className="size-3 fill-miku text-miku" aria-hidden="true" />
          </p>
          <p className="flex items-center gap-1 text-[10px] text-miku sm:text-xs">
            <Sparkle className="size-2.5 fill-miku" aria-hidden="true" />
            A Premium WhatsApp Bot
            <Sparkle className="size-2.5 fill-miku" aria-hidden="true" />
          </p>
          <p className="mt-3 flex items-center gap-1 text-[10px] text-[#1f3a7a] sm:text-xs">
            Made with <Heart className="animate-heartbeat size-3 fill-miku-deep text-miku-deep" aria-label="love" /> by Sumon &amp; Bittu
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-bold text-miku-deep sm:text-lg">Follow Us</h2>
          <ul className="mt-2 flex gap-2">
            {SOCIALS.map(({ label, href, icon: Icon, bg }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex size-8 items-center justify-center rounded-full text-white shadow-md transition hover:scale-110 ${bg}`}
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[10px] leading-snug text-miku-deep sm:text-xs">
            Stay connected for updates and support
          </p>
        </div>
      </div>

      <div className="glass mx-auto mt-3 flex max-w-xl items-center justify-center gap-3 rounded-full border border-white px-4 py-2 text-xs text-[#1f3a7a]">
        <Heart className="size-3.5 fill-miku-deep text-miku-deep" aria-hidden="true" />
        <span>{'\u00A9 '}{new Date().getFullYear()} - X-MIKU</span>
        <span aria-hidden="true">{'\u2022'}</span>
        <span>All Rights Reserved</span>
        <Heart className="size-3.5 fill-miku-deep text-miku-deep" aria-hidden="true" />
      </div>
    </footer>
  )
}
