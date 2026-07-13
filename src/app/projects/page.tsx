'use client'

const projects = [
  {
    name: '2ENTER_STUDIO',
    description:
      'Interactive creative studio site featuring an ASCII-art WebGL hero.',
    tech: ['Next.js', 'WebGL', 'Creative'],
    status: 'LIVE',
    url: 'https://2enter.art/zh',
    image: '/pictures/projects/2enter.png',
  },
  {
    name: 'LEYISHENG_HEALTH',
    description: 'Brand website for 樂頤生 health management studio.',
    tech: ['Web', 'Responsive', 'Branding'],
    status: 'LIVE',
    url: 'https://leyisheng.com.tw/',
    image: '/pictures/projects/leyisheng.png',
  },
  {
    name: 'ALLEN_MOVIES',
    description: 'Movie discovery app with search and a personal watchlist.',
    tech: ['React', 'TMDB', 'Vercel'],
    status: 'LIVE',
    url: 'https://movie-to-watch-u4j2.vercel.app/',
    image: '/pictures/projects/movie-to-watch.png',
  },
]

const statusColor = (status: string) => {
  if (status === 'ACTIVE') return 'text-green-400'
  if (status === 'LIVE') return 'text-cyan-400'
  return 'text-gray-400'
}

export default function Projects() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-10">
      <h1 className="mb-6 text-6xl font-bold">PROJECTS</h1>
      <div className="terminal-scroll flex w-full flex-col gap-4 overflow-auto py-4">
        <pre className="text-xs text-gray-400">{'> ls ~/projects/'}</pre>
        {projects.map((project, index) => {
          const CardTag = project.url ? 'a' : 'div'
          const linkProps = project.url
            ? {
                href: project.url,
                target: '_blank',
                rel: 'noopener noreferrer',
              }
            : {}
          return (
            <CardTag
              key={index}
              {...linkProps}
              className="block border-2 border-gray-300 p-4 transition-all hover:border-white hover:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">
                  {'> '} {project.name}
                </h2>
                <span className={`text-xs ${statusColor(project.status)}`}>
                  [{project.status}]
                </span>
              </div>
              {project.image && (
                <div className="mt-3 overflow-hidden border border-gray-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="aspect-[16/10] w-full object-cover object-top grayscale transition-all duration-300 hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              )}
              <pre className="mt-2 text-xs text-gray-400">{'  '}README.md</pre>
              <p className="mt-1 pl-2 text-sm">{project.description}</p>
              {project.url && (
                <pre className="mt-1 pl-2 text-xs text-cyan-400">
                  {'  '}↳ {project.url}
                </pre>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-gray-300 px-2 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardTag>
          )
        })}
        <pre className="mt-2 text-xs text-gray-400">
          {`> ${projects.length} directories found.`}
        </pre>
      </div>
    </div>
  )
}
