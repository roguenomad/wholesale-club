import React from 'react'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import FeaturedCollection from '../components/FeaturedCollection'
import Information from '../components/Information'
import FeaturedBrands from '../components/FeaturedBrands'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <FeaturedCollection />
      <Information />
      <FeaturedBrands />
    </div>
  )
}

export default Home