import React from "react";
import { useTranslation } from "react-i18next";
import { 
  DiJavascript1, DiReact, DiNodejsSmall 
} from 'react-icons/di';
import { 
  SiTypescript, SiExpress, SiJest, SiMocha, 
  SiPostgresql, SiHtml5, SiCss3, SiTailwindcss, 
  SiRedux, SiGit, SiGithub
} from 'react-icons/si';
import { TbBrandVite } from "react-icons/tb";

const stack = [
  'TypeScript', 'JavaScript', 'React', 'Express.js', 'Node.js', 
  'Jest', 'Mocha', 'PSQL', 'HTML', 'CSS', 'Tailwind CSS', 'Redux', 'Git', 
  'GitHub', 'Vite'
];

const techIcons = {
  'TypeScript': <SiTypescript size={40} color="#3178C6" />,
  'JavaScript': <DiJavascript1 size={40} color="#F0DB4F" />,
  'React': <DiReact size={40} color="#61DBFB" />,
  'Express.js': <SiExpress size={40} color="#000000" />,
  'Node.js': <DiNodejsSmall size={40} color="#68A063" />,
  'Jest': <SiJest size={40} color="#99424F" />,
  'Mocha': <SiMocha size={40} color="#8D6748" />,
  'PSQL': <SiPostgresql size={40} color="#336791" />,
  'HTML': <SiHtml5 size={40} color="#E34C26" />,
  'CSS': <SiCss3 size={40} color="#264de4" />,
  'Tailwind CSS': <SiTailwindcss size={40} color="#38B2AC" />,
  'Redux': <SiRedux size={40} color="#764ABC" />,
  'Git': <SiGit size={40} color="#F05032" />,
  'GitHub': <SiGithub size={40} color="#171515" />,
  'Vite': <TbBrandVite className="vite" size={40} />
};

const Stack = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10">
      <h3 className="text-white text-2xl mb-4">Franco / {t("MyStack")} /</h3>
      <div className="flex flex-wrap gap-3 w-full">
        {stack.map((tech) => (
          <div key={tech} className="hover:scale-105 transition-all flex flex-col items-center bg-gray-800 p-3 w-28 rounded">
            {techIcons[tech]}
            <span className="text-white mt-2">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
