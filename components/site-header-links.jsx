import { Link } from 'react-router-dom'
import { HEADER_NAV } from '@/lib/site-nav'

const percent = (value, total) => `${(value / total) * 100}%`

/**
 * Wraps a design and lays the site header's nav links over the drawn labels, so
 * the artwork stays a single SVG while the header behaves like real navigation.
 */
export default function SiteHeaderLinks({ viewBox, children }) {
  return (
    <div className="relative w-full">
      {children}
      {HEADER_NAV.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          aria-label={item.label}
          className="absolute rounded-full transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{
            left: percent(item.rect.x, viewBox.width),
            top: percent(item.rect.y, viewBox.height),
            width: percent(item.rect.width, viewBox.width),
            height: percent(item.rect.height, viewBox.height),
          }}
        />
      ))}
    </div>
  )
}
