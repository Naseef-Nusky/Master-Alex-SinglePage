import { SITE } from '../constants/siteData'
import { PhoneIcon } from './Icons'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-master-purple/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="relative flex h-24 items-center justify-between gap-2 sm:h-32">
          <a
            href={SITE.phoneLink}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:border-master-gold/40 hover:bg-white/10 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>Call</span>
          </a>

          <a
            href="#home"
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center transition-transform hover:scale-105"
          >
            <img
              src={SITE.logo}
              alt={SITE.name}
              className="h-16 w-16 object-contain sm:h-28 sm:w-28 md:h-32 md:w-32"
            />
          </a>

          <a
            href="#book"
            className="inline-flex min-h-11 items-center rounded-xl bg-master-gold px-3 py-2 text-xs font-semibold text-master-dark transition hover:bg-master-gold-light sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Session</span>
          </a>
        </div>
      </div>
    </header>
  )
}
