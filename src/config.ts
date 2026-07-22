import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://example.com/', // Site domain
    title: 'Taha', // Site title
    author: 'Taha Hammadate', // Author name
    role: 'Software Engineer', // Professional role
    tagline: 'Building thoughtful software and sharing what I learn.', // Short intro line
    heroHeadline: "Hi, I'm Taha. I turn ideas into software that works.",
    heroBio:
      "I'm a software engineer student focused on building solid software and exploring where problem-solving, teamwork, and technical craft meet.",
    heroImage: '/images/hero.jpg',
    heroImageAlt: 'Professional headshot',
    availability: {
      available: true, // Toggle to false when you're not taking new work
      label: 'Available for new projects', // Shown when available: true
      timezone: 'GMT+1',
      responseTime: '~24h'
    },
    description: 'Personal portfolio — projects, writing, and resume.', // Site description
    language: 'en-US', // Default language
    social: {
      email: 'tahahammadate2@gmail.com',
      github: 'https://github.com/hammtah',
      linkedin: 'https://www.linkedin.com/in/taha-hammadate/',
      x: 'https://x.com/hammtah'
    },
    nav: [
      { label: 'Projects', href: '/projects/', primary: true },
      { label: 'CV', href: '/cv/', primary: true },
      { label: 'Contact', href: '/contact/', primary: true },
      { label: 'Blog', href: '/blog/' },
      { label: 'About', href: '/about/' }
    ]
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '45rem', // Content area width (wider for portfolio showcase)
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: true, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: false, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true // Enable fade animations
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'YYYY-MM-DD', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
    dateOnRight: true // Date position in post list (true for right, false for left)
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: true, // Show reading time in posts
    toc: true, // Show table of contents (when there is enough page width)
    imageViewer: true, // Enable image viewer
    copyCode: true, // Enable copy button in code blocks
    collapsibleCode: true, // Collapse long code blocks behind a "Show more" toggle
    linkCard: true, // Enable link card
    katex: true // Enable KaTeX math rendering
  }
}
