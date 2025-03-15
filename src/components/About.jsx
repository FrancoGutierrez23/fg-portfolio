import React from "react";

const About = () => {
  return (
    <div className="z-10 w-full  bg-gray-900 rounded mb-10 text-white font-mono p-4">
      <h3>
        <span className="text-blue-400">const</span>{" "}
        <span className="text-green-400 text-xl">AboutMe</span> ={" {"}
      </h3>
      <p className="pl-4 mt-4">
        <span className="text-indigo-500">description</span>:{" "}
        <span className="text-white pl-1">
          "After spending a few years programming small projects as a hobby, I
          decided to formalize my knowledge by taking courses that taught a full
          set of cohesive skills. I'm excited to demonstrate my abilities and
          collaborate on innovative projects."
        </span>
        ,
      </p>
      <p className="pl-4 mt-4">
        <span className="text-indigo-500">years_old</span>:{" "}
        <span className="text-white pl-1">22</span>,
      </p>
      <p className="pl-4 mt-4 mb-4">
        <span className="text-indigo-500">location</span>:{" "}
        <span className="text-white pl-1">"Argentina"</span>
      </p>
      <h3>{"};"}</h3>
    </div>
  );
};

export default About;
