'use client'

import { useEffect, useState } from 'react'

export default function TypeWriter({
  text,
  delay,
}: {
  text: string
  delay: number
}) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    setDisplayedText('')
    let index = 0
    const interval = setInterval(() => {
      index += 1
      setDisplayedText(text.slice(0, index))
      if (index >= text.length) {
        clearInterval(interval)
      }
    }, delay)

    return () => clearInterval(interval)
  }, [text, delay])

  return <span>{displayedText}</span>
}
