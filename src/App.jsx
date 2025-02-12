import React from "react";
import './App.css'
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Categories from "./components/category";
import Brands from "./components/brands";
import ECommerceComponent from "./components/products";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Brands/>
      <ECommerceComponent/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
