"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";


import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";

export default function NavbarMain() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("th");

  const _onChangeLanguage = (key) => {
    setCurrentLanguage(key);
    changeLanguage(key);
  };

  return (
    <Navbar isBordered maxWidth="full">
      <NavbarBrand>
        <Image
          src={"/logo-small.png"}
          width={100}
          height={60}
          alt="company logo"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            {t("home")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/servicePage" color="foreground">
            {t("service")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/companyPage">
            {t("about")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/ContractPage">
            {t("contract")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem className="hidden lg:flex">
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="bordered"
                className="capitalize"
                startContent={currentLanguage === "th"
                  ? <Image src="/Thailand.png" width={30} height={20} alt="" className="" />
                  : <Image src="/Uk.png" width={30} height={20} alt="" className="" />
                }
              >
                {currentLanguage}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={[currentLanguage]}
              onSelectionChange={(keys) => _onChangeLanguage(keys.currentKey)}
            >
              <DropdownItem key={"th"}>
                <div className="flex justify-center gap-x-2">
                  <Image src="/Thailand.png" width={30} height={20} alt="" className="" />
                  Th
                </div>
              </DropdownItem>
              <DropdownItem key={"en"}>
                <div className="flex justify-center gap-x-2">
                  <Image src="/Uk.png" width={30} height={20} alt="" className="" />
                  En
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="solid"
            className=" bg-gradient-to-r from-primary to-primary-800 text-white font-normal text-md"
          >
            {t("button-contract")}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}