import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="z-10 w-full  bg-gray-900 rounded mb-10 text-white font-mono p-4">
      <h3>
        <span className="text-blue-400">const</span>{" "}
        <span className="text-green-400 text-xl">{t("AboutMe")}</span> ={" {"}
      </h3>
      <div className="pl-4 mt-4">
        <span className="text-indigo-500">{t("description")}</span>:{" "}
        <div className="text-white ml-4" style={{ whiteSpace: "pre-line" }}>
          "{t("aboutDescription")}",
        </div>
      </div>
      <p className="pl-4 mt-4">
        <span className="text-indigo-500">{t("years_old")}</span>:{" "}
        <span className="text-white pl-1">22</span>,
      </p>
      <p className="pl-4 mt-4 mb-4">
        <span className="text-indigo-500">{t("location")}</span>:{" "}
        <span className="text-white pl-1">"Argentina"</span>
      </p>
      <h3>{"};"}</h3>
    </div>
  );
};

export default About;
