"use client"

import React  from "react";
import { Tabs, Tab, Spacer } from "@nextui-org/react";
import { HiDesktopComputer, HiOutlineGlobe, HiOutlineLibrary, HiOutlineReceiptTax, HiOutlineSwitchHorizontal } from "react-icons/hi";
import Footer from "../Footer";
import Image from "next/image";
import NavbarMain from "../components/NavbarMain";
import { useTranslation } from "react-i18next";
import CallToAction from "../components/CallToAction";

function Page() {
    const [selected, setSelected] = React.useState("custom");
    const {
        t,
        i18n: { changeLanguage, language }
      } = useTranslation();

    return (
        <div> 
            <NavbarMain />
            <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
                <div className="absolute inset-0">
                    <Image className="object-cover w-full h-full" width={3932} height={2620} src="/ImageService.png" alt="" />
                </div>
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl">
                    <div className="flex justify-end max-w-7xl mx-auto p-10">
                        <div className="overflow-hidden bg-white md:w-1/2">
                            <div className="p-8 sm:py-10 sm:px-12">
                                <p className="text-4xl font-semibold text-gray-900">
                                    {t("service")}
                                </p>
                                <h2 className="p-2 mt-6 text-4xl font-bold sm:text-6xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900 leading-relaxed">
                                    {t("hero-title")}
                                </h2>
                                {/* <p className=" mt-6 text-base font-normal leading-tight text-gray-900">
                                    {`เราเป็นผู้เชี่ยวชาญในการให้คำปรึกษาเกี่ยวกับขั้นตอนการนำเข้าสินค้าทุกชนิด รวมทั้งพิกัดอัตราภาษีต่างๆ ทั้งผู้ชำนาญศุลกากร ตัวแทนออกของรับอนุญาต ช่วยลดภาระด้านการนำเข้าสินค้า`}
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-20 ">
                <div className="flex w-full flex-col">
                    <Tabs
                        size="lg"
                        color="primary"
                        aria-label="Options"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                        variant="bordered"
                        className=""
                    >
                        <Tab key="custom" title={
                            <div className="flex items-center space-x-2">
                                <HiOutlineLibrary />
                                <span className=" hidden md:block">{t("service-boxtitle1")}</span>
                            </div>
                        }>
                            <section className="py-10 bg-gray-50 sm:py-16 lg:py-10">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                                        <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                                            <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                                <Image className="object-cover object-top origin-top scale-150" src="/Customs.svg" alt="" width={500} height={500} />
                                                <Image className="mt-28 object-cover object-top origin-top-left scale-150" src="/AirService.png" alt="" width={500} height={500} />
                                            </div>
                                            <div className="relative">
                                                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                                    <video
                                                        id="videoElement"
                                                        width="100%"
                                                        height="60%"
                                                        loop
                                                        muted
                                                        autoPlay
                                                        playsInline
                                                        preload="metadata"
                                                        poster=""
                                                        className="object-fill scale-100 lg:origin-bottom-right"
                                                    >
                                                        <source src="/office.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start xl:px-10 mt-10">
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{t("service-boxtitle1")}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">{t("service-box1")}</p>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{t("service-custom1")}</span>
                                                </li>

                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{t("service-custom2")}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                        <Tab key='Booking' title={
                            <div className="flex items-center space-x-2">
                                <HiDesktopComputer />
                                <span className="hidden md:block">{t("service-boxtitle2")}</span>
                            </div>
                        }>
                            <section className="py-10 bg-gray-50 sm:py-16 lg:py-10">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                                        <div className="relative grid grid-cols-1 gap-6 mt-10 md:mt-0">

                                            <div className="relative mt-10">
                                                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                                    <video
                                                        id="videoElement"
                                                        width="100%"
                                                        height="60%"
                                                        loop
                                                        muted
                                                        autoPlay
                                                        playsInline
                                                        preload="metadata"
                                                        poster=""
                                                        className="object-fill scale-100 lg:origin-bottom-right"
                                                    >
                                                        <source src="/boat.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex flex-col items-start xl:px-10 mt-10">
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{t("service-boxtitle2")}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">{t("service-box2")}</p>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{t("service-custom3")}</span>
                                                </li>
                                            </ul>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{t("service-custom4")}</span>
                                                </li>
                                            </ul>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{t("service-custom5")}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                        <Tab key="videos" title={
                            <div className="flex items-center space-x-2">
                                <HiOutlineSwitchHorizontal />
                                <span className="hidden md:block">{t("service-boxtitle5")}</span>
                            </div>
                        }>
                            <section className="py-10 bg-gray-50 sm:py-16 lg:py-10">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                                        <div className="relative grid grid-cols-1 gap-6 mt-10 md:mt-0">
                                            <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                                <Image className="object-cover object-top origin-top-left scale-120" src="/TransportImage.png" alt="" width={500} height={500} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start xl:px-10 mt-10">
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{t("service-boxtitle5")}</h2>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{t("service-custom6")}</span>
                                                </li>

                                                {/* <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"อินวอยซ์ ภาษี เอฟทีเอ"}</span>
                                                </li> */}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                        <Tab key="tax" title={
                            <div className="flex items-center space-x-2">
                                <HiOutlineReceiptTax />
                                <span className="hidden md:block">{t("service-boxtitle3")}</span>
                            </div>
                        }>
                            <section className="py-10 bg-gray-50 sm:py-16 lg:py-10">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                                        <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                                            <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                                <Image className="object-cover object-top origin-top scale-150" src='/Customs.svg' width={500} height={500} alt="" />
                                                <Image className="mt-28 object-cover object-top origin-top-left scale-150" src="/BoatLogit.png" width={500} height={500} alt="" />
                                            </div>
                                            <div className="relative">
                                                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                                    <video
                                                        id="videoElement"
                                                        width="100%"
                                                        height="60%"
                                                        loop
                                                        muted
                                                        autoPlay
                                                        playsInline
                                                        preload="metadata"
                                                        poster=""
                                                        className="object-fill scale-100 lg:origin-bottom-right"
                                                    >
                                                        <source src="/office.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start xl:px-10 mt-10">
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{t("service-boxtitle3")}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">{t("service-box3")}</p>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{t("service-custom7")}</span>
                                                </li>

                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{t("service-custom8")}</span>
                                                </li>
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{t("service-custom9")}</span>
                                                </li>
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{t("service-custom10")}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                        <Tab key="Border" title={
                            <div className="flex items-center space-x-2">
                                <HiOutlineGlobe />
                                <span className="hidden md:block">{t("service-boxtitle6")}</span>
                            </div>
                        }>
                            <section className="py-10 bg-gray-50 sm:py-16 lg:py-10">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                    <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                                        <div className="relative grid grid-cols-1 gap-6 mt-10 md:mt-0">
                                            <div className="overflow-hidden aspect-w-3 aspect-h-4">
                                                <Image className=" object-coverscale-120" src="/Truck.png" width={500} height={500} alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start xl:px-10 mt-10">
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{t("service-boxtitle6")}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">{t("service-box6")}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Page;