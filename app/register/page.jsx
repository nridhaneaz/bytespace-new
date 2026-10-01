import DesignLinks from '@/components/design-links'
import RegisterDesign from '@/components/register-design/design'

const VIEW_BOX = { width: 1440, height: 1024 }

// This design draws no site header, so the logo is the only way back.
const LOGO = { x: 114, y: 27, width: 44.9, height: 47.5 }
const LOGIN = { x: 1096.9, y: 826.5, width: 52.4, height: 31.1 }

export default function RegisterPage() {
  return (
    <main className="bg-white">
      <h1 className="sr-only">Join ByteSpace as a creator</h1>
      <DesignLinks
        viewBox={VIEW_BOX}
        links={[
          { rect: LOGO, href: '/', label: 'ByteSpace home' },
          { rect: LOGIN, href: '/signin', label: 'Sign in' },
        ]}
      >
        <RegisterDesign />
      </DesignLinks>
    </main>
  )
}
