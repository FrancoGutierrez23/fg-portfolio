import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black border-t justify-evenly pb-6 border-indigo-200 flex-wrap w-full flex gap-5 text-white h-24 pt-6 px-[5%] xl:px-[15%] items-center">
      <a href='https://github.com/FrancoGutierrez23' target="blank" className="flex gap-1 items-center">
        <FaGithub /> <tag>GitHub</tag>
      </a>
      <a href="https://www.linkedin.com/in/franco-gutierrez-b3374a240/" target="blank" className="flex gap-1 items-center">
        <FaLinkedin /> <tag>Linkedin</tag>
      </a>
      <a href="#contact" className="flex gap-1 items-center">
        <MdEmail /> <tag>francogutierre523523@gmail.com</tag>
      </a>
    </footer>
  );
};

export default Footer;
