import { CheckCircle } from "lucide-react"
import { ScrollDownArrow } from "./scroll-down-arrow"

const advantages = [
  "Занимаемся строительством ландшафтов, поэтому наши проекты реальны, а не просто картинки",
  "Живём и работаем в Сочи — знаем всё про сочинские уклоны, грунт, растения, ливни, снега и другие особенности региона",
  "Учитываем стоимость обслуживания сада, поскольку знаем сколько это на самом деле стоит",
  "Наша мотивация — красивые фото вашего сада, а потому мы заинтересованы пойти до конца",
]

export function WhyCallSection() {
  return (
    <section className="px-5 py-16 md:px-10 md:py-20 bg-card">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3">
          Почему стоит нам позвонить
        </h2>
        <p className="text-muted-foreground mb-10">
          Только проверяемые преимущества
        </p>

        <ul className="flex flex-col gap-6">
          {advantages.map((text, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5B8B8E]/10">
                <CheckCircle className="h-4 w-4 text-[#5B8B8E]" />
              </span>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                {text}
              </p>
            </li>
          ))}
        </ul>

        <ScrollDownArrow />
      </div>
    </section>
  )
}
