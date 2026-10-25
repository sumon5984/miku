import { ChevronDown, CircleHelp } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionTitle } from './section-title'

const FAQS = [
  {
    q: 'What is a WhatsApp pairing code?',
    a: 'A pairing code is an 8 character code that lets you link a device or bot to your WhatsApp account using your phone number instead of scanning a QR code.',
  },
  {
    q: 'Where do I enter the pair code?',
    a: 'Open WhatsApp > Settings > Linked Devices > Link a Device > Link with phone number instead, then type the code shown on this page.',
  },
  {
    q: 'Which number format should I use?',
    a: 'Use your full number with country code and no spaces, for example +8801XXXXXXXX for Bangladesh or +91XXXXXXXXXX for India.',
  },
  {
    q: 'How long is the code valid?',
    a: 'Pairing codes expire quickly (usually within a couple of minutes). If it expires, simply generate a new one.',
  },
  {
    q: 'Is my WhatsApp account safe?',
    a: 'We never ask for your password or OTP. Only enter the pairing code inside your own WhatsApp app, and you can remove the linked bot any time from Linked Devices.',
  },
  {
    q: 'Can I also use the bot in Telegram groups?',
    a: 'Yes. X-MIKU supports Telegram group pairing too. Join our Telegram channel for setup guides and updates.',
  },
  {
    q: 'How do I disconnect the bot?',
    a: 'Go to WhatsApp > Settings > Linked Devices, tap the X-MIKU session and choose Log Out. The bot will be disconnected immediately.',
  },
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-4">
      <Reveal>
        <SectionTitle id="faq-title" title="FAQ" subtitle="Everything about WhatsApp bot pairing" />
      </Reveal>
      <div className="mt-4 space-y-2.5">
        {FAQS.map(({ q, a }, i) => (
          <Reveal key={q} delay={i * 60}>
            <details className="glass group rounded-2xl border-2 border-white shadow-[0_4px_16px_rgba(43,182,245,0.1)] transition open:shadow-[0_10px_28px_rgba(43,182,245,0.2)]">
              <summary className="flex cursor-pointer list-none items-center gap-3 p-4 font-bold text-miku-deep [&::-webkit-details-marker]:hidden">
                <CircleHelp className="size-5 shrink-0 text-miku" aria-hidden="true" />
                <span className="flex-1 text-sm sm:text-base">{q}</span>
                <ChevronDown className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="animate-blur-in px-4 pb-4 pl-12 text-sm leading-relaxed text-[#2a4a8a] [animation-duration:0.5s]">{a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
