// Lucide 1.x dropped brand icons, so these are drawn on the same 24px grid
// and 2px stroke to sit next to the rest of the Lucide set.
type IconProps = { className?: string }

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />
    </svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.5h.01M12 16v-5.5M12 13a2.5 2.5 0 0 1 5 0v3" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.2z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
    </svg>
  )
}
