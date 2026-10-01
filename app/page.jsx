import CourseCardLinks from '@/components/course-card-links'
import Design from '@/components/design/design'
import SearchShell from '@/components/search-shell'
import SiteHeaderLinks from '@/components/site-header-links'
import { courseForCard } from '@/lib/courses'

const VIEW_BOX = { width: 1440, height: 6377 }

// The drawn course cards in the landing design: a 2 × 3 grid of 372 × 383 cards.
const CARD_ROWS = [1768.5, 2192.5]
const CARD_COLUMNS = [120.5, 533.5, 946.5]
const CARDS = CARD_ROWS.flatMap((y) =>
  CARD_COLUMNS.map((x) => ({ x, y, width: 372, height: 383 })),
)
const CARD_COURSES = CARDS.map((_, index) => courseForCard(index))

export default function Page() {
  return (
    <main className="bg-white">
      <h1 className="sr-only">ByteSpace — get access to hundreds of courses</h1>
      <SiteHeaderLinks viewBox={VIEW_BOX}>
        <SearchShell
          viewBox={VIEW_BOX}
          bar={{ x: 429.5, y: 462, width: 461, height: 52 }}
          textInset={62.822}
          placeholder="Course, topic, creator"
          mode="submit"
          submitButton={{ x: 906.5, y: 462, width: 104, height: 46 }}
        >
          <CourseCardLinks viewBox={VIEW_BOX} cards={CARDS} courses={CARD_COURSES}>
            <Design />
          </CourseCardLinks>
        </SearchShell>
      </SiteHeaderLinks>
    </main>
  )
}
