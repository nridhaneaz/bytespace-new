/**
 * The six courses the designs draw. Both the landing and search card grids
 * repeat this list in order, so a card's course is its index modulo this length.
 */
export const COURSES = [
  {
    slug: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    subtitle: 'Go from a blank canvas to a design system you can hand off',
    description: 'Go from an empty canvas to a polished, shareable design system in Figma.',
    category: 'UI/UX Design',
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    instructor: 'purepearl studio',
  },
  {
    slug: 'build-digital-asset',
    title: 'Build Digital Asset',
    subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
    description: 'Design and ship a reusable digital asset library your whole team can draw on.',
    category: 'Drawing & Painting',
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    instructor: 'purepearl studio',
  },
  {
    slug: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    subtitle: 'Turn raw numbers into decisions you can defend',
    description: 'Read a dashboard like a story and turn raw numbers into decisions.',
    category: 'Marketing',
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    instructor: 'purepearl studio',
  },
  {
    slug: 'balancing-productivity-and-focus',
    title: 'Balancing Productivity and Focus',
    subtitle: 'Protect deep focus without burning out',
    description: 'Build a working rhythm that protects deep focus without burning out.',
    category: 'Creative Marketing',
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    instructor: 'purepearl studio',
  },
  {
    slug: 'mastering-money-management',
    title: 'Mastering Money Management',
    subtitle: 'Build a money system you will actually keep',
    description: 'Track, plan, and grow your money with a system you will actually keep.',
    category: 'Marketing',
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    instructor: 'purepearl studio',
  },
  {
    slug: 'from-idea-to-startup-success',
    title: 'From Idea to Startup Success',
    subtitle: 'Take a rough idea to your first paying customers',
    description: 'Take a rough idea through validation, first customers, and early traction.',
    category: 'Creative Marketing',
    level: 'Beginner',
    price: 25,
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    instructor: 'purepearl studio',
  },
]

export function getCourse(slug) {
  return COURSES.find((course) => course.slug === slug)
}

/** The course a card shows, cycling through the catalog. */
export function courseForCard(index) {
  const course = COURSES[index % COURSES.length]
  if (!course) throw new Error('The course catalog is empty')
  return course
}
