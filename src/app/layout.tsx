import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import Thinker from '@/components/Thinker'

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
          <div className="absolute right-0 top-0 h-full w-1/2">
            <div className="absolute right-0 top-0 h-[calc(100%-4rem)] w-full">
              {children}
            </div>
            <footer className="absolute bottom-0 right-0 h-16 w-full">
              <a className="text-2xl hover:bg-light hover:text-dark" href="/">
                cd~
              </a>
            </footer>
          </div>
          <Thinker />
        </main>
      </body>
    </html>
  )
}
