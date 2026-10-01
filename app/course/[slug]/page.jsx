import { useParams } from 'react-router-dom'
import CourseDesign from '@/components/course-design/design'
import CourseHero from '@/components/course-hero'
import DesignLinks from '@/components/design-links'
import NotFound from '@/app/not-found'
import SiteHeaderLinks from '@/components/site-header-links'
import { getCourse } from '@/lib/courses'

const VIEW_BOX = { width: 1440, height: 2717 }

// The drawn headline and tagline in the course design, in viewBox units.
const TITLE = { x: 124.48, y: 177.78, width: 771.63, height: 38.05 }
const SUBTITLE = { x: 123.34, y: 226.32, width: 569.3, height: 21.14 }

// The drawn price block, which the design wraps onto two lines.
const PRICE = { x: 949.9, y: 761.6, width: 40.7, height: 71.4 }

// The drawn "Lessons" and "Reviews" tabs, which open those views.
const LESSONS_TAB = { x: 212, y: 1019.5, width: 89, height: 43 }
const REVIEWS_TAB = { x: 317, y: 1019.5, width: 90, height: 43 }

export default function CoursePage() {
  const { slug } = useParams()
  const course = getCourse(slug)
  if (!course) return <NotFound />

  return (
    <main className="bg-white">
      <h1 className="sr-only">{course.title}</h1>
      <SiteHeaderLinks viewBox={VIEW_BOX}>
        <CourseHero
          course={course}
          viewBox={VIEW_BOX}
          title={TITLE}
          subtitle={SUBTITLE}
          price={PRICE}
        >
          <DesignLinks
            viewBox={VIEW_BOX}
            links={[
              {
                rect: LESSONS_TAB,
                href: `/course/${course.slug}/lesson`,
                label: `${course.title} lessons`,
              },
              {
                rect: REVIEWS_TAB,
                href: `/course/${course.slug}/reviews`,
                label: `${course.title} reviews`,
              },
            ]}
          >
            <CourseDesign />
          </DesignLinks>
        </CourseHero>
      </SiteHeaderLinks>
    </main>
  )
}
