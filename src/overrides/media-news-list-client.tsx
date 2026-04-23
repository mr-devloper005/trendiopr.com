'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { SitePost } from '@/lib/site-connector'
import { normalizeCategory, CATEGORY_OPTIONS } from '@/lib/categories'

function getCategory(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const category = typeof content.category === 'string' ? content.category : ''
  return category ? normalizeCategory(category) : 'all'
}

function getSummary(post: SitePost) {
  const raw = (post.summary || '').trim()
  if (!raw) return 'Open the full release for complete details.'
  return raw.length > 170 ? `${raw.slice(0, 167).trimEnd()}...` : raw
}

function inDateWindow(post: SitePost, range: string) {
  if (range === 'all') return true
  const publishTime = new Date(post.publishedAt || Date.now()).getTime()
  const now = Date.now()
  const diffDays = (now - publishTime) / (1000 * 60 * 60 * 24)
  if (range === '7') return diffDays <= 7
  if (range === '30') return diffDays <= 30
  if (range === '365') return diffDays <= 365
  return true
}

export function MediaNewsListClient({ posts }: { posts: SitePost[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateRange, setDateRange] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((post) => {
      const title = post.title.toLowerCase()
      const summary = (post.summary || '').toLowerCase()
      const matchQuery = !q || title.includes(q) || summary.includes(q)
      const postCategory = getCategory(post)
      const matchCategory = category === 'all' || postCategory === category
      const matchDate = inDateWindow(post, dateRange)
      return matchQuery && matchCategory && matchDate
    })
  }, [posts, query, category, dateRange])

  return (
    <section className="space-y-6">
      <div className="grid gap-3 rounded-3xl border border-rose-100 bg-white p-4 shadow-[0_10px_34px_rgba(17,24,39,0.06)] sm:grid-cols-2 lg:grid-cols-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search press releases"
          className="h-11 rounded-xl border border-rose-100 px-3 text-sm outline-none ring-[#FF0B55]/35 transition focus:ring-2"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-11 rounded-xl border border-rose-100 px-3 text-sm outline-none ring-[#FF0B55]/35 transition focus:ring-2"
        >
          <option value="all">All categories</option>
          {CATEGORY_OPTIONS.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          value={dateRange}
          onChange={(event) => setDateRange(event.target.value)}
          className="h-11 rounded-xl border border-rose-100 px-3 text-sm outline-none ring-[#FF0B55]/35 transition focus:ring-2"
        >
          <option value="all">Any date</option>
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="365">Last 12 months</option>
        </select>
        <div className="flex h-11 items-center justify-center rounded-xl bg-[#0C0C0C] px-4 text-sm font-semibold text-white">
          {filtered.length} Results
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <Link
            key={post.id}
            href={`/updates/${post.slug}`}
            className="group rounded-2xl border border-rose-100 bg-white p-5 shadow-[0_10px_34px_rgba(17,24,39,0.06)] transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#CF0F47]">
              {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
            <h2 className="mt-3 line-clamp-3 text-lg font-semibold leading-7">{post.title}</h2>
            <p className="mt-3 line-clamp-4 text-sm leading-7 text-neutral-600">{getSummary(post)}</p>
            <p className="mt-4 text-sm font-semibold text-[#FF0B55] group-hover:text-[#CF0F47]">Read press release</p>
          </Link>
        ))}
      </div>

      {!filtered.length ? (
        <div className="rounded-2xl border border-dashed border-rose-200 bg-white p-10 text-center text-sm text-neutral-600">
          No releases found for your current filters.
        </div>
      ) : null}
    </section>
  )
}
