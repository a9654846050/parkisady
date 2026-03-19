import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, phone, message } = await request.json()
  console.log('[v0] send-email route called', { name, phone, message })

  const token = process.env.MAX_BOT_TOKEN
  const chatId = process.env.MAX_CHAT_ID
  console.log('[v0] credentials present:', { hasToken: !!token, hasChatId: !!chatId })

  if (!token || !chatId) {
    console.log('[v0] Missing credentials, returning 500')
    return NextResponse.json({ error: 'Missing bot credentials' }, { status: 500 })
  }

  if (!name || !phone) {
    console.log('[v0] Missing name or phone, returning 400')
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

  const url = `https://platform-api.max.ru/messages?chat_id=${chatId}`
  console.log('[v0] Sending to Max API:', url)
  console.log('[v0] Message text:', text)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })

  const responseText = await response.text()
  console.log('[v0] Max API response status:', response.status)
  console.log('[v0] Max API response body:', responseText)

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to send message', detail: responseText }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
