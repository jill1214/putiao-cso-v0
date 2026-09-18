import { ButtonLink } from '@/components/site-header'
import { discoverPutiao } from '@/data/discover-putiao'

export function DiscoverCTA() {
  const { heading, copy, primary, secondary } = discoverPutiao.cta

  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-20 sm:px-8 lg:pb-28">
      <div className="relative overflow-hidden rounded-[28px] bg-[#0b6b3a] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div className="absolute -left-10 -top-20 size-64 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute -bottom-28 right-10 size-72 rounded-full border border-white/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
            {heading.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/75">{copy}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
            <ButtonLink href={secondary.href} secondary>{secondary.label}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
