'use client'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

interface Tab {
  name: string
  path: string
}

interface NavbarProps {
  tab: Tab[]
}

const Navbar: React.FC<NavbarProps> = ({ tab }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <>
      {tab &&
        tab.map((item, index) => (
          <div
            key={index}
            className="relative mb-8 h-24 w-full overflow-hidden px-20 py-6 text-5xl font-extrabold hover:cursor-pointer hover:text-[#1b1b1b]"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div
              className={`absolute right-0 top-0 flex h-24 w-full transition-all duration-100 ${hoverIndex === index ? '' : 'invisible translate-x-full'}`}
            >
              <div className="h-0 w-0 rotate-90 border-b-[5rem] border-r-[6rem] border-t-[1rem] border-gray-300 border-b-transparent border-t-transparent"></div>
              <div className="w-[calc(100%+1rem)] -translate-x-4 bg-gray-300"></div>
            </div>
            <a className="absolute" href={item.path}>
              {item.name}
            </a>
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
    }).
  ).isRequired,
}

export default Navbar
