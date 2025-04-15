import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

const ProjectDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Container for the text and fade effect */}
      <div className="relative">
        <p
          className={`mb-3 text-gray-700 dark:text-gray-300 ${
            !isExpanded ? "line-clamp-2" : ""
          }`}
          style={{ whiteSpace: "pre-line" }}
        >
          {description}
        </p>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-gray-800 pointer-events-none" />
        )}
      </div>
      {/* Toggle button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-100 absolute -top-2 font-semibold focus:outline-none hover:scale-105 transition"
        >
          <div className="flex gap-2 items-center">
            {isExpanded ? t("Show less") : t("Show more")}
            {isExpanded ? (
              <MdKeyboardDoubleArrowUp />
            ) : (
              <MdKeyboardDoubleArrowDown />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectDescription;
