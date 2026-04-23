import Link from 'next/link'
import { Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    description: 'For startups launching occasional announcements.',
    features: ['Standard distribution', 'Release analytics', 'Email support'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$129',
    description: 'For teams running consistent media campaigns.',
    features: ['Extended distribution', 'Advanced analytics', 'Media pickup tracking', 'Priority support'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$299',
    description: 'For enterprise communication and PR agencies.',
    features: ['Global distribution', 'Custom newsroom', 'Dedicated strategist', 'White-label options'],
    popular: false,
  },
]

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can upgrade or downgrade your plan at any time from your account settings.',
  },
  {
    q: 'Do you charge per user?',
    a: 'No. Pricing is based on publishing volume and distribution level, not individual seats.',
  },
  {
    q: 'Do you support agency accounts?',
    a: 'Yes. Pro and Premium plans include workflows for multi-brand and client submissions.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FFF7F8] text-neutral-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-[0_16px_48px_rgba(17,24,39,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CF0F47]">Pricing</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Choose the right media distribution plan</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
              Transparent plans for teams that need reliable publishing, broader media reach, and analytics that prove campaign impact.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white">
            <div className="relative h-full min-h-[260px]">
              <ContentImage
                src="/pressrelease/freepik-pricing.jpg"
                alt="Pricing page reference"
                fill
                className="object-cover"
                intrinsicWidth={1280}
                intrinsicHeight={720}
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-[0_12px_36px_rgba(17,24,39,0.08)] transition-transform duration-200 hover:-translate-y-1 ${
                plan.popular ? 'border-[#FF0B55] bg-white' : 'border-rose-100 bg-white'
              }`}
            >
              {plan.popular ? (
                <p className="inline-flex rounded-full bg-[#FF0B55] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Most Popular
                </p>
              ) : null}
              <h2 className="mt-3 text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-1 text-sm text-neutral-600">{plan.description}</p>
              <p className="mt-5 text-4xl font-semibold tracking-tight">{plan.price}</p>
              <p className="text-sm text-neutral-500">per release</p>
              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="mt-0.5 h-4 w-4 text-[#CF0F47]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${
                  plan.popular ? 'bg-[#FF0B55] text-white hover:bg-[#CF0F47]' : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                Start {plan.name}
              </button>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-rose-100 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Features comparison</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rose-100 text-neutral-500">
                  <th className="pb-3 font-medium">Feature</th>
                  <th className="pb-3 font-medium">Basic</th>
                  <th className="pb-3 font-medium">Pro</th>
                  <th className="pb-3 font-medium">Premium</th>
                </tr>
              </thead>
              <tbody className="text-neutral-700">
                <tr className="border-b border-rose-100">
                  <td className="py-3 font-medium">Distribution level</td>
                  <td>Standard</td>
                  <td>Extended</td>
                  <td>Global</td>
                </tr>
                <tr className="border-b border-rose-100">
                  <td className="py-3 font-medium">Analytics</td>
                  <td>Core metrics</td>
                  <td>Advanced dashboard</td>
                  <td>Custom reporting</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Media reach</td>
                  <td>Regional</td>
                  <td>National</td>
                  <td>International + niche media</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-rose-100 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Add-ons</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
              <li>Editorial review and headline optimization</li>
              <li>Featured newsroom placement</li>
              <li>Translation and multi-language distribution</li>
              <li>Campaign-based distribution bundles</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
            <div className="mt-4 space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-2xl border border-rose-100 bg-[#FFF7F8] p-4">
                  <p className="text-sm font-semibold">{item.q}</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-[#0C0C0C] px-6 py-8 text-white sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Need custom enterprise distribution?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-300">
            Talk to our team about enterprise governance, volume pricing, and white-labeled newsroom workflows.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-[#FF0B55] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#CF0F47]"
          >
            Contact sales
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
