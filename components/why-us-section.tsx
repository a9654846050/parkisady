"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { image: "/images/slide-01.jpg", title: "Генплан и зонирование" },
  { image: "/images/slide-02.jpg", title: "3D\u2011визуализация ключевых зон" },
  { image: "/images/slide-03.jpg", title: "План подпорных стен, террас и лестниц" },
  { image: "/images/slide-04.jpg", title: "Чертежи забора, калитки и ворот" },
  { image: "/images/slide-05.jpg", title: "План дорожек и покрытий" },
  { image: "/images/slide-06.jpg", title: "Схемы дренажа и водоотведения" },
  { image: "/images/slide-07.jpg", title: "План растений" },
  { image: "/images/slide-08.jpg", title: "Схема и план освещения" },
  { image: "/images/slide-09.jpg", title: "Схема автоматизации полива" },
  { image: "/images/slide-10.jpg", title: "Пояснительная записка + рекомендации по реализации" },
]

export function WhyUsSection() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, index))
      setCurrent(clamped)
      if (trackRef.current) {
        const card = trackRef.current.children[clamped] as HTMLElement
        if (card) {
          trackRef.current.scrollTo({
            left: card.offsetLeft - 20,
            behavior: "smooth",
          })
        }
      }
    },
    []
  )

  const prev = () => scrollTo(current - 1)
  const next = () => scrollTo(current + 1)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-10 px-5 md:px-10">
          {"Что входит в проект:"}
        </h2>

        {/* Slider track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-5 md:px-10 pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={() => {
            if (!trackRef.current) return
            const el = trackRef.current
            const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth ?? 260
            const idx = Math.round((el.scrollLeft) / (cardWidth + 16))
            setCurrent(Math.max(0, Math.min(slides.length - 1, idx)))
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className="shrink-0 w-[260px] md:w-[300px] snap-start rounded-xl overflow-hidden border border-border bg-card"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 260px, 300px"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm md:text-base font-medium text-card-foreground leading-snug">
                  <span className="text-[#A8B8BE] mr-1.5">{i + 1}.</span>
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-5 px-5 md:px-10">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Предыдущий слайд"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <span className="text-sm text-muted-foreground tabular-nums">
            {current + 1} из {slides.length}
          </span>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            aria-label="Следующий слайд"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mt-5 px-5 md:px-10">
          Состав уточняем после брифа и данных по участку.
        </p>
      </div>
    </section>
  )
}
