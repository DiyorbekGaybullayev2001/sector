import React from "react";
import './App.css'
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Categories from "./components/category";
import Brands from "./components/brands";
import ECommerceComponent from "./components/products";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Categories/>
      <Brands/>
      <ECommerceComponent/>
    </>
  )
}

export default App
