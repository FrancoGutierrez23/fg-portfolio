// IMPORTS
import React from "react";
import EcommerceImg from "./assets/E-commerce_img.png";
import RedditsignImg from "./assets/Redditsign_img.png";
import MovieRecommendationImg from './assets/MovieRecommendation_img.png';
import { useTranslation } from "react-i18next";
import ProjectDescription from './ProjectDescription';
//

const Projects = () => {
  const { t } = useTranslation();

  const ProjectsData = [
    {
      img: EcommerceImg,
      title: "FG E-commerce",
      description: t("eCommerceDescription"),
      url: "https://e-commerce-pp.onrender.com",
      note: t("RenderNote"),
      usedStack: ["JavaScript", "React", "PSQL", "Node.js", "Express.js"],
    },
    {
      img: MovieRecommendationImg,
      title: "Movie Recommendation",
      description:
        t("MovieRecoDescription"),
        url: "https://movie-recommendation-fg.netlify.app",
        note: t("RenderNote"),
        usedStack: ["TypeScript", "Vite", "Tailwind", "Redux", "Node", "React"]
    },
    {
      img: RedditsignImg,
      title: "Redditsign",
      description: t("RedditsignDescription"),
      url: "https://redditsign.netlify.app",
      note: t("This is one of my first projects."),
      usedStack: ["JavaScript", "React", "Redux", "Node.js"],
    },
  ];
  
  return (
    <div className="flex bg-black items-center flex-col w-full">
      {/* Section title */}
      <h3 className="text-white text-2xl w-full">Franco / {t("Projects")} /</h3>

      <div className="flex flex-wrap w-full justify-between gap-3 flex-col xmd:flex-row bg-black pt-3">
        {ProjectsData.map((project) => (
          <div className="xmd:max-w-sm max-w-md mb-2 w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            {/* Image */}
            <a href={project.url} target="blank w-full">
              <img
                className="rounded-t-lg w-full"
                src={project.img}
                alt={project.title}
              />
            </a>
            {/* Project title */}
            <div className="p-5">
              <a href={project.url} target="blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  /{project.title}{" "}
                  <span className="inline-block rotate-180">^</span>
                </h5>
              </a>
              {/* Description */}
              <ProjectDescription description={project.description} />
              {/* Note */}
              <p className="mb-4 mt-10 text-gray-700 dark:text-gray-400 font-bold">
                {t("Note")}: {project.note}
              </p>
              {/* Used stack */}
              <div className="flex flex-wrap gap-3 mb-2">
                {project.usedStack.map((tech) => (
                  <span className="text-white text-sm bg-black bg-opacity-40 border-2 border-indigo-500 rounded-2xl px-2 py-1">{tech}</span>
                ))}
              </div>
              {/* Go live button */}
              <a
                href={project.url}
                target="blank"
                className="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                {t("Go Live")}
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
