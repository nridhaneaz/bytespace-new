import { CREATORS } from './creators'

const creatorHref = `/creator/${CREATORS[0]?.slug ?? ''}`

/**
 * The site header's drawn nav labels, in viewBox units. Every design that draws
 * the header places it identically, so one set of rectangles covers them all.
 * Each rectangle is the label's bounds plus a little padding for the hit area.
 */
export const HEADER_NAV = [
  { rect: { x: 607.8, y: 43.4, width: 57.4, height: 27.8 }, href: '/', label: 'Home' },
  { rect: { x: 675.2, y: 46.4, width: 71.9, height: 27.8 }, href: '/search', label: 'Courses' },
  { rect: { x: 757.2, y: 46.4, width: 74.4, height: 27.8 }, href: creatorHref, label: 'Creators' },
  { rect: { x: 1138.6, y: 46.3, width: 62.5, height: 31.2 }, href: '/signin', label: 'Sign In' },
  { rect: { x: 1211.3, y: 46.5, width: 67.1, height: 27.7 }, href: '/register', label: 'Join Us' },
]
