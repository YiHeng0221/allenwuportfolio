import Image from 'next/image'
import { type SkillItem } from '../constants/constants'

const SkillItem = ({ item }: { item: SkillItem }) => {
  return (
    <div className="flex h-16 w-full min-w-0 items-center gap-2 border border-light px-3 sm:w-auto sm:min-w-96 sm:px-4">
      <Image
        src={item.icon}
        alt={item.name}
        width={32}
        height={32}
        className="mr-1 shrink-0"
      />
      <div className="text-l w-16 leading-tight text-light sm:w-20">
        {item.name}
      </div>
      <div className="precentage-bar flex w-36 border border-light px-2 py-2 sm:w-44">
        {Array.from({ length: item.percentage / 10 }).map((_, i) => (
          <div
            key={i}
            className={`precentage-bar-block bg-light animate-charging-${i + 1} mr-1 h-6 w-3`}
          ></div>
        ))}
      </div>

      <div className="text-l text-light">{item.percentage}%</div>
    </div>
  )
}

export default SkillItem
