import { Button } from "@nextui-org/react";
import React from "react";
import { LuMail } from "react-icons/lu";
import { useTranslation } from "react-i18next";

function CallToAction() {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();

  return (
    <div className="mb-20  sm:grid-cols-1">
      <div className="mt-20 flex justify-center gap-4 px-5">
        <div className="max-w-5xl sm:max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-5xl lg:text-5xl">
            ได้รับความไว้วางใจจากลูกค้ากว่า{" "}
          </h2>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            {"100+"}  <span className="text-gray-800">รายที่ใช้บริการของเรา</span>
          </h2>
          <div className="mt-10 flex justify-center gap-2 sm:gap-4">
            <Button size="lg" color="primary" className="font-semibold bg-gradient-to-r from-primary to-primary-700">
              {t("button-contract")}
            </Button>
            <Button size="lg" color="primary" variant="bordered" className="bg-white font-semibold" endContent={<LuMail size={20} />}>
              {t("sent-email")}
            </Button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
