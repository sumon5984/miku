import { KeyRound, Link2, Smartphone, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'

const STEPS = [
  { title: 'Enter Number', text: 'Type your WhatsApp number with country code, e.g. +8801XXXXXXXX.', icon: Smartphone },
  { title: 'Get Pair Code', text: 'Tap "Get My Pair Code" and your 8 character code appears instantly.', icon: KeyRound },
  { title: 'Open WhatsApp', text: 'Go to Settings > Linked Devices > Link a Device > Link with phone number.', icon: Link2 },
  { title: 'Bot Ready', text: 'Enter the code in WhatsApp and X-MIKU is connected to your account.', icon: Sparkles },
]

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-4">
      <Reveal>
        <SectionTitle id="how-title" title="How To Pair" subtitle="Connect your WhatsApp bot in 4 easy steps" />
      </Reveal>
      <ol className="mt-4 grid gap-3 sm:grid-cols-2">
        {STEPS.map(({ title, text, icon: Icon }, i) => (
          <li key={title}>
            <Reveal delay={i * 100} className="h-full">
              <div className="glass group relative flex h-full items-start gap-3 rounded-2xl border-2 border-white p-4 shadow-[0_6px_20px_rgba(43,182,245,0.12)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(43,182,245,0.22)]">
                <span className="absolute -left-2 -top-2 flex size-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-[#3cc4ff] to-[#1a8cf0] font-display text-xs font-bold text-white shadow-md">
                  {i + 1}
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#eaf6ff] to-[#d6ecff] transition group-hover:scale-110">
                  <Icon className="size-6 text-miku-deep" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-miku-deep">{title}</h3>
                  <p className="mt-0.5 text-sm leading-snug text-[#2a4a8a]">{text}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
