import { Link } from 'react-router-dom'

const percent = (value, total) => `${(value / total) * 100}%`

/**
 * Wraps a design and lays a link over each drawn course card, so the artwork
 * stays a single SVG while the cards behave like real navigation.
 */
export default function CourseCardLinks({ viewBox, cards, courses, children }) {
  return (
    <div className="relative w-full">
      {children}
      {cards.map((card, index) => {
        const course = courses[index]
        if (!course) return null
        return (
          <Link
            key={`${course.slug}-${index}`}
            to={`/course/${course.slug}`}
            aria-label={`${course.title} — ${course.level} course by ${course.instructor}`}
            className="absolute rounded-[6.32%] transition-shadow duration-200 hover:shadow-[0_10px_30px_rgba(36,37,40,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]"
            style={{
              left: percent(card.x, viewBox.width),
              top: percent(card.y, viewBox.height),
              width: percent(card.width, viewBox.width),
              height: percent(card.height, viewBox.height),
            }}
          />
        )
      })}
    </div>
  )
}
