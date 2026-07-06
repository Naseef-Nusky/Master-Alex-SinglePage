import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import ThankYou from './components/ThankYou'
import ServiceCard from './components/ServiceCard'
import ContactInfo from './components/ContactInfo'
import AvailabilityBadge from './components/AvailabilityBadge'
import { PhoneIcon, CheckIcon } from './components/Icons'
import { SITE, SERVICES, WHY_CHOOSE } from './constants/siteData'

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSuccess = () => {
    setFormSubmitted(true)
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-master-purple">
      <Header />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:pt-32"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={SITE.heroBg}
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-master-purple/80 via-master-purple/70 to-master-dark/90" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-master-gold-light md:text-base">
            {SITE.tagline}
          </p>
          <h1 className="mx-auto flex max-w-3xl flex-col gap-1 text-xl font-extrabold leading-snug sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="gold-text">{SITE.headlineLine1}</span>
            <span className="gold-text">{SITE.headlineLine2}</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {SITE.intro}
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={SITE.phoneLink}
              className="btn-gold inline-flex items-center gap-2 rounded-2xl px-8 py-3.5 text-base font-bold shadow-lg"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-master-surface px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold tracking-widest text-master-gold uppercase">Our Services</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Wellness & Spiritual Guidance</h2>
          </div>
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {SERVICES.map((service, i) => {
              const isLastAlone = i === SERVICES.length - 1 && SERVICES.length % 2 === 1
              return (
                <div
                  key={service.title}
                  className={
                    isLastAlone
                      ? 'h-full sm:col-span-2 sm:max-w-md sm:justify-self-center sm:w-full lg:col-span-2 lg:max-w-md lg:justify-self-center'
                      : 'h-full'
                  }
                >
                  <ServiceCard service={service} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About + Why Choose */}
      <section id="about" className="bg-gradient-to-b from-white via-master-surface/40 to-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-master-purple md:text-4xl">Why Choose Us?</h2>
              </div>

              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {WHY_CHOOSE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white/80 px-5 py-4 text-master-muted shadow-sm backdrop-blur"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-master-gold/10 text-master-gold-dark">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-master-gold/25 via-purple-500/10 to-master-purple/5 blur-md" />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 shadow-2xl shadow-master-purple/10 backdrop-blur">
                  <img
                    src={SITE.aboutImage}
                    alt={`${SITE.name} wellness space`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Session */}
      <section id="book" className="bg-master-surface px-4 py-20">
        <div className="mx-auto max-w-6xl">
          {formSubmitted ? (
            <ThankYou
              onBack={() => {
                setFormSubmitted(false)
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          ) : (
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-bold tracking-widest text-master-gold uppercase">Book Your Session</span>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">We&apos;d Love to Welcome You</h2>
                <AvailabilityBadge className="mt-5" />

                <div className="mt-8">
                  <ContactInfo />
                </div>
              </div>

              <div id="contact" className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <ContactForm
                  buttonLabel="Send Message"
                  page="Book Your Session"
                  onSuccess={handleFormSuccess}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
