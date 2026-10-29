import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from '@/i18n/routing'
import { FaArrowLeft } from 'react-icons/fa'

type LegalDocumentProps = {
  markdown: string
  updatedAt: string
  productName: string
  backHref: string
  backLabel: string
  contentsLabel: string
  theme?: 'oddword' | 'marketplace'
}

const slugify = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const getText = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getText).join('')
  if (node && typeof node === 'object' && 'props' in node) return getText(node.props.children)
  return ''
}

const themes = {
  oddword: {
    main: 'bg-[#0b0e1d]', header: 'bg-[#101326]/80', article: 'bg-[#14172b]',
    accent: 'text-[#b99aff]', link: 'text-[#c2a8ff] decoration-[#8d68e8]/50',
    badge: 'border-[#b99aff]/25 bg-[#7045e1]/10 text-[#c2a8ff]',
    product: 'bg-[#d4ff35]/10 text-[#d4ff35]', body: 'text-[#c7cad8]', muted: 'text-[#aeb3ca]',
    markers: 'marker:text-[#d4ff35]', orderedMarkers: 'marker:text-[#b99aff]', table: 'bg-[#20223a]',
    focus: 'focus-visible:outline-[#c2a8ff]'
  },
  marketplace: {
    main: 'bg-marketplace-base', header: 'bg-marketplace-surface/80', article: 'bg-marketplace-surface',
    accent: 'text-marketplace-accent', link: 'text-marketplace-accent decoration-marketplace-accent/50',
    badge: 'border-marketplace-accent/25 bg-marketplace-accent/10 text-marketplace-accent',
    product: 'bg-marketplace-accent/10 text-marketplace-accent', body: 'text-white-300', muted: 'text-marketplace-muted',
    markers: 'marker:text-marketplace-accent', orderedMarkers: 'marker:text-marketplace-accent', table: 'bg-background-tertiary',
    focus: 'focus-visible:outline-marketplace-accent'
  }
}

export const LegalDocument = ({ markdown, updatedAt, productName, backHref, backLabel, contentsLabel, theme = 'oddword' }: LegalDocumentProps) => {
  const colors = themes[theme]
  const focusStyle = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${colors.focus}`
  const markdownComponents: Components = {
    h1: ({ children }) => <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white-500 sm:text-5xl">{children}</h1>,
    h2: ({ children }) => {
      const text = getText(children)
      return <h2 id={slugify(text)} className="scroll-mt-24 mt-12 border-t border-white/10 pt-9 text-2xl font-bold leading-tight text-white-500 sm:text-3xl">{children}</h2>
    },
    h3: ({ children }) => <h3 className="mt-8 text-xl font-semibold text-white-500">{children}</h3>,
    p: ({ children }) => <p className={`mt-5 text-base leading-8 ${colors.body}`}>{children}</p>,
    strong: ({ children }) => <strong className="font-semibold text-white-500">{children}</strong>,
    a: ({ href, children }) => {
      const isExternal = href?.startsWith('http')
      return <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined} className={`font-medium underline underline-offset-4 transition hover:text-white-500 ${colors.link} ${focusStyle}`}>{children}</a>
    },
    ul: ({ children }) => <ul className={`mt-4 list-disc space-y-2 pl-6 text-base leading-7 ${colors.body} ${colors.markers}`}>{children}</ul>,
    ol: ({ children }) => <ol className={`mt-4 list-decimal space-y-2 pl-6 text-base leading-7 ${colors.body} ${colors.orderedMarkers}`}>{children}</ol>,
    li: ({ children }) => <li className="pl-1">{children}</li>,
    hr: () => <hr className="my-10 border-white/10" />,
    table: ({ children }) => <div className="mt-7 overflow-x-auto rounded-2xl border border-white/10"><table className="w-full min-w-[680px] border-collapse text-left text-sm">{children}</table></div>,
    th: ({ children }) => <th className={`border-b border-white/10 px-4 py-3 font-semibold text-white-500 ${colors.table}`}>{children}</th>,
    td: ({ children }) => <td className={`border-b border-white/[0.07] px-4 py-3 align-top leading-6 last:border-0 ${colors.body}`}>{children}</td>
  }

  const sections = markdown.match(/^## .+$/gm)?.map((heading) => heading.replace(/^##\s+/, '')) ?? []

  return (
    <main lang="pt-BR" className={`min-h-screen text-white-500 ${colors.main}`}>
      <header className={`border-b border-white/[0.08] ${colors.header}`}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-5 sm:px-6 sm:py-6 lg:px-10">
          <Link href={backHref} className={`inline-flex min-w-0 items-center gap-3 text-sm font-semibold text-white-300 transition hover:text-white-500 ${focusStyle}`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]"><FaArrowLeft aria-hidden="true" /></span>
            <span>{backLabel}</span>
          </Link>
          <span className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold ${colors.badge}`}>Português (Brasil)</span>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:py-16">
        <aside className="min-w-0 lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:self-start lg:overflow-y-auto">
          <p className={`text-xs font-bold uppercase tracking-[0.18em] ${colors.accent}`}>{contentsLabel}</p>
          <nav aria-label={contentsLabel} className="mt-4 flex max-w-full gap-2 overflow-x-auto pb-3 lg:block lg:space-y-1 lg:overflow-visible">
            {sections.map((section) => (
              <a key={section} href={`#${slugify(section)}`} className={`block shrink-0 rounded-lg px-3 py-2 text-sm transition hover:bg-white/[0.05] hover:text-white-500 lg:whitespace-normal ${colors.muted} ${focusStyle}`}>
                {section}
              </a>
            ))}
          </nav>
        </aside>

        <article className={`min-w-0 rounded-[1.75rem] border border-white/[0.09] px-4 py-7 sm:px-10 sm:py-12 lg:px-14 ${colors.article}`}>
          <div className={`mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm ${colors.muted}`}>
            <span className={`rounded-full px-3 py-1 font-semibold ${colors.product}`}>{productName}</span>
            <span>{updatedAt}</span>
          </div>
          <div className="privacy-policy-content break-words">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{markdown}</ReactMarkdown>
          </div>
        </article>
      </div>

      <footer className={`border-t border-white/[0.08] px-4 py-8 text-center text-sm sm:px-6 ${colors.muted}`}>
        <Link href={backHref} className={`font-semibold underline underline-offset-4 hover:text-white-500 ${colors.link} ${focusStyle}`}>{backLabel}</Link>
      </footer>
    </main>
  )
}
