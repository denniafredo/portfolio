/** Inline SVG icons — no icon library, keeps the bundle tiny. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
}

export const ArrowRight = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ExternalLink = (props) => (
  <svg {...base} {...props}>
    <path d="M14 4h6v6M20 4l-8.5 8.5" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
)

export const Code = (props) => (
  <svg {...base} {...props}>
    <path d="m9 17-5-5 5-5M15 7l5 5-5 5" />
  </svg>
)

export const Menu = (props) => (
  <svg {...base} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const ChevronRight = (props) => (
  <svg {...base} {...props}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const Download = (props) => (
  <svg {...base} {...props}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
)

export const Terminal = (props) => (
  <svg {...base} {...props}>
    <path d="m5 8 4 4-4 4M12 16h7" />
  </svg>
)

export const Sparkle = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2c.6 5.2 4.8 9.4 10 10-5.2.6-9.4 4.8-10 10-.6-5.2-4.8-9.4-10-10 5.2-.6 9.4-4.8 10-10Z" />
  </svg>
)

export const ArrowLeft = (props) => (
  <svg {...base} {...props}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

export const Expand = (props) => (
  <svg {...base} {...props}>
    <path d="M9 3H3v6M15 21h6v-6M21 9V3h-6M3 15v6h6" />
  </svg>
)

export const Plus = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)
