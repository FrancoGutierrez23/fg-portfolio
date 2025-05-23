import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t("Home"), href: "#home" },
    { name: t("About me"), href: "#about" },
    { name: t("Projects"), href: "#projects" },
    { name: t("My stack"), href: "#stack" },
    { name: t("Contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between lg:px-8 flex-col"
      >
        <div className="flex sm:hidden ml-[90%]">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200 hover:scale-110 transition-all"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6 m-3 mr-5" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex sm:gap-x-0 w-full justify-evenly max-w-[874px]">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="outer-nav-a text-sm/6 font-semibold text-white p-3 hover:scale-110 transition-all"
            >
              <span className='inner-nav-span'>{item.name}</span>
            </a>
          ))}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="sm:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 overflow-y-auto bg-black px-6 py-6 w-full xsm:max-w-sm xsm:ring-1 xsm:ring-gray-900/10 sm:w-1/2 ">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:scale-110 transition-all"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)} // close menu after click
                    className="outer-nav-a -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-300 transition-all text-center"
                  >
                    <span>{item.name}</span>
                  </a>
                ))}
                <div className="mt-4 text-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
