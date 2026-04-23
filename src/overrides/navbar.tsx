'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const primaryLinks = [
  { label: 'Latest News', href: '/updates' },
  { label: 'Pricing', href: '/pricing' },
]

const secondaryLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/95 text-neutral-900 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="rounded-xl bg-black px-2.5 py-1.5 text-sm font-bold text-white">PR</div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold tracking-tight">{SITE_CONFIG.name}</p>
            <p className="truncate text-[11px] uppercase tracking-[0.2em] text-[#CF0F47]">Media Release Room</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {primaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#FFDEDE] hover:text-black"
            >
              {item.label}
            </Link>
          ))}
          {secondaryLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="hidden rounded-full border border-rose-100 p-2.5 text-neutral-700 transition-colors duration-200 hover:bg-[#FFDEDE] md:inline-flex"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Link>
          <Link
            href="/register"
            className="hidden rounded-full bg-[#FF0B55] px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#CF0F47] md:inline-flex"
          >
            Submit Release
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-rose-100 p-2.5 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-rose-100 bg-white px-4 py-4 md:hidden">
          <div className="space-y-2">
            {[...primaryLinks, ...secondaryLinks].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-[#FFDEDE] hover:text-black"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-xl bg-[#FF0B55] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Submit Release
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
