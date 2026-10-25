import { NextResponse } from 'next/server'
import { randomInt } from 'node:crypto'

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function generatePairCode() {
  let code = ''
  for (let i = 0; i < 8; i++) code += CODE_CHARS[randomInt(CODE_CHARS.length)]
  return `${code.slice(0, 4)}-${code.slice(4)}`
}

export async function POST(request: Request) {
  let number = ''
  try {
    const body = await request.json()
    number = String(body?.number ?? '')
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const digits = number.replace(/\D/g, '')
  if (digits.length < 8 || digits.length > 15) {
    return NextResponse.json(
      { error: 'Please enter a valid WhatsApp number with country code.' },
      { status: 400 },
    )
  }

  // TODO: Replace with your real bot pairing API, e.g.
  // const res = await fetch(`${process.env.BOT_API_URL}/pair?number=${digits}`)
  // const { code } = await res.json()
  const code = generatePairCode()

  return NextResponse.json({ code, number: digits })
}
