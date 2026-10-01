/**
 * The creators the designs draw. The landing and search card grids credit
 * every course to the first creator, so the profile page has a real target.
 */
export const CREATORS = [
  {
    slug: 'purepearl-studio',
    name: 'purepearl studio',
    bio: 'Design studio teaching Figma, digital assets, and creative workflow to a growing community.',
    role: 'Design studio',
    courses: 6,
    students: '12.4k',
    rating: 4.5,
  },
]

export function getCreator(slug) {
  return CREATORS.find((creator) => creator.slug === slug)
}
