import { ArrowLink, SectionLabel } from '@/components/site-header'
import { DiscoverImage } from './DiscoverImage'
import { discoverPutiao } from '@/data/discover-putiao'

export function RiverCruiseStory() {
  const { heading, copy, image, badge, supportingText, cta } = discoverPutiao.riverCruise

  return (
    <section className="bg-[#f5f8f5]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div className="lg:order-2">
          <DiscoverImage image={image} className="min-h-[260px] rounded-[28px] lg:min-h-[380px]" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="lg:order-1">
          <SectionLabel>Responsible eco-tourism</SectionLabel>
          <h2 className="max-w-md text-3xl font-extrabold tracking-[-0.05em] text-[#10221b] sm:text-4xl">{heading}</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#66736d]">{copy}</p>
          <div className="mt-6 inline-flex flex-col gap-1 rounded-2xl border border-[#c9dbce] bg-white px-4 py-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0b6b3a]">{badge.title}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4daa31]">{badge.status}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#66736d]">{supportingText}</p>
          <div className="mt-6">
            <ArrowLink href={cta.href}>{cta.label}</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  )
}
