import { useEffect } from 'react'
import { SITE } from '../constants/siteData'

export default function ThankYou() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload()
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="rounded-2xl border border-gray-100 bg-gradient-to-b from-master-purple via-master-purple-light to-master-dark p-8 text-center text-white shadow-sm md:p-12">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-master-gold/30 bg-master-gold/10">
        <svg className="h-10 w-10 text-master-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <span className="mb-4 inline-block rounded-full border border-master-gold/30 bg-master-gold/10 px-4 py-1.5 text-xs font-bold tracking-widest text-master-gold uppercase">
        Message Sent
      </span>

      <h2 className="text-3xl font-extrabold md:text-4xl">Thank You!</h2>
      <p className="mt-4 text-lg text-white/85">Your message has been received successfully.</p>
      <p className="mt-2 text-base text-white/60">
        {SITE.name} will contact you shortly. For urgent enquiries, call us directly.
      </p>

      <div className="mt-8 flex items-center justify-center">
        <a
          href={SITE.phoneLink}
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-master-purple shadow-lg transition hover:bg-white/90"
        >
          Call {SITE.phone}
        </a>
      </div>
    </div>
  )
}
