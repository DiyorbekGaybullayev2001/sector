import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagramSquare, FaTelegram, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className='w-full h-full mt-[50px] bg-[#0054AE]'>
        <div className='container m-auto h-full grid grid-cols-1 pt-[30px] sm:grid-cols-2 md:grid-cols-4 p-[10px]'>

          <div className=' flex flex-col text-center sm:text-left text-xl sm:text-[18px] text-white sm:mt-10 p-[10px]'>
            <h2 className="font-semibold">{t('footer.companyTitle')}</h2>
            <br />
            <a href="#">{t('footer.aboutUs')}</a><br />
            <a href="#">{t('footer.news')}</a><br />
            <a href="#">{t('footer.contacts')}</a><br />
            <a href="#">{t('footer.bankDetails')}</a><br />
            <a href="#">{t('footer.partners')}</a><br />
          </div>

          <div className=' flex flex-col text-center sm:text-left text-xl sm:text-[18px] text-white sm:mt-10 p-[10px]'>
            <h2 className="font-semibold">{t('footer.supportTitle')}</h2>
            <br />
            <a href="#">{t('footer.onlineSupport')}</a><br />
            <a href="#">{t('footer.paymentTerms')}</a><br />
            <a href="#">{t('footer.deliveryTerms')}</a><br />
            <a href="#">{t('footer.warrantyService')}</a><br />
            <a href="#">{t('footer.extendedWarranty')}</a><br />
          </div>

          <div className=' flex flex-col text-center sm:text-left text-xl sm:text-[18px] text-white sm:mt-10 p-[10px]'>
            <h2 className="font-semibold">{t('footer.projectsTitle')}</h2>
            <br />
            <a href="#">snr.systems</a><br />
            <a href="#">NAG.conference</a><br />
            <a href="#">{t('footer.configurators')}</a><br />
          </div>
          
          <div className=' flex flex-col text-center sm:text-left text-xl sm:text-[18px] text-white sm:mt-10 p-[10px]'>
            <h2 className="font-semibold">{t('footer.officeTitle')}</h2>
            <br />
            <a href="#">{t('footer.tashkent')}</a><br />
            <a href="tel:998999999999">{t('footer.phone')}</a><br />
            <a href="#">{t('footer.website')}</a><br />
            <a href="#">{t('footer.address')}</a><br />
          </div>
        </div>

        <div className='container m-auto text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-[20px] text-[#c8c8c8]'>

          <div>
            <p>{t('footer.copyright')}</p>
          </div>
          
          <div className='flex gap-4 text-3xl justify-center'> 
            <a className='hover:scale-110 duration-300 hover:text-gray-300' href="https://instagram.com"><FaInstagramSquare /></a>
            <a className='hover:scale-110 duration-300 hover:text-gray-300' href="https://telegram.com"><FaTelegram /></a> 
            <a className='hover:scale-110 duration-300 hover:text-gray-300' href="https://facebook.com"><FaFacebook /></a>
            <a className='hover:scale-110 duration-300 hover:text-gray-300' href="https://youtube.com"><FaYoutube /></a>
          </div>

          <div className='text-center sm:text-left md:text-right'>
            <p>{t('footer.privacyPolicy')}</p>
            <p>{t('footer.personalDataPolicy')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;






