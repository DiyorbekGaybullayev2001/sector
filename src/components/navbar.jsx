import React, { useState } from 'react';
import { Search, User, ShoppingCart, Heart, Percent, MessageSquare, BarChart3, AlignJustify, X } from "lucide-react";
import flag from '../imgs/flag-uzb.png';
import logo from '../../public/logo.png';
import { useTranslation } from 'react-i18next';

function Navbar({ onSearch }) {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    onSearch(query);
    setSearchQuery(query);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className="bg-blue-700 text-white text-sm py-2 text-center">
        {t('headertext1')} <a href="#" className="underline">{t('headertext2')}</a>
      </header>
      <div className='shadow-sm w-full'>
        <div className="p-4 container m-auto">
          <div className="flex items-center justify-between">
            <div className='flex'>
              <a href="/">
                <img src={logo} alt="Sector Technology" className="h-8" />
              </a>
              <div className="relative md:flex w-[100%] md:w-[500px] mx-[20px]">
                <input 
                  type="text" 
                  placeholder={t('searchPlaceholder')} 
                  className="bg-gray-100 p-2 w-full rounded-md" 
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute right-2 top-2 text-blue-800 " />
              </div>
            </div>
            <div className='hidden md:flex grid-cols-5 gap-2'>
              <a href='#' className="flex flex-col items-center">
                <Percent className="w-5 h-5" /><label className='hidden lg:flex'>{t('promotions')}</label>
              </a>
              <a href='#' className="flex flex-col items-center">
                <Heart className="w-5 h-5" /><label className='hidden lg:flex'>{t('favorites')}</label>
              </a>
              <a href='#' className="flex flex-col items-center">
                <BarChart3 className="w-5 h-5" /><label className='hidden lg:flex'>{t('compare')}</label>
              </a>
              <a href='#' className="flex flex-col items-center">
                <User className="w-5 h-5" /><label className='hidden lg:flex'>{t('cabinet')}</label>
              </a>
              <a href='#' className="flex flex-col items-center">
                <ShoppingCart className="w-5 h-5" /><label className='hidden lg:flex'>{t('cart')}</label>
              </a>
            </div>
            <button className='md:hidden' onClick={() => setIsModalOpen(true)}>
              <AlignJustify className='w-6 h-6' />
            </button>
            {/* <div>
              <button onClick={() => changeLanguage('ru')} className='mx-2'>RU</button>
              <button onClick={() => changeLanguage('uz')} className='mx-2'>UZ</button>
            </div> */}
          </div>
        </div>

        <hr className='text-gray-200 w-full' />

        <nav className="container m-auto p-4 flex justify-between text-sm">
          <div className="flex items-center space-x-4">
            <select className="bg-blue-600 text-white flex p-[5px] rounded-md items-center">
              <option>{t('catalog')}</option>
              <option>{t('ipCameras')}</option>
              <option>{t('sfpModules')}</option>
              <option>{t('opticalCable')}</option>
              <option>{t('corporateRouters')}</option>
            </select>
            <span className="flex items-center">
              <img src={flag} alt="flag" className="h-4 w-6 mr-1" /> {t('tashkent')}
            </span>
            <span>+9999999999</span>
          </div>
          <div className="space-x-4 hidden md:flex items-center">
            <a href="#category">{t('forCustomers')}</a>
            <a href="#product">{t('services')}</a>
            <a href="#about">{t('aboutUs')}</a>
            <a href="#chat" className='flex items-center'>
              <MessageSquare className='w-4 h-4' /> {t('onlineChat')}
            </a>
          </div>
        </nav>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#76767688] bg-opacity-50  items-center z-60">
          <div className="bg-white p-6 rounded-lg w-full">
            <button className="float-right" onClick={() => setIsModalOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-4 mt-4">
              <a href='#'><Percent className="w-5 h-5 inline" /> {t('promotions')}</a>
              <a href='#'><Heart className="w-5 h-5 inline" /> {t('favorites')}</a>
              <a href='#'><BarChart3 className="w-5 h-5 inline" /> {t('compare')}</a>
              <a href='#'><User className="w-5 h-5 inline" /> {t('cabinet')}</a>
              <a href='#'><ShoppingCart className="w-5 h-5 inline" /> {t('cart')}</a>
              <a href="#category">{t('forCustomers')}</a>
              <a href="#product">{t('services')}</a>
              <a href="#about">{t('aboutUs')}</a>
              <a href="#chat" className='flex items-center'>
                <MessageSquare className='w-4 h-4' /> {t('onlineChat')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )}

export default Navbar;
