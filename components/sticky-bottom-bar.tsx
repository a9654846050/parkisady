"use client"

import { Phone, Send, MessageCircle } from "lucide-react"

export function StickyBottomBar() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-[#1A4D4D]/20 bg-[#1A4D4D]/95 backdrop-blur-md safe-bottom">
      <nav
        aria-label="Быстрая связь"
        className="flex items-stretch justify-around px-1 py-2"
      >
        {/* Позвонить */}
        <a
          href="tel:+78622000000"
          className="flex flex-1 flex-col items-center gap-1 py-1 text-[#E8EEF0] transition-colors hover:text-[#F4C430]"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px] font-medium leading-none">Позвонить</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/78622000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-1 text-[#E8EEF0] transition-colors hover:text-[#F4C430]"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] font-medium leading-none">WhatsApp</span>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-1 text-[#E8EEF0] transition-colors hover:text-[#F4C430]"
        >
          <Send className="h-5 w-5" />
          <span className="text-[10px] font-medium leading-none">Telegram</span>
        </a>

        {/* MAX Messenger */}
        <a
          href="https://vk.me/example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-1 text-[#E8EEF0] transition-colors hover:text-[#F4C430]"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.49 2.27 4.675 2.853 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.744-.576.744z" />
          </svg>
          <span className="text-[10px] font-medium leading-none">MAX</span>
        </a>

        {/* Заявка */}
        <button
          onClick={scrollToForm}
          className="flex flex-1 flex-col items-center gap-1 py-1 text-[#1C1C1C] transition-colors"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F4C430]">
            <svg viewBox="0 0 16 16" className="h-3 w-3 fill-[#1C1C1C]">
              <path d="M14 1a1 1 0 011 1v8a1 1 0 01-1 1h-2.5a.5.5 0 00-.354.146l-2.292 2.293a.5.5 0 01-.708 0L5.854 11.146A.5.5 0 005.5 11H2a1 1 0 01-1-1V2a1 1 0 011-1h12z"/>
            </svg>
          </span>
          <span className="text-[10px] font-semibold leading-none text-[#F4C430]">Заявка</span>
        </button>
      </nav>
    </div>
  )
}
