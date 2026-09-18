import Image from 'next/image'
import { ImagePlaceholder } from './ImagePlaceholder'
import type { PlaceholderImage } from '@/data/discover-putiao'

export function DiscoverImage({
  image,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
}: {
  image: PlaceholderImage
  alt?: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  if (!image.src) {
    return <ImagePlaceholder label={image.label} caption={image.caption} aspectRatio={image.aspectRatio} className={className} />
  }

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio: image.aspectRatio }}>
      <Image
        src={image.src}
        alt={alt ?? image.alt ?? image.label}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
      />
    </div>
  )
}
