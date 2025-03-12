import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex w-full pl-3 fixed">
      {[
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/projects", label: "Projects" },
        { to: "/contact", label: "Contact" },
      ].map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="rounded-md border-black w-[100px] h-[30px] relative group overflow-clip transition-all hover:scale-105"
        >
          <div className="bg-sample duration-200 w-full h-full flex justify-center items-center group-click:text-indigo-200 group-hover:text-indigo-400">
            {item.label}
          </div>
          <div className="transition-all duration-200 ease-out bg-indigo-600 opacity-40 absolute w-[20px] h-[60px] -top-2 -skew-x-12 -translate-x-8 group-hover:translate-x-28" />
        </Link>
      ))}
    </nav>
  );
};

export default Header;
