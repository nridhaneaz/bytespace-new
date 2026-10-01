import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { getCourse } from '@/lib/courses'
import { getCreator } from '@/lib/creators'

const DEFAULT_DESCRIPTION = 'Unlock your creativity and grow your business with ByteSpace courses.'
const CoursePage = lazy(() => import('@/app/course/[slug]/page'))
const LessonPage = lazy(() => import('@/app/course/[slug]/lesson/page'))
const ReviewsPage = lazy(() => import('@/app/course/[slug]/reviews/page'))
const CreatorPage = lazy(() => import('@/app/creator/[slug]/page'))
const HomePage = lazy(() => import('@/app/page'))
const NotFound = lazy(() => import('@/app/not-found'))
const RegisterPage = lazy(() => import('@/app/register/page'))
const SearchPage = lazy(() => import('@/app/search/page'))
const SigninPage = lazy(() => import('@/app/signin/page'))

function AppMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    let title = 'ByteSpace'
    let description = DEFAULT_DESCRIPTION
    const courseMatch = pathname.match(/^\/course\/([^/]+)(?:\/(lesson|reviews))?$/)
    const creatorMatch = pathname.match(/^\/creator\/([^/]+)$/)

    if (courseMatch) {
      const course = getCourse(decodeURIComponent(courseMatch[1]))
      if (course) {
        const suffix = courseMatch[2] === 'lesson' ? 'Lessons' : courseMatch[2] === 'reviews' ? 'Reviews' : ''
        title = `${course.title}${suffix ? ` - ${suffix}` : ''} | ByteSpace`
        description = course.description
      } else {
        title = 'Page not found | ByteSpace'
      }
    } else if (creatorMatch) {
      const creator = getCreator(decodeURIComponent(creatorMatch[1]))
      if (creator) {
        title = `${creator.name} | ByteSpace`
        description = creator.bio
      } else {
        title = 'Page not found | ByteSpace'
      }
    } else if (pathname === '/search') {
      title = 'Search courses | ByteSpace'
      description = 'Search ByteSpace courses by topic, level, and category.'
    } else if (pathname === '/signin') {
      title = 'Sign in | ByteSpace'
      description = 'Sign in to your ByteSpace account to continue learning.'
    } else if (pathname === '/register') {
      title = 'Join as a creator | ByteSpace'
      description = 'Create your ByteSpace creator account and start publishing your own courses.'
    } else if (pathname !== '/') {
      title = 'Page not found | ByteSpace'
    }

    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <AppMetadata />
      <Suspense fallback={<main className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/course/:slug" element={<CoursePage />} />
          <Route path="/course/:slug/lesson" element={<LessonPage />} />
          <Route path="/course/:slug/reviews" element={<ReviewsPage />} />
          <Route path="/creator/:slug" element={<CreatorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}