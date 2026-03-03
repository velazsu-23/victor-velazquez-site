import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Victor Velazquez — Growth Marketer, Marathon Runner, Builder',
  description:
    'Director of Growth at AWeber. TEDx speaker. 4× Boston Marathon finisher. Based in Hopkinton, MA.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-bg text-fg antialiased">
        <Nav />
        {children}
      </body>
    </html>
  )
}
