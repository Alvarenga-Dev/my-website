import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Metadata } from 'next'
import { LegalDocument } from '@/components/oddword/legal-document'

export const metadata: Metadata = {
  title: 'Termos de Uso | Quem é o Infiltrado?',
  description: 'Termos de Uso do aplicativo Quem é o Infiltrado?, vigentes a partir de 24 de outubro de 2026.',
  robots: { index: true, follow: true }
}

const TermsOfUsePage = async () => {
  const markdown = await readFile(join(process.cwd(), 'content/oddword-terms-of-use.md'), 'utf8')
  return <LegalDocument markdown={markdown} updatedAt="Última atualização: 24 de outubro de 2026" />
}

export default TermsOfUsePage
