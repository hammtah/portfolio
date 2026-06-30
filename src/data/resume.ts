export interface SkillGroup {
  name: string
  items: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  location?: string
  start: string
  end: string
  highlights: string[]
}

export interface EducationEntry {
  school: string
  degree: string
  location?: string
  start: string
  end: string
  endLabel?: string
  details?: string[]
}

export interface HonorEntry {
  title: string
  date: string
}

export interface Resume {
  summary: string
  location?: string
  skills: SkillGroup[]
  experience: ExperienceEntry[]
  education: EducationEntry[]
  honors?: HonorEntry[]
}

export const resume: Resume = {
  summary:
    'Software engineer focused on building reliable web applications, developer tooling, and clear technical writing. Comfortable across the stack with a preference for thoughtful UX and maintainable systems.',
  location: 'City, Country',
  skills: [
    {
      name: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL', 'C++']
    },
    {
      name: 'Frameworks & Tools',
      items: ['Node.js', 'React', 'Astro', 'PostgreSQL', 'Git', 'Docker']
    }
  ],
  experience: [
    {
      company: 'Example Corp',
      role: 'Software Engineer',
      location: 'Remote',
      start: '2023',
      end: 'Present',
      highlights: [
        'Shipped product features used by thousands of users across web and API surfaces.',
        'Improved performance and reliability through profiling, caching, and observability work.',
        'Collaborated with design and product to deliver accessible, well-tested interfaces.'
      ]
    },
    {
      company: 'Startup Labs',
      role: 'Junior Developer',
      location: 'City, Country',
      start: '2021',
      end: '2023',
      highlights: [
        'Built internal dashboards and automation scripts that reduced manual ops time.',
        'Contributed to a component library and documentation used across multiple teams.'
      ]
    }
  ],
  education: [
    {
      school: 'University of Example',
      degree: 'B.S. Computer Science',
      location: 'City, Country',
      start: '2017',
      end: '2021',
      endLabel: '2021',
      details: [
        "Cumulative GPA: 3.8/4.0 | Dean's List (2019–2021)",
        'Key Coursework: Data Structures, Algorithms, Operating Systems, Database Design, Distributed Systems.'
      ]
    }
  ],
  honors: [
    { title: '1st Place, Regional Hackathon (FinTech Track)', date: 'Nov 2023' },
    { title: 'Academic Excellence Scholarship', date: '2019 – Present' }
  ]
}
