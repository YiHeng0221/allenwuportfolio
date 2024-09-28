import Image from 'next/image'
import { type SkillItem } from '../constants/constants'

const SkillItem = ({ item }: { item: SkillItem }) => {
  return (
    <div className="flex h-16 min-w-96 items-center gap-2 border border-light px-4">
      <Image
        src={item.icon}
        alt={item.name}
        width={32}
        height={32}
        className="mr-1"
      />
      <div className="text-l w-20 leading-tight text-light">{item.name}</div>
      <div className="precentage-bar flex w-44 border border-light px-2 py-2">
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
