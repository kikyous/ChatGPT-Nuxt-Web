import 'katex/dist/katex.min.css'
import '@src/styles/lib/tailwind.css'
import '@src/styles/lib/highlight.less'
import '@src/styles/lib/github-markdown.less'
import '@src/styles/global.less'

/** Tailwind's Preflight Style Override */
function naiveStyleOverride() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

function setupAssets() {
  naiveStyleOverride()
}

export default setupAssets
