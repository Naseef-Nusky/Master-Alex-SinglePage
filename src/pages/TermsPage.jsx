import Header from '../components/Header'
import Footer from '../components/Footer'
import { PhoneIcon, EmailIcon } from '../components/Icons'
import { SITE } from '../constants/siteData'

function Divider() {
  return <hr className="my-8 border-gray-200" />
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-master-purple md:text-xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-master-muted md:text-base">{children}</div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-master-purple">
      <Header />

      <main className="px-4 pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-master-gold uppercase">Legal</span>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm leading-relaxed text-master-muted md:text-base">
            Welcome to Master Alex. By booking an appointment or using our services, you agree to the following Terms
            &amp; Conditions.
          </p>

          <div className="mt-10 rounded-2xl border border-gray-100 bg-master-surface/50 p-6 md:p-10">
            <Section title="1. Our Services">
              <p>
                Master Alex provides spiritual wellness services including guided meditation, crystal healing, psychic
                readings, card readings, crystal candles, and related spiritual guidance. These services are intended to
                support personal wellbeing, self-reflection, relaxation, and personal development.
              </p>
            </Section>

            <Divider />

            <Section title="2. Nature of Our Services">
              <p>
                Our services are provided for spiritual, personal, and entertainment purposes only. Any guidance,
                insight, or interpretation shared during a session is offered to assist personal reflection and should
                not be regarded as a guarantee or prediction of future events or outcomes.
              </p>
              <p>Clients remain solely responsible for their own decisions and actions.</p>
            </Section>

            <Divider />

            <Section title="3. Medical, Legal & Financial Disclaimer">
              <p>
                Our services are not intended to diagnose, treat, cure, or prevent any physical or mental health
                condition.
              </p>
              <p>
                We do not provide medical, legal, financial, psychological, or other regulated professional advice. If
                you require assistance in these areas, you should seek advice from a suitably qualified professional.
              </p>
            </Section>

            <Divider />

            <Section title="4. Eligibility">
              <p>
                Clients must be at least 18 years of age to book a session unless accompanied by a parent or legal
                guardian or where otherwise permitted by applicable law.
              </p>
              <p>By booking a session, you confirm that you meet this requirement.</p>
            </Section>

            <Divider />

            <Section title="5. Bookings">
              <p>Appointments are subject to availability and are confirmed once accepted.</p>
              <p>
                Please arrive on time for your appointment. Late arrivals may result in a shorter session without
                reducing the agreed fee.
              </p>
            </Section>

            <Divider />

            <Section title="6. Payments">
              <p>
                Payment is required at the time of booking or immediately before your appointment unless otherwise agreed.
              </p>
              <p>All prices are displayed in Pounds Sterling (£) and may be amended without prior notice.</p>
            </Section>

            <Divider />

            <Section title="7. Cancellations & Refunds">
              <p>Appointments cancelled with at least 24 hours&apos; notice may be rescheduled.</p>
              <p>
                Cancellations made with less than 24 hours&apos; notice, missed appointments, or failure to attend may be
                non-refundable.
              </p>
              <p>Refund requests will be considered where required under applicable consumer law.</p>
            </Section>

            <Divider />

            <Section title="8. Confidentiality">
              <p>Your privacy is important to us.</p>
              <p>
                Information shared during your session will be treated confidentially unless disclosure is required by
                law or where there is a genuine concern regarding the safety or wellbeing of yourself or others.
              </p>
            </Section>

            <Divider />

            <Section title="9. Online Sessions">
              <p>
                Clients booking online appointments are responsible for ensuring they have a suitable internet connection
                and a quiet, private environment.
              </p>
              <p>
                Master Alex is not responsible for interruptions caused by technical issues beyond our reasonable
                control.
              </p>
            </Section>

            <Divider />

            <Section title="10. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Master Alex shall not be liable for any direct, indirect,
                incidental, consequential, or special loss arising from the use of our services or reliance upon any
                guidance or information provided during a session.
              </p>
              <p>Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law.</p>
            </Section>

            <Divider />

            <Section title="11. Intellectual Property">
              <p>
                All website content, branding, logos, images, written material, and other intellectual property remain
                the property of Master Alex unless otherwise stated.
              </p>
              <p>No content may be copied, reproduced, distributed, or used without prior written permission.</p>
            </Section>

            <Divider />

            <Section title="12. Changes to These Terms">
              <p>Master Alex reserves the right to amend these Terms &amp; Conditions at any time.</p>
              <p>
                The most current version will always be published on this website and will take effect immediately upon
                publication.
              </p>
            </Section>

            <Divider />

            <Section title="13. Contact Information">
              <p>If you have any questions regarding these Terms &amp; Conditions or our services, please contact us:</p>
              <p className="font-semibold text-master-purple">{SITE.name}</p>
              <div className="space-y-2 pt-1">
                <a
                  href={SITE.phoneLink}
                  className="flex items-center gap-2 font-semibold text-master-gold-dark transition hover:text-master-gold"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call or WhatsApp: {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 font-semibold text-master-gold-dark transition hover:text-master-gold"
                >
                  <EmailIcon className="h-4 w-4" />
                  Email: {SITE.email}
                </a>
              </div>
            </Section>

            <Divider />

            <Section title="14. Client Conduct">
              <p>
                We are committed to providing a safe, respectful, and welcoming environment for every client.
              </p>
              <p>
                Clients are expected to behave respectfully throughout all appointments. Master Alex reserves the right to
                refuse or terminate a session without a refund if a client displays abusive, threatening, discriminatory,
                inappropriate, or unlawful behaviour, or acts in a way that compromises the safety, wellbeing, or comfort
                of our staff or other clients.
              </p>
              <p>
                By booking a session, you agree to treat everyone with courtesy and respect and to use our services in
                accordance with these Terms &amp; Conditions.
              </p>
            </Section>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-master-gold px-6 py-3 text-sm font-semibold text-master-dark transition hover:bg-master-gold-light"
            >
              Back to Home
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
