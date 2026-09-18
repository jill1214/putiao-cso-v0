import { SectionLabel } from '@/components/site-header'
import { ImagePlaceholder } from './ImagePlaceholder'
import { discoverPutiao } from '@/data/discover-putiao'

export function StewardshipStory() {
  const { heading, copy, images, caption } = discoverPutiao.caringForHome

  return (
    <section className="bg-[#eff8f2]">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Environmental stewardship</SectionLabel>
          </div>
          <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-4xl">{heading}</h2>
          <p className="mt-5 text-sm leading-7 text-[#66736d]">{copy}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {images.map((image) => (
            <ImagePlaceholder key={image.label} label={image.label} aspectRatio={image.aspectRatio} className="rounded-[20px]" />
          ))}
        </div>
        <p className="mt-6 text-center text-xs font-semibold text-[#45554e]">
          {caption.title} <span className="text-[#8ea495]">&middot;</span> {caption.date}
        </p>
      </div>
    </section>
  )
}
