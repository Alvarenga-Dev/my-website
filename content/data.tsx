import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitch, FaYoutube } from 'react-icons/fa';

const experiencesData = [
  [
    {
      title: 'Android Developer',
      list: [
        'Modularization and of the MVVM architecture',
        'Android Jetpack libraries',
        'Detekt',
        'AWS',
        'Jira',
        'Accessibility'
      ],
      local: 'Itaú (@BRQ)',
      icon: '/itau.svg',
      startAt: '2023',
      AndAt: 'Currently'
    },
    {
      title: 'Mid-Level Android Engineer',
      list: [
        'Modularization and of the MVVM architecture',
        'Creation of tests with JUnit 5 and MockK',
        'Android Jetpack libs',
        'Participating in Design/Discovery processes',
        'Integration with RESTful APIs',
        'Detekt'
      ],
      local: 'Bornlogic',
      icon: '/bornlogic.svg',
      startAt: 'Jul 2022',
      AndAt: 'May 2023'
    },
    {
      title: 'Junior Android Developer',
      list: [
        'Creation of new features defined by Squad',
        'Unit tests with JUnit 5 + MockK',
        'Android Jetpack libs',
        'Detekt',
        'Integration of RESTful APIs',
        'Zendesk integration'
      ],
      local: 'Bornlogic',
      icon: '/bornlogic.svg',
      startAt: 'Jan 2021',
      AndAt: 'Jul 2022'
    },
    {
      title: 'Intern Android Developer',
      list: [
        'Creation of new features & bug fixes',
        'Firebase (Crashlytics, Messaging, App Distribution...)',
        'Android Jetpack libs',
        'Picasso, Glide',
        'Android Jetpack libs'
      ],
      local: 'Bornlogic',
      icon: '/bornlogic.svg',
      startAt: 'Sep 2020',
      AndAt: 'Dec 2022'
    }
  ]
]

const projectsData = [
  {
    name: 'Marketplace List',
    description:
      'This simple shopping list App helps you to create your list and already knowing the final value of the purchase!',
    link: 'https://play.google.com/store/apps/details?id=com.alvarengadev.marketplacelist',
    image: '/images/marketplace-list.png',
    technologies: ['MVVM', 'Dagger Hilt', 'Firebase Crashlytics']
  },
  {
    name: 'Movies Reviews',
    description: 'Your/Dev Recruitment Process 2020 - Android Developer',
    link: 'https://github.com/Alvarenga-Dev/Movie-Reviews',
    image: '/images/movies-review.png',
    technologies: ['Retrofit', 'Live Data', 'Room']
  },
  {
    name: 'AlvaFlix',
    description: 'A joke with my last name Alvarenga with netflix',
    link: 'https://github.com/Alvarenga-Dev/Alvaflix',
    image: '/images/alvaflix.png',
    technologies: ['MVVM', 'Koin', 'Custom Components']
  },
  {
    name: 'Crypto - UI/UX',
    description:
      'Fictional project from Felipe Santanas Figma Course (FEUX), with the aim of improving my knowledge in Figma Tool and also in UI and UX.',
    link: 'https://www.figma.com/file/ei4iys8RFNzlXNswPVsBpI/Feux---NFT-App?node-id=404%3A5462',
    image: '/images/crypto.png',
    technologies: ['Figma', 'Components', 'Create Flows']
  },
  {
    name: 'AlvaMessager',
    description:
      'This app was able to work deeper with firebase, using it as a means of creating a new messaging app (I guess in high school I wasnt creative with names).',
    link: 'https://github.com/Alvarenga-Dev/Alva-Messenger',
    image: '/images/alvamessager.png',
    technologies: ['Kotlin', 'Firebase']
  },
  {
    name: 'Time to Sleep',
    description:
      'This project was developed when I was in the 2nd year of high school, with the aim of being an alarm clock for the deaf!',
    link: 'https://github.com/Alvarenga-Dev/Time-to-Sleep',
    image: '/images/time-to-sleep.png',
    technologies: ['Bluetooth Connection', 'Arch MVP', 'Java']
  }
]

const SocialsLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/alvarenga.dev/'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/llucasallvarenga/'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/Alvarenga-Dev'
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    link: 'https://www.youtube.com/channel/UCefw6voAiaqil3KAqMfLPyg/about'
  },
  {
    name: 'Twitch',
    icon: FaTwitch,
    link: 'https://www.twitch.tv/alvarengadev'
  }
]

const MyLinks = [
  {
    name: 'Aprenda mais comigo',
    link: 'https://alvarenga-dev.notion.site/Guia-Interativo-para-Programadores-Estagi-rios-e-Juniors-1aa4c2586c5480159b6bd09f9cb1cb9f'
  },
  {
    name: 'Quem é o Alvarenga?',
    link: '/pt/portfolio',
  },
  {
    name: 'Meu LinkedIn',
    link: 'https://www.linkedin.com/in/llucasallvarenga/'
  },
  {
    name: 'Meu GitHub',
    link: 'https://github.com/Alvarenga-Dev'
  }
]

const footerData = {
  message: 'We shouldn\'t do things expecting something in return. Do what needs to be done and the reward will come naturally in its time.',
  socialLinks: 'Social links',
  copyright: 'Copyright alvarenga.dev. All Rights Reserved',
  developedBy: 'Designed e developed by'
}

export { experiencesData, projectsData, SocialsLinks, footerData, MyLinks };

