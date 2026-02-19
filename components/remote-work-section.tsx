"use client"

import { CheckCircle } from "lucide-react"

const items = [
  "Выезд/обмер/фотофиксация — вы получаете материалы и краткий отчёт",
  "Согласование планировки и 3D — в мессенджере и на созвонах",
  "Все решения фиксируем: чертежи, спецификации, ведомости",
  "При желании — ведём реализацию: этапность, фото/видео\u2011отчёты, контроль качества",
]

export function RemoteWorkSection() {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="px-5 pt-16 pb-6 md:px-10 md:pt-20 md:pb-8 bg-card">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-10">
          Сделаем проект без вашего присутствия на участке:
        </h2>

        <ul className="flex flex-col gap-5 mb-10">
          {items.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#5B8B8E]" />
              <span className="text-base leading-relaxed text-foreground">{text}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={scrollToForm}
          className="font-serif inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-[#F4C430] text-[#1C1C1C] hover:bg-[#F4C430]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] focus-visible:ring-offset-2"
        >
          Получить консультацию
        </button>
      </div>
    </section>
  )
}
