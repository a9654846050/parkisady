"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactFormSection() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [phone, setPhone] = useState("")
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormValid = name.trim() !== "" && phone.trim() !== "" && consent

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message, phone }),
      })

      if (!response.ok) {
        throw new Error('Failed to send')
      }

      setSubmitted(true)
    } catch (error) {
      alert('Не удалось отправить заявку. Попробуйте позже или свяжитесь по телефону.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-lg mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Давайте обсудим вашу задачу
        </h2>
        <p className="text-muted-foreground mb-10">
          Напишем в мессенджер, не будем отвлекать звонками.
        </p>

        {submitted ? (
          <div className="rounded-xl border border-[#5B8B8E]/30 bg-[#5B8B8E]/5 p-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#5B8B8E]/10">
              <Send className="h-6 w-6 text-[#5B8B8E]" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
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
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Любая информация которую Вы пожелаете сообщить"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
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
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#F4C430]"
              />
              <span className="text-sm text-muted-foreground leading-relaxed">
                Я даю согласие на{" "}
                <a
                  href="/doc/soglasie.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-foreground hover:text-[#F4C430] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  обработку персональных данных
                </a>{" "}
                и ознакомлен(а) с{" "}
                <a
                  href="/doc/politika.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-foreground hover:text-[#F4C430] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Политикой обработки персональных данных
                </a>
              </span>
            </label>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isFormValid && !isSubmitting
                  ? "bg-[#F4C430] text-[#1C1C1C] hover:bg-[#F4C430]/90 focus-visible:ring-[#F4C430] cursor-pointer"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? 'Отправка...' : 'Напишите мне'}
            </button>
          </form>
        )}

        <div className="mt-16 text-center">
          <p className="text-sm md:text-base text-muted-foreground/30">
            Все, приехали. Дальше не крути
          </p>
        </div>
      </div>
    </section>
  )
}
