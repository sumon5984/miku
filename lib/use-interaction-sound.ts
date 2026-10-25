'use client'

import { useCallback, useRef } from 'react'

type SoundKind = 'click' | 'success' | 'copy' | 'error'

const FREQUENCIES: Record<SoundKind, number[]> = {
  click: [520],
  success: [660, 880],
  copy: [740, 988],
  error: [220, 180],
}

export function useInteractionSound() {
  const audioContextRef = useRef<AudioContext | null>(null)

  return useCallback((kind: SoundKind) => {
    if (typeof window === 'undefined') return

    const AudioContextConstructor = window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AudioContextConstructor) return

    try {
      const context = audioContextRef.current ?? new AudioContextConstructor()
      audioContextRef.current = context
      if (context.state === 'suspended') void context.resume()

      const now = context.currentTime
      FREQUENCIES[kind].forEach((frequency, index) => {
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        const start = now + index * 0.07
        const duration = kind === 'click' ? 0.06 : 0.12

        oscillator.type = kind === 'error' ? 'triangle' : 'sine'
        oscillator.frequency.setValueAtTime(frequency, start)
        gain.gain.setValueAtTime(0.0001, start)
        gain.gain.exponentialRampToValueAtTime(kind === 'click' ? 0.025 : 0.04, start + 0.01)
        gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
        oscillator.connect(gain)
        gain.connect(context.destination)
        oscillator.start(start)
        oscillator.stop(start + duration + 0.02)
      })
    } catch {
      // Sound is optional feedback; never interrupt the primary action.
    }
  }, [])
}
