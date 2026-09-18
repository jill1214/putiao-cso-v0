'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

type NavLink = { label: string; href: string }

export function MobileNav({ links, contactHref = '#contact-form' }: { links: NavLink[]; contactHref?: string }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div className="relative lg:hidden" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="grid size-11 cursor-pointer place-items-center rounded-full border border-[#dfe9e2] text-[#0b6b3a]"
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-2xl border border-[#dfe9e2] bg-[#fafcfa] p-3 shadow-xl" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-semibold text-[#45554e] hover:bg-[#eff8f2]">
              {link.label}
            </Link>
          ))}
          <Link href={contactHref} onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#0b6b3a] px-4 py-3 text-center font-bold text-white">
            Get involved
          </Link>
        </nav>
      )}
    </div>
  )
}
