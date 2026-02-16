"use client"

import Image from "next/image"
import { Phone } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        role="img"
        aria-label="Ландшафтный проект на склоне в Сочи"
      />
      <div className="absolute inset-0 bg-[#1A4D4D]/70" />

      {/* Header with logo */}
      <header className="relative z-10 px-5 pt-5 md:px-10 md:pt-8">
        <div className="inline-block rounded-xl bg-white/95 p-1.5 shadow-lg shadow-black/10 backdrop-blur-sm">
          <Image
            src="/images/logo.png"
            alt="Парки Сады - ландшафтный дизайн"
            width={140}
            height={180}
            className="h-16 w-auto md:h-20"
            priority
          />
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5EDD6] leading-tight text-balance mb-6">
            Получите проект участка к началу строительного сезона
          </h1>
          <p className="text-base md:text-lg text-[#E8EEF0] leading-relaxed max-w-2xl mx-auto mb-10">
            Специализируемся на сложных задачах: террасирование склонов, дренажные системы, коммуникации
          </p>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-[#F4C430] text-[#1C1C1C] hover:bg-[#F4C430]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] focus-visible:ring-offset-2"
            >
              Заказать проект
            </button>
            <a
              href="tel:+78622000000"
              className="inline-flex items-center gap-2 text-[#E8EEF0] hover:text-[#F5EDD6] transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              +7 (862) 200-00-00
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
