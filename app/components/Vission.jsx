import React from "react";
import { HiOutlineHeart, HiOutlineSparkles, HiOutlineThumbUp } from "react-icons/hi";
import Image from "next/image";
import { useTranslation } from "react-i18next";



function Vission() {

const {
  t,
  i18n: { changeLanguage, language },
} = useTranslation();

  return (
    <section className="py-8 sm:py-8 lg:py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mt-6 text-3xl font-bold leading-relaxed text-black sm:text-4xl lg:text-5xl">ทำไมต้องเลือกบริการนำเข้าสินค้ากับ <span className="text-primary-600">YSE</span></h2>
        </div>
        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 text-primary">
                <HiOutlineSparkles size={40} />
              </div>
              <div className="ml-5">
                <h3 className="text-2xl font-semibold text-black">Mission</h3>
                <p className="mt-3 text-xl text-gray-900">{`ภารกิจของเราคือการให้บริการ และพัฒนาความรู้ ด้านต่างๆ ที่เกี่ยวกับการค้าระหว่างประเทศด้วยความทันสมัย ถูกต้อง รวดเร็ว เป็นธรรม เพื่อเป็นหลักประกันให้กับลูกค้าว่าจะต้องได้รับในสิ่งที่ดีที่สุดจากเรา`}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 text-blue-600">
                <HiOutlineThumbUp size={40} />
              </div>
              <div className="ml-5">
                <h3 className="text-2xl font-semibold text-black">Vision</h3>
                <p className="mt-3 text-xl text-gray-900">{`โดยมีปณิธานอันแน่วแน่ที่จะก้าวต่อไป ด้วยเอกลักษณ์ของความเป็นไทย แต่ความสามารถเทียบเท่าสากล อันเป็นเป้าหมายสูงสุด`}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 text-rose-600">
                <HiOutlineHeart size={40} />
              </div>
              <div className="ml-5">
                <h3 className="text-2xl font-semibold text-black">Slogan</h3>
                <p className="mt-3 text-xl text-gray-900">{`“ความพึงพอใจของท่านคือความสำเร็จของเรา”`}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Image className="w-full rounded-lg " width={500} height={500} src="/VissionImage.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vission;
