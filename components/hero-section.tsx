"use client"

import { Phone } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        role="img"
        aria-label="Ландшафтный проект на склоне в Сочи"
      />
      <div className="absolute inset-0 bg-[#1a2e1a]/75" />

      <div className="relative z-10 px-4 py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e8] leading-tight text-balance mb-6">
          Получите проект участка к началу строительного сезона
        </h1>
        <p className="text-base md:text-lg text-[#d4cfc5] leading-relaxed max-w-2xl mx-auto mb-10">
          Специализируемся на сложных задачах: террасирование склонов, дренажные системы, коммуникации
        </p>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Заказать проект
          </button>
          <a
            href="tel:+78622000000"
            className="inline-flex items-center gap-2 text-[#d4cfc5] hover:text-[#f5f0e8] transition-colors text-sm"
          >
            <Phone className="h-4 w-4" />
            +7 (862) 200-00-00
          </a>
        </div>
      </div>
    </section>
  )
}
