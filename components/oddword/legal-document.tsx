import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/routing'
import { FaArrowLeft } from 'react-icons/fa'

type LegalDocumentProps = {
  markdown: string
  updatedAt: string
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

const markdownComponents: Components = {
  h1: ({ children }) => <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white-500 sm:text-5xl">{children}</h1>,
  h2: ({ children }) => {
    const text = getText(children)
    return <h2 id={slugify(text)} className="scroll-mt-24 mt-12 border-t border-white/10 pt-9 text-2xl font-bold leading-tight text-white-500 sm:text-3xl">{children}</h2>
  },
  h3: ({ children }) => <h3 className="mt-8 text-xl font-semibold text-white-500">{children}</h3>,
  p: ({ children }) => <p className="mt-5 text-base leading-8 text-[#c7cad8]">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-white-500">{children}</strong>,
  a: ({ href, children }) => {
    const isExternal = href?.startsWith('http')
    return <a href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined} className="font-medium text-[#c2a8ff] underline decoration-[#8d68e8]/50 underline-offset-4 transition hover:text-white-500">{children}</a>
  },
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-[#c7cad8] marker:text-[#d4ff35]">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-7 text-[#c7cad8] marker:text-[#b99aff]">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  hr: () => <hr className="my-10 border-white/10" />,
  table: ({ children }) => <div className="mt-7 overflow-x-auto rounded-2xl border border-white/10"><table className="w-full min-w-[680px] border-collapse text-left text-sm">{children}</table></div>,
  th: ({ children }) => <th className="border-b border-white/10 bg-[#20223a] px-4 py-3 font-semibold text-white-500">{children}</th>,
  td: ({ children }) => <td className="border-b border-white/[0.07] px-4 py-3 align-top leading-6 text-[#c7cad8] last:border-0">{children}</td>
}

export const LegalDocument = async ({ markdown, updatedAt }: LegalDocumentProps) => {
  const t = await getTranslations('oddword')
  const sections = markdown.match(/^## .+$/gm)?.map((heading) => heading.replace(/^##\s+/, '')) ?? []

  return (
    <main lang="pt-BR" className="min-h-screen bg-[#0b0e1d] text-white-500">
      <header className="border-b border-white/[0.08] bg-[#101326]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 lg:px-10">
          <Link href="/quem-e-o-infiltrado" className="inline-flex items-center gap-3 text-sm font-semibold text-white-300 transition hover:text-white-500">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]"><FaArrowLeft aria-hidden="true" /></span>
            {t('backToGame')}
          </Link>
          <span className="rounded-full border border-[#b99aff]/25 bg-[#7045e1]/10 px-3 py-1.5 text-xs font-semibold text-[#c2a8ff]">Português (Brasil)</span>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:py-16">
        <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)] lg:self-start lg:overflow-y-auto">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b99aff]">{t('policyContents')}</p>
          <nav aria-label={t('policyContents')} className="mt-4 flex gap-2 overflow-x-auto pb-3 lg:block lg:space-y-1 lg:overflow-visible">
            {sections.map((section) => (
              <a key={section} href={`#${slugify(section)}`} className="block shrink-0 rounded-lg px-3 py-2 text-sm text-[#aeb3ca] transition hover:bg-white/[0.05] hover:text-white-500 lg:whitespace-normal">
                {section}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 rounded-[1.75rem] border border-white/[0.09] bg-[#14172b] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
          <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#aeb3ca]">
            <span className="rounded-full bg-[#d4ff35]/10 px-3 py-1 font-semibold text-[#d4ff35]">Quem é o Infiltrado?</span>
            <span>{updatedAt}</span>
          </div>
          <div className="privacy-policy-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{markdown}</ReactMarkdown>
          </div>
        </article>
      </div>

      <footer className="border-t border-white/[0.08] px-6 py-8 text-center text-sm text-[#aeb3ca]">
        <Link href="/quem-e-o-infiltrado" className="font-semibold text-[#c2a8ff] underline decoration-[#8d68e8]/50 underline-offset-4 hover:text-white-500">{t('backToGame')}</Link>
      </footer>
    </main>
  )
}
