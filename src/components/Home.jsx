import React from 'react'
import Banner from './banner'
import Categories from './category'
import Brands from './brands'
import Products from './products'
import About from './about'
import Footer from './footer'
const Home = () => {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Brands/>
        <Products/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home