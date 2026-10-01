import DesignLinks from '@/components/design-links'
import SigninDesign from '@/components/signin-design/design'

const VIEW_BOX = { width: 1440, height: 1024 }

// This design draws no site header, so the logo is the only way back.
const LOGO = { x: 114, y: 27, width: 44.9, height: 47.5 }
const CREATE_ACCOUNT = { x: 997.2, y: 837.4, width: 144.3, height: 27.8 }

export default function SigninPage() {
  return (
    <main className="bg-white">
      <h1 className="sr-only">Sign in to ByteSpace</h1>
      <DesignLinks
        viewBox={VIEW_BOX}
        links={[
          { rect: LOGO, href: '/', label: 'ByteSpace home' },
          { rect: CREATE_ACCOUNT, href: '/register', label: 'Create an account' },
        ]}
      >
        <SigninDesign />
      </DesignLinks>
    </main>
  )
}
