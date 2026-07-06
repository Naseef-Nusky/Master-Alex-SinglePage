import { SITE } from '../constants/siteData'
import { PhoneIcon, EmailIcon } from './Icons'

function ContactItem({ icon: Icon, label, href, children }) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 rounded-xl border border-gray-100 bg-master-surface p-4 transition hover:border-master-gold/30 hover:bg-white"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-master-gold/10 text-master-gold-dark">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-semibold tracking-wide text-master-muted uppercase">{label}</span>
        <span className="mt-1 block text-sm font-semibold text-master-purple">{children}</span>
      </span>
    </a>
  )
}

export default function ContactInfo() {
  return (
    <div className="space-y-3">
      <ContactItem icon={PhoneIcon} label="Phone" href={SITE.phoneLink}>
        {SITE.phone}
      </ContactItem>
      <ContactItem icon={EmailIcon} label="Email" href={`mailto:${SITE.email}`}>
        {SITE.email}
      </ContactItem>
    </div>
  )
}
