export async function POST(request: Request) {
  try {
    console.log('[v0] Telegram API route called')
    const { name, phone } = await request.json()
    console.log('[v0] Received data:', { name, phone })

    if (!name || !phone) {
      console.log('[v0] Missing name or phone')
      return Response.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    console.log('[v0] Environment check:', { 
      hasBotToken: !!botToken, 
      hasCharId: !!chatId,
      chatId: chatId 
    })

    if (!botToken || !chatId) {
      console.error('[v0] Missing Telegram credentials')
      return Response.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const message = `🌿 Новая заявка с сайта parkisady.ru\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}`

    console.log('[v0] Sending to Telegram...')
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
      const errorText = await response.text()
      console.error('[v0] Telegram API error (status ' + response.status + '):', errorText)
      
      let errorMessage = 'Failed to send message to Telegram'
      try {
        const errorJson = JSON.parse(errorText)
        errorMessage = errorJson.description || errorMessage
      } catch (e) {
        // ignore JSON parse error
      }
      
      return Response.json({ 
        error: errorMessage,
        details: errorText 
      }, { status: 500 })
    }

    console.log('[v0] Message sent successfully')
    return Response.json({ success: true })
  } catch (error) {
    console.error('[v0] Error sending to Telegram:', error)
    return Response.json({ 
      error: 'Failed to send message',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}
