import Image from 'next/image'
import TypeWriter from '@/components/TypeWriter'
export default function About() {
  const name = 'ALLEN WU'
  const location = 'TAIPEI, TAIWAN'
  const title = 'SENIOR FRONT-END ENGINEER · 5 YRS'
  const stack = 'REACT · NEXT.JS · VUE · SVELTE · NODE.JS'
  const description =
    'Expert in building scalable e-commerce and AI-driven product systems. Led end-to-end delivery of complex features, driving frontend architecture, API design collaboration, testing strategy, and engineering efficiency. Brings a strong blend of engineering execution, product thinking, and UI/UX awareness to align engineering, product, and design toward high-impact outcomes.'
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-10">
      <h1 className="mb-6 text-6xl font-bold">ABOUT ME</h1>
      <div className="flex w-full flex-col items-center justify-center border-2 border-gray-300 p-6">
        <pre className="mb-4 text-xs leading-tight text-gray-400">
          {`
    ╔══════════════════════════════╗
    ║     > PROFILE_LOADED...     ║
    ╚══════════════════════════════╝
          `}
        </pre>
        <div className="text-2xl">
          <div className="flex gap-6">
            <Image
              className="border-2 border-gray-300"
              src="/pictures/selfie.png"
              width={200}
              height={300}
              alt="Selfie"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl">
                _NAME: <TypeWriter text={name} delay={100} />
              </p>
              <p className="text-xl">
                _LOCATION: <TypeWriter text={location} delay={80} />
              </p>
              <p className="text-xl">
                _TITLE: <TypeWriter text={title} delay={60} />
              </p>
              <p className="text-xl">
                _STACK: <TypeWriter text={stack} delay={40} />
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col border-t border-gray-300 pt-4">
            <p className="text-sm text-gray-400">{'// DESCRIPTION'}</p>
            {/* Reserve the full text height up front so the typing animation
                never reflows the layout (keeps the photo/card position fixed). */}
            <div className="relative text-base leading-relaxed">
              <p className="invisible" aria-hidden="true">
                {description}
              </p>
              <p className="absolute inset-0">
                <TypeWriter text={description} delay={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
