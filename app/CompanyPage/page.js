"use client";
import React from "react";
import Image from "next/image";
import { Card, Spacer } from "@nextui-org/react";
import Footer from "../Footer";
import NavbarMain from "../components/NavbarMain.jsx";
import CallToAction from "../components/CallToAction";
import { useTranslation } from "react-i18next";

function Page() {
    const {
        t,
        i18n: { changeLanguage, language }
    } = useTranslation();

    return (
        <div className="bg-content2" id="Company">
            <NavbarMain />
            <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
                <div className="absolute inset-0">
                    <Image className="object-cover w-full h-full" width={3932} height={2620} src="/sea-hero.jpg" alt="" />
                </div>
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex justify-start max-w-7xl mx-auto p-10">
                        <div className="overflow-hidden bg-white md:w-1/2">
                            <div className="p-8 sm:py-10 sm:px-12">
                                <p className="text-5xl font-semibold text-content1">
                                    {t("company")}
                                </p>
                                <h2 className="mt-6 text-4xl font-bold sm:text-6xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900 leading-relaxed">
                                    {t("hero-title")}
                                    {" "}
                                    <span>
                                        {t("hero-subtitle")}
                                    </span>
                                </h2>
                                {/* <p className=" mt-6 text-base font-normal leading-tight text-content1">
                                    {`เราเป็นผู้เชี่ยวชาญในการให้คำปรึกษาเกี่ยวกับขั้นตอนการนำเข้าสินค้าทุกชนิด รวมทั้งพิกัดอัตราภาษีต่างๆ ทั้งผู้ชำนาญศุลกากร ตัวแทนออกของรับอนุญาต ช่วยลดภาระด้านการนำเข้าสินค้า`}
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Card className="mt-20 mb-10 px-4 py-10 bg-white sm:py-16 sm:px-0 lg:py-16 lg:px-10 shadow-xl">
                    <div className="mx-auto max-w-7xl sm:px-0 lg:px-8">
                        <div className="grid items-center max-w-7xl grid-cols-1 mx-auto md:grid-cols-2 md:gap-x-16">
                            <div className="md:order-2">
                                <div className="max-w-2xl mx-auto">
                                    <div className="aspect-w-4 aspect-h-3">
                                        <Image
                                            className="object-cover w-full h-full"
                                            src="/CompanyImage.png"
                                            alt=""
                                            width={1310}
                                            height={829}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-8 text-center md:text-left md:p-0 md:order-1">
                                <h2 className="mt-6 text-4xl font-bold sm:text-6xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900 leading-relaxed">
                                    {t("hero-title")}
                                </h2>
                                <p className="mt-8 text-2xl font-normal text-content1 ">
                                    {t("company-story")}
                                </p>
                                {/* <a
                                    href="#"
                                    title=""
                                    className="text-2xl inline-flex items-center mt-8 font-bold text-content1 rounded hover:text-gray-600  group focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    อ่านต่อ
                                    <svg
                                        className="w-5 h-5 ml-2 transition-all duration-200 group-hover:translate-x-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Page;