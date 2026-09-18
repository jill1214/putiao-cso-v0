import { SectionLabel } from '@/components/site-header'
import { ImagePlaceholder } from './ImagePlaceholder'
import { discoverPutiao } from '@/data/discover-putiao'

export function RiverStory() {
  const { heading, copy, image, indicators } = discoverPutiao.riverStory

  return (
    <section id="river-story" className="scroll-mt-28 border-y border-[#e5eee7] bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <ImagePlaceholder label={image.label} caption={image.caption} aspectRatio={image.aspectRatio} className="min-h-[280px] rounded-[28px] lg:min-h-[420px]" />
        <div>
          <SectionLabel>Place identity</SectionLabel>
          <h2 className="max-w-md text-3xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-4xl">{heading}</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#66736d]">{copy}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#edf2ee] pt-6">
            {indicators.map((indicator) => (
              <span key={indicator} className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0b6b3a]">
                <span className="size-1.5 rounded-full bg-[#4daa31]" aria-hidden="true" />
                {indicator}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
