export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json()

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('[v0] Missing Telegram credentials')
      return Response.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const message = `🌿 Новая заявка с сайта parkisady.ru\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}`

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('[v0] Telegram API error:', error)
      throw new Error('Failed to send message to Telegram')
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('[v0] Error sending to Telegram:', error)
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
