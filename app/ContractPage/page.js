"use client";
import React from 'react';
import NavbarMain from '../components/NavbarMain';
import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Footer from '../Footer';
import { Divider, Spacer } from '@nextui-org/react';
import Image from "next/image";


function page() {
  return (
    <div>
       <NavbarMain />
            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:items-center gap-y-8 lg:grid-cols-2 md:gap-y-16 lg:gap-x-16">
                        <div>
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">{"ติดต่อเรา"}<br className="hidden lg:block" /></h2>
                                <h2 className=" mt-6 text-4xl font-bold sm:text-6xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900 leading-relaxed">
                                    {`ยังสตาร์ เอ็กซ์เพรส กรุ๊ป อินเตอร์เนชั่นแนล`}
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
                                <div className="flex flex-col items-center sm:space-x-20 lg:justify-start sm:justify-center sm:flex-row">
                                    <div className="-ml-12 md:ml-0">
                                        <div className="flex items-center md:mt-5 mt-0 ">
                                            <HiOutlineClock size={"40"} className="text-primary" />
                                            <span className="ml-5 text-xl text-gray-900">
                                                {"เวลาทำการ"}
                                            </span>
                                        </div>
                                        <p className="ml-14 mt-2 text-md text-gray-900">
                                            {"จันทร์-ศุกร์"}
                                        </p>
                                        <p className="ml-14 text-md text-gray-900">
                                            {"9.00-17.30"}
                                            <Spacer y={20} />
                                        </p>
                                    </div>
                                    <div className="flex items-center md:mt-5 mt-0">
                                        <div className="">
                                            <div className="flex items-center">
                                                <HiOutlineLocationMarker size={"40"} className="text-primary" />
                                                <p className="ml-5 text-xl text-gray-900">
                                                    {"ที่อยู่"}
                                                </p>
                                            </div>
                                            <p className="md:ml-14 mt-2 text-md text-gray-900 ">
                                                <span className="">
                                                    บริษัท ยังสตาร์ เอ็กซ์เพรส กรุ๊ป
                                                    <br />อินเตอร์เนชั่นแนล จำกัด{" "}<br />
                                                    {`29 ซอย บางนา-ตราด แยก 22`}
                                                </span>
                                                <br />
                                                {`ถนน บางนา-ตราด.,`}
                                                <br />
                                                {`กรุงเทพมหานคร 10260`}
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="mt-5">
                                            <div className="flex justify-start ">
                                                <HiOutlineLocationMarker size={"40"} className="text-primary" />
                                                <p className="ml-5  text-xl text-gray-900">
                                                    {"ที่อยู่"}
                                                </p>
                                            </div>
                                            <p className="ml-0 md:ml-14 mt-2 text-md text-gray-900 ">
                                                <span className="">
                                                    บริษัท ยังสตาร์ เอ็กซ์เพรส กรุ๊ป
                                                    <br />อินเตอร์เนชั่นแนล จำกัด{" "}<br />
                                                    {`29 ซอย บางนา-ตราด แยก 22`}
                                                </span>
                                                <br />
                                                {`ถนน บางนา-ตราด.,`}
                                                <br />
                                                {`กรุงเทพมหานคร 10260`}
                                            </p>
                                        </div> */}
                                </div>
                            </div>
                            <div className="relative mt-8 sm:mt-5">
                                <div className="absolute inset-0">
                                    <div className="w-full h-full max-w-3xl mx-auto lg:mx-0 opacity-30 blur-lg filter"></div>
                                </div>
                                <div className="relative flex flex-col items-center sm:space-x-20 lg:justify-start sm:justify-center sm:flex-row">
                                    <div className="-ml-10 md:ml-0">
                                        <div className="flex items-center mt-5 sm:mt-0">
                                            <HiOutlinePhone size={"40"} className="text-primary" />
                                            <span className="ml-5 text-xl text-gray-900">
                                                {"โทร"}
                                            </span>
                                        </div>
                                        <p className="ml-14 text-md text-gray-900">
                                            {"02-393-9988"}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-5 sm:mt-0">
                                        <div className="">
                                            <div className="flex items-center">
                                                <HiOutlineMail size={"40"} className="text-primary" />
                                                <p className="ml-5 text-xl text-gray-900">
                                                    {"อีเมล"}
                                                </p>
                                            </div>
                                            <a className="ml-14 mt-2 text-md text-gray-900">
                                                info@ysegroup.co.th
                                            </a>
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
                                    {`ยังสตาร์โลจิสติกส์`}
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
                                <div className="relative flex flex-col items-center sm:space-x-20 lg:justify-start sm:justify-center sm:flex-row">
                                    <div className="-ml-16 md:ml-0">
                                        <div className="flex items-center mt-5 sm:mt-0">
                                            <HiOutlineClock size={"40"} className="text-primary" />
                                            <span className="ml-5 text-xl text-gray-900">
                                                {"เวลาทำการ"}
                                            </span>
                                        </div>
                                        <p className="ml-14 mt-2 text-md text-gray-900">
                                            {"จันทร์-ศุกร์"}
                                        </p>
                                        <p className="ml-14 text-md text-gray-900">
                                            {"9.00-17.30"}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-5 md:mt-0">
                                        <div className="pt-5">
                                            <div className="flex items-center">
                                                <HiOutlineLocationMarker size={"40"} className="text-primary" />
                                                <p className="ml-5 text-xl text-gray-900">
                                                    {"ที่อยู่"}
                                                </p>
                                            </div>
                                            <p className="md:ml-14 mt-2 text-md text-gray-900 ">
                                                <span className="">
                                                    บริษัท ยังสตาร์โลจิสติกส์ จำกัด
                                                    {" "}<br />
                                                    {`249/11 หมู่.6 ถนน รังสิต-ปทุมธานี.,`}
                                                </span>
                                                <br />
                                                {`ปทุมธานี 12000`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-8 sm:mt-5">
                                    <div className="absolute inset-0">
                                        <div className="w-full h-full max-w-3xl mx-auto lg:mx-0 opacity-30 blur-lg filter"></div>
                                    </div>
                                    <div className="relative flex flex-col items-center sm:space-x-20 lg:justify-start sm:justify-center sm:flex-row">
                                        <div className="-ml-12 md:ml-0">
                                            <div className="flex items-center mt-5 sm:mt-0">
                                                <HiOutlinePhone size={"40"} className="text-primary" />
                                                <span className="ml-5 text-xl text-gray-900">
                                                    {"โทร"}
                                                </span>
                                            </div>
                                            <p className="ml-14 text-md text-gray-900">
                                                {"02-958-7621"}
                                            </p>
                                        </div>
                                        {/* <div className="flex items-center mt-5 sm:mt-0">
                                        <div className="">
                                            <div className="flex items-center">
                                                <HiOutlineMail  size={"40"} className="text-primary" />
                                                <p className="ml-5 text-xl text-gray-900">
                                                    {"อีเมล"}
                                                </p>
                                            </div>
                                            <a  className="ml-14 mt-2 text-md text-gray-900">
                                                info@ysegroup.co.th
                                            </a>
                                        </div>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image className="" src="/HeroNew.png" alt="" width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
      
    </div>
  )
}

export default page
