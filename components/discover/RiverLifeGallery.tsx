import { SectionLabel } from '@/components/site-header'
import { ImagePlaceholder } from './ImagePlaceholder'
import { discoverPutiao } from '@/data/discover-putiao'

const areaClassByIndex = [
  "lg:col-span-1 lg:[grid-area:large]",
  "lg:col-span-1 lg:[grid-area:med1]",
  "lg:col-span-1 lg:[grid-area:med2]",
  "lg:col-span-1 lg:[grid-area:small1]",
  "lg:col-span-1 lg:[grid-area:small2]",
  "lg:col-span-1 lg:[grid-area:small3]",
]

export function RiverLifeGallery() {
  const { heading, copy, gallery } = discoverPutiao.riverLife

  return (
    <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-xl text-center">
        <div className="flex justify-center">
          <SectionLabel>Everyday scenes</SectionLabel>
        </div>
        <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-4xl">{heading}</h2>
        <p className="mt-5 text-sm leading-7 text-[#66736d]">{copy}</p>
      </div>
      <div
        className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5 lg:[grid-template-areas:'large_large_med1'_'large_large_med2'_'small1_small2_small3']"
      >
        {gallery.map((item, index) => (
          <ImagePlaceholder
            key={item.label}
            label={item.label}
            caption={item.caption}
            aspectRatio={item.aspectRatio}
            className={`rounded-[18px] ${index === 0 ? 'col-span-2 sm:col-span-1' : ''} ${areaClassByIndex[index]}`}
          />
        ))}
      </div>
    </section>
  )
}
