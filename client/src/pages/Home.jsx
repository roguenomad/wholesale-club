import React from 'react'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import FeaturedCollection from '../components/FeaturedCollection'
import Information from '../components/Information'
import FeaturedBrands from '../components/FeaturedBrands'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <FeaturedCollection />
      <Information />
      <FeaturedBrands />
      <Footer />
    </div>
  )
}

export default Home