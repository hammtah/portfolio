// Date format types
export type DateFormat = 'YYYY-MM-DD' | 'MM-DD-YYYY' | 'DD-MM-YYYY' | 'MONTH DAY YYYY' | 'DAY MONTH YYYY'

// Social links configuration type
export interface SocialLinks {
  email?: string
  github?: string
  linkedin?: string
  x?: string
}

// Navigation item configuration type
export interface NavItem {
  label: string
  href: string
  primary?: boolean
}

// Site info configuration type
export interface SiteInfo {
  website: string
  title: string
  author: string
  role?: string
  tagline?: string
  heroHeadline?: string
  heroBio?: string
  description: string
  language: string
  social: SocialLinks
  nav: NavItem[]
}

// General settings configuration type
export interface GeneralSettings {
  contentWidth: string
  centeredLayout: boolean
  themeToggle: boolean
  postListDottedDivider: boolean
  footer: boolean
  fadeAnimation: boolean
}

// Date settings configuration type
export interface DateSettings {
  dateFormat: DateFormat
  dateSeparator: string
  dateOnRight: boolean
}

// Post settings configuration type
export interface PostSettings {
  readingTime: boolean
  toc: boolean
  imageViewer: boolean
  copyCode: boolean
  katex: boolean
  linkCard: boolean
}

// Theme configuration type
export interface ThemeConfig {
  site: SiteInfo
  general: GeneralSettings
  date: DateSettings
  post: PostSettings
}
