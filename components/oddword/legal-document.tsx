import { getTranslations } from 'next-intl/server'
import { LegalDocument as ProductLegalDocument } from '@/components/legal-document'

export const LegalDocument = async ({ markdown, updatedAt }: { markdown: string; updatedAt: string }) => {
  const t = await getTranslations('oddword')
  return <ProductLegalDocument markdown={markdown} updatedAt={updatedAt} productName="Quem é o Infiltrado?" backHref="/quem-e-o-infiltrado" backLabel={t('backToGame')} contentsLabel={t('policyContents')} />
}
