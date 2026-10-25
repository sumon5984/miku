import { Heart, Sparkle } from 'lucide-react'

type SectionTitleProps = {
  id: string
  title: string
  subtitle?: string
}

export function SectionTitle({ id, title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 id={id} className="flex items-center justify-center gap-2 font-display text-2xl font-bold text-miku-deep sm:text-3xl">
        <Sparkle className="size-4 fill-miku text-miku animate-twinkle" aria-hidden="true" />
        {title}
        <Heart className="size-4 fill-lilac text-lilac animate-heartbeat" aria-hidden="true" />
      </h2>
      {subtitle && <p className="mt-1 text-sm text-[#2a4a8a] sm:text-base">{subtitle}</p>}
      <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#3cc4ff] via-lilac to-[#3cc4ff]" aria-hidden="true" />
    </div>
  )
}
