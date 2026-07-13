'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCameraContext } from '@/context/CameraContext'

import PropTypes from 'prop-types'

interface Tab {
  name: string
  path: string
}

interface NavbarProps {
  tab: Tab[]
}

const Navbar: React.FC<NavbarProps> = ({ tab }) => {
  const router = useRouter()
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const { setSelectedSection } = useCameraContext()
  const onClick = (path: string) => {
    router.push(path)
  }

  return (
    <>
      {tab &&
        tab.map((item, index) => (
          <div
            key={index}
            className="relative mb-4 h-16 w-full overflow-hidden px-6 py-4 text-3xl font-extrabold hover:cursor-pointer hover:text-[#1b1b1b] lg:mb-8 lg:h-24 lg:px-20 lg:py-6 lg:text-5xl"
            onMouseEnter={() => {
              setHoverIndex(index)
              setSelectedSection(item.path)
            }}
            onMouseLeave={() => {
              setHoverIndex(null)
              setSelectedSection(null)
            }}
          >
            <div
              className={`absolute right-0 top-0 flex h-24 w-full transition-all duration-100 ${hoverIndex === index ? '' : 'invisible translate-x-full'}`}
            >
              <div className="h-0 w-0 rotate-90 border-b-[5rem] border-r-[6rem] border-t-[1rem] border-gray-300 border-b-transparent border-t-transparent"></div>
              <div className="w-[calc(100%+1rem)] -translate-x-4 bg-gray-300"></div>
            </div>
            <div className="absolute" onClick={() => onClick(item.path)}>
              {item.name}
            </div>
          </div>
        ))}
    </>
  )
}
//
Navbar.propTypes = {
  tab: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default Navbar
