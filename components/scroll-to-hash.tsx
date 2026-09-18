'use client'

import { useEffect } from 'react'

export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const target = document.getElementById(hash)
    if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [])

  return null
}
