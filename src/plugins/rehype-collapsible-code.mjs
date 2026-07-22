import { visit } from 'unist-util-visit'
import { markContentFeature } from './utils/content-features.mjs'

const VISIBLE_LINES = 8
const MIN_LINES_TO_COLLAPSE = VISIBLE_LINES + 4

function nodeToText(node) {
  if (node.type === 'text') return node.value
  if (!node.children) return ''
  return node.children.map(nodeToText).join('')
}

function countLines(codeNode) {
  const lineSpans = codeNode.children.filter(
    (child) => child.type === 'element' && child.tagName === 'span' && child.properties?.className?.includes('line')
  )
  if (lineSpans.length > 0) return lineSpans.length
  const text = nodeToText(codeNode)
  return text.split('\n').filter((_, i, arr) => i < arr.length - 1 || arr[i] !== '').length
}

export default function rehypeCollapsibleCode() {
  return (tree, file) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'div' || !node.properties?.className?.includes('copy-code-wrapper')) return

      const preNode = node.children.find((child) => child.type === 'element' && child.tagName === 'pre')
      if (!preNode) return
      const codeNode = preNode.children.find((child) => child.type === 'element' && child.tagName === 'code')
      if (!codeNode) return

      const lineCount = countLines(codeNode)
      if (lineCount < MIN_LINES_TO_COLLAPSE) return

      markContentFeature(file, 'hasCollapsibleCode')

      const expandButton = {
        type: 'element',
        tagName: 'button',
        properties: { className: ['code-expand-button'], type: 'button', 'aria-expanded': 'false' },
        children: [
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['code-expand-label'] },
            children: [{ type: 'text', value: `Show all ${lineCount} lines` }]
          }
        ]
      }

      const collapseWrapper = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['code-collapse'],
          'data-collapsed': 'true',
          'data-line-count': String(lineCount),
          'data-visible-lines': String(VISIBLE_LINES)
        },
        children: [node, expandButton]
      }

      if (parent && typeof index === 'number') {
        parent.children[index] = collapseWrapper
      }
    })
  }
}