'use client'

import { useState } from 'react'

const contactInfo = [
  {
    label: 'EMAIL',
    value: 'allenwu221@gmail.com',
    href: 'mailto:allenwu221@gmail.com',
  },
  {
    label: 'GITHUB',
    value: 'github.com/YiHeng0221',
    href: 'https://github.com/YiHeng0221',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/allenwu221',
    href: 'https://www.linkedin.com/in/allenwu221/',
  },
]

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-5 lg:px-10">
      <h1 className="mb-6 text-4xl font-bold lg:text-6xl">CONTACT ME</h1>
      <div className="flex w-full flex-col gap-4 overflow-auto py-4">
        <pre className="text-xs text-gray-400">{'> open ~/contacts.cfg'}</pre>
        <div className="border-2 border-gray-300 p-6">
          <pre className="mb-4 text-xs leading-tight text-gray-400">
            {`╔═══════════════════════════════════╗
║  > ESTABLISHING CONNECTION...     ║
║  > STATUS: ONLINE                 ║
║  > READY TO RECEIVE MESSAGES      ║
╚═══════════════════════════════════╝`}
          </pre>
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.label === 'EMAIL' ? undefined : '_blank'}
                rel={info.label === 'EMAIL' ? undefined : 'noopener noreferrer'}
                className="flex cursor-pointer flex-col items-start gap-1 border-l-4 border-gray-300 py-2 pl-4 transition-all hover:border-white hover:bg-white/5 sm:flex-row sm:items-center sm:gap-4"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="text-xs text-gray-500">
                  {String(index).padStart(2, '0')}
                </span>
                <span className="w-24 text-sm text-gray-400">
                  _{info.label}:
                </span>
                <span className="text-base">
                  {hoveredIndex === index ? `> ${info.value}` : info.value}
                </span>
              </a>
            ))}
          </div>
        </div>
        <pre className="mt-4 text-xs text-gray-400">
          {`> // Feel free to reach out!
> // I'm always open to new opportunities.`}
        </pre>
      </div>
    </div>
  )
}
