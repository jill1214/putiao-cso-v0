import { SectionLabel } from '@/components/site-header'
import { DiscoverImage } from './DiscoverImage'
import { discoverPutiao } from '@/data/discover-putiao'

export function CultureHeritage() {
  const { heading, copy, blocks, footnote } = discoverPutiao.culture

  return (
    <section className="bg-[#f5f8f5]">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Living heritage</SectionLabel>
          </div>
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-4xl">{heading}</h2>
          <p className="mt-5 text-sm leading-7 text-[#66736d]">{copy}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {blocks.map((block) => (
            <div key={block.title}>
              <DiscoverImage image={block.image} className="rounded-[20px]" sizes="(min-width: 640px) 33vw, 100vw" />
              <h3 className="mt-5 text-lg font-extrabold tracking-tight text-[#10221b]">{block.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#66736d]">{block.copy}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xs font-semibold italic text-[#8ea495]">{footnote}</p>
      </div>
    </section>
  )
}
