import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#FFF7F8] text-neutral-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h1 className="text-center text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-7 text-neutral-600">
          Reach our media distribution team for account questions, release planning, and publishing support.
        </p>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-[0_16px_48px_rgba(17,24,39,0.08)] sm:p-8">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="h-12 rounded-xl border border-rose-100 px-4 text-sm" placeholder="Contact Name *" />
                <input className="h-12 rounded-xl border border-rose-100 px-4 text-sm" placeholder="Phone Number" />
              </div>
              <input className="h-12 rounded-xl border border-rose-100 px-4 text-sm" placeholder="Email *" />
              <div className="grid gap-4 sm:grid-cols-2">
                <select className="h-12 rounded-xl border border-rose-100 px-4 text-sm">
                  <option>What type of organization are you?</option>
                  <option>Startup</option>
                  <option>Agency</option>
                  <option>Enterprise</option>
                </select>
                <select className="h-12 rounded-xl border border-rose-100 px-4 text-sm">
                  <option>Subject: How may we help you?</option>
                  <option>Pricing</option>
                  <option>Distribution support</option>
                  <option>Editorial guidance</option>
                </select>
              </div>
              <textarea
                className="min-h-[160px] rounded-xl border border-rose-100 px-4 py-3 text-sm"
                placeholder="Message / Comment *"
              />
              <button
                type="submit"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#FF0B55] px-8 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#CF0F47]"
              >
                Submit Now
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white">
              <div className="relative h-52">
                <ContentImage
                  src="/pressrelease/freepik-contact.jpg"
                  alt="Contact page reference"
                  fill
                  className="object-cover"
                  intrinsicWidth={1200}
                  intrinsicHeight={800}
                />
              </div>
            </div>
            <div className="rounded-3xl border border-rose-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CF0F47]">Telephone Hours</p>
              <p className="mt-3 text-sm text-neutral-700">Monday to Friday</p>
              <p className="text-sm text-neutral-700">8:30am to 5:00pm Pacific</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#CF0F47]">Toll Free Telephone</p>
              <p className="mt-3 text-sm text-neutral-700">+1 (888) 880-9539</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#CF0F47]">US Address</p>
              <p className="mt-3 text-sm leading-6 text-neutral-700">Suite 1400, 505 Second Avenue, Seattle, WA 98104</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-[#0C0C0C] px-6 py-8 text-white sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Please take a moment to check our FAQs</h2>
          <p className="mt-2 max-w-2xl text-sm text-neutral-300">
            Quick answers on release approvals, distribution timelines, payment, and account setup.
          </p>
          <a
            href="/help"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#FFDEDE]"
          >
            View FAQs
          </a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
