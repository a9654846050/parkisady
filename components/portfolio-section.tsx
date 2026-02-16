"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "Террасирование участка на склоне",
    description: "Участок 12 соток, уклон 12\u00b0. Каменные подпорные стены, интегрированный дренаж, газон между террасами.",
  },
  {
    image: "/images/project-2.jpg",
    title: "Инженерные системы под ключ",
    description: "Участок 8 соток, перепад 6 м. Полный цикл: ливневка, дренаж, подпорные стены, освещение.",
  },
  {
    image: "/images/project-3.jpg",
    title: "Многоуровневый сад с подсветкой",
    description: "Участок 15 соток. Подпорные стены из бетона, встроенное освещение, зоны отдыха на каждом уровне.",
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))
  }, [])

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-10">
          Наши проекты
        </h2>

        {/* Card */}
        <div>
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={projects[current].image}
              alt={projects[current].title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>

          {/* Navigation: arrows + counter */}
          <div className="flex items-center justify-center gap-6 py-5">
            <button
              onClick={prev}
              aria-label="Предыдущий проект"
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/60 hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <span className="text-sm text-foreground tabular-nums tracking-wide">
              <span className="font-semibold text-foreground">{current + 1}</span>
              <span className="text-muted-foreground">{"/"}{projects.length}</span>
            </span>
            <button
              onClick={next}
              aria-label="Следующий проект"
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/60 hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Title + Description */}
          <div>
            <h3 className="font-serif text-lg md:text-xl font-bold text-foreground uppercase tracking-wide mb-2">
              {projects[current].title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {projects[current].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
