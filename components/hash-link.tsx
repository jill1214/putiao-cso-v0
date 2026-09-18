'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { MouseEvent, ReactNode } from 'react'

export function HashLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  const pathname = usePathname()
  const [path, hash] = href.split('#')
  const targetPath = path || '/'
  const isSamePageHash = Boolean(hash) && pathname === targetPath

  function handleSamePageClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(hash)
    if (target) {
      event.preventDefault()
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
      window.history.pushState(null, '', href)
    }
    onClick?.()
  }

  if (isSamePageHash) {
    return (
      <a href={href} onClick={handleSamePageClick} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={onClick} className={className} scroll={!hash}>
      {children}
    </Link>
  )
}
