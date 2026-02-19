"use client"

import Image from "next/image"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/back.webp')" }}
        role="img"
        aria-label="Ландшафтный проект на склоне в Сочи"
      />
      <div className="absolute inset-0 bg-[#1A4D4D]/70" />

      {/* Header with logo + contact icons */}
      <header className="relative z-10 flex items-start justify-between px-5 pt-5 md:px-10 md:pt-8">
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

        <nav aria-label="Связаться с нами" className="flex items-center gap-3 pt-1 md:pt-2">
          <a
            href="tel:+79654846050"
            aria-label="Позвонить"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-[#F4C430]/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#F5EDD6]">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
          <a
            href="https://wa.me/79654846050"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-[#F4C430]/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#F5EDD6]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href="https://t.me/parkisady"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-[#F4C430]/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#F5EDD6]">
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a
            href="https://max.ru/79654846050"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Max Messenger"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-colors hover:bg-[#F4C430]/30"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#F5EDD6]">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.81c-.102.306-.51.612-.816.612-.102 0-.204-.051-.306-.102-1.326-.714-2.754-1.071-4.284-1.071-1.02 0-2.04.153-3.06.459-.204.051-.408.102-.612.102-.612 0-1.122-.51-1.122-1.122 0-.51.357-.969.867-1.071 1.224-.357 2.499-.561 3.876-.561 1.785 0 3.468.408 5.049 1.224.51.255.816.765.714 1.326zm1.326-3.06c-.153.357-.612.765-1.02.765-.153 0-.306-.051-.459-.102-1.581-.867-3.315-1.326-5.151-1.326-1.224 0-2.448.204-3.621.612-.153.051-.357.102-.51.102-.765 0-1.377-.612-1.377-1.377 0-.612.408-1.173.969-1.326 1.377-.459 2.805-.714 4.284-.714 2.04 0 4.029.51 5.865 1.479.612.306.918.867.765 1.479zm1.326-3.366c-.153 0-.306-.051-.51-.102-1.887-.969-3.927-1.479-6.069-1.479-1.479 0-2.907.255-4.233.765-.204.051-.408.102-.612.102-.918 0-1.683-.765-1.683-1.683 0-.714.459-1.377 1.173-1.581C9.042 5.097 10.573 4.8 12.104 4.8c2.448 0 4.794.612 6.987 1.785.612.306.969.918.867 1.632-.051.867-.714 1.479-1.581 1.479z" />
            </svg>
          </a>
        </nav>
      </header>

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
