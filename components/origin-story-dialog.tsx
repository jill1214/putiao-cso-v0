'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const bodyCopy = 'text-sm leading-7 text-[#55665e] sm:text-[15px] sm:leading-8'

export function OriginStoryDialog() {
  return (
    <Dialog>
      <DialogTrigger className="group inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm font-extrabold text-[#0b6b3a] outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#0b6b3a]/30 focus-visible:ring-offset-4">
        Learn about our story
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        aria-modal="true"
        className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-[1080px] rounded-[24px] p-0 sm:max-h-[calc(100dvh-3rem)] sm:w-[calc(100%-3rem)] sm:rounded-[28px]"
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <header className="bg-[#eff8f2] px-5 pb-9 pt-14 sm:px-10 sm:pb-12 sm:pt-16 lg:px-16 lg:pb-14">
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0b6b3a] sm:text-xs">
              <span className="h-px w-8 bg-[#4daa31]" />
              Our story
            </p>

            <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <DialogTitle className="max-w-md text-4xl leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[56px]">
                  Rooted in Putiao.
                  <br />
                  <span className="text-[#0b6b3a]">Built for its future.</span>
                </DialogTitle>
                <p className="mt-6 max-w-md text-base font-semibold leading-7 text-[#34483f] sm:text-lg sm:leading-8">
                  Putiao, My Place, My Home, CSO, Inc. began with a simple but
                  meaningful idea: that the future of Putiao is something its
                  people can help shape together.
                </p>
              </div>

              <div className={`space-y-5 lg:pt-1 ${bodyCopy}`}>
                <p>
                  The organization was conceptualized by Arch. Levy O. Espinas,
                  now its President, from a deep appreciation for Putiao as more
                  than a place on the map. It is home, a community with its own
                  river, stories, traditions, people, livelihoods, and
                  possibilities worth protecting and developing.
                </p>
                <p>
                  As a community situated along an important passage between
                  Albay and Sorsogon, Putiao is familiar to many as a place they
                  travel through. But for those who call it home, it is much
                  more.
                </p>
              </div>
            </div>
          </header>

          <div className="bg-[#10221b] px-5 py-9 text-white sm:px-10 sm:py-11 lg:px-16">
            <div className="grid gap-4 sm:grid-cols-[150px_1fr] sm:items-start sm:gap-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#8dd86e]">
                Featured quote
              </p>
              <blockquote className="font-serif text-2xl leading-snug tracking-[-0.02em] text-white sm:text-3xl lg:text-[34px]">
                &ldquo;Putiao is not simply a place people pass through. It is a
                community worth discovering.&rdquo;
              </blockquote>
            </div>
          </div>

          <section className="px-5 py-11 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4daa31]">
                  Our beginning
                </p>
                <h2 className="mt-4 max-w-sm text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#10221b] sm:text-4xl">
                  From an idea to a shared purpose
                </h2>
              </div>
              <div className={`space-y-5 ${bodyCopy}`}>
                <p>
                  Established in 2024, Putiao, My Place, My Home became a
                  non-partisan, non-political, community-based civil society
                  organization dedicated to working with the people of Putiao
                  and surrounding communities.
                </p>
                <p>
                  Its purpose reaches across several parts of community life.
                  The organization seeks to help protect and conserve the Putiao
                  River, preserve local culture and heritage, encourage
                  sustainable livelihoods, strengthen community participation,
                  and build a more united and resilient Putiao.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[20px] bg-[#eff8f2] p-6 sm:p-8">
                <p className="text-2xl font-extrabold tracking-[-0.04em] text-[#0b6b3a] sm:text-3xl">
                  My Place
                </p>
                <p className="mt-2 text-base font-semibold text-[#34483f]">
                  speaks of belonging.
                </p>
              </div>
              <div className="rounded-[20px] border border-[#d7e8dc] bg-white p-6 sm:p-8">
                <p className="text-2xl font-extrabold tracking-[-0.04em] text-[#10221b] sm:text-3xl">
                  My Home
                </p>
                <p className="mt-2 text-base font-semibold text-[#34483f]">
                  speaks of responsibility.
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#66736d] sm:text-[15px]">
              Because when a place is truly considered home, caring for it
              becomes something shared.
            </p>
          </section>

          <section className="border-t border-[#dfe9e2] bg-[#fafcfa] px-5 py-11 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4daa31]">
                  The road ahead
                </p>
                <h2 className="mt-4 max-w-sm text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#10221b] sm:text-4xl">
                  Moving forward, together.
                </h2>
              </div>
              <div className={`space-y-5 ${bodyCopy}`}>
                <p>
                  PMPMH is still a young organization, but its vision looks
                  beyond the present. It imagines a Putiao where the river
                  remains healthy, local identity is valued, livelihoods can
                  grow responsibly, and residents have opportunities to take
                  part in shaping their community.
                </p>
                <p>
                  This story is therefore not only about how an organization
                  began.
                </p>
                <p className="border-l-2 border-[#4daa31] pl-5 text-lg font-extrabold leading-8 tracking-[-0.02em] text-[#10221b] sm:text-xl">
                  It is about what Putiao can become when people who care about
                  their home choose to work together.
                </p>
              </div>
            </div>

            <p className="mt-11 text-center font-serif text-2xl italic leading-snug text-[#0b6b3a] sm:text-3xl">
              Rooted in place. Moving forward together.
            </p>
          </section>

          <footer className="flex items-center justify-center gap-3 border-t border-[#dfe9e2] bg-white px-5 py-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cso_logo-Dr5hyzQPKbFCclISUSc4rVP6BZ720g.png"
              alt="Putiao, My Place, My Home, CSO, Inc. logo"
              width={44}
              height={44}
              className="size-11 rounded-full object-cover"
            />
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0b6b3a]">
                PMPMH
              </p>
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a8981]">
                Est. 2024
              </p>
            </div>
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  )
}
