import React from 'react'
import Hero from '../compponents/Hero'
import FeaturedSection from '../compponents/FeaturedSection'
import Banner from '../compponents/Banner'
import Testimonial from '../compponents/Testimonial'
import Neswletter from '../compponents/Neswletter'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial/>
      <Neswletter/>
    </>
  )
}

export default Home