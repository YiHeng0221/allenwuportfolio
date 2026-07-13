'use client'

const experiences = [
  {
    year: 'DEC 2024 - MAY 2026',
    role: 'SENIOR FRONTEND DEVELOPER',
    company: 'SHEPHERDTECH GROUP',
    description:
      'Led end-to-end delivery of core commerce systems across a multi-brand platform.',
    highlights: [
      'Led core order, payment & logistics systems, refactoring architecture for multi-brand extensibility.',
      'Established frontend standards, a style guide, and AI-assisted workflows that lifted team velocity & code consistency.',
      'Enhanced release stability with E2E testing on critical transaction paths and automated Merge Request processes.',
      'Unified diverse data models and workflows into one multi-brand structure without sacrificing stability or performance.',
    ],
    stack: ['React', 'Next.js', 'Vue', 'E2E Testing'],
  },
  {
    year: 'MAY 2021 - OCT 2024',
    role: 'FRONTEND DEVELOPER — PRODUCT & UI/UX',
    company: 'GLIACLOUD CO. LTD.',
    description:
      'Owned UI/UX design in Figma and shipped responsive, animated interfaces end-to-end.',
    highlights: [
      'Bridged design & engineering — owned Figma UI/UX and implemented responsive, animated interfaces in React & Vue.js.',
      'Built a robust testing culture with Cypress E2E; optimized CI via YAML & Webpack configuration.',
      'Developed Dockerized Node.js cloud functions for automated media recording; integrated complex Python back-end APIs.',
      'Balanced high-fidelity UI/UX with complex frontend architecture and DevOps for cross-team alignment.',
    ],
    stack: ['React', 'Vue.js', 'Figma', 'Cypress', 'Docker', 'Node.js'],
  },
  {
    year: 'MAY 2024 - PRESENT',
    role: 'FRONTEND / FULL-STACK CONTRIBUTOR',
    company: '2ENTER STUDIO (SIDE PROJECT)',
    description:
      'Official website development plus AR-related product work as a side project.',
    highlights: [
      'Responsible for official website development, maintenance and refactoring.',
      'Improved SEO and UI/UX quality across web properties.',
      'Built and maintained mobile app features with SvelteKit, Node.js and Supabase.',
      'AR-related product development.',
    ],
    stack: ['SvelteKit', 'Node.js', 'Supabase', 'AR'],
  },
]

export default function Experience() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-5 lg:px-10">
      <h1 className="mb-6 text-4xl font-bold lg:text-6xl">EXPERIENCE</h1>
      <div className="terminal-scroll flex w-full flex-col gap-2 overflow-auto py-4">
        <pre className="text-xs text-gray-400">{'> cat ~/experience.log'}</pre>
        <pre className="mb-2 text-xs text-gray-400">
          {
            '> Senior Frontend Engineer · 5 years · React / Vue / Svelte / Node.js'
          }
        </pre>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group border-l-4 border-gray-300 py-4 pl-6 transition-all hover:border-white hover:bg-white/5"
          >
            <p className="text-xs text-gray-500">
              {'// '}
              {exp.year}
            </p>
            <h2 className="mt-1 text-2xl font-bold">{exp.role}</h2>
            <p className="text-lg text-gray-400">@ {exp.company}</p>
            <p className="mt-2 text-sm leading-relaxed">{exp.description}</p>
            <ul className="mt-3 flex flex-col gap-1">
              {exp.highlights.map((item) => (
                <li
                  key={item}
                  className="pl-4 text-sm leading-relaxed text-gray-300 before:mr-2 before:text-gray-500 before:content-['▹']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-gray-300 px-2 py-1 text-xs"
                >
                  [{tech}]
                </span>
              ))}
            </div>
          </div>
        ))}
        <pre className="mt-4 text-xs text-gray-400">
          {`> EOF — ${experiences.length} records found.`}
        </pre>
      </div>
    </div>
  )
}
