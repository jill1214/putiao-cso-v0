import { ImageIcon } from 'lucide-react'

export function ImagePlaceholder({
  label,
  caption,
  aspectRatio = '4/3',
  className = '',
}: {
  label: string
  caption?: string
  aspectRatio?: string
  className?: string
}) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[20px] border border-[#dfe9e2] bg-[#eff8f2] p-6 text-center ${className}`}
      style={{ aspectRatio }}
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-[#0b6b3a]" aria-hidden="true">
        <ImageIcon className="size-5" strokeWidth={1.7} />
      </span>
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0b6b3a]">{label}</p>
        {caption && <p className="mt-1 max-w-[220px] text-[11px] leading-5 text-[#66736d]">{caption}</p>}
      </div>
    </div>
  )
}
