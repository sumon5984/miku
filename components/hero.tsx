import Image from 'next/image'
import { Crown, Heart, ShieldCheck, Sparkle, Star, Zap } from 'lucide-react'

const BADGES = [
  { label: 'Your Bot', icon: ShieldCheck },
  { label: 'Your Control', icon: Crown },
  { label: 'Always Online', icon: Zap },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <Star className="absolute left-[2%] top-[8%] z-10 size-6 fill-[#ffe58a] text-[#f5cf4a] animate-twinkle" aria-hidden="true" />
      <Sparkle className="absolute left-[40%] top-[4%] z-10 size-4 fill-white text-white animate-twinkle [animation-delay:1.2s]" aria-hidden="true" />
      <Star className="absolute right-[3%] top-[36%] z-10 size-4 fill-[#7ccdf7] text-[#7ccdf7] animate-twinkle [animation-delay:0.6s]" aria-hidden="true" />
      <Heart className="absolute left-[44%] top-[74%] z-10 size-5 fill-[#9bd8ff] text-[#5bb8f0] animate-floaty [animation-delay:0.4s]" aria-hidden="true" />
      <Heart className="absolute right-[24%] top-[78%] z-10 size-6 fill-[#9bd8ff] text-[#3d8fe0] animate-floaty [animation-delay:1.6s]" aria-hidden="true" />
      <Sparkle className="absolute right-[38%] top-[86%] z-10 size-3 fill-lilac text-lilac animate-twinkle [animation-delay:2s]" aria-hidden="true" />

      <div className="relative grid grid-cols-[46%_54%] items-center">
        <div className="animate-blur-in relative -ml-3 sm:-ml-5">
          <Image
            src="/images/miku-hero.webp"
            alt="Hatsune Miku winking and hugging a white plush cat"
            width={1391}
            height={1137}
            className="animate-floaty h-auto w-[118%] max-w-none drop-shadow-[0_10px_20px_rgba(43,182,245,0.25)] [animation-duration:6s]"
            priority
          />
        </div>

        <div className="animate-blur-in relative z-10 flex flex-col items-center pr-2 text-center [animation-delay:200ms] sm:pr-6">
          <Heart className="absolute -top-2 left-0 size-5 fill-[#9bd8ff] text-[#5bb8f0] animate-floaty sm:size-7" aria-hidden="true" />
          <Heart className="absolute -top-1 right-1 size-5 fill-[#9bd8ff] text-[#5bb8f0] animate-floaty [animation-delay:1s] sm:size-7" aria-hidden="true" />
          <Sparkle className="absolute right-[-2px] top-[42%] size-3 fill-miku text-miku animate-twinkle [animation-delay:0.5s]" aria-hidden="true" />
          <Crown className="animate-sway size-7 text-miku-deep sm:size-10" strokeWidth={2.2} aria-hidden="true" />
          <h1 id="hero-title" className="relative mt-1">
            <Star className="absolute -left-6 top-1/3 size-4 -translate-y-1/2 text-miku-deep animate-spin-slow sm:-left-9 sm:size-6" aria-hidden="true" />
            <Sparkle className="absolute -right-5 top-1 size-4 fill-miku text-miku animate-twinkle sm:-right-8 sm:size-6" aria-hidden="true" />
            <span className="block bg-gradient-to-b from-[#2fd0ff] via-[#1aa3f5] to-[#1666c9] bg-clip-text font-display text-5xl font-bold leading-none tracking-tight text-transparent drop-shadow-[0_3px_0_#ffffff] sm:text-7xl">
              X-MIKU
            </span>
            <span className="mt-1 flex items-center justify-center gap-1.5 font-script text-2xl text-miku-deep sm:text-4xl">
              <Heart className="animate-heartbeat size-4 text-miku-deep sm:size-6" strokeWidth={2.5} aria-hidden="true" />
              Pair Your Bot
              <Heart className="animate-heartbeat size-4 text-miku-deep [animation-delay:0.8s] sm:size-6" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </h1>
          <p className="mt-3 max-w-[16rem] text-sm font-bold leading-snug text-[#1f3a7a] sm:max-w-sm sm:text-lg">
            Get your WhatsApp pair code easily from here
          </p>
        </div>

        <Image
          src="/images/bunny.webp"
          alt=""
          width={400}
          height={400}
          className="pointer-events-none absolute -bottom-10 -right-2 z-10 h-auto w-20 animate-floaty [animation-delay:0.7s] sm:w-32"
        />
      </div>

      <ul className="relative z-20 -mt-4 flex flex-wrap items-center justify-center gap-2 px-3 sm:-mt-6 sm:gap-3">
        {BADGES.map(({ label, icon: Icon }, i) => (
          <li
            key={label}
            style={{ animationDelay: `${400 + i * 150}ms` }}
            className="animate-blur-in glass flex items-center gap-1.5 rounded-full border border-white px-3 py-1.5 text-xs font-bold text-miku-deep shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:py-2 sm:text-base"
          >
            <Icon className={`size-3.5 sm:size-4 ${i === 2 ? 'fill-lilac text-lilac' : 'text-miku-deep'}`} aria-hidden="true" />
            {label}
          </li>
        ))}
      </ul>
      <div className="mt-1 flex justify-center gap-24" aria-hidden="true">
        <Star className="size-3 fill-[#7aa8ff] text-[#7aa8ff] animate-twinkle" />
        <Sparkle className="size-3 fill-[#7ccdf7] text-[#7ccdf7] animate-twinkle [animation-delay:1s]" />
      </div>
    </section>
  )
}
