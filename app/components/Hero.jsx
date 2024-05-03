import { Button, Link } from "@nextui-org/react";
import React from "react";
import { LuArrowRightCircle } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { Spacer } from "@nextui-org/react";


function Hero() {

  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();

  return (
    <div className="bg-[url('/HeroNew.png')] bg-no-repeat bg-cover">
      <div className="">
        <div className="flex justify-center px-5 sm:px-0">
          <div className="max-w-5xl text-center ">
            <div className="mt-20 text-5xl md:text-6xl font-bold text-gray-800 ">
              {/* {t("welcome")} */}
            </div>
            <div className="md:p-2 md:pt-4 sm:pt-0 text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-800 to-primary-900 md:text-7xl font-bold leading-relaxed">
              {t("hero-title")}
            </div>
            <div className="md:pt-4  sm:pt-0 text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-primary-800 to-primary-900 md:text-7xl font-bold leading-relaxed">
              {t("hero-subtitle")}
            </div>
          </div>
        </div>
        <div className="mt-80 flex justify-center gap-4">
          <Button  as={Link} href="ContractPage" size="lg" color="primary" className="font-normal text-xl bg-gradient-to-r from-primary-700 to-primary-900 px-10 py-4">
            {t("contract")}
          </Button>
          <Button as={Link} href="ServicePage" size="lg" color="primary" variant="bordered" className="bg-white font-normal text-xl px-10 py-4 " endContent={<LuArrowRightCircle size={20} />}>
            {t("service")}
          </Button>
        </div>
      </div>
      <Spacer y={150} />
    </div>
  );
}

export default Hero;