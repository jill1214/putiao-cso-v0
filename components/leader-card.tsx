'use client'

import Image from 'next/image'

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import type { Leader } from '@/lib/leadership-data'

export function LeaderCard({ leader }: { leader: Leader }) {
  const { role, name, image, imagePosition, shortBio, fullBio } = leader
  const initial = name.split(' ').filter(Boolean).slice(-1)[0]?.[0] ?? 'P'

  return (
    <article className="rounded-[20px] border border-[#dfe9e2] bg-white p-5">
      {image ? (
        <div className="mb-5 size-16 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={`${name}, ${role} of Putiao, My Place, My Home, CSO, Inc.`}
            width={64}
            height={64}
            className="size-16 object-cover"
            style={{ objectPosition: imagePosition ?? 'center' }}
          />
        </div>
      ) : (
        <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-[#e4f3e8] text-xl font-extrabold text-[#0b6b3a]">
          {initial}
        </div>
      )}
      <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0b6b3a]">{role}</p>
      <h3 className="mt-2 text-base font-extrabold leading-snug text-[#10221b]">{name}</h3>
      <p className="mt-3 border-t border-[#edf2ee] pt-3 text-xs leading-5 text-[#66736d]">{shortBio}</p>
      {fullBio && fullBio.length > 0 && (
        <Dialog>
          <DialogTrigger className="mt-3 inline-block cursor-pointer border-none bg-transparent p-0 text-xs font-extrabold text-[#0b6b3a] outline-none hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:ring-[#0b6b3a]/30 focus-visible:ring-offset-2">
            See more
          </DialogTrigger>
          <DialogContent aria-describedby={undefined} className="p-0">
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                {image && (
                  <div className="size-20 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={image}
                      alt={`${name}, ${role} of Putiao, My Place, My Home, CSO, Inc.`}
                      width={80}
                      height={80}
                      className="size-20 object-cover"
                      style={{ objectPosition: imagePosition ?? 'center' }}
                    />
                  </div>
                )}
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#0b6b3a]">{role}</p>
                  <DialogTitle className="mt-1">{name}</DialogTitle>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4 border-t border-[#edf2ee] pt-6 text-sm leading-7 text-[#45554e]">
                {fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </article>
  )
}
