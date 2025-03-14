import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Stack from './Stack';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="px-[5%] xl:px-[15%] bg-black flex flex-col items-center">
        <section id="home">
          <Home />
        </section>
        <section id="about" className="flex pt-20 bg-black justify-center w-full max-w-[850px] ">
          <About />
        </section>
        <section id="projects" className="w-full flex max-w-[850px]">
          <Projects />
        </section>
        <section className="flex bg-black justify-center w-full max-w-[850px] ">
          <Stack />
        </section>
        <section id="contact" className="flex bg-black justify-center w-full max-w-[850px]">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Layout;

