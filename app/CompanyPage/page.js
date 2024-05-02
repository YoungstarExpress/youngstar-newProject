"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@nextui-org/react";
import Footer from "../Footer";
import NavbarMain from "../components/NavbarMain.jsx";
import CallToAction from "../components/CallToAction";

function page() {
    return (
        <div className="bg-content2" id="Company">
            <NavbarMain />
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="pt-20 text-4xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    {"เกี่ยวกับบริษัท"}
                </h2>
                <p className="mt-5 text-2xl">
                    {"เราเป็นผู้เชี่ยวชาญในการให้คำปรึกษาเกี่ยวกับขั้นตอนการนำเข้าสินค้าทุกชนิด รวมทั้งพิกัดอัตราภาษีต่างๆ ทั้งผู้ชำนาญศุลกากร ตัวแทนออกของรับอนุญาต ช่วยลดภาระด้านการนำเข้าสินค้า"
                    }
                </p>
            </div>
            <div className="flex justify-center">
                <Card className="mt-10 mb-10 px-4 py-10 bg-white sm:py-16 sm:px-0 lg:py-16 lg:px-10 shadow-xl">
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
                                    {`ยังสตาร์ เอ็กซ์เพรส กรุ๊ป อินเตอร์เนชั่นแนล`}
                                </h2>
                                <p className="mt-8 text-2xl font-normal text-gray-800 ">
                                    {`ณ วันที่ 15 มกราคม 2539 บริษัท ยังสตาร์ เอ็กซ์เพรส กรุ๊ป อินเตอร์เนชั่นแนล จำกัด ได้เริ่มก่อตั้งขึ้น โดย                          
                  คุณดรุณี ศรีปัญญารัตน์ และ หม่อมหลวงปานยี่หวา สุขสวัสดิ์ และเพื่อน ซึ่งในระยะเริ่มแรกมีพนักงานเพียง 15 คน 
                  ทำหน้าที่ให้บริการพิธีการศุลกากรในการนำสินค้าเข้า – ส่งออก
		              หลังจากนั้น บริษัทฯ ได้เจริญเติบโตขึ้นตามลำดับ จวบจนถึงปัจจุบัน เป็นระยะเวลาเกือบ28ปี บริษัทฯ มีพนักงานประมาณ 140 คน และมีลูกค้าประจำและทั่วไปมากกว่า 100 ราย ทำให้ได้ว่าบริษัทของเรามีความเชี่ยวชาญ ในบริการพิธีการศุลกากรในการนำสินค้าเข้า – ส่งออก`}
                                </p>
                                <a
                                    href="#"
                                    title=""
                                    className="text-2xl inline-flex items-center mt-8 font-bold text-gray-900 rounded hover:text-gray-600  group focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
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
                                </a>
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

export default page