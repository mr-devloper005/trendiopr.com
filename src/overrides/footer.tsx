import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="mt-20 border-t border-rose-100 bg-[#0C0C0C] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{SITE_CONFIG.name}</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-300">
            Publish trusted company announcements, distribute releases, and keep your newsroom accessible for media and investors.
          </p>
          <Link
            href="/register"
            className="mt-6 inline-flex rounded-full bg-[#FF0B55] px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#CF0F47]"
          >
            Submit Your First Release
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFDEDE]">Primary</p>
          <div className="mt-4 space-y-3 text-sm text-neutral-300">
            <Link href="/updates" className="block hover:text-white">
              Latest News
            </Link>
            <Link href="/pricing" className="block hover:text-white">
              Pricing
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFDEDE]">Company</p>
          <div className="mt-4 space-y-3 text-sm text-neutral-300">
            <Link href="/about" className="block hover:text-white">
              About Us
            </Link>
            <Link href="/contact" className="block hover:text-white">
              Contact
            </Link>
            <Link href="/team" className="block hover:text-white">
              Team
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFDEDE]">Legal</p>
          <div className="mt-4 space-y-3 text-sm text-neutral-300">
            <Link href="/privacy" className="block hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="block hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="block hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-neutral-400 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Designed for media release distribution workflows.</p>
        </div>
      </div>
    </footer>
  )
}
