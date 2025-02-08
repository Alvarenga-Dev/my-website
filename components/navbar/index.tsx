'use client'

import { useRouter, usePathname } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import logoNavbar from '../../public/images/logo-navbar.svg'

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const sections = ['home', 'about', 'career', 'projects']

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((id) => {
        const section = document.getElementById(id)
        return section?.getBoundingClientRect().top ?? Infinity
      })

      const activeIndex = offsets.findIndex(
        (offset) => offset >= 0 && offset < window.innerHeight / 2
      )
      if (activeIndex !== -1) {
        setActiveSection(sections[activeIndex])
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const handleScroll = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, id: string) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setShowMobileMenu(false)
  }

  const t = useTranslations('navbar')
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const menuLinks = [
    { name: t('home'), href: 'home' },
    { name: t('about'), href: 'about' },
    { name: t('carrer'), href: 'career' },
    { name: t('projects'), href: 'projects' }
  ]

  const changeLanguage = () => {
    router.replace(pathname, { locale: locale === 'pt' ? 'en' : 'pt' })
  }

  return (
    <div className="bg-background-primary bg-opacity-10 backdrop-blur-sm border border-[#FFFFFF26] rounded-full flex items-center justify-between py-4 px-8 fixed top-10 w-full md:max-w-[700px] md:left-2/4 md:-translate-x-2/4 z-10">
      <div>
        <Image
          src={logoNavbar}
          quality={100}
          priority
          alt="Logotipo primária Alvarenga Dev com texto branco e ícone azul"
        />
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        {menuLinks.map((item) => (
          <p
            key={item.name}
            onClick={(e) => handleScroll(e, item.href)}
            className={` ${
              activeSection === item.href
                ? 'text-primary font-bold'
                : 'text-white-100 hover:text-white-500'
            } md:block hidden`}
          >
            {item.name}
          </p>
        ))}

        <div
          onClick={() => changeLanguage()}
          className="bg-[#2d2d2d] border border-[#3c3c3c] rounded-full p-1 px-2 text-white block text-sm"
        >
          {locale === 'pt' ? 'BR' : 'EN'}
        </div>

        <div
          className="bg-[#2d2d2d] border border-[#3c3c3c] rounded p-1 text-white block md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <MdMenu size={24} />
        </div>

        {showMobileMenu && (
          <div className="bg-background-primary absolute -top-10 left-0 right-0 w-dvw h-dvh flex items-center justify-center flex-col gap-6 ease-in duration-300">
            <MdClose
              className="absolute top-4 right-4 text-white"
              size={24}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />

            {menuLinks.map((item) => (
              <p
                onClick={(e) => handleScroll(e, item.href)}
                className={` ${
                  activeSection === item.href
                    ? 'text-primary font-bold'
                    : 'text-white-100 hover:text-white-500'
                } text-2xl`}
                key={item.name}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
