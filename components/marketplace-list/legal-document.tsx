import { getTranslations } from 'next-intl/server'
import { LegalDocument as ProductLegalDocument } from '@/components/legal-document'

export const LegalDocument = async ({ markdown, updatedAt }: { markdown: string; updatedAt: string }) => {
  const t = await getTranslations('marketplaceList')
  return <ProductLegalDocument markdown={markdown} updatedAt={updatedAt} productName="Marketplace List" backHref="/marketplace-list" backLabel={t('backToApp')} contentsLabel={t('policyContents')} theme="marketplace" />
}
