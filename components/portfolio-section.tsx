"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    image: "/images/project-1.jpg",
    description: "Участок 12 соток, уклон 12\u00b0, терраса + дренаж",
  },
  {
    image: "/images/project-2.jpg",
    description: "Участок 8 соток, перепад 6 м, полный цикл инженерии",
  },
  {
    image: "/images/project-3.jpg",
    description: "Участок 15 соток, подпорные стены + освещение",
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
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-foreground mb-4">
          Наши проекты
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Реализованные объекты в Сочи и Краснодарском крае
        </p>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src={projects[current].image}
                alt={projects[current].description}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="bg-card p-4">
              <p className="text-sm text-card-foreground">{projects[current].description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prev}
              aria-label="Предыдущий проект"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Проект ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Следующий проект"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-card-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.description}
              className="group rounded-xl overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-card-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
