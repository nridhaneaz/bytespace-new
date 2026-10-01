import { useSearchParams } from 'react-router-dom'
import CourseCardLinks from '@/components/course-card-links'
import SearchDesign from '@/components/search-design/design'
import SearchShell from '@/components/search-shell'
import SiteHeaderLinks from '@/components/site-header-links'
import { courseForCard } from '@/lib/courses'

const VIEW_BOX = { width: 1440, height: 3853 }

const CATEGORIES = [
  'Courses',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
]

// The drawn course cards in the search design: a 6 × 3 grid of 372 × 383 cards.
const CARD_ROWS = [632.5, 1056.5, 1480.5, 1904.5, 2328.5, 2752.5]
const CARD_COLUMNS = [121.5, 534.5, 947.5]
const CARDS = CARD_ROWS.flatMap((y) =>
  CARD_COLUMNS.map((x) => ({ x, y, width: 372, height: 383 })),
)
const CARD_COURSES = CARDS.map((_, index) => courseForCard(index))

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') ?? ''
  const category = searchParams.get('category') ?? undefined

  return (
    <main className="bg-white">
      <h1 className="sr-only">Search courses</h1>
      <SiteHeaderLinks viewBox={VIEW_BOX}>
        <SearchShell
          viewBox={VIEW_BOX}
          bar={{ x: 408, y: 239, width: 461, height: 52 }}
          textInset={56.792}
          placeholder="Search"
          initialQuery={q ?? ''}
          initialCategory={category}
          autoFocus
          categorySelect={{
            rect: { x: 885, y: 239, width: 147, height: 48 },
            textInset: 30.912,
            options: CATEGORIES,
          }}
        >
          <CourseCardLinks viewBox={VIEW_BOX} cards={CARDS} courses={CARD_COURSES}>
            <SearchDesign />
          </CourseCardLinks>
        </SearchShell>
      </SiteHeaderLinks>
    </main>
  )
}
