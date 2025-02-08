import AboutMe from '@/components/aboutMe/'
import Hero from '@/components/hero'
import NavBar from '@/components/navbar'

import Carrer from '@/components/carrer/page'
import Footer from '@/components/footer'
import Projects from '@/components/projects'
import Script from 'next/script'

const Portfolio = () => {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></Script>
      <div className="bg-background-primary h-dvh">
        <NavBar />

        <div className="mt-36">
          <div className="container mx-auto mb-20">
            <Hero />
            <AboutMe />
            <Carrer />
            <Projects />
          </div>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default Portfolio
