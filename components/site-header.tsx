import Image from 'next/image'
import { Heart, Home, Lock } from 'lucide-react'
import { TelegramIcon } from './brand-icons'

const NAV_ITEMS = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Pair Code', href: '#pair', icon: Lock },
  { label: 'About', href: '#about', icon: Heart },
  { label: 'Contact', href: '#contact', icon: TelegramIcon },
]

export function SiteHeader() {
  return (
    <header id="home" className="relative z-20 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="flex items-center justify-between gap-3">
        <a href="#home" className="flex min-w-0 items-center gap-1.5" aria-label="X-MIKU home">
          <Image
            src="/images/miku-chibi.webp"
            alt=""
            width={150}
            height={105}
            className="h-14 w-auto shrink-0 drop-shadow-md sm:h-20"
            priority
          />
          <div className="min-w-0">
            <p className="flex items-center gap-1 font-display text-2xl font-bold leading-none text-miku-deep drop-shadow-[0_2px_0_#ffffff] sm:text-4xl">
              <span className="bg-gradient-to-b from-[#2fc3ff] to-[#1666c9] bg-clip-text text-transparent">
                X-MIKU
              </span>
              <Heart className="size-4 text-miku sm:size-5" strokeWidth={2.5} aria-hidden="true" />
            </p>
            <p className="mt-1 truncate font-script text-[10px] text-miku-deep sm:text-sm">
              {'WhatsApp Bot \u2022 Telegram Group Pair'}
            </p>
          </div>
        </a>

        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-glow flex shrink-0 items-center gap-2 rounded-full border-2 border-white bg-gradient-to-b from-[#3cc4ff] to-[#1a8cf0] px-4 py-2 font-display text-sm font-semibold text-white shadow-[0_6px_18px_rgba(26,140,240,0.35)] transition hover:brightness-105 active:scale-95 sm:px-6 sm:py-2.5 sm:text-lg"
        >
          <TelegramIcon className="size-4 sm:size-5" />
          Telegram
        </a>
      </div>

      <nav aria-label="Main" className="mx-auto mt-3 max-w-2xl">
        <ul className="glass animate-blur-in flex items-center justify-between gap-1 rounded-full border border-white p-1.5 shadow-[0_6px_20px_rgba(43,182,245,0.18)] [animation-delay:100ms]">
          {NAV_ITEMS.map(({ label, href, icon: Icon }, i) => {
            const active = i === 0
            return (
              <li key={label} className="flex-1">
                <a
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={
                    active
                      ? 'flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-[#3cc4ff] to-[#1a8cf0] px-2 py-2 text-xs font-bold text-white shadow-md sm:gap-2 sm:text-base'
                      : 'flex items-center justify-center gap-1.5 rounded-full px-2 py-2 text-xs font-bold text-miku-deep transition hover:bg-accent sm:gap-2 sm:text-base'
                  }
                >
                  <Icon className="size-3.5 shrink-0 sm:size-4" aria-hidden="true" />
                  <span className="whitespace-nowrap">{label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
