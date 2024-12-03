import React from 'react'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import FeaturedCollection from '../components/FeaturedCollection'

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <FeaturedCollection />
    </div>
  )
}

export default Home