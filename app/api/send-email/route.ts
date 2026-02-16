import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json()

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      )
    }

    // Using Resend API (free tier available)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'noreply@parkisady.ru',
        to: 'a9654846050@gmail.com',
        subject: 'Новая заявка с сайта Парки и Сады',
        html: `
          <h2>Новая заявка</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><small>Отправлено: ${new Date().toLocaleString('ru-RU')}</small></p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[v0] Email sending error:', error)
    return NextResponse.json(
      { error: 'Не удалось отправить заявку' },
      { status: 500 }
    )
  }
}
