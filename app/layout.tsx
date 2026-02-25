import type { Metadata, Viewport } from 'next'
import { Montserrat, Manrope } from 'next/font/google'
import Script from 'next/script'

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
      <body className={`${manrope.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106993407', 'ym');
            ym(106993407, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106993407" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
