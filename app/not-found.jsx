import DesignLinks from '@/components/design-links'
import NotFoundDesign from '@/components/notfound-design/design'
import { HEADER_NAV } from '@/lib/site-nav'

const VIEW_BOX = { width: 1440, height: 1485 }

const BACK_TO_HOME = { x: 639, y: 786, width: 163, height: 46 }

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-white">
      <h1 className="sr-only">Page not found</h1>
      <DesignLinks
        viewBox={VIEW_BOX}
        links={[
          ...HEADER_NAV,
          { rect: BACK_TO_HOME, href: '/', label: 'Back to home' },
        ]}
      >
        <NotFoundDesign />
      </DesignLinks>
    </main>
  )
}
