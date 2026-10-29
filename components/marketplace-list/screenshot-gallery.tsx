'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaMoon, FaSun } from 'react-icons/fa'

type ScreenshotTheme = 'light' | 'dark'
type ScreenshotLabels = {
  light: string
  dark: string
  themeLabel: string
  screenshotsNote: string
  screens: { name: string; caption: string; lightAlt: string; darkAlt: string }[]
}

export default function ScreenshotGallery({ labels }: { labels: ScreenshotLabels }) {
  const [theme, setTheme] = useState<ScreenshotTheme>('dark')

  return (
    <div>
      <div role="group" aria-label={labels.themeLabel} className="mt-8 inline-flex flex-wrap gap-1 rounded-2xl border border-white/15 bg-marketplace-surface p-1.5">
        {(['light', 'dark'] as const).map((option) => (
          <button key={option} type="button" aria-pressed={theme === option} onClick={() => setTheme(option)} className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marketplace-accent ${theme === option ? 'bg-marketplace-accent text-marketplace-ink' : 'text-white-300 hover:bg-white/10'}`}>
            {option === 'light' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            {labels[option]}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-6">
        {labels.screens.map((screen) => (
          <figure key={screen.name} className="mx-auto w-full max-w-[290px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-marketplace-surface p-2 shadow-xl">
              <Image src={`/images/marketplace-list/${screen.name}-${theme}.webp`} alt={theme === 'light' ? screen.lightAlt : screen.darkAlt} width={750} height={1500} sizes="(max-width: 639px) 290px, (max-width: 1023px) 30vw, 290px" className="h-auto w-full rounded-[1.5rem]" />
            </div>
            <figcaption className="mt-5 text-center text-sm font-medium text-white-300">{screen.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-8 text-sm text-marketplace-muted">{labels.screenshotsNote}</p>
    </div>
  )
}
