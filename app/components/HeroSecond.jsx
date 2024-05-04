import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Button, Link } from "@nextui-org/react";
import { LuArrowRightCircle } from "react-icons/lu";
import Image from "next/image";


function HeroSecond() {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();


  return (
    <div class="bg-gradient-to-b from-green-50 to-green-100">

      <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 class="text-4xl font-bold text-content1 sm:text-6xl lg:text-7xl">
                {t("hero-title")}
              </h1>

              <p class="mt-8 text-base text-content1 sm:text-xl">{t("footer")}</p>

              <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Button as={Link} href="ContractPage" size="lg" color="primary" className="font-normal text-xl bg-gradient-to-r from-primary-700 to-primary-900 px-10 py-4">
                  {t("contract")}
                </Button>
                <Button as={Link} href="ServicePage" size="lg" color="primary" variant="bordered" className="bg-white font-normal text-xl px-10 py-4 " endContent={<LuArrowRightCircle size={20} />}>
                  {t("service")}
                </Button>
              </div>
            </div>

            <div>
            <Image className="object-cover w-full h-full" width={1500} height={1000} src="/BoatLogit.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default HeroSecond;