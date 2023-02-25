import React from 'react'
import Categories from '../../components/Categories/Categories.jsx'
import Contact from '../../components/Contact/Contact.jsx'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from "../../components/Slider/Slider"
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories />
      <FeaturedProducts type="trending"/>
      <Contact />
    </div>
  )
}

export default Home
