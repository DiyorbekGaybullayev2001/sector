// import React, { useState } from 'react';
// import productsimg1 from '../imgs/productsimg1.png'
// import productsimg2 from '../imgs/productsimg2.png'
// import { FaCopy } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa";
// import { AiOutlineBarChart } from "react-icons/ai";
// import { BsCartPlusFill } from "react-icons/bs";

// const news = [
//   { id: 1, title: 'Новая серия сварочных аппаратов SNR-FS-60x уже на складе', date: '18 апреля 2024 г.' },
//   { id: 2, title: 'Читайте статью: Что такое PoE и для чего он нужен?', date: '29 марта 2024 г.' },
//   { id: 1, title: 'Новая серия сварочных аппаратов SNR-FS-60x уже на складе', date: '18 апреля 2024 г.' },
//   { id: 2, title: 'Читайте статью: Что такое PoE и для чего он нужен?', date: '29 марта 2024 г.' },
// ];

// const projects = [
//   { id: 1, title: 'snr.systems' },
//   { id: 2, title: 'Конфигураторы' }
// ];

// const productTabs = [
//   'Рекомендуем',
//   'Новинки',
//   'Акции',
//   'Товары со скидкой',
//   'Популярное'
// ];

// const products = {
//   'Рекомендуем': [
//     { id: 1, title: 'Витая пара FTP кат.5E', price: '911 374 сум', availability: 'В наличии: 10 уп', image: productsimg1, isNew: true },
//     { id: 2, title: 'Грозозащита Ethernet', price: '258 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true },
//     { id: 1, title: 'Витая пара FTP кат.5E', price: '911 374 сум', availability: 'В наличии: 10 уп', image: productsimg1, isNew: true },
//     { id: 2, title: 'Грозозащита Ethernet', price: '258 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true },
//     { id: 1, title: 'Витая пара FTP кат.5E', price: '911 374 сум', availability: 'В наличии: 10 уп', image: productsimg1, isNew: true },
//     { id: 2, title: 'Грозозащита Ethernet', price: '258 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true },
//     { id: 1, title: 'Витая пара FTP кат.5E', price: '911 374 сум', availability: 'В наличии: 10 уп', image: productsimg1, isNew: true },
//     { id: 2, title: 'Грозозащита Ethernet', price: '258 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true }
   
//   ],
//   'Новинки': [
//     { id: 3, title: 'Новинка 1', price: '500 000 сум', availability: 'В наличии: 5 шт', image: productsimg1, isNew: true },
//     { id: 3, title: 'Новинка 1', price: '500 000 сум', availability: 'В наличии: 5 шт', image: productsimg2, isNew: true },
//     { id: 3, title: 'Новинка 1', price: '500 000 сум', availability: 'В наличии: 5 шт', image: productsimg2, isNew: true }
//   ],
//   'Акции': [
//     { id: 4, title: 'Акция 1', price: '700 000 сум', availability: 'В наличии: 2 шт', image: productsimg2 }
//   ],
//   'Товары со скидкой': [
//     { id: 5, title: 'Скидка 1', price: '300 000 сум', availability: 'В наличии: 8 шт', image: productsimg1 }
//   ],
//   'Популярное': [
//     { id: 6, title: 'Популярный товар', price: '1 200 000 сум', availability: 'В наличии: 4 шт', image: productsimg2 },
//     { id: 6, title: 'Популярный товар', price: '1 200 000 сум', availability: 'В наличии: 4 шт', image: productsimg1 }
//   ]
// };

// const Sidebar = () => {
//   return (
//     <div className="space-y-6">
//       <div className="bg-white shadow-md rounded-2xl p-4">
//         <h2 className="text-lg font-bold mb-3">Новости</h2>
//         {news.map(item => (
//           <div key={item.id} className="mb-2">
//             <p className="text-sm text-gray-800">{item.title}</p>
//             <p className="text-xs text-gray-500">{item.date}</p>
//           </div>
//         ))}
//       </div>
//       <div className="bg-white shadow-md rounded-2xl p-4">
//         <h2 className="text-lg font-bold mb-3">Наши проекты</h2>
//         <ul className="list-disc ml-5">
//           {projects.map(item => (
//             <li key={item.id} className="text-sm text-blue-600 hover:underline">{item.title}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const ProductCard = ({ product }) => {
//   return (
//     <div className=" rounded-2xl  shadow-lg  bg-white relative">
//       {product.isNew && <span className="absolute top-2 left-2 bg-green-300 text-white text-xs px-2 py-1 rounded">Новинка</span>}
//       <img src={product.image} alt={product.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
//       <h3 className="text-sm font-semibold mb-1 px-[10px]">{product.title}</h3>
//       <p className="text-blue-600 mb-1 px-[10px]">{product.availability}</p>
//       <p className="text-lg font-bold mb-2 px-[10px]">{product.price}</p>
//       <div className="flex gap-5 mt-2 p-[10px]">
//         <button className=" text-gray-500 text-[23px] hover:text-blue-600"><BsCartPlusFill/></button>
//         <button className="text-gray-500 text-[23px] hover:text-blue-500">
//           <i className="far fa-copy"></i> <FaCopy/>
//         </button>
//         <button className="text-gray-500 text-[23px] hover:text-red-500">
//           <i className="far fa-heart"></i><FaRegHeart/>
//         </button>
//         <button className="text-gray-500 text-[23px] hover:text-blue-600">
//           <i className="far fa-heart"></i><AiOutlineBarChart/>
//         </button>
//       </div>
//     </div>
//   );
// };

// const ProductList = ({ selectedTab }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//       {products[selectedTab].map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// const ECommerceComponent = () => {
//   const [selectedTab, setSelectedTab] = useState('Рекомендуем');

//   return (
//     <div className="container mx-auto grid grid-cols-12 gap-4 p-[10px]">
//       <aside className="col-span-12 lg:col-span-3 ">
//         <Sidebar />
//       </aside>
//       <main className="col-span-12 lg:col-span-9 ">
//         <div className="mb-4 flex space-x-4 overflow-x-auto">
//           {productTabs.map(tab => (
//             <button
//               key={tab}
//               className={`px-4 py-2 rounded ${selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-800'}`}
//               onClick={() => setSelectedTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//         <ProductList selectedTab={selectedTab} />
//       </main>
//     </div>
//   );
// };

// export default ECommerceComponent;





import React, { useState } from 'react';
import productsimg1 from '../imgs/productsimg1.png';
import productsimg2 from '../imgs/productsimg2.png';
import { FaCopy } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";

const news = [
  { id: 1, title: 'Новая серия сварочных аппаратов SNR-FS-60x уже на складе', date: '18 апреля 2024 г.' },
  { id: 2, title: 'Читайте статью: Что такое PoE и для чего он нужен?', date: '29 марта 2024 г.' },
  { id: 3, title: 'Читайте статью: Что такое PoE ?', date: '9 марта 2024 г.' }
];

const projects = [
  { id: 1, title: 'snr.systems' },
  { id: 2, title: 'Конфигураторы' }
];

const productTabs = [
  'Рекомендуем',
  'Новинки',
  'Акции',
  'Товары со скидкой',
  'Популярное'
];

const products = {
  'Рекомендуем': [
    { id: 1, title: 'Витая пара FTP кат.5E', price: '911 374 сум', availability: 'В наличии: 10 уп', image: productsimg1, isNew: true },
    { id: 2, title: 'Грозозащита Ethernet', price: '258 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true },
    { id: 11, title: 'Грозозащита Ethernet', price: '400 599 сум', availability: 'В наличии: 3 шт', image: productsimg1, isNew: true },
    { id: 12, title: 'Грозозащита Ethernet', price: '550 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true },
    { id: 13, title: 'Грозозащита Ethernet', price: '203 599 сум', availability: 'В наличии: 3 шт', image: productsimg1, isNew: true },
    { id: 14, title: 'Грозозащита Ethernet', price: '50 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true },
    { id: 15, title: 'Грозозащита Ethernet', price: '990 599 сум', availability: 'В наличии: 3 шт', image: productsimg1, isNew: true },
    { id: 16, title: 'Грозозащита Ethernet', price: '770 599 сум', availability: 'В наличии: 3 шт', image: productsimg2, isNew: true },
  ],
  'Новинки': [
    { id: 3, title: 'Новинка 1', price: '500 000 сум', availability: 'В наличии: 5 шт', image: productsimg1, isNew: true },
    { id: 4, title: 'Новинка 2', price: '550 000 сум', availability: 'В наличии: 2 шт', image: productsimg2, isNew: true }
  ],
  'Акции': [
    { id: 5, title: 'Акция 1', price: '700 000 сум', availability: 'В наличии: 2 шт', image: productsimg2 }
  ],
  'Товары со скидкой': [
    { id: 6, title: 'Скидка 1', price: '300 000 сум', availability: 'В наличии: 8 шт', image: productsimg1 }
  ],
  'Популярное': [
    { id: 7, title: 'Популярный товар', price: '1 200 000 сум', availability: 'В наличии: 4 шт', image: productsimg2 },
    { id: 8, title: 'Популярный товар', price: '2 300 000 сум', availability: 'В наличии: 4 шт', image: productsimg1 }
  ]
};

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-lg font-bold mb-3">Новости</h2>
        {news.map(item => (
          <div key={item.id} className="mb-2">
            <p className="text-sm text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-lg font-bold mb-3">Наши проекты</h2>
        <ul className="list-disc ml-5">
          {projects.map(item => (
            <li key={item.id} className="text-sm text-blue-600 hover:underline">{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl shadow-lg bg-white relative">
      {product.isNew && <span className="absolute top-2 left-2 bg-green-300 text-white text-xs px-2 py-1 rounded">Новинка</span>}
      <img src={product.image} alt={product.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
      <h3 className="text-sm font-semibold mb-1 px-[10px]">{product.title}</h3>
      <p className="text-blue-600 mb-1 px-[10px]">{product.availability}</p>
      <p className="text-lg font-bold mb-2 px-[10px]">{product.price}</p>
      <div className="flex gap-5 mt-2 p-[10px]">
        <button className="text-gray-500 text-[23px] hover:text-blue-600"><BsCartPlusFill /></button>
        <button className="text-gray-500 text-[23px] hover:text-blue-500"><FaCopy /></button>
        <button className="text-gray-500 text-[23px] hover:text-red-500"><FaRegHeart /></button>
        <button className="text-gray-500 text-[23px] hover:text-blue-600"><AiOutlineBarChart /></button>
      </div>
    </div>
  );
};

const ProductList = ({ selectedTab }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products[selectedTab].map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ECommerceComponent = () => {
  const [selectedTab, setSelectedTab] = useState('Рекомендуем');

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 p-[10px]">
      <aside className="col-span-12 lg:col-span-3">
        <Sidebar />
      </aside>
      <main className="col-span-12 lg:col-span-9">
        <div className="mb-4 flex space-x-4 overflow-x-auto">
          {productTabs.map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-800'}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <ProductList selectedTab={selectedTab} />
      </main>
    </div>
  );
};

export default ECommerceComponent;




