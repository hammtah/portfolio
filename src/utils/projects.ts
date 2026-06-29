import { getCollection, type CollectionEntry } from 'astro:content'

export function sortProjects(projects: CollectionEntry<'projects'>[]) {
  return projects.sort((a, b) => {
    const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER
    const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER

    if (orderA !== orderB) return orderA - orderB
    return a.data.title.localeCompare(b.data.title)
  })
}

export async function getSortedProjects() {
  const projects = await getCollection('projects')
  return sortProjects(projects)
}

export async function getFeaturedProjects() {
  const projects = await getSortedProjects()
  return projects.filter((project) => project.data.featured)
}
