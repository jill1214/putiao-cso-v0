import { SiteHeader, Footer } from '@/components/site-header'
import { DiscoverHero } from '@/components/discover/DiscoverHero'
import { RiverStory } from '@/components/discover/RiverStory'
import { RiverLifeGallery } from '@/components/discover/RiverLifeGallery'
import { RiverCruiseStory } from '@/components/discover/RiverCruiseStory'
import { StewardshipStory } from '@/components/discover/StewardshipStory'
import { PeopleOfPutiao } from '@/components/discover/PeopleOfPutiao'
import { CultureHeritage } from '@/components/discover/CultureHeritage'
import { ExploreResponsibly } from '@/components/discover/ExploreResponsibly'
import { DiscoverCTA } from '@/components/discover/DiscoverCTA'

export default function DiscoverPutiaoPage() {
  return (
    <div className="min-h-screen bg-[#fafcfa]">
      <SiteHeader />
      <main>
        <DiscoverHero />
        <RiverStory />
        <RiverLifeGallery />
        <RiverCruiseStory />
        <StewardshipStory />
        <PeopleOfPutiao />
        <CultureHeritage />
        <ExploreResponsibly />
        <DiscoverCTA />
      </main>
      <Footer />
    </div>
  )
}

export const dynamic = 'force-static'

export const metadata = {
  title: 'Discover Putiao — Putiao, My Place, My Home, CSO, Inc.',
  description: 'Gateway between Albay and Sorsogon. Discover the Putiao River, its people, culture, and the community working to protect it.',
}
