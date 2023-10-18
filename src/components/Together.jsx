import React from "react";
import cam from "../assets/cam.svg";

const Together = () => {
  return (
    <section className="together-sec md:pt-20 pt-10 mb:pb-20 pb-10 md:pl-28 pl-10 md:pr-28 pr-10">
      <div className="2xl:max-w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex flex-wrap items-start justify-between mx-auto">
        <h1 className="text-black md:text-4xl text-3xl font-medium">
          LET US HELP YOU PUT YOUR PROJECT TOGETHER
        </h1>
        <div className="flex items-end flex-wrap w-full together-col">
          <div className="md:w-3/5 w-full mt-8 md:pr-40 pr-20 together-inner1x flex flex-col items-start">
            <p className="text-black md:text-xl text-lg font-normal md:max-w-lg">
              Putting a project together? Reach out and get a consultation .
              <br />
              With 20+ years of industry experience, we’re confident we can
              provide you with the best equipment, technicians, and advice to
              help you bring your shoot to the next level.{" "}
            </p>
            <textarea className="textarea1x"></textarea>
            <textarea className="textarea2x"></textarea>
            <a href="#">
              <button className="c-btn mr-0 mt-8">MESSAGE US</button>
            </a>
          </div>
          <div className="md:w-2/5 w-full together-img flex items-end justify-end mb-8">
            <img className="w-full lg:w-9/12 md:w-12/12" src={cam} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Together;
