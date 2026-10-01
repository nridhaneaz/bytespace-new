import { cn } from '@/lib/utils'

const percent = (value, total) => `${(value / total) * 100}%`

/**
 * Wraps the course design and swaps the drawn headline, tagline, and price for
 * the course's own, so every course opens on its own name and price.
 */
export default function CourseHero({ course, viewBox, title, subtitle, price, children }) {
  const line = (rect, fontSize) => ({
    left: percent(rect.x, viewBox.width),
    top: percent(rect.y, viewBox.height),
    height: percent(rect.height, viewBox.height),
    fontSize: `${(fontSize / viewBox.width) * 100}cqw`,
  })

  return (
    <div
      className={cn(
        'relative w-full [&_.course-drawn-subtitle]:hidden [&_.course-drawn-title]:hidden',
        price && '[&_.course-drawn-price]:hidden',
      )}
      style={{ containerType: 'inline-size' }}
    >
      {children}
      <div className="absolute flex items-center" style={line(title, 40)}>
        <span className="whitespace-nowrap font-semibold leading-none text-[#F5F5F6]">
          {course.title}
        </span>
      </div>
      <div className="absolute flex items-center" style={line(subtitle, 22)}>
        <span className="whitespace-nowrap font-semibold leading-none text-[#F5F5F6]">
          {course.subtitle}
        </span>
      </div>
      {price ? (
        <div className="absolute flex items-center" style={line(price, 40)}>
          <span className="flex items-baseline gap-[0.3em] whitespace-nowrap">
            <span className="font-bold leading-none text-[#003BE2]">${course.price}</span>
            <span className="font-medium leading-none text-[#4B4C53]" style={{ fontSize: '0.4em' }}>
              /lifetime
            </span>
          </span>
        </div>
      ) : null}
    </div>
  )
}
