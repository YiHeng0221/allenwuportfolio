import SkillItem from './components/SkillItem'
import { skills, skillTypes } from './constants/constants'

export default function Skills() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col gap-4 overflow-auto py-10">
        {Object.entries(skillTypes).map(([skillType, displayName]) => (
          <div key={skillType} className="flex w-full flex-col gap-4">
            <h2 className="text-2xl font-bold">{displayName}</h2>
            <div className="flex w-full flex-wrap gap-2">
              {skills
                .filter((skill) => skill.type === skillType)
                .sort((a, b) => b.percentage - a.percentage)
                .map((skill) => (
                  <SkillItem key={skill.name} item={skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
