"use client"

import { useState, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const objects = [
  {
    image: "/images/object-1.jpg",
    title: "Подпорные стены на склоне",
    description:
      "Строительство каменных подпорных стен высотой до 3 м на участке с уклоном 15\u00b0. Армированный фундамент, дренаж за стеной.",
  },
  {
    image: "/images/object-2.jpg",
    title: "Мощение дорожек и террас",
    description:
      "Укладка натурального камня на подготовленное основание. Гравийная подушка, геотекстиль, точные уклоны для водоотведения.",
  },
  {
    image: "/images/object-3.jpg",
    title: "Озеленение и автополив",
    description:
      "Посадка деревьев и кустарников, укладка рулонного газона, монтаж автоматической системы полива на 8 зон.",
  },
  {
    image: "/images/object-4.jpg",
    title: "Дренаж и ливневая канализация",
    description:
      "Монтаж глубинного дренажа и ливневой системы на участке 12 соток. Перфорированные трубы, смотровые колодцы, отвод в рельеф.",
  },
  {
    image: "/images/object-5.jpg",
    title: "Забор, ворота и освещение",
    description:
      "Установка комбинированного забора из камня и металла, откатные ворота с автоматикой, LED-подсветка входной зоны.",
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
      </div>
    </section>
  )
}
