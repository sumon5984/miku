'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Copy, Heart, Loader2, Lock, Ribbon, Sparkle, Sparkles, Star } from 'lucide-react'
import { TelegramIcon, WhatsAppIcon } from './brand-icons'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function PairCodeCard() {
  const [number, setNumber] = useState('')
  const [code, setCode] = useState<string | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setCopied(false)

    const digits = number.replace(/\D/g, '')
    if (digits.length < 8 || digits.length > 15) {
      setStatus('error')
      setError('Please enter a valid WhatsApp number with country code.')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/pair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: digits }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Something went wrong. Please try again.')
      setCode(data.code)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  async function handleCopy() {
    if (!code) return
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Could not copy. Please copy the code manually.')
    }
  }

  return (
    <section
      id="pair"
      aria-labelledby="pair-title"
      className="glass relative scroll-mt-4 rounded-3xl border-2 border-white p-4 shadow-[0_10px_40px_rgba(43,182,245,0.18)] sm:p-8"
    >
      <Ribbon className="animate-sway absolute -left-3 -top-4 size-10 fill-[#d9ccff] text-lilac drop-shadow-md sm:size-12" aria-hidden="true" />
      <Sparkle className="absolute right-4 top-4 size-4 fill-miku text-miku animate-twinkle" aria-hidden="true" />
      <Star className="absolute -right-2 bottom-24 size-5 fill-[#ffe58a] text-[#f5cf4a] animate-twinkle [animation-delay:1s]" aria-hidden="true" />
      <Heart className="absolute -bottom-2 left-6 size-4 fill-[#9bd8ff] text-[#5bb8f0] animate-floaty" aria-hidden="true" />
      <div className="text-center">
        <h2
          id="pair-title"
          className="flex items-center justify-center gap-2 font-display text-2xl font-bold text-miku-deep sm:text-3xl"
        >
          <Heart className="animate-heartbeat size-4 fill-lilac text-lilac" aria-hidden="true" />
          <TelegramIcon className="animate-floaty size-7 text-miku-deep [animation-duration:3s] sm:size-8" />
          Get Your Pair Code
          <Heart className="animate-heartbeat size-4 fill-lilac text-lilac [animation-delay:0.8s]" aria-hidden="true" />
        </h2>
        <p className="mt-2 text-sm text-[#2a4a8a] sm:text-base">
          Enter your WhatsApp number to get the pair code
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5" noValidate>
        <label htmlFor="wa-number" className="sr-only">
          WhatsApp number
        </label>
        <div className="flex items-center gap-3 rounded-2xl border-2 border-border bg-white p-2 shadow-inner transition focus-within:border-miku focus-within:ring-4 focus-within:ring-miku/15">
          <span className="animate-pulse-ring flex size-11 shrink-0 items-center justify-center rounded-full bg-[#e3f9ec] text-whatsapp">
            <WhatsAppIcon className="size-6" />
          </span>
          <span className={`h-5 w-0.5 rounded bg-miku-deep/70 ${number ? 'opacity-40' : 'animate-caret'}`} aria-hidden="true" />
          <input
            id="wa-number"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Enter your WhatsApp number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            aria-invalid={status === 'error'}
            aria-describedby="wa-hint"
            className="min-w-0 flex-1 bg-transparent py-2 text-base text-[#1f3a7a] outline-none placeholder:text-[#5e78a8]"
          />
        </div>
        <p id="wa-hint" className="mt-1.5 pl-20 text-xs text-[#2a4a8a]">
          Example: +8801XXXXXXXX
        </p>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="animate-glow group mt-4 flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-white bg-gradient-to-r from-[#2aa8f5] via-[#35bdfb] to-[#2aa8f5] py-3.5 font-display text-lg font-semibold text-white shadow-[0_8px_24px_rgba(26,140,240,0.35)] transition hover:brightness-105 active:scale-[0.99] disabled:opacity-80 sm:text-xl"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="size-5 animate-twinkle" aria-hidden="true" />
              Get My Pair Code
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
        </button>

        {status === 'error' && error && (
          <p role="alert" className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-center text-sm font-semibold text-destructive">
            {error}
          </p>
        )}
      </form>

      <div className={`mt-5 rounded-2xl border-2 bg-white/70 p-4 transition-all duration-500 sm:p-5 ${code ? 'border-miku/60 shadow-[0_0_0_4px_rgba(43,182,245,0.12)]' : 'border-border'}`}>
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-sm font-bold text-miku-deep sm:text-base">
              <Lock className="size-4" aria-hidden="true" />
              Your Pairing Code
            </p>
            <p
              key={code ?? 'empty'}
              aria-live="polite"
              className={`${code ? 'animate-pop-in' : ''} mt-1 font-display text-3xl font-bold tracking-wider sm:text-4xl ${code ? 'text-[#1a8cf0]' : 'text-[#1a8cf0]/35'}`}
            >
              {code ?? 'XXXX-XXXX'}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            disabled={!code}
            className="flex shrink-0 items-center gap-2 rounded-xl border-2 border-white bg-gradient-to-b from-[#3cc4ff] to-[#1a8cf0] px-4 py-2.5 font-display text-sm font-semibold text-white shadow-md transition hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:text-base"
          >
            {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-[#2a4a8a] sm:text-sm">
          <Heart className="size-3.5 shrink-0 fill-lilac text-lilac" aria-hidden="true" />
          Use this code in your WhatsApp to pair with the bot.
          <Heart className="size-3.5 shrink-0 fill-lilac text-lilac" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}
