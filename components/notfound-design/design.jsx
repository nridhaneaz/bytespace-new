import Section1 from './section-1'
import Section2 from './section-2'

export default function NotFoundDesign() {
  return (
    <svg
      viewBox="0 0 1440 1485"
      role="img"
      aria-label="Page not found"
      className="block h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="paint0_linear_63_252" x1="720" y1="160" x2="720" y2="640" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4FB20" />
          <stop offset="0.25" stopColor="#D4FB20" stopOpacity="0.96" />
          <stop offset="0.505" stopColor="#D4FB20" stopOpacity="0.81" />
          <stop offset="0.68" stopColor="#D4FB20" stopOpacity="0.61" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_63_252">
          <rect width="1440" height="1485" fill="white" />
        </clipPath>
        <clipPath id="clip1_63_252">
          <rect width="1440" height="957" fill="white" />
        </clipPath>
        <clipPath id="clip2_63_252">
          <rect width="1440" height="525" fill="white" transform="translate(0 960)" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip0_63_252)">
        <rect width="1440" height="1485" fill="white" />
      <Section1 />
      <Section2 />
      </g>
    </svg>
  )
}
