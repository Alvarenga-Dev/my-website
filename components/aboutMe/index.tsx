'use client'
import { SocialsLinks } from '@/content/data'
import { openLink } from '@/utils/utils'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import AboutImage from '../../public/images/aboutMe.svg'

const AboutMe = () => {
  const t = useTranslations('about')

  return (
    <section id="about" className="bg-[#161616]" data-aos="fade-up">
      <p className="font-semibold text-white-400 text-center text-xl md:text-2xl">{t('title')}</p>
      {/* flex flex-col md:flex-row-reverse */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="md:order-2">
          <p
            className="text-white-100 text-sm md:!text-base lg:text-lg"
            dangerouslySetInnerHTML={{ __html: t.raw('content') }}
          ></p>

          <div
            className="flex gap-5 md:mt-2 cursor-pointer"
          >
            {SocialsLinks.map((item, index) => {
              const Icon = item.icon
              return (
                <Icon
                  onClick={() => openLink(item.link)}
                  key={index}
                  size={24}
                  className="text-gray-500 hover:text-white-500 cursor-pointer"
                />
              )
            })}
          </div>
        </div>

        <Image className="mt-4 md:order-1 md:mt-0 h-fit" src={AboutImage} alt="About Me" priority quality={100} />
      </div>
    </section>
  )
}
export default AboutMe
