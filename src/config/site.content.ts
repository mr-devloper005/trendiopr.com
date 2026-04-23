import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Trusted media distribution',
  },
  footer: {
    tagline: 'Built for press release teams',
  },
  hero: {
    badge: 'PR publishing platform',
    title: ['Distribute releases that look credible and convert attention.'],
    description:
      'Publish announcements, keep your newsroom organized, and give journalists a clean release experience across devices.',
    primaryCta: {
      label: 'Browse latest releases',
      href: '/updates',
    },
    secondaryCta: {
      label: 'View pricing',
      href: '/pricing',
    },
    searchPlaceholder: 'Search releases by keyword',
    focusLabel: 'Latest releases',
    featureCardBadge: 'media note',
    featureCardTitle: 'Track campaigns, coverage, and newsroom momentum.',
    featureCardDescription:
      'The experience keeps core publishing actions visible while helping visitors quickly scan announcements and related stories.',
  },
  home: {
    metadata: {
      title: 'Press releases, company news, and latest updates',
      description:
        'Explore the latest press releases, campaign updates, and media announcements from PressRelease.com.',
      openGraphTitle: 'Press releases, company news, and latest updates',
      openGraphDescription:
        'A modern newsroom experience focused on credible publishing, distribution, and reader-friendly release pages.',
      keywords: ['press release', 'newsroom', 'media distribution', 'company announcements'],
    },
    introBadge: 'About the platform',
    introTitle: 'A purpose-built newsroom for media distribution teams.',
    introParagraphs: [
      'PressRelease.com is designed for organizations that need structured release publishing, not a generic blog shell.',
      'Every section supports newsroom workflows: clear scanning, trusted presentation, and smooth navigation from listing to full release.',
      'The interface balances SaaS clarity with editorial credibility so communication teams can move faster.',
    ],
    sideBadge: 'What we prioritize',
    sidePoints: [
      'Press release-first homepage architecture.',
      'Fast filtering and search across the latest news.',
      'Readable single release pages with social sharing.',
      'Clean, conversion-oriented pricing and contact flows.',
    ],
    primaryLink: {
      label: 'Open latest news',
      href: '/updates',
    },
    secondaryLink: {
      label: 'See pricing',
      href: '/pricing',
    },
  },
  cta: {
    badge: 'Publish with confidence',
    title: 'Create a newsroom that looks professional to media, partners, and customers.',
    description:
      'From launch updates to funding news, your releases stay clear, searchable, and distribution-ready.',
    primaryCta: {
      label: 'Start now',
      href: '/register',
    },
    secondaryCta: {
      label: 'Contact sales',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest news',
  taskSectionDescriptionSuffix: 'Read the newest press releases and announcements.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles',
    description: 'Read the latest posts and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore listings and directory-style entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classifieds and short-form notices.',
  },
  image: {
    title: 'Images',
    description: 'Browse image-led updates and visual posts.',
  },
  profile: {
    title: 'Profiles',
    description: 'View profile pages and public identities.',
  },
  sbm: {
    title: 'Bookmarks',
    description: 'Browse curated resources and saved links.',
  },
  pdf: {
    title: 'Resources',
    description: 'Open PDFs and downloadable files.',
  },
  mediaDistribution: {
    title: 'Latest news',
    description: 'Read the latest press releases and announcements.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Listings', paragraphs: ['Directory entries and service pages.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Articles', paragraphs: ['General long-form article feed.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Classifieds', paragraphs: ['Short-form posts and notices.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Images', paragraphs: ['Image-first posts and galleries.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Profiles', paragraphs: ['Profile pages and identity surfaces.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Bookmarks', paragraphs: ['Curated saved links and references.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Resources', paragraphs: ['Downloadable files and documents.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short updates and activity.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Commentary and response posts.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Organization pages and entities.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Latest news',
    paragraphs: [
      'This newsroom archive is designed for release distribution: launches, funding updates, product announcements, and media statements.',
      'Use category and date filters to quickly locate relevant releases while keeping the reading experience clear and fast.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
