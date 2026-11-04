import { Open_Sans } from "next/font/google"
import "@/app/styles/global.scss"

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}