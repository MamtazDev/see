import React from "react";

const Project = () => {
  return (
    <div className="project-sec py-5 md:py-10">
      <h2 className="text-black md:text-4xl text-3xl font-normal text-center pb-4 max-w-7xl mx-auto">
        REACH OUT FOR CONSULTATION ON YOUR PROJECT
      </h2>
      <p className="md:text-3xl text-2xl font-normal text-center pt-3">
        When given an opportunity, deliver excellence and never quit
      </p>
      <span className="block md:text-3xl text-2xl font-normal text-center pt-6">
        {" "}
        ― Robert Rodriguez
      </span>
      <div className="flex items-center gap-8 justify-center pt-8 project-btns">
        <a href="#">
          <button className="c-btn m-0">LET’S TALK</button>
        </a>
        <a href="#">
          <button className="c-btn m-0">MESSAGE US</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
