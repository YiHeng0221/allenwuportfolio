'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <footer className="absolute bottom-0 right-0 flex h-16 w-full items-center">
      {pathname !== '/' && (
        <button
          className="text-2xl hover:bg-light hover:text-dark"
          onClick={() => router.push('/')}
        >
          cd~
        </button>
      )}
    </footer>
  )
}
