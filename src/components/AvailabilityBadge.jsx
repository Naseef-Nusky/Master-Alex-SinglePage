import { SITE } from '../constants/siteData'
import { CalendarIcon } from './Icons'

export default function AvailabilityBadge({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-2xl border px-4 py-3 ${
        isDark
          ? 'border-white/10 bg-white/5'
          : 'border-master-gold/20 bg-gradient-to-r from-master-gold/10 via-white to-master-gold/5 shadow-sm'
      } ${className}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          isDark ? 'bg-master-gold/15 text-master-gold' : 'bg-master-gold/15 text-master-gold-dark'
        }`}
      >
        <CalendarIcon className="h-5 w-5" />
      </span>
      <span>
        <span className={`block text-sm font-bold ${isDark ? 'text-white' : 'text-master-purple'}`}>
          {SITE.availability.title}
        </span>
        <span className={`block text-xs ${isDark ? 'text-white/55' : 'text-master-muted'}`}>
          {SITE.availability.description}
        </span>
      </span>
    </div>
  )
}
