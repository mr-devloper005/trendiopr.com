export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'pcc90tnbd0',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'TrendioPR.com',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Media distribution for modern brands',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'PressRelease.com helps teams publish trusted press releases, syndicate announcements, and track media reach from a single newsroom.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'pressrelease.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pressrelease.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
