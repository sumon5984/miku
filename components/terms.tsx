import { Heart, ScrollText, ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'

const TERMS = [
  'X-MIKU is an unofficial bot service and is not affiliated with WhatsApp, Meta or Telegram.',
  'You may only pair numbers that you own or have permission to use.',
  'Do not use the bot for spam, scams, harassment or any illegal activity. Abusive accounts will be blocked.',
  'Pairing codes are generated on request and should never be shared with anyone else.',
  'Service availability may change at any time for maintenance or updates.',
  'By using this website you agree to these terms and to WhatsApp\u2019s own Terms of Service.',
]

const PRIVACY = [
  'We only use your number to generate the pairing code.',
  'We never ask for passwords, OTPs or personal chats.',
  'You can unlink the bot from Linked Devices anytime.',
]

export function Terms() {
  return (
    <section id="terms" aria-labelledby="terms-title" className="scroll-mt-4">
      <Reveal>
        <SectionTitle id="terms-title" title="Terms & Conditions" subtitle="Please read before pairing your bot" />
      </Reveal>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="glass h-full rounded-3xl border-2 border-white p-5 shadow-[0_6px_20px_rgba(43,182,245,0.12)]">
            <h3 className="flex items-center gap-2 font-bold text-miku-deep">
              <ScrollText className="size-5 text-miku" aria-hidden="true" />
              Terms of Use
            </h3>
            <ul className="mt-3 space-y-2">
              {TERMS.map((t) => (
                <li key={t} className="flex gap-2 text-sm leading-snug text-[#2a4a8a]">
                  <Heart className="mt-0.5 size-3.5 shrink-0 fill-lilac text-lilac" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass h-full rounded-3xl border-2 border-white p-5 shadow-[0_6px_20px_rgba(43,182,245,0.12)]">
            <h3 className="flex items-center gap-2 font-bold text-miku-deep">
              <ShieldCheck className="size-5 text-miku" aria-hidden="true" />
              Privacy Policy
            </h3>
            <ul className="mt-3 space-y-2">
              {PRIVACY.map((t) => (
                <li key={t} className="flex gap-2 text-sm leading-snug text-[#2a4a8a]">
                  <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-miku" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-white/70 px-3 py-2 text-xs text-miku-deep">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
