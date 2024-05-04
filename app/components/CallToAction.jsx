import { Button, Link } from "@nextui-org/react";
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
          <h2 className="text-3xl font-bold leading-tight text-content1 sm:text-5xl lg:text-5xl">
            {t("call-to-action1")}{" "}
          </h2>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            {t("call-to-action2")}{" "} <span className="text-content1">{t("call-to-action3")}{" "}</span>
          </h2>
          <div className="mt-10 flex justify-center gap-2 sm:gap-4">
            <Button as={Link} href="ContractPage" size="lg" color="primary" className="font-semibold bg-gradient-to-r from-primary to-primary-700">
              {t("button-contract")}
            </Button>
            <Button
              href="mailto:info@ysegroup.co.th?subject=Contact from Youngstar Website"
              target="_blank"
              rel="noopener"
              as="a"
              title=""
              size="lg"
              color="primary" 
              variant="bordered" 
              className="bg-white font-semibold" endContent={<LuMail size={20} />}
              role="button"
            >
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
