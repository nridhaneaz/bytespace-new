import { Link } from 'react-router-dom'

const percent = (value, total) => `${(value / total) * 100}%`

/**
 * Wraps a design and lays a link over each drawn element, so the artwork stays
 * a single SVG while the drawn tabs behave like real navigation.
 */
export default function DesignLinks({ viewBox, links, children }) {
  return (
    <div className="relative w-full">
      {children}
      {links.map((link) => (
        <Link
          key={`${link.href}-${link.rect.x}-${link.rect.y}`}
          to={link.href}
          aria-label={link.label}
          className="absolute rounded-full transition-colors duration-200 hover:bg-[#242528]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]"
          style={{
            left: percent(link.rect.x, viewBox.width),
            top: percent(link.rect.y, viewBox.height),
            width: percent(link.rect.width, viewBox.width),
            height: percent(link.rect.height, viewBox.height),
          }}
        />
      ))}
    </div>
  )
}
