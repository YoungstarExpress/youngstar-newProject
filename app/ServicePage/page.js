"use client"
import { useState } from "react";
import { Tabs, Tab, Spacer } from "@nextui-org/react";
import { HiDesktopComputer, HiOutlineGlobe, HiOutlineLibrary, HiOutlineReceiptTax, HiOutlineSwitchHorizontal } from "react-icons/hi";
import Footer from "../Footer";
import Image from "next/image";
import NavbarMain from "../components/NavbarMain";

function page() {
    const [selected, setSelected] = useState("custom");

    return (
        <div> 
            <NavbarMain />
            <div className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
                <div className="absolute inset-0">
                    <Image className="object-cover w-full h-full" width={3932} height={2620} src="/ImageService.png" alt="" />
                </div>
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex justify-end max-w-7xl mx-auto p-10">
                        <div className="overflow-hidden bg-white md:w-1/2">
                            <div className="p-8 sm:py-10 sm:px-12">
                                <p className="text-xl font-semibold text-gray-900">
                                    {"บริการของเรา"}
                                </p>
                                <h2 className="p-2 mt-6 text-4xl font-bold sm:text-6xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900 leading-relaxed">
                                    {"ยังสตาร์ เอ็กซ์เพรส กรุ๊ป อินเตอร์เนชั่นแนล"}
                                </h2>
                                <p className=" mt-6 text-base font-normal leading-tight text-gray-900">
                                    {`เราเป็นผู้เชี่ยวชาญในการให้คำปรึกษาเกี่ยวกับขั้นตอนการนำเข้าสินค้าทุกชนิด รวมทั้งพิกัดอัตราภาษีต่างๆ ทั้งผู้ชำนาญศุลกากร ตัวแทนออกของรับอนุญาต ช่วยลดภาระด้านการนำเข้าสินค้า`}
                                </p>
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
                                <span className=" hidden md:block">{"ดำเนินพิธีการศุลกากร"}</span>
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
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{"ดำเนินพิธีการศุลกากร"}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">`ช่วยเหลือการนำเข้าในการแก้ไขปัญหากับหน่วยงานราชการต่างๆ และคอยให้คำปรึกษาแนะนำผู้นำเข้าเกี่ยวกับพิธีการศุลกากร`</p>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"นำเข้า - ส่งออกสินค้าทุกประเภท"}</span>
                                                </li>

                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"สินค้าภาษีอากรหรือภาษีมูลค่าเพิ่ม"}</span>
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
                                <span className="hidden md:block">{"การจองระวางบรรทุกสินค้า"}</span>
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
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{"รับจองระวางขนส่งสินค้าทาง"}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">`รับจองระวางขนส่งสินค้าทาง  รวมทั้งดำเนินพิธีการศุลกากร ให้คำปรึกษาเกี่ยวกับการจัดเตรียมเอกสารสำคัญที่ใช้ในการส่งสินค้าไปต่างประเทศ`</p>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{"ทางอากาศ"}</span>
                                                </li>
                                            </ul>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{"ทางเรือ"}</span>
                                                </li>
                                            </ul>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{" ทางรถ"}</span>
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
                                <span className="hidden md:block">{"การขอใบอนุญาตนำเข้า-ส่งออก"}</span>
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
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{"การขอใบอนุญาตนำเข้า-ส่งออก"}</h2>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"ส่งออก และฟอร์ม A, D, E, FTA และ CEO"}</span>
                                                </li>

                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"อินวอยซ์ ภาษี เอฟทีเอ"}</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                        <Tab key="tax" title={
                            <div className="flex items-center space-x-2">
                                <HiOutlineReceiptTax />
                                <span className="hidden md:block">{"สิทธิประโยชน์ทางภาษี"}</span>
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
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{"สิทธิประโยชน์ทางภาษี"}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">`เป็นบริการด้านภาษีอากรการนำเข้าสินค้าของกรมศุลกากรเพื่อการวางแผนการนำเข้าอย่างเป็นระบบ`</p>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{`ดำเนินงาน และขอคืนภาษีอากรตามมาตรา 29 ทวิ `}</span>
                                                </li>

                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"เขตปลอดอากร (FZ) "}</span>
                                                </li>
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"เขตประกอบการค้าเสรี"}</span>
                                                </li>
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold font-pj">{"สิทธิประโยชน์การส่งเสริมการลงทุน (B.O.I)"}</span>
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
                                <span className="hidden md:block">{"ดำเนินพิธีการศุลกากรผ่านชายแดน"}</span>
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
                                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{"ดำเนินพิธีการศุลกากรผ่านชายแดน"}</h2>
                                            <p className="mt-10 text-xl leading-relaxed text-gray-800">`บริการการดำเนินพิธีการศุลกากรและการให้คำปรึกษาแนะนำเรื่องสิทธิประโยชน์แก่ผู้นำเข้าส่งออก`</p>
                                            <ul className="mt-5 space-y-5 sm:mt-10">
                                                <li className="flex items-center text-gray-900">
                                                    <svg className="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-3 text-lg font-bold">{`สำหรับกลุ่มประเทศ กัมพูชา ลาว พม่า เวียดนาม มาเลเซีย รวมไปถึงจีน`}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page