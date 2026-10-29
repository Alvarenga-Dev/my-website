import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Metadata } from 'next'
import { LegalDocument } from '@/components/marketplace-list/legal-document'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alvarenga.dev'),
  title: 'Termos de Uso | Marketplace List',
  description: 'Termos de Uso do aplicativo Lista de Compras (Marketplace List), vigentes a partir de 29 de outubro de 2026.',
  alternates: { canonical: '/pt/marketplace-list/termos-de-uso' },
  robots: { index: true, follow: true }
}

export default async function TermsOfUsePage() {
  const markdown = await readFile(join(process.cwd(), 'content/marketplace-list-terms-of-use.md'), 'utf8')
  return <LegalDocument markdown={markdown} updatedAt="Última atualização: 29 de outubro de 2026" />
}
