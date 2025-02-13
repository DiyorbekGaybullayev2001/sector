import React, { useState } from 'react'
import Banner from './banner'
import Categories from './category'
import Brands from './brands'
import Products from './products'
import About from './about'
import Footer from './footer'
import logo from '../../public/logo.png'
import uz from '../imgs/flag-uzb.png'
import ru from '../imgs/flag-ru.png'
import { Search, User, ShoppingCart, Heart, Percent, MessageSquare, BarChart3, AlignJustify, X } from "lucide-react";
import i18n from '../i18n'

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  };
  // const { t, i18n} = useTranslation();
  // const luangages = localStorage.getItem('i18nextLng')
  const handlechange = (event) =>{
    const selectedluangage = event.target.value
    i18n.changeLanguage(selectedluangage);
  };

  return (
    <div className='relative'>
      {/* Sidebar */}
      <div
        className={`fixed top-[200px] p-[5px] z-50 right-0 h-[500px] w-[50px] bg-[#ffffff] shadow-xl rounded-tl-2xl rounded-bl-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        // style={{ width: "50px" }}
      ><br />
        <img src={logo} alt="" /><br />
        <ul className="p-[5px]">
          <select name="Lng" id="lng" onChange={handlechange} className='bg-[#0054aee3]'>
            {/* <option value="">Lng</option> */}
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
          <br /><br />
              {/* <img src={ru} alt="" /> */}
          {/* <li className="mb-4" value={uz} onChange={handlechange}>
              <img src={uz} alt="" />
          </li>
          <li className="mb-4" value={ru} onChange={handlechange}>
          </li> */}
          <li className="mb-4">
            <a href="#"><Heart/></a>
          </li>
          <li className="mb-4">
            <a href="#"><BarChart3/></a>
          </li>
          <li className="mb-4">
            <a href="#"><Percent/></a>
          </li>

          <li className="mb-4">
            <a href="#"><ShoppingCart/></a>
          </li>

          <li className="mb-4">
            <a 
              href="#replain" 
              className="replain-link" 
              data-title="Чат"
              style={{ 
                all: 'unset',
                cursor: 'pointer',
              }}
            />   
          </li>
          {/* <li id='chat' className="mb-4">
          <a class="replain-link" href="#replain" data-title="" data-border="" data-background="" data-color=""></a>
          </li> */}
        
        </ul>
        {/* Toggle Button */}
      </div>
      <button
        className="fixed z-50 bottom-[180px] cursor-pointer right-0 transform -translate-y-1/2 bg-[#0054aee3] text-white rounded-l-2xl p-3 shadow-lg"
        onClick={toggleSidebar}
      >
        {isOpen ? "→" : "←"}
      </button>
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