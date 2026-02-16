"use client"

import { useState } from "react"
import { Send, MessageCircle } from "lucide-react"

export function ContactFormSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4 text-balance">
          {"Проект готов к маю\u00a0\u2014 успеете построить за сезон"}
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Оставьте заявку и мы свяжемся с вами в течение дня
        </p>

        {submitted ? (
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Заявка отправлена
            </h3>
            <p className="text-sm text-muted-foreground">
              Мы свяжемся с вами в ближайшее время, {name}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Имя
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Телефон
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Send className="h-4 w-4" />
              Заказать выезд
            </button>
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/78622000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground hover:bg-muted transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            WhatsApp
          </a>
          <a
            href="https://t.me/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground hover:bg-muted transition-colors"
          >
            <Send className="h-4 w-4 text-primary" />
            Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
