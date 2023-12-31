import { NavBar } from "@/components/NavBar"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Domine, Inter, Lato } from "next/font/google"
import "../styles/globals.scss"

const inter = Inter({ subsets: ["latin"] })
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "700", "400", "300", "900"]
})
const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
  weight: ["700", "400", "500", "600"]
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "container bg-[#dce9e2]",
          lato.variable,
          "font-lato",
          domine.variable,
          "font-domine",
          inter.className
        )}
      >
        <NavBar />
        <div className="mt-[80px]"> {children}</div>
      </body>
    </html>
  )
}
