import React from "react";
import { useRef } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Stack from "./Stack";
import Footer from "./Footer";
import { useIsVisible } from "./customHooks/useIsVisible";

const Layout = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="px-[5%] xl:px-[15%] bg-black flex flex-col items-center">
        <section
          id="home"
          ref={ref1}
          className={`pb-20 transition-opacity ease-in duration-500 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Home />
        </section>
        <section
          id="about"
          ref={ref2}
          className={`flex bg-black justify-center w-full max-w-[850px] transition-opacity ease-in duration-500 ${
            isVisible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <About />
        </section>
        <section
          id="projects"
          ref={ref3}
          className={`w-full flex max-w-[850px] transition-opacity ease-in duration-500 ${
            isVisible3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Projects />
        </section>
        <section
          id="stack"
          ref={ref4}
          className={`flex bg-black justify-center w-full max-w-[850px] transition-opacity ease-in duration-500 ${
            isVisible4 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Stack />
        </section>
        <section
          id="contact"
          ref={ref5}
          className={`flex bg-black justify-center w-full max-w-[850px] transition-opacity ease-in duration-500 ${
            isVisible5 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
