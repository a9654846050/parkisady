"use client"

import { Check } from "lucide-react"

const items = [
  "Топосъёмка и точки для разметки на местности",
  "Генплан и зонирование участка",
  "3D\u2011визуализация ключевых зон",
  "План подпорных стен, террас и лестниц",
  "Чертежи забора, калитки и ворот",
  "План дорожек и покрытий",
  "Схемы дренажа и водоотведения",
  "План растений",
  "Схема и план освещения",
  "Схема автоматизации полива",
  "Пояснительная записка + рекомендации по реализации",
]

export function WhatsIncludedSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-card-foreground mb-4">
          Что входит в проект
        </h2>
        <p className="text-muted-foreground mb-10">
          Полный комплект документации для начала строительства
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3.5 w-3.5 text-primary" />
              </span>
              <span className="text-sm text-card-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground mb-8">
          Состав уточняем после брифа и данных по участку.
        </p>

        <div>
          <p className="text-lg font-semibold text-card-foreground mb-6">
            {"Срок: 3\u20134 недели"}
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-[#F4C430] text-[#1C1C1C] hover:bg-[#F4C430]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] focus-visible:ring-offset-2"
          >
            Уточнить детали
          </button>
        </div>
      </div>
    </section>
  )
}
