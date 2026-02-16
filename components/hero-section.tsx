"use client"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16 md:pt-[72px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        role="img"
        aria-label="Ландшафтный проект на склоне в Сочи"
      />
      <div className="absolute inset-0 bg-[#1A4D4D]/70" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-center px-5 md:px-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5EDD6] leading-tight text-balance mb-6">
            Сделаем ландшафтный проект вашего участка в Сочи к лету
          </h1>
          <ul className="flex flex-col gap-3 text-sm md:text-base text-[#E8EEF0] leading-relaxed max-w-xl mb-10">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F4C430]" />
              Специализируемся на сложном рельефе
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F4C430]" />
              Знаем все про ливневку и дренаж
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F4C430]" />
              {'Умеем в стройку а не просто в картинки'}
            </li>
          </ul>

          <button
            onClick={scrollToForm}
            className="font-serif inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-[#F4C430] text-[#1C1C1C] hover:bg-[#F4C430]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C430] focus-visible:ring-offset-2"
          >
            Уточнить детали
          </button>
        </div>
      </div>
    </section>
  )
}
