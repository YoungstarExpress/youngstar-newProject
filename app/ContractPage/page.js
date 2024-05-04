"use client";
import React from 'react';
import NavbarMain from '../components/NavbarMain';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Footer from '../Footer';
import { Divider, Spacer } from '@nextui-org/react';
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Page() {
    const {
        t,
        i18n: { changeLanguage, language }
    } = useTranslation();

    return (
        <div>
            <NavbarMain />
            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:items-center gap-y-8 lg:grid-cols-2 md:gap-y-16 lg:gap-x-20">
                        <div>
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-content1 sm:text-4xl xl:text-5xl">{t("contract")}<br className="hidden lg:block" /></h2>
                                <h2 className=" mt-6 text-4xl font-bold sm:text-6xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900 leading-relaxed">
                                    {t("hero-title")}
                                    {t("hero-subtitle")}
                                </h2>
                            </div>
                            <svg className="w-auto h-4 mx-auto mt-8 text-gray-300 sm:mt-12 lg:mx-0" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
                            </svg>

                            <div className="mt-10">
                                <div className="grid md:grid-cols-2  grid-cols-1 items-center sm:space-x-20 md:space-x-10 lg:justify-start sm:justify-center sm:flex-row">
                                    <div className="md:ml-0">
                                        <div className="flex items-center md:mt-5 mt-0 ">
                                            <HiOutlineClock size={"40"} className="text-primary shrink-0" />
                                            <span className="ml-5 text-xl text-content1">
                                                {t("open-time")}
                                            </span>
                                        </div>
                                        <p className="ml-14 mt-2 text-xl text-content1">
                                            {t("day")}
                                        </p>
                                        <p className="ml-14 text-xl text-content1">
                                            {"9.00-17.30"}
                                            <Spacer y={20} />
                                        </p>
                                    </div>
                                    <div className="flex items-center -mt-10 md:mt-0">
                                        <div className="">
                                            <div className="flex items-center">
                                                <HiOutlineLocationMarker size={"40"} className="text-primary" />
                                                <p className="ml-5 text-xl text-content1">
                                                    {t("location")}
                                                </p>
                                            </div>
                                            <a href="https://maps.app.goo.gl/t9dLnewRNNWqPZag7">
                                                <p className="md:ml-14 ml-14 mt-2 text-xl text-content1 ">
                                                    <span className="flex text-xl transition-all duration-200 hover:text-primary focus:text-primary">
                                                        {t("address6")}
                                                        <br />{t("address5")}{" "}
                                                    </span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="grid md:grid-cols-2  grid-cols-1 items-center sm:space-x-20 md:space-x-10 lg:justify-start sm:justify-center sm:flex-row">
                                    <div className="md:ml-0">
                                        <div className="flex items-center md:mt-5 mt-0 ">
                                        <HiOutlinePhone size={"40"} className="text-primary" />
                                            <span className="ml-5 text-xl text-content1">
                                            {t("call")}
                                            </span>
                                        </div>
                                        <p className="ml-14 mt-2 text-xl text-content1">
                                        {"02-958-7621"}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-10 md:mt-0">
                                        <div className="">
                                            <div className="flex items-center">
                                            <HiOutlineMail size={"40"} className="text-primary" />
                                                <p className="ml-5 text-xl text-content1">
                                                {t("email")}
                                                </p>
                                            </div>
                                            <p className="ml-14 mt-2 text-xl text-content1">
                                            <a
                                             href="mailto:info@ysegroup.co.th?subject=Contact from Youngstar Website"
                                             target="_blank"
                                             rel="noopener"
                                             as="a"
                                            className=" md:ml-0 text-xl text-content1">
                                                info@ysegroup.co.th
                                            </a>
                                            </p>     
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <Image className="" src="/CompanyImage.png" alt="" width={500} height={500} />
                        </div>
                    </div>
                    <Divider className="mt-20" />
                </div>
            </section>
            <section className="py-12 bg-white sm:py-10 lg:py-0 mb-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:items-center gap-y-8 lg:grid-cols-2 md:gap-y-16 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <h2 className="pt-2 text-4xl font-bold sm:text-6xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900 leading-relaxed">
                                    {t("address-lo1")}
                                </h2>
                            </div>
                            <svg className="w-auto h-4 mx-auto mt-8 text-gray-300 sm:mt-12 lg:mx-0" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)" />
                                <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)" />
                            </svg>
                            <div className="relative mt-8 sm:mt-5">
                                <div className="absolute inset-0">
                                    <div className="w-full h-full max-w-3xl mx-auto lg:mx-0 opacity-30 blur-lg filter"></div>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 items-center sm:space-x-30 lg:justify-start sm:justify-center sm:flex-row">
                                    <div className="ml-0">
                                        <div className="flex items-center mt-5 sm:mt-0">
                                            <HiOutlineClock size={"40"} className="text-primary shrink-0" />
                                            <span className="ml-5 text-xl text-content1">
                                                {t("open-time")}
                                            </span>
                                        </div>
                                        <p className="ml-14 mt-2 text-xl text-content1">
                                            {t("day")}
                                        </p>
                                        <p className="ml-14 text-xl text-content1">
                                            {"9.00-17.30"}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-5 md:mt-0">
                                        <div className="pt-10">
                                            <div className="flex items-center">
                                                <HiOutlineLocationMarker size={"40"} className="text-primary" />
                                                <p className="ml-5 text-xl text-content1">
                                                    {t("location")}
                                                </p>
                                            </div>
                                            <a href="https://www.google.co.th/maps/place/Young+Star+Logistic+Co.,Ltd./@13.9838791,100.5884662,17z/data=!3m1!4b1!4m6!3m5!1s0x30e281be407da2c9:0x55ab4bf4eb07d6cf!8m2!3d13.9838739!4d100.5910411!16s%2Fg%2F1tdv9qr7?hl=th&entry=ttu">
                                                <p className="ml-14 mt-2 text-xl text-content1">
                                                    <span className="flex text-xl transition-all duration-200 hover:text-primary focus:text-primary">
                                                        {t("address-lo1")}
                                                        {" "}<br />
                                                        {t("address-lo2")}
                                                    </span>
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-8 sm:mt-5">
                                    <div className="absolute inset-0">
                                        <div className="w-full h-full max-w-3xl mx-auto lg:mx-0 opacity-30 blur-lg filter"></div>
                                    </div>
                                    <div className="relative flex flex-col md:items-center sm:space-x-20 lg:justify-start sm:justify-center sm:flex-row">
                                        <div className=" ml-0">
                                            <div className="flex items-center mt-5 sm:mt-0">
                                                <HiOutlinePhone size={"40"} className="text-primary" />
                                                <span className="ml-5 text-xl text-content1">
                                                    {t("call")}
                                                </span>
                                            </div>
                                            <p className="ml-14 text-xl text-content1">
                                                {"02-958-7621"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image className="" src="/HeroImage.png" alt="" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Page
