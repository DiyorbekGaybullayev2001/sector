import React from 'react'
import Banner from './banner'
import Categories from './category'
import Brands from './brands'
import Products from './products'
const Home = () => {
  return (
    <div>
        <Banner/>
        <Categories/>
        <Brands/>
        <Products/>
    </div>
  )
}

export default Home