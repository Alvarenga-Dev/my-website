'use client'
import Image from 'next/image'
import { openLink } from '@/utils/utils'
import { SocialsLinks } from '@/content/data'

const Home = () => {
  const socialsMedias = [
    {
      name: 'Portfólio',
      link: '/pt/portfolio',
      icon: ''
    },
    ...SocialsLinks
  ]

  return (
    <div className="flex mt-20 items-center flex-col h-screen container">
      <div className="border-4 rounded-full border-primary p-1" datos-aos="fade-up">
        <Image
          datos-aos="fade-up"
          src="/images/linktreeImage.png"
          alt="fotoAlva"
          width={130}
          height={130}
        />
      </div>
      <div className="items-center flex flex-col" data-aos="fade-up" data-aos-duration="1000">
        <p className="text-xl text-white-500 font-semibold md:text-2xl mt-2">Lucas Alvarenga</p>
        <p className="text-sm text-primary md:font-normal md:text-base">Android developer</p>
        <p className="text-sm md:font-medium text-white-400 mt-6 md:text-base">
          Meus links em um lugar só! Confira abaixo
        </p>
      </div>

      <div
        className="flex flex-col gap-4 mt-4 w-full md:w-auto md:min-w-96"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {socialsMedias.map((media, index) => (
          <div
            key={index}
            className="group border-2 border-white-100 hover:border-white-500 rounded-xl p-4 flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => openLink(media.link)}
          >
            <div>
              <p className="text-white-100 group-hover:text-white-500 text-xl font-semibold">{media.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
