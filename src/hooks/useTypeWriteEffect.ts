import { useRef } from 'react'

export const useTypeWriteEffect = (text: string, delay: number = 500) => {
  const displayedText = useRef('')
  const currentIndex = useRef(0)
  const interval = setInterval(() => {
    if (currentIndex.current < text.length) {
      console.log('text', currentIndex.current)
      displayedText.current += text[currentIndex.current]
      currentIndex.current += 1
    } else {
      clearInterval(interval)
    }
  }, delay)
  console.log('displayedText', displayedText.current)

  return displayedText.current
}
