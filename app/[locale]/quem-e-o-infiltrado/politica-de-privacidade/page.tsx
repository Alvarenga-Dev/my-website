import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Metadata } from 'next'
import { LegalDocument } from '@/components/oddword/legal-document'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Quem é o Infiltrado?',
  description: 'Política de Privacidade do aplicativo Quem é o Infiltrado?, atualizada em 24 de outubro de 2026.',
  robots: { index: true, follow: true }
}

const PrivacyPolicyPage = async () => {
  const markdown = await readFile(join(process.cwd(), 'content/oddword-privacy-policy.md'), 'utf8')
  return <LegalDocument markdown={markdown} updatedAt="Última atualização: 24 de outubro de 2026" />
}

export default PrivacyPolicyPage
