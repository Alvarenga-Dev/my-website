import Card from '../card'
import Image from 'next/image'
import { MdSchool } from 'react-icons/md'
import { IoFlashOutline } from 'react-icons/io5'
import { useTranslations } from 'next-intl'
import ExperienceImage from '../../public/images/experiences-image.svg'

const Carrer: React.FC = () => {
  const t = useTranslations('carrer')
  // const experienceKeys = ['experience1', 'experience2', 'experience3', 'experience4'] as const
  // const educationKeys = ['education1', 'education2'] as const
  const experiences = [
    {
      title: t('experiences.experience1.title'),
      list: t('experiences.experience1.list').split('|'),
      local: t('experiences.experience1.local'),
      icon: t('experiences.experience1.icon'),
      startAt: t('experiences.experience1.startAt'),
      AndAt: t('experiences.experience1.endAt')
    },
    {
      title: t('experiences.experience2.title'),
      list: t('experiences.experience2.list').split('|'),
      local: t('experiences.experience2.local'),
      icon: t('experiences.experience2.icon'),
      startAt: t('experiences.experience2.startAt'),
      AndAt: t('experiences.experience2.endAt')
    },
    {
      title: t('experiences.experience3.title'),
      list: t('experiences.experience3.list').split('|'),
      local: t('experiences.experience3.local'),
      icon: t('experiences.experience3.icon'),
      startAt: t('experiences.experience3.startAt'),
      AndAt: t('experiences.experience3.endAt')
    },
    {
      title: t('experiences.experience4.title'),
      list: t('experiences.experience4.list').split('|'),
      local: t('experiences.experience4.local'),
      icon: t('experiences.experience4.icon'),
      startAt: t('experiences.experience4.startAt'),
      AndAt: t('experiences.experience4.endAt')
    }
  ]

  const educations = [
    {
      title: t('educations.education1.title'),
      description: t('educations.education1.description'),
      local: t('educations.education1.local'),
      icon: <MdSchool className="text-white-500 text-lg" />,
      startAt: t('educations.education1.startAt'),
      AndAt: t('educations.education1.endAt')
    },
    {
      title: t('educations.education2.title'),
      description: t('educations.education2.description'),
      local: '',
      icon: <IoFlashOutline className="text-white-500 text-lg" />,
      startAt: t('educations.education2.startAt'),
      AndAt: t('educations.education2.endAt')
    }
  ]

  return (
    <section id="career" className="mt-20" data-aos="fade-up">
      <h1 className="text-white-500 font-semibold text-2xl text-center mb-1">{t('title')}</h1>
      <p className="text-white-500 text-center">{t('description')}</p>

      <div className="mt-4 mb-4">
        <span className="text-white-500 font-semibold text-lg">{t('experiencesTitle')}</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-8">
          <div className="hidden lg:block">
            <Image
              className="max-h-[1130px] h-full w-full object-cover rounded-lg"
              src={ExperienceImage}
              alt="Imagem de experiências"
              quality={100}
              priority
              unoptimized={true}
            />
          </div>

          <div>
            {experiences.map((item, index) => {
              return (
                <div className="relative pl-8 py-4 group" key={index}>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300  before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-primary after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5">
                    <Card
                      data-aos="fade-left"
                      title={item.title}
                      list={item.list}
                      local={item.local}
                      startAt={item.startAt}
                      AndAt={item.AndAt}
                      icon={item.icon}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <span className="text-white-500 font-semibold text-lg">{t('educationsTitle')}</span>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {educations.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  local={item.local}
                  startAt={item.startAt}
                  AndAt={item.AndAt}
                  icon={item.icon}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carrer
