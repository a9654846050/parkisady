"use client"

import { useState, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollDownArrow } from "./scroll-down-arrow"

const projects = [
  {
    image: "/images/slide1-1.jpg",
    title: "Проект в Липниках",
    description:
      "10 соток, перепад высот 6 метров. Полный комплект чертежей и визуализация.",
  },
  {
    image: "/images/slide1-2.jpg",
    title: "Проект на Космической",
    description:
      "20 соток, перепад высот 16 метров, расположили летнюю кухню, террасы и бассейн.",
  },
  {
    image: "/images/slide1-3.jpg",
    title: "Проект на Ландышевой",
    description:
      "5,5 соток, перепад высот 3 метра - две террасы, летняя зона отдыха с камином.",
  },
  {
    image: "/images/slide1-4.jpg",
    title: "Проект дачи в Красной Воле",
    description:
      "6 соток, перепад высот 3 метра - две террасы - дом, бассейн с баней и сад.",
  },
  {
    image: "/images/slide1-5.jpg",
    title: "Мини-отель в Курортном городке",
    description:
      "Кафе, бассейн и дизайн общественной территории",
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
    <section className="pt-6 pb-16 md:pt-8 md:pb-24 px-5 md:px-10 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-10">
          Наши ландшафтные проекты
        </h2>

        {/* Swipeable card */}
        <div
          className="select-none touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Image with counter notch and arrow buttons */}
          <div className="relative aspect-[5/6] overflow-hidden rounded-2xl">
            <Image
              src={projects[current].image}
              alt={projects[current].title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
              draggable={false}
            />

            {/* Arrow buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1C1C1C] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8B8E] focus-visible:ring-offset-2"
              aria-label="Предыдущий проект"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1C1C1C] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8B8E] focus-visible:ring-offset-2"
              aria-label="Следующий проект"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

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

        <ScrollDownArrow />
      </div>
    </section>
  )
}
