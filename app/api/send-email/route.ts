import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, phone, message } = await request.json()

  const token = process.env.MAX_BOT_TOKEN
  const chatId = process.env.MAX_CHAT_ID

  if (!token || !chatId) {
    console.error('[v0] Missing MAX bot credentials')
    return NextResponse.json({ error: 'Missing bot credentials' }, { status: 500 })
  }

  if (!name || !phone) {
    return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
  }

  const text = [
    'Новая заявка с сайта',
    '',
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    message ? `Сообщение: ${message}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  const response = await fetch(
    `https://platform-api.max.ru/messages?chat_id=${chatId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    }
  )

  if (!response.ok) {
    const err = await response.text()
    console.error('[v0] Max API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
