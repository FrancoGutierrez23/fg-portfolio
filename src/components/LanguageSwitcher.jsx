import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center justify-center mt-4 lg:mt-0">
      <span
        className={`me-3 text-sm font-medium ${
          i18n.language === "en"
            ? "underline text-white"
            : "no-underline text-gray-300"
        }`}
      >
        English
      </span>
      <label
        onClick={toggleLanguage}
        className="inline-flex items-center cursor-pointer"
      >
        <input type="checkbox" value="" class="sr-only peer" />
        <div
          onClick={toggleLanguage}
          className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-indigo-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
        ></div>
      </label>
      <span
        className={`ms-3 text-sm font-medium ${
          i18n.language === "es"
            ? "underline text-white"
            : "no-underline text-gray-300"
        }`}
      >
        Español
      </span>
    </div>
  );
};

export default LanguageSwitcher;
