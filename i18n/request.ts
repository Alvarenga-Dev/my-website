import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

type languages = 'en' | 'pt'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as languages)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`../content/${locale}.json`)).default
  }
})
