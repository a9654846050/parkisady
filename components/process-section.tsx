const steps = [
  {
    number: "01",
    title: "Выезд + ТЗ",
    duration: "1 день",
    description: "Осмотр участка, обсуждение пожеланий, составление технического задания",
  },
  {
    number: "02",
    title: "Проектирование",
    duration: "3\u20134 недели",
    description: "Разработка генплана, инженерных решений, 3D-визуализации",
  },
  {
    number: "03",
    title: "Презентация",
    duration: "Видеозвонок 1\u20132 часа",
    description: "Детальный разбор проекта с пояснениями по каждому разделу",
  },
  {
    number: "04",
    title: "Правки",
    duration: "До 2 недель",
    description: "Внесение корректировок до полного утверждения проекта",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-center text-card-foreground mb-4">
          Как мы работаем
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Прозрачный процесс от первого звонка до готового проекта
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex gap-5 rounded-xl border border-border bg-background p-6"
            >
              <span className="text-4xl font-bold text-primary/20 leading-none select-none">
                {step.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-2">
                  {step.duration}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
