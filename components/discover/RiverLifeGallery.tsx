import { SectionLabel } from '@/components/site-header'
import { DiscoverImage } from './DiscoverImage'
import { discoverPutiao } from '@/data/discover-putiao'

const areaClassByIndex = [
  "lg:col-span-1 lg:[grid-area:large]",
  "lg:col-span-1 lg:[grid-area:med1]",
  "lg:col-span-1 lg:[grid-area:med2]",
  "lg:col-span-1 lg:[grid-area:small1]",
  "lg:col-span-1 lg:[grid-area:small2]",
  "lg:col-span-1 lg:[grid-area:small3]",
  "col-span-2 lg:col-span-3 lg:[grid-area:wide]",
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
        className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:grid-rows-[repeat(3,minmax(0,1fr))_auto] lg:gap-5 lg:[grid-template-areas:'large_large_med1'_'large_large_med2'_'small1_small2_small3'_'wide_wide_wide']"
      >
        {gallery.map((item, index) => (
          <DiscoverImage
            key={item.label}
            image={item}
            className={`rounded-[18px] ${index === 0 ? 'col-span-2 sm:col-span-1' : ''} ${areaClassByIndex[index]}`}
            sizes={index === 0 ? '(min-width: 1024px) 66vw, 100vw' : index === 6 ? '(min-width: 1024px) 100vw, 100vw' : '(min-width: 1024px) 33vw, 50vw'}
          />
        ))}
      </div>
    </section>
  )
}
