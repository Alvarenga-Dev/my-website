import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { FaArrowLeft, FaArrowRight, FaCheck, FaCoins, FaGooglePlay, FaRegSave, FaShoppingBasket, FaTags, FaWeightHanging } from 'react-icons/fa'
import { Link } from '@/i18n/routing'
import ScreenshotGallery from '@/components/marketplace-list/screenshot-gallery'

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.alvarengadev.marketplacelist'
const focusStyle = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marketplace-accent'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'marketplaceList' })
  return {
    metadataBase: new URL('https://www.alvarenga.dev'),
    title: 'Marketplace List | Lucas Alvarenga',
    description: t('description'),
    alternates: {
      canonical: `/${locale}/marketplace-list`,
      languages: { pt: '/pt/marketplace-list', en: '/en/marketplace-list' }
    },
    openGraph: {
      title: `Marketplace List — ${t('cardTagline')}`,
      description: t('description'),
      images: [{ url: '/images/marketplace-list/lists-dark.webp', width: 750, height: 1500, alt: t('listsDarkAlt') }]
    }
  }
}

export default async function MarketplaceListPage() {
  const t = await getTranslations('marketplaceList')
  const steps = ['step1', 'step2', 'step3'] as const
  const features = [
    { name: 'category', icon: FaTags },
    { name: 'units', icon: FaWeightHanging },
    { name: 'backup', icon: FaRegSave },
    { name: 'currency', icon: FaCoins }
  ] as const

  return (
    <main className="min-h-screen overflow-hidden bg-marketplace-base text-white-500" style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
      <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-7 lg:px-10">
        <Link href="/" className={`inline-flex items-center gap-3 text-sm font-semibold text-white-300 transition-colors hover:text-marketplace-accent ${focusStyle}`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15"><FaArrowLeft aria-hidden="true" /></span>
          {t('back')}
        </Link>
        <span className="hidden items-center gap-2 text-sm font-bold sm:inline-flex"><FaShoppingBasket className="text-marketplace-accent" aria-hidden="true" /> Marketplace List</span>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 lg:pb-28 lg:pt-14">
        <div>
          <p className="text-xs font-bold leading-relaxed tracking-[0.15em] text-marketplace-accent">{t('eyebrow')}</p>
          <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.05] tracking-[-0.055em] sm:text-6xl xl:text-7xl">
            {t('titleLine1')}<br /><span className="text-marketplace-accent">{t('titleLine2')}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white-300">{t('description')}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <StoreLink label={t('store')} />
            <a href="#inside-app" className={`inline-flex items-center gap-2 py-3 text-sm font-semibold text-white-300 hover:text-marketplace-accent ${focusStyle}`}>{t('explore')}<FaArrowRight aria-hidden="true" /></a>
          </div>
          <p className="mt-4 text-xs text-marketplace-muted">{t('platform')}</p>
          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-sm text-white-300">
            {['benefit1', 'benefit2', 'benefit3'].map((benefit) => <li key={benefit} className="inline-flex items-center gap-2"><FaCheck className="text-marketplace-accent" aria-hidden="true" />{t(benefit)}</li>)}
          </ul>
        </div>
        <figure className="mx-auto w-full max-w-[480px]">
          <div className="relative aspect-[3/4]">
            <div className="absolute inset-x-3 bottom-10 top-10 rounded-[3rem] bg-marketplace-accent/[0.07]" />
            <div className="absolute left-2 top-3 w-[52%] -rotate-[8deg] sm:left-4">
              <PhoneScreenshot src="lists-light" alt={t('heroAltLists')} priority />
            </div>
            <div className="absolute right-2 top-[9%] w-[56%] rotate-[6deg] sm:right-4">
              <PhoneScreenshot src="items-dark" alt={t('heroAltItems')} priority />
            </div>
          </div>
          <figcaption className="relative mt-3 text-center text-sm text-marketplace-muted">{t('heroCaption')}</figcaption>
        </figure>
      </section>

      <section className="border-y border-white/10 bg-background-secondary/40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
          <div>
            <SectionHeading eyebrow={t('howEyebrow')} title={t('howTitle')} description={t('howDescription')} />
            <ol className="mt-10 space-y-8">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-marketplace-accent/30 text-sm font-bold text-marketplace-accent">{index + 1}</span>
                  <div><h3 className="text-xl font-bold">{t(`${step}Title`)}</h3><p className="mt-2 max-w-lg leading-relaxed text-white-300">{t(`${step}Description`)}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <figure className="mx-auto w-full max-w-[280px]">
            <PhoneScreenshot src="history-dark" alt={t('historyAlt')} />
            <figcaption className="mt-5 text-center text-sm leading-relaxed text-marketplace-muted">{t('historyCaption')}</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading eyebrow={t('featuresEyebrow')} title={t('featuresTitle')} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ name, icon: FeatureIcon }) => (
            <article key={name} className="rounded-3xl border border-white/10 bg-marketplace-surface p-6">
              <FeatureIcon size={24} className="mb-6 text-marketplace-accent" aria-hidden="true" />
              <h3 className="text-lg font-bold">{t(`${name}Title`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white-300">{t(`${name}Description`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="inside-app" className="scroll-mt-8 border-y border-white/10 bg-background-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow={t('screensEyebrow')} title={t('screensTitle')} description={t('screensDescription')} />
          <ScreenshotGallery labels={{
            light: t('light'), dark: t('dark'), themeLabel: t('themeLabel'), screenshotsNote: t('screenshotsNote'),
            screens: [
              { name: 'lists', caption: t('listsCaption'), lightAlt: t('listsLightAlt'), darkAlt: t('listsDarkAlt') },
              { name: 'items', caption: t('itemsCaption'), lightAlt: t('itemsLightAlt'), darkAlt: t('itemsDarkAlt') },
              { name: 'history', caption: t('historyScreenCaption'), lightAlt: t('historyLightAlt'), darkAlt: t('historyDarkAlt') }
            ]
          }} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-marketplace-surface px-7 pt-10 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:pt-12">
          <div className="pb-4 md:pb-12">
            <p className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-widest text-marketplace-accent">{t('receiptEyebrow')}<span className="rounded-md bg-marketplace-accent px-2 py-1 text-[10px] text-marketplace-ink">{t('beta')}</span></p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t('receiptTitle')}</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white-300">{t('receiptDescription')}</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-marketplace-muted">{t('receiptNote')}</p>
          </div>
          <div className="mx-auto h-[340px] w-full max-w-[270px] overflow-hidden rounded-t-[2rem] border-x border-t border-white/15 bg-marketplace-base p-2 pb-0">
            <Image src="/images/marketplace-list/receipt-dark.webp" alt={t('receiptAlt')} width={750} height={1500} sizes="270px" className="h-auto w-full -translate-y-[160px] rounded-[1.5rem]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="rounded-[2rem] bg-marketplace-accent px-7 py-12 text-marketplace-ink sm:px-12 sm:py-16">
          <FaShoppingBasket size={32} aria-hidden="true" />
          <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl"><h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t('ctaTitle')}</h2><p className="mt-4 max-w-xl leading-relaxed">{t('ctaDescription')}</p></div>
            <StoreLink label={t('store')} inverted />
          </div>
        </div>
        <nav aria-label={t('legalLinksLabel')} className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-white-300">
          <Link href="/marketplace-list/termos-de-uso" locale="pt" className={`rounded-sm underline decoration-white/30 underline-offset-4 hover:text-marketplace-accent ${focusStyle}`}>{t('termsLink')}</Link>
          <span aria-hidden="true">•</span>
          <Link href="/marketplace-list/politica-de-privacidade" locale="pt" className={`rounded-sm underline decoration-white/30 underline-offset-4 hover:text-marketplace-accent ${focusStyle}`}>{t('privacyLink')}</Link>
        </nav>
        <footer className="mt-9 flex flex-col justify-between gap-5 text-sm text-marketplace-muted sm:flex-row sm:items-center">
          <p>{t('author')}</p>
          <Link href="/" className={`inline-flex items-center gap-2 font-semibold text-white-300 hover:text-marketplace-accent ${focusStyle}`}>{t('back')}<FaArrowRight aria-hidden="true" /></Link>
        </footer>
      </section>
    </main>
  )
}

function PhoneScreenshot({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-marketplace-surface p-2 shadow-2xl">
      <Image src={`/images/marketplace-list/${src}.webp`} alt={alt} width={750} height={1500} priority={priority} sizes="(max-width: 639px) 50vw, 280px" className="h-auto w-full rounded-[1.5rem]" />
    </div>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold leading-relaxed tracking-[0.15em] text-marketplace-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-white-300">{description}</p>}
    </div>
  )
}

function StoreLink({ label, inverted = false }: { label: string; inverted?: boolean }) {
  return (
    <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex shrink-0 items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold transition-colors ${inverted ? 'bg-marketplace-ink text-white hover:bg-marketplace-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marketplace-ink' : `bg-marketplace-accent text-marketplace-ink hover:bg-marketplace-accent/90 ${focusStyle}`}`}><FaGooglePlay size={20} aria-hidden="true" />{label}</a>
  )
}
