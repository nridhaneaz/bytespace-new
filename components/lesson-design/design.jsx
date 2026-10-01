import Section1 from './section-1'
import Section2 from './section-2'
import Section3 from './section-3'

export default function LessonDesign() {
  return (
    <svg
      viewBox="0 0 1440 2883"
      role="img"
      aria-label="Course lesson page"
      className="block h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="bgblur_1_60_102_clip_path" transform="translate(-100 -2139)">
          <rect x="120.5" y="2159.5" width="722" height="115" rx="15.5" />
        </clipPath>
        <clipPath id="bgblur_4_60_102_clip_path" transform="translate(-82 -277)">
          <rect x="122" y="317" width="171" height="40" rx="20" />
        </clipPath>
        <clipPath id="bgblur_5_60_102_clip_path" transform="translate(-269 -277)">
          <rect x="309" y="317" width="200" height="40" rx="20" />
        </clipPath>
        <clipPath id="bgblur_6_60_102_clip_path" transform="translate(-485 -277)">
          <rect x="525" y="317" width="173" height="40" rx="20" />
        </clipPath>
        <clipPath id="bgblur_7_60_102_clip_path" transform="translate(-1243 -132)">
          <rect x="1283" y="172" width="122" height="40" rx="20" />
        </clipPath>
        <pattern id="pattern0_60_102" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_60_102" transform="matrix(0.000692998 0 0 0.00104167 0.00104167 0)" />
        </pattern>
        <clipPath id="bgblur_8_60_102_clip_path" transform="translate(-409 -580)">
          <rect x="449.5" y="620.5" width="103" height="103" rx="23.5" />
        </clipPath>
        <pattern id="pattern1_60_102" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_60_102" transform="scale(0.00208333)" />
        </pattern>
        <clipPath id="clip0_60_102">
          <rect width="1440" height="2883" fill="white" />
        </clipPath>
        <clipPath id="clip2_60_102">
          <rect width="1440" height="525" fill="white" transform="translate(0 2358)" />
        </clipPath>
        <clipPath id="clip3_60_102">
          <rect width="1440" height="957" fill="white" />
        </clipPath>
        <image id="image0_60_102" width="1440" height="960" preserveAspectRatio="none" xlinkHref="/images/lesson-0.jpg" />
        <image id="image1_60_102" width="480" height="480" preserveAspectRatio="none" xlinkHref="/images/lesson-1.jpg" />
      </defs>
      <g clipPath="url(#clip0_60_102)">
        <rect width="1440" height="2883" fill="white" />
      <Section1 />
      <Section2 />
      <Section3 />
      </g>
    </svg>
  )
}
