import type { CollectionEntry } from 'astro:content'

type TaggedEntry = CollectionEntry<'posts'> | CollectionEntry<'projects'>

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export function getTagsFromEntry(entry: TaggedEntry): string[] {
  return entry.data.tags ?? []
}

export function getUniqueTags(entries: TaggedEntry[]): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, number>()

  for (const entry of entries) {
    for (const tag of getTagsFromEntry(entry)) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, slug: slugifyTag(tag), count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}

export function filterEntriesByTag<T extends TaggedEntry>(entries: T[], tag: string): T[] {
  return entries.filter((entry) => getTagsFromEntry(entry).includes(tag))
}

export function findTagBySlug(
  entries: TaggedEntry[],
  slug: string
): string | undefined {
  const tags = getUniqueTags(entries)
  return tags.find((item) => item.slug === slug)?.tag
}
