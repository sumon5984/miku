import { Faq } from '@/components/faq'
import { Features } from '@/components/features'
import { FloatingDecor } from '@/components/floating-decor'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { PairCodeCard } from '@/components/pair-code-card'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Terms } from '@/components/terms'

export default function Page() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-[#cdeaff]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-[url('/images/bg-clouds.webp')] bg-cover bg-center"
      />
      <FloatingDecor />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SiteHeader />
        <main>
          <Hero />
          <div className="mt-6 space-y-3 px-4 sm:px-10">
            <Reveal>
              <PairCodeCard />
            </Reveal>
            <Features />
          </div>
          <div className="mt-6 space-y-10 px-4 pb-10 sm:px-10">
            <HowItWorks />
            <Faq />
            <Terms />
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
