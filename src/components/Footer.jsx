import { SITE } from '../constants/siteData'
import { PhoneIcon, EmailIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-master-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="/" className="mb-5 inline-block">
              <img
                src={SITE.logo}
                alt={SITE.name}
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            </a>
            <p className="text-sm leading-relaxed text-white/50 sm:text-base">{SITE.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href={SITE.phoneLink}
                className="flex items-center gap-2 text-white/70 transition hover:text-master-gold"
              >
                <PhoneIcon className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-white/70 transition hover:text-master-gold"
              >
                <EmailIcon className="h-4 w-4" />
                {SITE.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white/40 uppercase">Legal</h3>
            <div className="space-y-3 text-sm">
              <a href="/terms" className="block text-white/70 transition hover:text-master-gold">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/40 sm:px-6">
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
