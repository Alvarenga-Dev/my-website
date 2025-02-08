'use client'
import { openLink } from '@/utils/utils'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'

const Projects: React.FC = () => {
  const t = useTranslations('projects')

  const projectsData = [
    {
      name: t('project1.name'),
      description: t('project1.description'),
      link: t('project1.link'),
      image: t('project1.image'),
      technologies: t('project1.technologies').split('|')
    },
    {
      name: t('project2.name'),
      description: t('project2.description'),
      link: t('project2.link'),
      image: t('project2.image'),
      technologies: t('project2.technologies').split('|')
    },
    {
      name: t('project3.name'),
      description: t('project3.description'),
      link: t('project3.link'),
      image: t('project3.image'),
      technologies: t('project3.technologies').split('|')
    },
    {
      name: t('project4.name'),
      description: t('project4.description'),
      link: t('project4.link'),
      image: t('project4.image'),
      technologies: t('project4.technologies').split('|')
    },
    {
      name: t('project5.name'),
      description: t('project5.description'),
      link: t('project5.link'),
      image: t('project5.image'),
      technologies: t('project5.technologies').split('|')
    },
    {
      name: t('project6.name'),
      description:  t('project6.description'),
      link: t('project6.link'),
      image: t('project6.image'),
      technologies: t('project6.technologies').split('|')
    }
  ]

  return (
    <section id="projects" data-aos="fade-up">
      <h1 className="text-white-500 font-semibold text-2xl text-center mb-1 mt-20">{t('title')}</h1>
      <p className="text-white-500 text-center mx-10 mb-6">{t('description')}</p>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {projectsData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                onClick={() => openLink(item.link)}
                className="group flex-shrink-0 w-fit h-[395px] relative cursor-pointer"
              >
                <div className="group-hover:flex hidden flex-col justify-between bg-black bg-opacity-75 h-full w-full absolute top-0 left-0 z-10 px-4 py-6 rounded-lg">
                  <div>
                    <p className="text-white-500 text-xl font-semibold mb-3">{item.name}</p>
                    <p className="text-white-400 text-sm leading-snug">{item.description}</p>

                    <div className="flex gap-2 flex-wrap mt-4">
                      {item.technologies.map((tech, index) => {
                        return (
                          <div
                            className="bg-background-tertiary border border-white-300 text-white rounded-full py-1 px-2 w-fit text-xs"
                            key={index}
                          >
                            {tech}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-primary rounded-full p-2">
                      <FaArrowRight size={16} className="text-white-500" />
                    </div>
                  </div>
                </div>

                <Image
                  className="h-[395px] w-fit object-cover rounded-lg"
                  src={item.image}
                  alt={item.name}
                  height={395}
                  width={250}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Projects
