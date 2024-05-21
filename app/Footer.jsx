import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { useTranslation } from "react-i18next";

function Footer() {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();

  return (
    <div>
      <section className="py-10 bg-primary-800 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-6 max-w-full">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <Image
                src={"/logo.png"}
                width={150}
                height={15}
                alt="company logo"
              />
              <p className="text-base leading-relaxed text-white mt-7">
               {t("footer")}
              </p>

            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
                {t("company")}
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="/"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    {t("home")}{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/ServicePage"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    {t("service")}{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/CompanyPage"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    {t("about")}{" "}{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="/ContractPage"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    {t("contract")}{" "}{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
              {t("help")}
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                    {t("customer-service")}{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
              {t("location")}
              </p>
              <ul className="mt-6 space-y-4">
                <li className="">
                  <a
                    href="https://maps.app.goo.gl/t9dLnewRNNWqPZag7"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    <LuMapPin size={30} className="shrink-0" />
                    <div className="pl-2">
                    {t("address1")}
                      <br />{t("address2")}{" "}<br />
                      {t("address3")}
                      <span className="">
                        <br />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.google.co.th/maps/place/Young+Star+Logistic+Co.,Ltd./@13.9838791,100.5884662,17z/data=!3m1!4b1!4m6!3m5!1s0x30e281be407da2c9:0x55ab4bf4eb07d6cf!8m2!3d13.9838739!4d100.5910411!16s%2Fg%2F1tdv9qr7?hl=th&entry=ttu"
                    title=""
                    className="flex text-base text-white transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    <LuMapPin size={30} className="" />
                    <div className="pl-2">
                    {t("address-lo1")}<br />
                      {t("address-lo2")}
                      <span className="">
                        <br />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-16 mb-10 border-gray-200" />
          <p className="text-sm text-center text-white">
            © Copyright 2024, Young Star Express Group International Co., Ltd.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
