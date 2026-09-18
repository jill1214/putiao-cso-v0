export type PlaceholderImage = {
  label: string
  caption?: string
  aspectRatio: string
}

export const discoverPutiao = {
  hero: {
    eyebrow: 'Discover Putiao',
    heading: 'Gateway between Albay and Sorsogon.',
    copy: 'Putiao is not simply a place people pass through. It is a community worth discovering.',
    image: { label: 'Hero image', caption: 'Putiao River / Scenic Landscape', aspectRatio: '16/9' } satisfies PlaceholderImage,
    scrollCue: 'Explore Putiao',
  },

  riverStory: {
    heading: 'The River at the Heart of Putiao',
    copy: 'The Putiao River is more than a landscape. It connects the environment, livelihoods, traditions, and everyday life of the community. Protecting the river means protecting a shared home and future.',
    image: { label: 'River image', caption: 'Wide scenic Putiao River photo', aspectRatio: '4/3' } satisfies PlaceholderImage,
    indicators: ['Nature', 'Livelihood', 'Community'],
  },

  riverLife: {
    heading: 'Life Along the River',
    copy: 'Everyday life in Putiao is shaped by the river, its surroundings, and the people who live alongside it.',
    gallery: [
      { label: 'River Life 01', caption: 'Riverbank life', aspectRatio: '3/2', size: 'large' },
      { label: 'River Life 02', caption: 'Boats', aspectRatio: '1/1', size: 'medium' },
      { label: 'River Life 03', caption: 'Fishing or livelihood', aspectRatio: '1/1', size: 'medium' },
      { label: 'River Life 04', caption: 'People', aspectRatio: '4/3', size: 'small' },
      { label: 'River Life 05', caption: 'Mangroves', aspectRatio: '4/3', size: 'small' },
      { label: 'River Life 06', caption: 'Everyday scenes', aspectRatio: '4/3', size: 'small' },
    ] as Array<PlaceholderImage & { size: 'large' | 'medium' | 'small' }>,
  },

  riverCruise: {
    heading: 'Seeing Putiao from the Water',
    copy: 'The river offers a different perspective of Putiao, revealing its natural landscape, river communities, and potential for responsible community-based eco-tourism.',
    image: { label: 'River cruise image', caption: 'Putiao River Cruise / Boat Experience', aspectRatio: '3/2' } satisfies PlaceholderImage,
    badge: { title: 'Putiao River Cruise', status: 'In development' },
    supportingText: 'PMPMH is currently developing an initial cruiser designed to accommodate approximately eight tourists per trip.',
    cta: { label: 'Learn About the Project', href: '/#programs' },
  },

  caringForHome: {
    heading: 'Caring for Our Home',
    copy: 'Discovering Putiao also means understanding the responsibility of caring for it. Community volunteers take part in activities that help protect the river and surrounding environment.',
    images: [
      { label: 'Cleanup Image 01', aspectRatio: '4/3' },
      { label: 'Cleanup Image 02', aspectRatio: '4/3' },
      { label: 'Cleanup Image 03', aspectRatio: '4/3' },
    ] as PlaceholderImage[],
    caption: { title: 'Putiao River Cleanup', date: 'December 29, 2025' },
  },

  people: {
    heading: 'The People Behind the Place',
    copy: 'Putiao is shaped not only by its river and landscape, but by the people who call it home. Families, volunteers, workers, community leaders, and residents carry the stories, traditions, and future of the place.',
    gallery: [
      { label: 'Community Portrait 01', aspectRatio: '3/4' },
      { label: 'Community Portrait 02', aspectRatio: '3/4' },
      { label: 'Community Life 01', aspectRatio: '4/3' },
      { label: 'Community Life 02', aspectRatio: '4/3' },
    ] as PlaceholderImage[],
  },

  culture: {
    heading: 'Culture & Heritage',
    copy: "Putiao's identity is carried through its food, livelihoods, traditions, skills, stories, and relationship with the river.",
    blocks: [
      {
        title: 'Local Food',
        copy: 'Traditional and local food stories that reflect the community and its way of life.',
        image: { label: 'Local food image', aspectRatio: '4/3' } satisfies PlaceholderImage,
      },
      {
        title: 'Fishing & Livelihood',
        copy: 'River and community livelihoods that have shaped everyday life in Putiao.',
        image: { label: 'Fishing / livelihood image', aspectRatio: '4/3' } satisfies PlaceholderImage,
      },
      {
        title: 'Handicrafts & Traditions',
        copy: 'Local skills, crafts, and traditions passed through the community.',
        image: { label: 'Handicraft / tradition image', aspectRatio: '4/3' } satisfies PlaceholderImage,
      },
    ],
    footnote: 'More stories coming soon.',
  },

  exploreResponsibly: {
    heading: 'Explore Responsibly',
    copy: 'To discover Putiao is also to respect it. Help protect the river, support local livelihoods, respect community spaces, and leave the environment better than you found it.',
    principles: ['Respect Nature', 'Support Local', 'Protect the River', 'Respect the Community'],
  },

  cta: {
    heading: ['Discover the river.', 'Know the people.', 'Help protect the place.'],
    copy: "Be part of a community working to protect Putiao's environment, preserve its heritage, and build a sustainable future.",
    primary: { label: 'Get Involved', href: '/#contact-form' },
    secondary: { label: 'Explore Our Programs', href: '/#programs' },
  },
} as const
