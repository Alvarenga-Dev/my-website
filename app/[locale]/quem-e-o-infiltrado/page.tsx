import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { FaApple, FaArrowLeft, FaArrowRight, FaGooglePlay, FaRegClock, FaUsers } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi2'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'oddword' })
  return {
    title: `${t('titleLine1')} ${t('titleLine2')} | Lucas Alvarenga`,
    description: t('description'),
    openGraph: {
      title: `${t('titleLine1')} ${t('titleLine2')}`,
      description: t('description'),
      images: ['/images/oddword/home.png']
    }
  }
}

const OddwordPage = async () => {
  const t = await getTranslations('oddword')
  const steps = [t('step1'), t('step2'), t('step3'), t('step4')]

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0e1d] text-white-500">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[780px] bg-[radial-gradient(ellipse_at_72%_20%,rgba(112,69,225,0.20),transparent_42%),radial-gradient(ellipse_at_15%_12%,rgba(204,255,48,0.08),transparent_35%)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold text-white-300 transition hover:text-white-500">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
            <FaArrowLeft aria-hidden="true" />
          </span>
          {t('back')}
        </Link>
        <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white-300 sm:flex">
          <span className="h-2 w-2 rounded-full bg-[#d4ff35] shadow-[0_0_12px_#d4ff35]" />
          ODDWORD
        </span>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-10">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.22em] text-[#b99aff]">
            <HiOutlineSparkles size={18} aria-hidden="true" /> {t('eyebrow')}
          </p>
          <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            {t('titleLine1')}<br />
            <span className="text-[#d4ff35]">{t('titleLine2')}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#aeb3ca] sm:text-xl">{t('description')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#d4ff35]/25 bg-[#d4ff35]/10 px-4 py-2 text-sm font-semibold text-[#d4ff35]">{t('availability')}</span>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            <Fact icon={<FaUsers />} label={t('players')} />
            <Fact icon={<HiOutlineSparkles />} label={t('device')} />
            <Fact icon={<FaRegClock />} label={t('offline')} />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
          <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7045e1]/20 blur-3xl" />
          <div className="absolute -left-2 top-[18%] h-3 w-3 rounded-full bg-[#d4ff35] shadow-[0_0_24px_#d4ff35] sm:left-0" />
          <div className="absolute right-2 top-[28%] h-2.5 w-2.5 rounded-full bg-[#b99aff] shadow-[0_0_24px_#b99aff]" />
          <div className="relative mx-auto w-[min(75vw,300px)] rotate-[2deg] rounded-[2.5rem] border border-white/20 bg-[#171a30] p-2.5 shadow-[0_36px_100px_rgba(0,0,0,0.55)] ring-1 ring-[#a988ff]/30 sm:w-[310px]">
            <div className="overflow-hidden rounded-[1.9rem] bg-[#0b0e1d]">
              <Image src="/images/oddword/home.png" alt={t('heroAlt')} width={1080} height={2160} priority className="h-auto w-full" />
            </div>
          </div>
          <div className="absolute -bottom-3 -left-1 rounded-2xl border border-white/10 bg-[#171a30]/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-7">
            <p className="text-sm font-bold text-[#d4ff35]">435</p>
            <p className="text-xs text-white-300">{t('words')}</p>
          </div>
          <div className="absolute right-0 top-[16%] rounded-2xl border border-white/10 bg-[#171a30]/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-4">
            <p className="text-sm font-bold text-[#b99aff]">6</p>
            <p className="text-xs text-white-300">{t('categories')}</p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/[0.07] bg-[#101326]/75">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow={t('howEyebrow')} title={t('howTitle')} subtitle={t('howDescription')} />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step} className="group rounded-3xl border border-white/[0.09] bg-[#171a30] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a988ff]/50 sm:p-8">
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#7045e1]/20 text-sm font-bold text-[#b99aff]">0{index + 1}</span>
                <p className="max-w-xl text-lg leading-relaxed text-white-300">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading eyebrow={t('featuresEyebrow')} title={t('featuresTitle')} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Feature icon={<FaUsers />} title={t('feature1Title')} description={t('feature1Description')} />
          <Feature icon={<FaRegClock />} title={t('feature2Title')} description={t('feature2Description')} />
          <Feature icon={<HiOutlineSparkles />} title={t('feature3Title')} description={t('feature3Description')} />
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#101326]/75">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow={t('screensEyebrow')} title={t('screensTitle')} />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Screenshot src="/images/oddword/how-to-play.png" alt={t('screensAltHowTo')} />
            <Screenshot src="/images/oddword/new-game.png" alt={t('screensAltSetup')} />
            <Screenshot src="/images/oddword/score.png" alt={t('screensAltScore')} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#b99aff]/20 bg-[radial-gradient(ellipse_at_90%_0%,rgba(112,69,225,0.26),transparent_50%),linear-gradient(135deg,#191b35,#111426)] px-7 py-12 text-center sm:px-12 sm:py-16">
          <div className="relative mx-auto max-w-2xl">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">{t('ctaTitle')}</p>
            <p className="mx-auto mt-4 max-w-lg text-white-300">{t('ctaDescription')}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <StoreBadge icon={<FaGooglePlay />} store={t('playStore')} comingSoon={t('comingSoon')} />
              <StoreBadge icon={<FaApple />} store={t('appStore')} comingSoon={t('comingSoon')} />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white-300">
              <Link href="/quem-e-o-infiltrado/termos-de-uso" locale="pt" className="underline decoration-white/30 underline-offset-4 transition hover:text-white-500">{t('termsLink')}</Link>
              <span aria-hidden="true">•</span>
              <Link href="/quem-e-o-infiltrado/politica-de-privacidade" locale="pt" className="underline decoration-white/30 underline-offset-4 transition hover:text-white-500">{t('privacyLink')}</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white-300 transition hover:text-[#d4ff35]">
            {t('back')} <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

const Fact = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-white-300">
    <span className="shrink-0 text-[#b99aff]" aria-hidden="true">{icon}</span>{label}
  </div>
)

const SectionHeading = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <div className="max-w-2xl">
    <p className="text-xs font-bold tracking-[0.2em] text-[#b99aff]">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-lg text-[#aeb3ca]">{subtitle}</p>}
  </div>
)

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <article className="rounded-3xl border border-white/[0.09] bg-[#171a30] p-6 sm:p-7">
    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7045e1]/20 text-xl text-[#b99aff]" aria-hidden="true">{icon}</span>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-3 leading-relaxed text-white-300">{description}</p>
  </article>
)

const Screenshot = ({ src, alt }: { src: string; alt: string }) => (
  <figure className="mx-auto w-full max-w-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#171a30] p-2 shadow-2xl">
    <Image src={src} alt={alt} width={1080} height={2160} className="h-auto w-full rounded-[1.5rem]" />
  </figure>
)

const StoreBadge = ({ icon, store, comingSoon }: { icon: React.ReactNode; store: string; comingSoon: string }) => (
  <div aria-label={`${store}: ${comingSoon}`} className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/15 bg-[#0b0e1d]/70 px-5 py-3 text-left opacity-80">
    <span className="text-2xl text-white-300" aria-hidden="true">{icon}</span>
    <span><span className="block text-[10px] uppercase tracking-wider text-white-300">{store}</span><span className="block text-sm font-bold text-[#d4ff35]">{comingSoon}</span></span>
  </div>
)

export default OddwordPage
