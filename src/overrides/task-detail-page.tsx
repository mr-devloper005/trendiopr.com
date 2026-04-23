import Link from 'next/link'
import { notFound } from 'next/navigation'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'
import { ContentImage } from '@/components/shared/content-image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 4)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Release content will appear here.')
  const canonicalPostUrl = `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/updates/${post.slug}`
  const subtitle =
    typeof content.description === 'string' && content.description.trim()
      ? content.description
      : post.summary || 'Read the complete release details below.'

  return (
    <div className="min-h-screen bg-[#FFF7F8] text-neutral-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-[0_16px_48px_rgba(17,24,39,0.08)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CF0F47]">Press Release</p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{post.title}</h1>
            <p className="mt-4 max-w-4xl text-base leading-8 text-neutral-600">{subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
              <span className="rounded-full bg-black px-3 py-1.5 text-white">
                {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span>By {post.authorName || 'PressRelease.com Editorial Team'}</span>
            </div>

            <div className="mt-8 relative h-64 overflow-hidden rounded-2xl border border-rose-100 sm:h-96">
              <ContentImage
                src="/pressrelease/freepik-single-release.jpg"
                alt="Press release detail page inspiration"
                fill
                className="object-cover"
                intrinsicWidth={1280}
                intrinsicHeight={720}
              />
            </div>

            <div className="prose prose-lg mt-8 max-w-none prose-headings:font-semibold prose-p:leading-8 prose-a:text-[#CF0F47]">
              <RichContent html={html} />
            </div>

            <div className="mt-10 rounded-2xl border border-rose-100 bg-[#FFF7F8] p-5">
              <p className="text-sm font-semibold text-neutral-800">Share this release</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  {
                    label: 'Twitter',
                    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonicalPostUrl)}`,
                    icon: Twitter,
                  },
                  {
                    label: 'Facebook',
                    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalPostUrl)}`,
                    icon: Facebook,
                  },
                  {
                    label: 'LinkedIn',
                    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalPostUrl)}`,
                    icon: Linkedin,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-[#FFDEDE]"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-rose-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CF0F47]">Navigation</p>
              <div className="mt-4 space-y-3 text-sm">
                <Link href="/" className="block hover:text-[#CF0F47]">
                  Home
                </Link>
                <Link href="/updates" className="block hover:text-[#CF0F47]">
                  Latest News
                </Link>
                <Link href="/pricing" className="block hover:text-[#CF0F47]">
                  Pricing
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CF0F47]">Contact media desk</p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Need clarification or a follow-up statement? Reach our editorial response team.
              </p>
              <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-[#FF0B55]">
                Open contact page
              </Link>
            </div>
          </aside>
        </div>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">Related articles</h2>
            <Link href="/updates" className="text-sm font-semibold text-[#FF0B55]">
              Browse all
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recent.map((item) => (
              <Link key={item.id} href={`/updates/${item.slug}`} className="rounded-2xl border border-rose-100 bg-white p-4 hover:bg-[#FFDEDE]/40">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#CF0F47]">Related</p>
                <p className="mt-2 line-clamp-3 text-sm font-semibold leading-6">{item.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
