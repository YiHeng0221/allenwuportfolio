import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Thinker from '@/components/Thinker'
import localFont from 'next/font/local'

const font = localFont({ src: '../../public/font/Cubic_11_1.300_R.ttf' })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full bg-[url('/noise.svg')] opacity-10"></div>
        <main
          className={`relative flex min-h-screen flex-row items-center justify-between border-2 border-gray-300 ${font.className}`}
        >
          <div className="relative flex min-h-screen flex-1 items-center justify-center">
            <div className="absolute left-1/4 top-1/2 -z-20 flex h-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center border-8 border-gray-300"></div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2">{children}</div>
          <Thinker />
        </main>
      </body>
    </html>
  )
}
