import type { Metadata, Viewport } from 'next'
import { Montserrat, Manrope } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], variable: '--font-montserrat', weight: ['600', '700', '800'] })
const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Ландшафтный дизайн и инженерия в Сочи — Проект участка под ключ',
  description:
    'Проектирование участков со сложным рельефом в Сочи. Террасирование склонов, дренажные системы, подпорные стены, 3D-визуализация. Срок — 3-4 недели.',
}

export const viewport: Viewport = {
  themeColor: '#2d6a4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${montserrat.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
