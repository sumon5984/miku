import Image from 'next/image'
import { Heart, Infinity as InfinityIcon, ShieldPlus, Sparkle, Star, Zap } from 'lucide-react'
import { Reveal } from './reveal'

const FEATURES = [
  { title: 'Secure', text: 'Your data is always safe with us', icon: ShieldPlus, color: 'text-[#1a8cf0]' },
  { title: 'Fast', text: 'Get your code in seconds', icon: Zap, color: 'fill-[#6b6bf5] text-[#5b5bf0]' },
  { title: 'Easy', text: 'Just enter your WhatsApp number', icon: Heart, color: 'text-lilac' },
  { title: '24/7', text: 'Always online, always with you', icon: InfinityIcon, color: 'text-[#1a8cf0]' },
]

export function Features() {
  return (
    <section id="about" aria-label="Why X-MIKU" className="scroll-mt-4">
      <Reveal>
        <ul className="glass grid grid-cols-2 gap-2.5 rounded-3xl border-2 border-white p-2.5 sm:gap-4 sm:p-4">
          {FEATURES.map(({ title, text, icon: Icon, color }, i) => (
            <li
              key={title}
              className="group flex items-center gap-2.5 rounded-2xl border-2 border-border bg-white/80 p-2.5 transition duration-300 hover:-translate-y-1 hover:border-miku/50 hover:shadow-[0_10px_24px_rgba(43,182,245,0.2)] sm:gap-4 sm:p-4"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#eaf6ff] to-[#d6ecff] shadow-inner transition group-hover:scale-110 sm:size-16">
                <Icon
                  className={`size-6 animate-floaty sm:size-8 ${color}`}
                  style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s' }}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-miku-deep sm:text-lg">{title}</h3>
                <p className="text-xs leading-snug text-[#2a4a8a] sm:text-sm">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <div className="relative mt-2 flex items-center justify-center py-5">
          <Star className="absolute left-[20%] top-10 size-5 fill-[#7aa8ff] text-[#7aa8ff] animate-twinkle" aria-hidden="true" />
          <Star className="absolute left-[8%] top-3 size-6 fill-[#ffe58a] text-[#f5cf4a] animate-twinkle [animation-delay:0.8s]" aria-hidden="true" />
          <Sparkle className="absolute left-[30%] top-2 size-3 fill-lilac text-lilac animate-twinkle [animation-delay:1.8s]" aria-hidden="true" />
          <div className="relative -rotate-6 text-center font-script leading-tight text-miku-deep">
            <span className="block text-xl sm:text-2xl">Stay Connected</span>
            <span className="block text-sm">with</span>
            <span className="block text-3xl sm:text-4xl">X-MIKU</span>
            <svg viewBox="0 0 120 10" className="mx-auto -mt-1 w-28 text-miku" aria-hidden="true">
              <path d="M2 7 C 30 1, 70 1, 118 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <Sparkle className="absolute -right-5 top-0 size-3 fill-miku text-miku animate-twinkle" aria-hidden="true" />
          </div>
          <Star className="absolute right-[30%] top-12 size-5 fill-[#7aa8ff] text-[#7aa8ff] animate-twinkle [animation-delay:1.4s]" aria-hidden="true" />
          <Heart className="absolute right-[8%] top-0 size-5 fill-[#9bd8ff] text-[#5bb8f0] animate-floaty [animation-delay:0.6s]" aria-hidden="true" />
          <Image
            src="/images/cat.webp"
            alt=""
            width={300}
            height={300}
            className="pointer-events-none absolute -bottom-4 right-[6%] h-auto w-24 animate-floaty sm:w-32"
          />
        </div>
      </Reveal>
    </section>
  )
}
