import { useParams } from 'react-router-dom'
import CourseHero from '@/components/course-hero'
import DesignLinks from '@/components/design-links'
import NotFound from '@/app/not-found'
import ReviewsDesign from '@/components/reviews-design/design'
import SiteHeaderLinks from '@/components/site-header-links'
import { getCourse } from '@/lib/courses'

const VIEW_BOX = { width: 1440, height: 3449 }

// The drawn headline and tagline in the reviews design, in viewBox units.
const TITLE = { x: 124.3, y: 177.6, width: 765.2, height: 38.2 }
const SUBTITLE = { x: 123.2, y: 226.2, width: 568.2, height: 21.2 }

// The drawn "About" and "Lessons" tabs, which leave the reviews view.
const ABOUT_TAB = { x: 120, y: 1036, width: 76, height: 43 }
const LESSONS_TAB = { x: 212, y: 1036, width: 82, height: 43 }

export default function ReviewsPage() {
  const { slug } = useParams()
  const course = getCourse(slug)
  if (!course) return <NotFound />

  return (
    <main className="bg-white">
      <h1 className="sr-only">{course.title} reviews</h1>
      <SiteHeaderLinks viewBox={VIEW_BOX}>
        <CourseHero course={course} viewBox={VIEW_BOX} title={TITLE} subtitle={SUBTITLE}>
          <DesignLinks
            viewBox={VIEW_BOX}
            links={[
              { rect: ABOUT_TAB, href: `/course/${course.slug}`, label: `About ${course.title}` },
              {
                rect: LESSONS_TAB,
                href: `/course/${course.slug}/lesson`,
                label: `${course.title} lessons`,
              },
            ]}
          >
            <ReviewsDesign />
          </DesignLinks>
        </CourseHero>
      </SiteHeaderLinks>
    </main>
  )
}
