import React from "react";
import { useTranslation } from "react-i18next";
import englishFlag from "./assets/USA.svg";
import spanishFlag from "./assets/spain.svg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const isSpanish = i18n.language === "es";

  return (
    <div className="flex items-center justify-center mt-4 lg:mt-0">
        <img
          src={englishFlag}
          alt="English"
          className={` ${
            i18n.language === "en" ? "" : "opacity-60"
          }`}
        />
      <label className="inline-flex items-center cursor-pointer mx-4">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isSpanish}
          onChange={toggleLanguage}
        />
        <div
          className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full 
                     peer dark:bg-indigo-700 peer-checked:after:translate-x-full 
                     rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                     after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                     after:bg-white after:border-gray-300 after:border after:rounded-full 
                     after:h-5 after:w-5 after:transition-all dark:border-gray-600"
        ></div>
      </label>
        <img
          src={spanishFlag}
          alt="Español"
          className={` ${
            i18n.language === "es" ? "" : "opacity-60"
          }`}
        />
    </div>
  );
};

export default LanguageSwitcher;
