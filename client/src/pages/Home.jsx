import React from 'react'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import FeaturedCollection from '../components/FeaturedCollection'
import Information from '../components/Information'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <FeaturedCollection />
      <Information />
    </div>
  )
}

export default Home