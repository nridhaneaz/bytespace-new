import { useParams } from 'react-router-dom'
import CourseHero from '@/components/course-hero'
import DesignLinks from '@/components/design-links'
import LessonDesign from '@/components/lesson-design/design'
import NotFound from '@/app/not-found'
import SiteHeaderLinks from '@/components/site-header-links'
import { getCourse } from '@/lib/courses'

const VIEW_BOX = { width: 1440, height: 2883 }

// The drawn headline and tagline in the lesson design, in viewBox units.
const TITLE = { x: 124.3, y: 177.6, width: 765.2, height: 38.2 }
const SUBTITLE = { x: 123.2, y: 226.2, width: 568.2, height: 21.2 }

// The drawn "About" and "Reviews" tabs, which leave the lesson view.
const ABOUT_TAB = { x: 120, y: 1036, width: 76, height: 43 }
const REVIEWS_TAB = { x: 310, y: 1036, width: 90, height: 43 }

export default function LessonPage() {
  const { slug } = useParams()
  const course = getCourse(slug)
  if (!course) return <NotFound />

  return (
    <main className="bg-white">
      <h1 className="sr-only">{course.title} lessons</h1>
      <SiteHeaderLinks viewBox={VIEW_BOX}>
        <CourseHero course={course} viewBox={VIEW_BOX} title={TITLE} subtitle={SUBTITLE}>
          <DesignLinks
            viewBox={VIEW_BOX}
            links={[
              { rect: ABOUT_TAB, href: `/course/${course.slug}`, label: `About ${course.title}` },
              {
                rect: REVIEWS_TAB,
                href: `/course/${course.slug}/reviews`,
                label: `${course.title} reviews`,
              },
            ]}
          >
            <LessonDesign />
          </DesignLinks>
        </CourseHero>
      </SiteHeaderLinks>
    </main>
  )
}
