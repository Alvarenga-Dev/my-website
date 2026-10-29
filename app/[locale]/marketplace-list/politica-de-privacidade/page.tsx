import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Metadata } from 'next'
import { LegalDocument } from '@/components/marketplace-list/legal-document'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alvarenga.dev'),
  title: 'Política de Privacidade | Marketplace List',
  description: 'Política de Privacidade do aplicativo Lista de Compras (Marketplace List), atualizada em 27 de abril de 2026.',
  alternates: { canonical: '/pt/marketplace-list/politica-de-privacidade' },
  robots: { index: true, follow: true }
}

export default async function PrivacyPolicyPage() {
  const markdown = await readFile(join(process.cwd(), 'content/marketplace-list-privacy-policy.md'), 'utf8')
  return <LegalDocument markdown={markdown} updatedAt="Última atualização: 27 de abril de 2026" />
}
