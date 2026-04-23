import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF7F8] text-neutral-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-rose-100 bg-white p-8 shadow-[0_16px_48px_rgba(17,24,39,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CF0F47]">About Us</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {SITE_CONFIG.name} is built for clear, high-trust media communication.
            </h1>
            <p className="mt-5 text-sm leading-8 text-neutral-600">
              We designed this platform to help communication teams publish releases that look credible, stay searchable, and support real campaign outcomes. Instead of a generic CMS shell, every experience is optimized for press release publishing.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Editorial-first layouts for better readability',
                'Modern SaaS controls with lightweight UI motion',
                'Fast release discovery with filters and search',
                'Scalable workflows from startup to enterprise',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-rose-100 bg-[#FFF7F8] px-4 py-3 text-sm text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-rose-100 bg-white">
            <div className="relative h-full min-h-[280px]">
              <ContentImage
                src="/pressrelease/freepik-about.jpg"
                alt="Press release homepage visual"
                fill
                className="object-cover"
                intrinsicWidth={1280}
                intrinsicHeight={720}
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Mission',
              text: 'Help brands and institutions deliver announcements with speed, accuracy, and professional presentation.',
            },
            {
              title: 'Approach',
              text: 'Blend newsroom credibility with product-grade UX so publishing teams can move confidently.',
            },
            {
              title: 'Commitment',
              text: 'Keep platform performance strong on mobile and desktop while preserving accessible reading experiences.',
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-rose-100 bg-white p-5">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl bg-[#0C0C0C] px-6 py-8 text-white sm:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Want to partner with our newsroom team?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-300">
            Reach us for distribution partnerships, agency workflows, and enterprise communication support.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#FF0B55] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#CF0F47]">
              Contact Us
            </Link>
            <Link href="/pricing" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white">
              View Pricing
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
