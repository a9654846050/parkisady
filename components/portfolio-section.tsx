"use client"

import { useState, useCallback, useRef } from "react"
import Image from "next/image"

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "Террасирование участка на склоне",
    description:
      "Участок 12 соток, уклон 12\u00b0. Каменные подпорные стены, интегрированный дренаж, газон между террасами.",
  },
  {
    image: "/images/project-2.jpg",
    title: "Инженерные системы под ключ",
    description:
      "Участок 8 соток, перепад 6 м. Полный цикл: ливневка, дренаж, подпорные стены, освещение.",
  },
  {
    image: "/images/project-3.jpg",
    title: "Многоуровневый сад с подсветкой",
    description:
      "Участок 15 соток. Подпорные стены из бетона, встроенное освещение, зоны отдыха на каждом уровне.",
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }, [])

  const onTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }, [next, prev])

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-10">
          Наши проекты
        </h2>

        {/* Swipeable card */}
        <div
          className="select-none touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Image with counter notch */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={projects[current].image}
              alt={projects[current].title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
              draggable={false}
            />

            {/* Counter notch in bottom-right */}
            <div className="absolute bottom-0 right-0 flex items-center">
              {/* Curved cutout shape */}
              <div className="relative flex items-center gap-1.5 bg-background pl-5 pr-4 pt-3 pb-1.5 rounded-tl-2xl">
                {/* Decorative curve connectors */}
                <div className="absolute -left-4 bottom-0 h-4 w-4 bg-transparent">
                  <div className="h-full w-full rounded-br-2xl bg-background shadow-[4px_0_0_0_hsl(var(--background))]" />
                </div>
                <div className="absolute -top-4 right-0 h-4 w-4 bg-transparent">
                  <div className="h-full w-full rounded-br-2xl bg-background shadow-[4px_0_0_0_hsl(var(--background))]" />
                </div>
                <span className="text-sm font-semibold text-foreground tabular-nums">
                  {current + 1}
                </span>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {"/"}{projects.length}
                </span>
              </div>
            </div>
          </div>

          {/* Title + Description */}
          <div className="mt-5">
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
