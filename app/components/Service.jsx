import React from "react";
import { Button, Spacer } from "@nextui-org/react";
import Image from "next/image";
import { HiDesktopComputer, HiOutlineCube, HiOutlineGlobe, HiOutlineLibrary, HiOutlineReceiptTax, HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useTranslation } from "react-i18next";


function Service() {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();

  return (
    <div>
      <section className="py-10 
       sm:py-10 lg:py-20 mb-10">
        <div className="px-4  mx-auto max-w-full sm:px-6 lg:px-4">
          <div className="max-w-4xl mx-auto text-center xl:max-w-7xl">
            <div className=" text-3xl font-semibold text-gray-900 sm:text-6xl lg:text-4xl xl:text-5xl leading-relaxed">
            {t("service-title1")}
            </div>
            <div className="pt-4 text-3xl font-semibold text-gray-900 sm:text-6xl lg:text-5xl xl:text-5xl">
            {t("service-title2")}
            </div>
            <div className="pt-4 text-3xl font-semibold  text-gray-900 sm:text-6xl lg:text-5xl xl:text-5xl">
            {t("service-title3")}
            </div>
          </div>
          <div className="grid max-w-7xl grid-cols-1 lg:grid-cols-3 xl:px-10 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="space-y-4 sm:space-y-10 md:space-y-8">
              <div className="overflow-hidden bg-white shadow-md rounded-xl 
              border-3 border-primary hover:bg-primary-100/50">
                <div className="p-5">
                  <Button isIconOnly color="primary" variant="flat">
                    <HiOutlineLibrary size="26" className="" />
                  </Button>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-10 ">
                  {t("service-boxtitle1")}
                  </h3>
                  <p className="mt-6 text-2xl text-gray-800">
                  {t("service-box1")}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden bg-white shadow- border-3 border-primary hover:bg-primary-100/50 rounded-xl ">
                  <div className="p-5">
                    <Button isIconOnly color="primary" variant="flat">
                      <HiDesktopComputer size="30" className="" />
                    </Button>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-10 font-pj">
                    {t("service-boxtitle2")}
                    </h3>
                    <p className="mt-6 text-2xl text-gray-800">
                    {t("service-box2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-8">
              <div className="relative">
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl  border-3 border-primary hover:bg-primary-100/50">
                  <div className="p-5">
                    <Button isIconOnly color="primary" variant="flat">
                      <HiOutlineSwitchHorizontal size="26" className="" />
                    </Button>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-10">
                    {t("service-boxtitle5")}
                    </h3>
                    <p className="mt-6 text-2xl text-gray-800 font-pj">
                    {t("service-box5")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-white shadow-md rounded-xl  border-3 border-primary hover:bg-primary-100/50">
                <div className="p-5">
                  <Button isIconOnly color="primary" variant="flat">
                    <HiOutlineGlobe size="30" className="" />
                  </Button>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-10">
                  {t("service-boxtitle6")}
                  </h3>
                  <p className="mt-6 text-2xl text-gray-800 font-pj">
                  {t("service-box6")}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-8">
              <div className="overflow-hidden bg-white shadow-md rounded-xl  border-3 border-primary hover:bg-primary-100/50">
                <div className="p-5">
                  <Button isIconOnly color="primary" variant="flat">
                    <HiOutlineReceiptTax size="30" className="" />
                  </Button>
                  <h3 className="mt-8 text-2xl font-bold text-gray-900 sm:mt-10 ">
                  {t("service-boxtitle3")}
                  </h3>
                  <p className="mt-6 text-2xl text-gray-800 font-800">
                  {t("service-box3")}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white shadow-md rounded-xl  border-3 border-primary hover:bg-primary-100/50">
                <div className="p-5">
                  <Button isIconOnly color="primary" variant="flat">
                    <HiOutlineCube size="30" className="" />
                  </Button>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:mt-10">
                  {t("service-boxtitle4")}
                  </h3>
                  <p className="mt-6 text-2xl text-gray-800">
                  {t("service-box4")}
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
      <section className="py-4 bg-white sm:py-16 lg:py-0">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className=" max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              {t("logistics-service")}
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-2xl leading-relaxed text-gray-800">
              {t("logistics-service-subtitle")}
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full"  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-20">
              <div>
                <div className="flex items-center justify-center  mx-auto ">
                  <Image src="/boat.png" width={100} height={100} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-black md:mt-10">
                  {`บริการการขนส่งทางเรือ`}
                </h3>
                <p className="mt-4 text-2xl text-gray-800">
                  {`บริการขนส่งระหว่างประเทศ ทางเรือ ให้บริการขนส่งสินค้าทั้งแบบเต็มตู้คอนเทนเนอร์ (FCL) และแบบไม่เต็มตู้คอนเทนเนอร์ (LCL) ครอบคลุมท่าเรือทั่วทุกทวีป`}
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <Image src="/Car.png" width={100} height={100} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-black md:mt-10">
                  {`บริการการขนส่งทางรถ`}
                </h3>
                <p className="mt-4 text-2xl text-gray-800">
                  {`ให้บริการจัดส่งไปยังปลายทางทั่วประเทศและประเทศใกล้เคียง 
                  การขนส่งทางบก การขนส่งต่อเนื่องหลายรูปแบบ การขนส่งข้ามพรมแดน บริการขนส่งสารเคมี บริการขนส่งห้องเย็น`}
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center">
                  <Image src="/Air.png" width={100} height={100} alt="" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight text-black md:mt-10">
                  {`บริการการขนส่งทางอากาศ`}
                </h3>
                <p className="mt-4 text-2xl text-gray-800">
                  {`เชี่ยวชาญในการให้บริการขนส่งสินค้าทางอากาศระหว่างประเทศอย่างมืออาชีพ บริการนำเข้าและส่งออกสินค้าในประเทศและต่างประเทศ บริการทั้งเที่ยวบินตรง เที่ยวบินต่อ สู่ปลายทางทั่วโลก`}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-20 mb-20 flex justify-center">
          <Image src="/map.png" width={900} height={900} alt="" />
        </div> */}
        <Spacer y={20} />
      </section>
    </div>
  );
}

export default Service;