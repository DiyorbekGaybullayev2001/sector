// import React from 'react'
// import { Search, User, ShoppingCart, Heart,  Percent, MessageSquare, BarChart3, AlignJustify } from "lucide-react";
// import flag from '../imgs/flag-uzb.png'
// import logo from '../../public/logo.png'

// function Navbar() {
   
//   return (
//     <>
//     <header className="bg-blue-700 text-white text-sm py-2 text-center">
//       Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста, <a href="#" className="underline">авторизуйтесь</a>
//     </header>
//     <div className='shadow-sm w-full'>
//     <div className="p-4 container m-auto">
//       <div className="flex items-center justify-between">
//         <div className='flex'>
//         <img src={logo} alt="Sector Technology" className="h-8" />
//         <div className="relative  md:flex w-[100%]  md:w-[500px] mx-[20px]">
//           <input type="text" placeholder="Введите поисковый запрос" className="bg-gray-100 p-2 w-full rounded-md" />
//           <Search className="absolute right-2 top-2 text-blue-800 " />
//         </div>
//         </div>
        
//         <div className='hidden md:flex grid-cols-5 gap-2'>
//             <a href='#'>
//                 <Percent className="w-5 h-5 text-center "/><label className='hidden lg:flex'>Аксии</label>
//             </a>
//             <a href='#'>
//                <Heart className="w-5 h-5" /><label className='hidden lg:flex'>Избранное</label>
//             </a>
//             <a href='#'>
//                <BarChart3  className="w-5 h-5" /><label className='hidden lg:flex'>Сравнить</label>
//             </a>
//             <a href='#'>
//                 <User className="w-5 h-5" /><label className='hidden lg:flex'>Кабинет</label>
//             </a>
//             <a href='#'>
//                 <ShoppingCart className="w-5 h-5" /><label className='hidden lg:flex'>Корзина</label>
//             </a>
//         </div>
//       </div>
//     </div>

//     <hr className='text-gray-200 w-full'/>

//     <nav className="container m-auto p-4 flex justify-between text-sm">
//     <div className="flex items-center space-x-4">
//         <button className="bg-blue-600 text-white flex p-[5px] rounded-md items-center">
//             <AlignJustify className='mx-[5px]'/>
//             Каталог товаров
//         </button>
//         <span className="flex items-center">
//           <img src={flag} alt="flag" className="h-4 w-6 mr-1" /> Ташкент
//         </span>
//         <span>+9999999999</span>
        
//       </div>
//       <div className="space-x-4 hidden md:flex items-center">
//         <a href="#">Покупателям</a>
//         <a href="#">Услуги</a>
//         <a href="#">О нас</a>
//         <a href="#" className='flex items-center'>  
//          <MessageSquare className='w-4 h-4'/> Онлайн чат 
//         </a>
        
//       </div>
//     </nav>
//     </div>

//     </>
//   )
// }

// export default Navbar





import React, { useState } from 'react';
import { Search, User, ShoppingCart, Heart, Percent, MessageSquare, BarChart3, AlignJustify, X } from "lucide-react";
import flag from '../imgs/flag-uzb.png';
import logo from '../../public/logo.png';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="bg-blue-700 text-white text-sm py-2 text-center">
        Корзина неавторизованных пользователей хранится 7 дней. Пожалуйста, <a href="#" className="underline">авторизуйтесь</a>
      </header>
      <div className='shadow-sm w-full'>
        <div className="p-4 container m-auto">
          <div className="flex items-center justify-between">
            <div className='flex'>
              <img src={logo} alt="Sector Technology" className="h-8" />
              <div className="relative md:flex w-[100%] md:w-[500px] mx-[20px]">
                <input type="text" placeholder="Введите поисковый запрос" className="bg-gray-100 p-2 w-full rounded-md" />
                <Search className="absolute right-2 top-2 text-blue-800 " />
              </div>
            </div>
            <div className='hidden md:flex grid-cols-5 gap-2'>
              <a href='#'>
                <Percent className="w-5 h-5" /><label className='hidden lg:flex'>Акции</label>
              </a>
              <a href='#'>
                <Heart className="w-5 h-5" /><label className='hidden lg:flex'>Избранное</label>
              </a>
              <a href='#'>
                <BarChart3 className="w-5 h-5" /><label className='hidden lg:flex'>Сравнить</label>
              </a>
              <a href='#'>
                <User className="w-5 h-5" /><label className='hidden lg:flex'>Кабинет</label>
              </a>
              <a href='#'>
                <ShoppingCart className="w-5 h-5" /><label className='hidden lg:flex'>Корзина</label>
              </a>
            </div>
            <button className='md:hidden' onClick={() => setIsModalOpen(true)}>
              <AlignJustify className='w-6 h-6' />
            </button>
          </div>
        </div>

        <hr className='text-gray-200 w-full' />

        <nav className="container m-auto p-4 flex justify-between text-sm">
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white flex p-[5px] rounded-md items-center">
              <AlignJustify className='mx-[5px]' />
              Каталог товаров
            </button>
            <span className="flex items-center">
              <img src={flag} alt="flag" className="h-4 w-6 mr-1" /> Ташкент
            </span>
            <span>+9999999999</span>
          </div>
          <div className="space-x-4 hidden md:flex items-center">
            <a href="#">Покупателям</a>
            <a href="#">Услуги</a>
            <a href="#">О нас</a>
            <a href="#" className='flex items-center'>
              <MessageSquare className='w-4 h-4' /> Онлайн чат
            </a>
          </div>
        </nav>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#76767688] bg-opacity-50 flex justify-center  items-center z-50">
          <div className="bg-white p-5 rounded-lg w-80">
            <button className="float-right" onClick={() => setIsModalOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-4 mt-4">
              <a href='#'><Percent className="w-5 h-5 inline" /> Акции</a>
              <a href='#'><Heart className="w-5 h-5 inline" /> Избранное</a>
              <a href='#'><BarChart3 className="w-5 h-5 inline" /> Сравнить</a>
              <a href='#'><User className="w-5 h-5 inline" /> Кабинет</a>
              <a href='#'><ShoppingCart className="w-5 h-5 inline" /> Корзина</a>
              <a href="#">Покупателям</a>
              <a href="#">Услуги</a>
              <a href="#">О нас</a>
              <a href="#" className='flex items-center'>
                <MessageSquare className='w-4 h-4' /> Онлайн чат
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;


