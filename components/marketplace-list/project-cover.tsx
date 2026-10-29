import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaArrowRight, FaShoppingBasket } from 'react-icons/fa'

export default function MarketplaceProjectCover() {
  const t = useTranslations('marketplaceList')

  return (
    <div className="relative h-[395px] w-full overflow-hidden rounded-lg bg-marketplace-accent px-5 pt-5 text-marketplace-ink" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
        <FaShoppingBasket size={18} aria-hidden="true" />
        <span>Android</span>
      </div>
      <p className="mt-5 text-[32px] font-bold leading-[0.95] tracking-tighter">Marketplace<br />List.</p>
      <p className="mt-3 text-sm font-medium">{t('cardTagline')}</p>
      <div className="absolute bottom-3 right-5 w-[112px] rotate-[-8deg] overflow-hidden rounded-[1.1rem] border-4 border-marketplace-ink bg-marketplace-base shadow-xl">
        <Image src="/images/marketplace-list/items-dark.webp" alt={t('cardAlt')} width={750} height={1500} sizes="112px" className="h-auto w-full" />
      </div>
      <span className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-marketplace-ink text-marketplace-accent">
        <FaArrowRight aria-hidden="true" /><span className="sr-only">{t('cardAction')}</span>
      </span>
    </div>
  )
}
