import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Форма заявки <onboarding@resend.dev>',
      to: ['a9654846050@gmail.com'],
      subject: `Новая заявка от ${name}`,
      html: `
        <h2>Новая заявка с сайта parkisady.ru</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        ${message ? `<p><strong>Сообщение:</strong> ${message}</p>` : ''}
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 })
  }
}
