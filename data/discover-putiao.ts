export type PlaceholderImage = {
  label: string;
  caption?: string;
  aspectRatio: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
};

export const discoverPutiao = {
  hero: {
    eyebrow: "Discover Putiao",
    heading: "Gateway between Albay and Sorsogon.",
    copy: "Putiao is not simply a place people pass through. It is a community worth discovering.",
    image: {
      label: "Hero image",
      caption: "Putiao River / Scenic Landscape",
      aspectRatio: "16/9",
      src: "/images/hero-discover-putiao.jpg",
    } satisfies PlaceholderImage,
    scrollCue: "Explore Putiao",
  },

  riverStory: {
    heading: "The River at the Heart of Putiao",
    copy: "The Putiao River is more than a landscape. It connects the environment, livelihoods, traditions, and everyday life of the community. Protecting the river means protecting a shared home and future.",
    image: {
      label: "River image",
      caption: "Wide scenic Putiao River photo",
      aspectRatio: "4/3",
      src: "/images/discover/river/putiao-river-wide.jpg",
      alt: "Wide view of a bend in the Putiao River lined with trees and a riverside hut",
    } satisfies PlaceholderImage,
    indicators: ["Nature", "Livelihood", "Community"],
  },

  riverLife: {
    heading: "Life Along the River",
    copy: "Everyday life in Putiao is shaped by the river, its surroundings, and the people who live alongside it.",
    gallery: [
      {
        label: "River Life 01",
        caption: "Riverbank life",
        aspectRatio: "3/2",
        size: "large",
        src: "/images/discover/river-life/riverbank-kayak-swim.jpg",
        alt: "A kayaker paddling the Putiao River while children swim nearby, framed by palm leaves",
      },
      {
        label: "River Life 02",
        caption: "Boats",
        aspectRatio: "1/1",
        size: "medium",
        src: "/images/discover/river-life/kayaking-pair.jpg",
        alt: "Two people kayaking together on the Putiao River",
      },
      {
        label: "River Life 03",
        caption: "Fishing or livelihood",
        aspectRatio: "1/1",
        size: "medium",
        src: "/images/discover/river-life/fishing-net-boat.jpg",
        alt: "A young fisherman lowering a net from a wooden boat on the Putiao River",
      },
      {
        label: "River Life 04",
        caption: "People",
        aspectRatio: "4/3",
        size: "small",
        src: "/images/discover/river-life/community-gathering-torches.jpg",
        alt: "Community members gathered by torchlight near the river at dusk",
      },
      {
        label: "River Life 05",
        caption: "Mangroves",
        aspectRatio: "4/3",
        size: "small",
        src: "/images/discover/river-life/cattle-riverside.jpg",
        alt: "A resident tending cattle near the riverbank under coconut palms",
      },
      {
        label: "River Life 06",
        caption: "Everyday scenes",
        aspectRatio: "4/3",
        size: "small",
        src: "/images/discover/river-life/community-bonfire.jpg",
        alt: "Community members gathered around a bonfire near the river at night",
      },
    ] as Array<PlaceholderImage & { size: "large" | "medium" | "small" }>,
  },

  riverCruise: {
    heading: "Seeing Putiao from the Water",
    copy: "The river offers a different perspective of Putiao, revealing its natural landscape, river communities, and potential for responsible community-based eco-tourism.",
    image: {
      label: "River cruise image",
      caption: "Putiao River Cruise / Boat Experience",
      aspectRatio: "3/2",
      src: "/images/discover/cruise/explore-putiao-river.jpg",
      alt: "View from a boat on the Putiao River passing a riverside hut surrounded by trees",
      objectPosition: "center 60%",
    } satisfies PlaceholderImage,
    badge: { title: "Putiao River Cruise", status: "In development" },
    supportingText:
      "PMPMH is currently developing an initial cruiser designed to accommodate approximately eight tourists per trip.",
    cta: { label: "Learn About the Project", href: "/#programs" },
  },

  caringForHome: {
    heading: "Caring for Our Home",
    copy: "Discovering Putiao also means understanding the responsibility of caring for it. Community volunteers take part in activities that help protect the river and surrounding environment.",
    images: [
      {
        label: "Cleanup Image 01",
        aspectRatio: "4/3",
        src: "/images/discover/cleanup/river-cleanup-volunteers-banner.jpg",
        alt: "Community volunteers holding a Putiao River Cleanup welcome banner",
      },
      {
        label: "Cleanup Image 02",
        aspectRatio: "4/3",
        src: "/images/discover/cleanup/river-cleanup-trash-collection.jpg",
        alt: "A volunteer clearing a large pile of collected waste along the riverbank",
      },
      {
        label: "Cleanup Image 03",
        aspectRatio: "4/3",
        src: "/images/discover/cleanup/river-cleanup-volunteers-sacks.jpg",
        alt: "Young volunteers with a Putiao youth chapter banner and filled trash sacks after the cleanup",
      },
    ] as PlaceholderImage[],
    caption: { title: "Putiao River Cleanup", date: "December 29, 2025" },
  },

  people: {
    heading: "The People Behind the Place",
    copy: "Putiao is shaped not only by its river and landscape, but by the people who call it home. Families, volunteers, workers, community leaders, and residents carry the stories, traditions, and future of the place.",
    gallery: [
      {
        label: "Community Portrait 01",
        aspectRatio: "3/4",
        src: "/images/discover/community/family-bamboo-raft.jpg",
        alt: "A family with children in life vests on a bamboo raft on the Putiao River",
      },
      {
        label: "Community Portrait 02",
        aspectRatio: "3/4",
        src: "/images/discover/community/young-coconut.jpg",
        alt: "A group of community members on a boat trip along the Putiao River",
      },
      {
        label: "Community Life 01",
        aspectRatio: "4/3",
        src: "/images/discover/community/weaving-palm-leaves.jpg",
        alt: "A community member weaving palm leaves for traditional roofing",
      },
      {
        label: "Community Life 02",
        aspectRatio: "4/3",
        src: "/images/discover/community/family-riverside-gathering.jpg",
        alt: "Families gathered riverside with children in life vests",
      },
    ] as PlaceholderImage[],
  },

  culture: {
    heading: "Culture & Heritage",
    copy: "Putiao's identity is carried through its food, livelihoods, traditions, skills, stories, and relationship with the river.",
    blocks: [
      {
        title: "Local Food",
        copy: "Suman and ibos are traditional local delicacies often enjoyed with hot coffee for breakfast or merienda, reflecting the simple food traditions that remain part of everyday life in Putiao.",
        image: {
          label: "Local food image",
          aspectRatio: "4/3",
          src: "/images/discover/culture/suman-ibos-coffee.png",
          alt: "Suman and ibos served with coffee, traditional local food in Putiao",
          objectPosition: "center 65%",
        } satisfies PlaceholderImage,
      },
      {
        title: "Fishing & Livelihood",
        copy: "River and community livelihoods that have shaped everyday life in Putiao.",
        image: {
          label: "Fishing / livelihood image",
          aspectRatio: "4/3",
          src: "/images/discover/culture/fisherman-net-boat.jpg",
          alt: "A fisherman checking his net from a wooden boat on the Putiao River",
        } satisfies PlaceholderImage,
      },
      {
        title: "Handicrafts & Traditions",
        copy: "Local skills, crafts, and traditions passed through the community.",
        image: {
          label: "Handicraft / tradition image",
          aspectRatio: "4/3",
          src: "/images/discover/culture/salakot-making.jpg",
          alt: "Traditional salakot making in Putiao",
          objectPosition: "center 15%",
        } satisfies PlaceholderImage,
      },
    ],
    footnote: "More stories coming soon.",
  },

  exploreResponsibly: {
    heading: "Explore Responsibly",
    copy: "To discover Putiao is also to respect it. Help protect the river, support local livelihoods, respect community spaces, and leave the environment better than you found it.",
    principles: [
      "Respect Nature",
      "Support Local",
      "Protect the River",
      "Respect the Community",
    ],
  },

  cta: {
    heading: [
      "Discover the river.",
      "Know the people.",
      "Help protect the place.",
    ],
    copy: "Be part of a community working to protect Putiao's environment, preserve its heritage, and build a sustainable future.",
    primary: { label: "Get Involved", href: "/#contact-form" },
    secondary: { label: "Explore Our Programs", href: "/#programs" },
  },
} as const;
