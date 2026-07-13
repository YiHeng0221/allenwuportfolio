'use client'

import { useEffect, useState } from 'react'

export default function RandomNumbers({ font }: { font: string }) {
  const [numbers, setNumbers] = useState<number[][]>([])
  // 初始化隨機數字矩陣
  useEffect(() => {
    const initialNumbers = Array.from({ length: 90 }, () =>
      Array.from({ length: 90 }, () => Math.floor(Math.random() * 10))
    )
    setNumbers(initialNumbers)
  }, [])

  // 每秒更新隨機數字
  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers]
        for (let i = 0; i < newNumbers.length; i++) {
          for (let j = 0; j < newNumbers[i].length; j++) {
            newNumbers[i][j] = Math.floor(Math.random() * 10)
          }
        }
        return newNumbers
      })
    }, 100)

    return () => clearInterval(interval) // 清除 interval
  }, [])

  return (
    <div className={`grid grid-cols-full leading-[-2rem] tracking-[-2rem]`}>
      {numbers.map((row, rowIndex) =>
        row.map((num, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`flex items-center justify-center font-bold ${font}`}
          >
            {num}
          </div>
        ))
      )}
    </div>
  )
}
