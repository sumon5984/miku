import { Heart, Sparkle, Star } from 'lucide-react'

const PARTICLES = [
  { left: '4%', size: 14, duration: 16, delay: 0, kind: 'heart', color: 'fill-[#9bd8ff] text-[#5bb8f0]' },
  { left: '14%', size: 10, duration: 20, delay: 4, kind: 'sparkle', color: 'fill-white text-white' },
  { left: '26%', size: 12, duration: 18, delay: 9, kind: 'star', color: 'fill-[#ffe58a] text-[#f5cf4a]' },
  { left: '38%', size: 9, duration: 22, delay: 2, kind: 'heart', color: 'fill-[#c9b8ff] text-lilac' },
  { left: '52%', size: 11, duration: 17, delay: 12, kind: 'sparkle', color: 'fill-[#bfe7ff] text-[#7ccdf7]' },
  { left: '64%', size: 13, duration: 21, delay: 6, kind: 'heart', color: 'fill-[#9bd8ff] text-[#5bb8f0]' },
  { left: '76%', size: 10, duration: 19, delay: 1, kind: 'star', color: 'fill-[#7aa8ff] text-[#7aa8ff]' },
  { left: '88%', size: 12, duration: 23, delay: 8, kind: 'heart', color: 'fill-[#c9b8ff] text-lilac' },
  { left: '95%', size: 9, duration: 18, delay: 14, kind: 'sparkle', color: 'fill-white text-white' },
] as const

const ICONS = { heart: Heart, sparkle: Sparkle, star: Star }

export function FloatingDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-20 top-1/4 size-64 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute -right-24 top-2/3 size-72 rounded-full bg-[#b9e4ff]/50 blur-3xl" />
      <div className="absolute left-1/3 top-[85%] size-60 rounded-full bg-[#d9ccff]/30 blur-3xl" />
      {PARTICLES.map(({ left, size, duration, delay, kind, color }, i) => {
        const Icon = ICONS[kind]
        return (
          <span
            key={i}
            className="animate-drift absolute bottom-[-24px]"
            style={{ left, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
          >
            <Icon className={color} style={{ width: size, height: size }} />
          </span>
        )
      })}
    </div>
  )
}
