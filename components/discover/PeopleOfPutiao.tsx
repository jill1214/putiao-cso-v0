import { SectionLabel } from '@/components/site-header'
import { ImagePlaceholder } from './ImagePlaceholder'
import { discoverPutiao } from '@/data/discover-putiao'

export function PeopleOfPutiao() {
  const { heading, copy, gallery } = discoverPutiao.people
  const [portrait1, portrait2, life1, life2] = gallery

  return (
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div>
          <SectionLabel>Community life</SectionLabel>
          <h2 className="max-w-md text-3xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-4xl">{heading}</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#66736d]">{copy}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ImagePlaceholder label={portrait1.label} aspectRatio={portrait1.aspectRatio} className="rounded-[24px]" />
          <ImagePlaceholder label={portrait2.label} aspectRatio={portrait2.aspectRatio} className="rounded-[24px] sm:mt-8" />
          <ImagePlaceholder label={life1.label} aspectRatio={life1.aspectRatio} className="rounded-[24px]" />
          <ImagePlaceholder label={life2.label} aspectRatio={life2.aspectRatio} className="rounded-[24px] sm:-mt-8" />
        </div>
      </div>
    </section>
  )
}
