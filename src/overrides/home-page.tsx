import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { ContentImage } from '@/components/shared/content-image'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Open the full release for complete announcement details.'
  return value.length > 180 ? value.slice(0, 177).trimEnd() + '...' : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 18, { fresh: true })
  const featured = posts[0]
  const topStories = posts.slice(1, 4)
  const latest = posts.slice(4, 12)
  const spotlight = posts.slice(12, 16)

  return (
    <div className="min-h-screen bg-[#FFF7F8] text-neutral-900">
      <NavbarShell />
      <main>
        <section className="bg-[radial-gradient(circle_at_top_right,#FFDEDE_0%,#FFF7F8_58%,#ffffff_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div>
              <span className="inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Pressrelease.com
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Publish media-ready press releases with a clean SaaS newsroom experience.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
                Launch updates, leadership announcements, and campaign stories in a format built for trust, readability, and discovery.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="rounded-full bg-[#FF0B55] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#CF0F47]"
                >
                  See Pricing
                </Link>
                <Link
                  href="/updates"
                  className="rounded-full border border-[#FF0B55]/30 bg-white px-6 py-3 text-sm font-semibold text-[#CF0F47] transition-colors duration-200 hover:bg-[#FFDEDE]"
                >
                  Explore Latest News
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['Fast distribution', 'Release pages optimized for scanning and sharing'],
                  ['Editorial clarity', 'Strong headline hierarchy and structured summaries'],
                  ['Mobile-first', 'Responsive layouts with focused reading comfort'],
                ].map((item) => (
                  <div key={item[0]} className="rounded-2xl border border-rose-100 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CF0F47]">{item[0]}</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {featured ? (
                <Link href={`/updates/${featured.slug}`} className="group overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-[0_22px_65px_rgba(207,15,71,0.12)]">
                  <div className="relative h-56 overflow-hidden sm:h-72">
                    <ContentImage
                      src="/pressrelease/freepik-home.jpg"
                      alt="Press release homepage inspiration"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      intrinsicWidth={1280}
                      intrinsicHeight={720}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CF0F47]">Featured Release</p>
                    <h2 className="mt-2 text-2xl font-semibold leading-snug">{featured.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{excerpt(featured.summary)}</p>
                  </div>
                </Link>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-3">
                {topStories.map((post) => (
                  <Link
                    key={post.id}
                    href={`/updates/${post.slug}`}
                    className="rounded-2xl border border-rose-100 bg-white p-4 transition-colors duration-200 hover:bg-[#FFDEDE]/40"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CF0F47]">
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm font-semibold leading-6">{post.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CF0F47]">Latest News</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Recent press releases and announcements</h2>
            </div>
            <Link href="/updates" className="rounded-full border border-rose-200 px-4 py-2 text-sm font-medium hover:bg-[#FFDEDE]">
              View all news
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {latest.map((post) => (
              <Link
                key={post.id}
                href={`/updates/${post.slug}`}
                className="group rounded-2xl border border-rose-100 bg-white p-5 shadow-[0_10px_32px_rgba(17,24,39,0.06)] transition-transform duration-200 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#CF0F47]">
                  {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="mt-3 line-clamp-3 text-lg font-semibold leading-7">{post.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-neutral-600">{excerpt(post.summary)}</p>
                <p className="mt-4 text-sm font-semibold text-[#FF0B55] transition-colors group-hover:text-[#CF0F47]">Read release</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
          <div className="rounded-3xl border border-rose-100 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CF0F47]">Distribution Network</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Built for teams that need reliable media reach</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['1200+', 'Media outlets'],
                ['95%', 'Release delivery rate'],
                ['24/7', 'Publishing access'],
                ['70+', 'Industry categories'],
              ].map((item) => (
                <div key={item[0]} className="rounded-2xl border border-rose-100 bg-[#FFF7F8] p-4">
                  <p className="text-2xl font-semibold text-black">{item[0]}</p>
                  <p className="mt-1 text-sm text-neutral-600">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CF0F47]">How It Works</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Publish, distribute, and measure in three steps</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['01', 'Create release', 'Draft your announcement with a clear headline, summary, and media-ready structure.'],
              ['02', 'Select distribution', 'Pick the right plan and target reach for regional, national, or broad visibility.'],
              ['03', 'Track performance', 'Monitor engagement, pickup, and campaign insights directly from your dashboard.'],
            ].map((item) => (
              <article key={item[0]} className="rounded-2xl border border-rose-100 bg-white p-5 shadow-[0_10px_28px_rgba(17,24,39,0.06)]">
                <p className="text-sm font-semibold text-[#FF0B55]">{item[0]}</p>
                <h3 className="mt-2 text-xl font-semibold">{item[1]}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{item[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-rose-100 bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CF0F47]">Why Teams Choose Us</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">A modern press room without template clutter</h2>
              <ul className="mt-5 space-y-3 text-sm text-neutral-600">
                <li>Release-first layouts with stronger trust cues for media readers.</li>
                <li>Simple publishing workflow for communications and marketing teams.</li>
                <li>Fast discovery surfaces for latest news and individual release pages.</li>
                <li>Mobile-friendly design with light animations and clear hierarchy.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-rose-100 bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CF0F47]">Common Questions</p>
              <div className="mt-4 space-y-3">
                {[
                  ['How fast can I publish a release?', 'Most releases can be published the same day once content is finalized.'],
                  ['Can I update a published release?', 'Yes, you can revise release content while preserving the original route URL.'],
                  ['Do you support high-volume publishing?', 'Yes, Pro and Premium plans are built for consistent newsroom output.'],
                ].map((item) => (
                  <div key={item[0]} className="rounded-2xl border border-rose-100 bg-[#FFF7F8] p-4">
                    <p className="text-sm font-semibold text-black">{item[0]}</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-[#0B0B0B] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFDEDE]">Press strategy</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Plan distribution with transparent pricing and flexible add-ons.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
                Choose a publishing plan, compare media reach, and launch your next release with editorial confidence.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/pricing" className="rounded-full bg-[#FF0B55] px-5 py-2.5 text-sm font-semibold text-white">
                  Compare plans
                </Link>
                <Link href="/contact" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white">
                  Talk to sales
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {spotlight.map((post) => (
                <Link key={post.id} href={`/updates/${post.slug}`} className="block rounded-2xl border border-rose-100 bg-white p-4 hover:bg-[#FFDEDE]/40">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#CF0F47]">Spotlight</p>
                  <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6">{post.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
