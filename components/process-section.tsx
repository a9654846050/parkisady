import { ScrollDownArrow } from "./scroll-down-arrow"

const steps = [
  {
    number: "01",
    title: "Выезд на участок и обсуждение",
    duration: "1 день",
    description: "Осмотр участка, обсуждение пожеланий, составление технического задания",
  },
  {
    number: "02",
    title: "ТЗ + Договор + Аванс",
    duration: "1\u20132 дня",
    description: "Составление всех документов для вашей гарантии",
  },
  {
    number: "03",
    title: "Концепция и идея",
    duration: "1 неделя",
    description: "Разрабатываем основную концепцию, генеральный план и черновую визуализацию",
  },
  {
    number: "04",
    title: "Презентация идеи",
    duration: "2\u20133 дня",
    description: "Вы утверждаете концепцию и двигаемся дальше",
  },
  {
    number: "05",
    title: "Чистовая визуализация и чертежи",
    duration: "1\u20132 недели",
    description: "Детальное описание проекта по каждому разделу",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-card-foreground mb-4">
          Как мы работаем
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Прозрачный процесс от первого звонка до готового проекта
        </p>

        <div className="flex flex-col gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex gap-5 rounded-xl border border-border bg-background p-6"
            >
              <span className="text-4xl font-bold text-[#5B8B8E]/20 leading-none select-none">
                {step.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <span className="inline-block text-xs font-medium text-[#2C4A52] bg-[#5B8B8E]/10 px-2.5 py-1 rounded-full mb-2">
                  {step.duration}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ScrollDownArrow />
      </div>
    </section>
  )
}
