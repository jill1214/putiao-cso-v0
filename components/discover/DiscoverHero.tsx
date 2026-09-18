import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/site-header";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { discoverPutiao } from "@/data/discover-putiao";
import Image from "next/image";

export function DiscoverHero() {
  const { eyebrow, heading, copy, image, scrollCue } = discoverPutiao.hero;

  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-16 pt-12 sm:px-8 sm:pt-20 lg:pb-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <SectionLabel>{eyebrow}</SectionLabel>
        </div>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.06em] text-[#10221b] sm:text-6xl lg:text-[72px]">
          {heading}
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#66736d]">
          {copy}
        </p>
      </div>
      <div className="mt-12">
        {image.src ? (
          <div className="relative min-h-[260px] overflow-hidden rounded-[30px] shadow-2xl shadow-[#b06b3a]/10 sm:min-h-[380px] lg:min-h-[520px]">
            <Image
              src={image.src}
              alt="Scenic view of Putiao River in Putiao, Pilar, Sorsogon"
              fill
              priority
              className="object-cover"
            />
          </div>
        ) : (
          <ImagePlaceholder
            label={image.label}
            caption={image.caption}
            aspectRatio={image.aspectRatio}
            className="min-h-[260px] rounded-[30px] shadow-2xl shadow-[#b06b3a]/10 sm:min-h-[380px] lg:min-h-[520px]"
          />
        )}
      </div>
      <a
        href="#river-story"
        className="group mx-auto mt-8 flex w-fit flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#45554e] transition-colors hover:text-[#0b6b3a]"
      >
        {scrollCue}
        <ChevronDown className="size-4 animate-bounce text-[#4daa31] transition-transform group-hover:translate-y-0.5" />
      </a>
    </section>
  );
}
