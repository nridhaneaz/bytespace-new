import { useParams } from 'react-router-dom'
import CourseCardLinks from '@/components/course-card-links'
import CreatorDesign from '@/components/creator-design/design'
import NotFound from '@/app/not-found'
import SiteHeaderLinks from '@/components/site-header-links'
import { courseForCard } from '@/lib/courses'
import { getCreator } from '@/lib/creators'

const VIEW_BOX = { width: 1440, height: 2136 }

// The drawn course cards in the creator design: a 2 × 3 grid of 372 × 383 cards.
const CARD_ROWS = [742.5, 1166.5]
const CARD_COLUMNS = [119.5, 532.5, 945.5]
const CARDS = CARD_ROWS.flatMap((y) =>
  CARD_COLUMNS.map((x) => ({ x, y, width: 372, height: 383 })),
)
const CARD_COURSES = CARDS.map((_, index) => courseForCard(index))

export default function CreatorPage() {
  const { slug } = useParams()
  const creator = getCreator(slug)
  if (!creator) return <NotFound />

  return (
    <main className="bg-white">
      <h1 className="sr-only">{creator.name}</h1>
      <SiteHeaderLinks viewBox={VIEW_BOX}>
        <CourseCardLinks viewBox={VIEW_BOX} cards={CARDS} courses={CARD_COURSES}>
          <CreatorDesign />
        </CourseCardLinks>
      </SiteHeaderLinks>
    </main>
  )
}
