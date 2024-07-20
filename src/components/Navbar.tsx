'use client'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

interface Tab {
  name: string;
  path: string;
}

interface NavbarProps {
  tab: Tab[];
}

const Navbar: React.FC<NavbarProps> = ({ tab }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <>
      {tab && tab.map((item, index) => (
        <div
          key={index}
          className='relative w-full text-5xl h-24 hover:cursor-pointer font-extrabold hover:text-[#1b1b1b] overflow-hidden mb-8 py-6 px-20'
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div
            className={`w-full h-24 absolute right-0 top-0 transition-all duration-100 flex ${hoverIndex === index ? '' : 'invisible translate-x-full'}`}  
          >
            <div className="w-0 h-0 border-t-[1rem] border-t-transparent border-r-[6rem] border-b-[5rem] border-b-transparent border-gray-300 rotate-90"></div>
            <div className='bg-gray-300 -translate-x-4 w-[calc(100%+1rem)] '></div>
          </div>
          <a className='absolute' href={item.path}>{item.name}</a>
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
    })
  ).isRequired,
}

export default Navbar