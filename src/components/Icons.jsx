// Ícones SVG inline (stroke = currentColor) para não depender de lib externa.
// Todos aceitam props padrão de <svg> (className, etc.).

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
}

export const HomeIcon = (p) => (
  <svg {...base} {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
)

export const DumbbellIcon = (p) => (
  <svg {...base} {...p}><path d="m6.5 6.5 11 11" /><path d="M21 21l-1-1" /><path d="M3 3l1 1" /><path d="M18 22l4-4" /><path d="M2 6l4-4" /><path d="m3 10 7-7" /><path d="m14 21 7-7" /></svg>
)

export const ChartIcon = (p) => (
  <svg {...base} {...p}><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></svg>
)

export const HistoryIcon = (p) => (
  <svg {...base} {...p}><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l3 2" /></svg>
)

export const UserIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
)

export const TargetIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
)

export const FlameIcon = (p) => (
  <svg {...base} {...p}><path d="M12 3c2 3 4 5 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-3 .5 2 2 2 2 0 0-2-1-3 1-5Z" /></svg>
)

export const ClockIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)

export const PlusIcon = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
)

export const MinusIcon = (p) => (
  <svg {...base} {...p}><path d="M5 12h14" /></svg>
)

export const CheckIcon = (p) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
)

export const ChevronLeftIcon = (p) => (
  <svg {...base} {...p}><path d="m15 18-6-6 6-6" /></svg>
)

export const ChevronRightIcon = (p) => (
  <svg {...base} {...p}><path d="m9 18 6-6-6-6" /></svg>
)

export const TrendUpIcon = (p) => (
  <svg {...base} {...p}><path d="m3 17 6-6 4 4 8-8" /><path d="M21 7v6h-6" /></svg>
)

export const SunIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
)

export const MoonIcon = (p) => (
  <svg {...base} {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
)

export const SettingsIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 4.6 15H4a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 11 4.6V4a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 21 11h.1a2 2 0 1 1 0 4Z" /></svg>
)
