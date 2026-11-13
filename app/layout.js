import { Open_Sans } from "next/font/google"
import Script from "next/script"
import "@/app/styles/global.scss"

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-NGQQJDQS"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PLKDKQ9D"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
