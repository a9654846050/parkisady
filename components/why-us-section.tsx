import { Mountain, Droplets, Box, Hammer } from "lucide-react"

const advantages = [
  {
    icon: Mountain,
    title: "Специализация на уклонах",
    description:
      "Рельеф с перепадом от 3 до 8 метров. Рассчитываем нагрузку на подпорные стены, работаем с углами наклона до 35\u00b0",
  },
  {
    icon: Droplets,
    title: "Инженерия под ключ",
    description:
      "Глубинный и поверхностный дренаж. Расч\u0451т ливневых нагрузок по СНиП для Сочи (до 200 мм осадков в месяц)",
  },
  {
    icon: Box,
    title: "3D перед стартом",
    description:
      "Видите участок с точками съ\u0451мки, которые реально существуют. Правки вносим до утверждения",
  },
  {
    icon: Hammer,
    title: "Строим сами",
    description:
      "Не рисуем красивые картинки. В проекте только то, что реально построить нашими силами",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Почему выбирают нас
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Опыт, инженерный подход и честные решения для сложного рельефа
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
