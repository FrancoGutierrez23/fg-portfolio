import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="flex pt-20 bg-black justify-center w-full">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Layout;

