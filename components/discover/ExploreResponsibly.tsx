import { HeartHandshake, Leaf, Users, Waves } from 'lucide-react'
import { PillarIcon, SectionLabel } from '@/components/site-header'
import { discoverPutiao } from '@/data/discover-putiao'

const icons = [Leaf, HeartHandshake, Waves, Users]

export function ExploreResponsibly() {
  const { heading, copy, principles } = discoverPutiao.exploreResponsibly

  return (
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-xl text-center">
        <div className="flex justify-center">
          <SectionLabel>Responsible tourism</SectionLabel>
        </div>
        <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-4xl">{heading}</h2>
        <p className="mt-5 text-sm leading-7 text-[#66736d]">{copy}</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <div key={principle} className="flex flex-col items-center gap-4 rounded-[20px] border border-[#dfe9e2] bg-white p-6 text-center">
            <PillarIcon icon={icons[index]} />
            <h3 className="font-extrabold text-[#10221b]">{principle}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
