"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type StoryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type FeaturedStory = {
  contributor: string;
  title: string;
  summary: string[];
  image: StoryImage;
};

type SupportingMemory = {
  contributor: string;
  summary: string[];
  image: StoryImage;
};

const featuredStories: FeaturedStory[] = [
  {
    contributor: "Arch. Levy O. Espinas",
    title: "Learning to Swim the Hard Way",
    summary: [
      "For many children who grew up near the river, learning to swim did not begin with lessons or a swimming pool. Sometimes it began simply because the river was there.",
      "Levy remembers slipping away to the river behind their home even when he knew he was not supposed to. Then came one frightening moment when getting back to the riverbank depended on his own struggling arms and legs.",
      "He can laugh about it now. But beneath the humor is a memory familiar to many who grew up beside the Suba: the warnings of parents, the irresistible pull of the water, and the moment when fear unexpectedly became part of learning.",
    ],
    image: {
      src: "/images/discover/culture/stories/levy-espinas-river-story.png",
      alt: "Facebook comment by Arch. Levy O. Espinas sharing a childhood memory about learning to swim in the Putiao River",
      width: 687,
      height: 576,
    },
  },
  {
    contributor: "Lucia Reyes",
    title: "The River Where We Learned Together",
    summary: [
      "Some childhood adventures ended with a scolding when everyone finally came home.",
      "Lucia remembers bringing younger children with her to the river, even though her mother worried and sometimes became angry when she found out. But those trips eventually became part of something larger. One by one, the children learned how to swim.",
      "Years later, what remains is not the scolding. It is the memory of children learning together, watching one another, gaining courage, and returning home with another day at the Suba behind them.",
      "For anyone who grew up following older siblings, cousins, or friends toward the river, it may sound very familiar.",
    ],
    image: {
      src: "/images/discover/culture/stories/lucia-reyes-river-memory.png",
      alt: "Facebook comment by Lucia Reyes sharing memories of bringing younger children to the Putiao River",
      width: 687,
      height: 397,
    },
  },
  {
    contributor: "Ging Romero",
    title: "The River We Went to in Secret",
    summary: [
      "There was a particular excitement in going somewhere your parents had told you not to go.",
      "Ging remembers secretly making her way to the river, especially around the old bridge and other familiar places where children gathered. Relatives and older family members helped her learn how to swim, and before long the river became part of days spent with cousins, friends, laughter, and the small adventures children rarely forget.",
      "Looking back, those moments have outlasted the warnings and the scoldings.",
      "What remains is the feeling of being young in Putiao, with the Suba waiting nearby and another adventure always seeming possible.",
    ],
    image: {
      src: "/images/discover/culture/stories/ging-romero-river-memory.png",
      alt: "Facebook comment by Ging Romero sharing memories of secretly visiting the Putiao River",
      width: 680,
      height: 262,
    },
  },
  {
    contributor: "Marcelino Lubiano",
    title: "Before Morning Light",
    summary: [
      "Some memories of the river began before the rest of the day had even started.",
      "Marcelino remembers going to the Suba very early in the morning while his mother washed clothes there. For a child, it was simply part of life: following a parent, being near the water, playing, watching, and slowly becoming familiar with a place that seemed ordinary because it was always there.",
      "Only later do such ordinary mornings become precious.",
      "His memory recalls a time when the river was woven naturally into family routines, childhood, and home, long before anyone thought those moments might someday be worth preserving.",
    ],
    image: {
      src: "/images/discover/culture/stories/marcelino-lubiano-morning-river.png",
      alt: "Facebook comment by Marcelino Lubiano sharing an early-morning childhood memory of the Putiao River",
      width: 687,
      height: 411,
    },
  },
  {
    contributor: "Leila Atutubo Mestiola",
    title: "Summer Days at the Suba",
    summary: [
      "For a child in Putiao, sometimes all it took was hearing that the others were going to the river.",
      "Leila remembers those summer days when one child heading toward the Suba could quickly become a group. There were family members, friends, swimming, laughter, and sometimes a scolding waiting at home afterward.",
      "At the time, it was simply what children did.",
      "Years later, those ordinary summer afternoons become something else entirely: memories of people, voices, places, and a version of home that can return in an instant whenever someone says, “Do you remember the Suba?”",
    ],
    image: {
      src: "/images/discover/culture/stories/leila-atutubo-summer-river.png",
      alt: "Facebook comment by Leila Atutubo Mestiola sharing memories of summer days at the Putiao River",
      width: 697,
      height: 605,
    },
  },
];

const supportingMemories: SupportingMemory[] = [
  {
    contributor: "Naro L. Lubiano",
    summary: [
      "Naro’s memory is only a few words long, but perhaps that is why it feels so immediate. He remembers nearly drowning in the river.",
      "For anyone who has ever misjudged the depth, lost their footing, or suddenly realized the current was stronger than expected, little explanation is needed.",
    ],
    image: {
      src: "/images/discover/culture/stories/naro-lubiano-near-drowning.png",
      alt: "Facebook comment by Naro L. Lubiano recalling that he nearly drowned in the Putiao River",
      width: 695,
      height: 437,
    },
  },
  {
    contributor: "Cristy Llamoso-Ferrer",
    summary: [
      "Cristy carries a similar memory: a moment in the river when play suddenly became frightening and she nearly drowned.",
      "It is another reminder that the stories of the Suba are not made only of carefree afternoons. They include the moments that frightened children, worried parents, and remained vivid long after everyone had gone home.",
    ],
    image: {
      src: "/images/discover/culture/stories/cristy-llamoso-near-drowning.png",
      alt: "Facebook comment by Cristy Llamoso-Ferrer recalling that she nearly drowned in the Putiao River",
      width: 687,
      height: 92,
    },
  },
];

const storyCopyClass =
  "space-y-4 text-sm leading-7 text-[#55665e] sm:text-[15px] sm:leading-8";

function StoryScreenshot({ image }: { image: StoryImage }) {
  return (
    <div className="mx-auto mt-8 w-full max-w-[52rem] overflow-hidden rounded-[18px] border border-[#dfe9e2] bg-white shadow-sm shadow-[#10221b]/5">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 6rem), 832px"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}

function StoryEntry({ story, index }: { story: FeaturedStory; index: number }) {
  const storyNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-[#dfe9e2] px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[52rem]">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4daa31]">
          Community memory {storyNumber}
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#10221b] sm:text-4xl">
          {story.title}
        </h2>
        <div className={`mt-6 ${storyCopyClass}`}>
          {story.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <StoryScreenshot image={story.image} />

      <div className="mx-auto mt-5 max-w-[52rem] border-l-2 border-[#4daa31] pl-4">
        <p className="text-sm font-extrabold text-[#10221b]">
          {story.contributor}
        </p>
        <p className="mt-1 text-xs leading-5 text-[#7a8981]">
          Shared in the PMPMH community conversation
        </p>
      </div>
    </article>
  );
}

function SupportingEntry({ memory }: { memory: SupportingMemory }) {
  return (
    <article className="rounded-[22px] border border-[#d7e8dc] bg-white p-5 sm:p-8">
      <h3 className="text-xl font-extrabold tracking-[-0.025em] text-[#10221b] sm:text-2xl">
        {memory.contributor}
      </h3>
      <div className={`mt-5 ${storyCopyClass}`}>
        {memory.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <StoryScreenshot image={memory.image} />
    </article>
  );
}

export function CommunityStoryDialog() {
  return (
    <Dialog>
      <DialogTrigger className="group inline-flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm font-extrabold text-[#0b6b3a] outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#0b6b3a]/30 focus-visible:ring-offset-4">
        Explore Stories from Suba
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </DialogTrigger>

      <DialogContent
        aria-describedby="community-story-intro"
        aria-modal="true"
        className="max-h-[calc(100dvh-1rem)] w-[calc(100%-1rem)] max-w-[1080px] rounded-[24px] p-0 sm:max-h-[calc(100dvh-3rem)] sm:w-[calc(100%-3rem)] sm:rounded-[28px]"
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <header className="bg-[#eff8f2] px-5 pb-11 pt-14 sm:px-10 sm:pb-14 sm:pt-16 lg:px-16 lg:pb-16">
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0b6b3a] sm:text-xs">
              <span className="h-px w-8 bg-[#4daa31]" />
              Stories from the Suba
            </p>
            <DialogTitle className="mt-6 max-w-3xl text-4xl leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[56px]">
              A place is made of stories.
            </DialogTitle>
            <div
              id="community-story-intro"
              className="mt-7 grid gap-5 text-sm leading-7 text-[#55665e] sm:text-[15px] sm:leading-8 lg:grid-cols-2 lg:gap-12"
            >
              <p>
                The Putiao River is more than part of the landscape. For
                generations, it has been part of growing up: a place where
                children learned to swim, families worked, friends gathered,
                rules were sometimes broken, and ordinary days quietly became
                lifelong memories.
              </p>
              <p>
                We invited members of the Putiao community to share the memories
                they still carry with them. Their original words are preserved
                here, just as they were shared.
              </p>
            </div>
          </header>

          <div className="bg-white">
            {featuredStories.map((story, index) => (
              <StoryEntry key={story.contributor} story={story} index={index} />
            ))}
          </div>

          <section className="border-t border-[#dfe9e2] bg-[#eff8f2] px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-[52rem]">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4daa31]">
                The river remembered
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#10221b] sm:text-4xl">
                Not every river memory was gentle.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#55665e] sm:text-[15px] sm:leading-8">
                The Suba was a place of laughter and freedom, but the people who
                grew up around it also understood its danger. Some memories
                survived because someone was lucky enough to make it safely back
                to shore.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-[52rem] gap-5">
              {supportingMemories.map((memory) => (
                <SupportingEntry key={memory.contributor} memory={memory} />
              ))}
            </div>
          </section>

          <section className="bg-[#10221b] px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-[52rem]">
              <div className="space-y-4 font-serif text-2xl leading-snug tracking-[-0.02em] text-white sm:text-3xl">
                <p>These stories may seem ordinary.</p>
                <p className="text-[#b4e69e]">
                  That is exactly why they matter.
                </p>
              </div>
              <div className="mt-8 space-y-5 text-sm leading-7 text-white/70 sm:text-[15px] sm:leading-8">
                <p>
                  Together, they remember a Putiao where the river was a
                  playground, a classroom, a meeting place, part of a family’s
                  daily work, and sometimes the setting for the kind of
                  childhood trouble that becomes funny only many years later.
                </p>
                <p>Places change. Children grow older. People move away.</p>
                <p>
                  But sometimes a few words about the river are enough to bring
                  an entire afternoon back.
                </p>
              </div>

              <div className="mt-11 border-t border-white/15 pt-9">
                <h2 className="text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
                  Do you have a Suba story too?
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-[15px]">
                  Help us continue building Putiao’s living community archive,
                  one memory at a time.
                </p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
