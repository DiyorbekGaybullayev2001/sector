import React from "react";
import { useTranslation } from "react-i18next";
import categoryimg1 from "../imgs/categoryimg1.png";
import categoryimg2 from "../imgs/categoryimg2.png";
import categoryimg3 from "../imgs/categoryimg3.png";
import categoryimg4 from "../imgs/categoryimg4.png";
import categoryimg5 from "../imgs/categoryimg5.png";
import categoryimg6 from "../imgs/categoryimg6.png";
import categoryimg7 from "../imgs/categoryimg7.png";
import categoryimg8 from "../imgs/categoryimg8.png";
import categoryimg9 from "../imgs/categoryimg9.png";
import categoryimg10 from "../imgs/categoryimg10.jpg";
import categoryimg11 from "../imgs/categoryimg11.png";
import categoryimg12 from "../imgs/categoryimg12.png";
import bg from "../imgs/bg1.png";

const categories = [
  { key: "category1", items: 784, image: categoryimg1 },
  { key: "category2", items: 63, image: categoryimg2 },
  { key: "category3", items: 99, image: categoryimg3 },
  { key: "category4", items: 24, image: categoryimg4 },
  { key: "category5", items: 21, image: categoryimg5 },
  { key: "category6", items: 97, image: categoryimg6 },
  { key: "category7", items: 121, image: categoryimg7 },
  { key: "category8", items: 156, image: categoryimg8 },
  { key: "category9", items: 265, image: categoryimg9 },
  { key: "category10", items: 43, image: categoryimg10 },
  { key: "category11", items: 109, image: categoryimg11 },
  { key: "category12", items: 7812, image: categoryimg12 },
];

const Categories = () => {
  const { t } = useTranslation();

  return (
    <div className="container m-auto pt-[50px] p-[10px]">
      <h2 id="category" className="text-[25px] sm:text-[32px] font-bold mb-6">
        {t("popular_categories")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 top-0 w-[70%] h-[90%] opacity-50">
              <img src={bg} alt="bg" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 left-0">
              <img
                src={category.image}
                alt={t(category.key)}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-lg font-semibold pt-[100px]">{t(category.key)}</p>
            <p className="text-gray-500 ">{category.items} {t("products")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
