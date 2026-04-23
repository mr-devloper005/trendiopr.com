import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { MediaNewsListClient } from '@/overrides/media-news-list-client'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 40, { fresh: true })
  const lead = posts[0]
  const trendItems = posts.slice(1, 5)

  return (
    <div className="min-h-screen bg-[#FFF7F8] text-neutral-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-rose-100 bg-white p-7 shadow-[0_16px_48px_rgba(207,15,71,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CF0F47]">Latest News</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Press release listing with fast filters and search</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
              Discover announcements by topic, narrow by date windows, and open full release pages with clean editorial hierarchy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="rounded-full bg-[#FF0B55] px-5 py-2.5 text-sm font-semibold text-white">
                Compare Plans
              </Link>
              <Link href="/contact" className="rounded-full border border-rose-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-[#FFDEDE]">
                Contact Editorial Team
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-rose-100 bg-white p-4">
            <div className="relative h-full min-h-[240px] overflow-hidden rounded-2xl">
              <ContentImage
                src="/pressrelease/freepik-latest-news.jpg"
                alt="Latest news grid inspiration"
                fill
                className="object-cover"
                intrinsicWidth={960}
                intrinsicHeight={1280}
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
          <MediaNewsListClient posts={posts} />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-rose-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CF0F47]">Trending</p>
              <div className="mt-4 space-y-4">
                {trendItems.map((item) => (
                  <Link key={item.id} href={`/updates/${item.slug}`} className="block border-b border-rose-100 pb-4 last:border-b-0 last:pb-0">
                    <p className="line-clamp-2 text-sm font-semibold leading-6">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
            {lead ? (
              <div className="rounded-2xl border border-rose-100 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CF0F47]">Lead story</p>
                <h2 className="mt-3 text-lg font-semibold leading-7">{lead.title}</h2>
                <p className="mt-2 text-xs text-neutral-500">
                  {new Date(lead.publishedAt || Date.now()).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <Link href={`/updates/${lead.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#FF0B55]">
                  Open article
                </Link>
              </div>
            ) : null}
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  )
}
