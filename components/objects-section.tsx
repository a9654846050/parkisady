"use client"

import { useState, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollDownArrow } from "./scroll-down-arrow"

const objects = [
  {
    image: "/images/obj1.jpg",
    title: "Изумрудный город, 1,5 сотки",
    description:
      "Придомовая территория таун-хауса - от дренажа до растений и отделочных работ",
  },
  {
    image: "/images/obj2.jpg",
    title: "Улица Санаторная",
    description:
      "5 соток, все работы от дренажа до высадки растений и отделки",
  },
  {
    image: "/images/obj3.jpg",
    title: "Вилла на Володарского",
    description:
      "Визуализация, проект, реализация от земельных работ - дренаж, ливневка, бассейн, отделка, растения, авто полив и свет",
  },
  {
    image: "/images/obj4.jpg",
    title: "Дом в Молдовке на Брянской",
    description:
      "Визуализация, проект, полный комплекс ландшафтных работ от земли до растений",
  },
  {
    image: "/images/obj5.jpg",
    title: "Вилла на Ворошиловградской",
    description:
      "Проект озеленения, подбор и высадка растений, формирование зеленой эстетики.",
  },
]

export function ObjectsSection() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? objects.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === objects.length - 1 ? 0 : c + 1))
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
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3">
          Не только проектируем, но и строим ландшафты
        </h2>
        <p className="text-base md:text-lg text-foreground mb-1.5">
          Сами строим по своим и чужим проектам.
        </p>
        <p className="text-sm md:text-base text-muted-foreground mb-10">
          Именно потому что мы строим сами — наши проекты реализуемы
        </p>

        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6">
          Готовые объекты
        </h3>

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
              src={objects[current].image}
              alt={objects[current].title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
              draggable={false}
            />

            {/* Arrow buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1C1C1C] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8B8E] focus-visible:ring-offset-2"
              aria-label="Предыдущий объект"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1C1C1C] shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8B8E] focus-visible:ring-offset-2"
              aria-label="Следующий объект"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Counter notch in bottom-right */}
            <div className="absolute bottom-0 right-0 flex items-center">
              <div className="relative flex items-center gap-1.5 bg-background pl-5 pr-4 pt-3 pb-1.5 rounded-tl-2xl">
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
                  {"/"}{objects.length}
                </span>
              </div>
            </div>
          </div>

          {/* Title + Description */}
          <div className="mt-5">
            <h4 className="font-serif text-lg md:text-xl font-bold text-foreground uppercase tracking-wide mb-2">
              {objects[current].title}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {objects[current].description}
            </p>
          </div>
        </div>

        <ScrollDownArrow />
      </div>
    </section>
  )
}
