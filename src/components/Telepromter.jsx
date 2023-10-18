import React from "react";
import assist from "../assets/assist-2.svg";

const Telepromter = () => {
  return (
    <section className="assist-sec assist-sec2x md:pt-40 pt-20 md:pl-16 pl-8 md:pr-40 pr-20">
      <div className="2xl:max-w-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm flex flex-wrap items-start justify-between mx-auto">
        <div className="flex flex-wrap w-full items-center">
          <div className="md:w-2/5 w-full assist-img2x relative">
            <img className="w-full" src={assist} alt="" />
          </div>

          <div className="md:w-3/5 w-full assist-content text-end">
            <h3 className="text-black md:text-3xl text-2xl font-semibold">
              TELEPROMPTER{" "}
            </h3>
            <p className="text-black font-normal md:text-xl text-lg mt-4 md:max-w-xl ml-auto">
              We understand the importance of delivering flawless presentations,
              speeches, and on-camera performances. Our Teleprompter solutions
              are designed to help you deliver your content with confidence,
              precision, and professionalism. With our state-of-the-art
              equipment and experienced operators, we ensure smooth scrolling of
              script and prompt delivery of lines, allowing you to maintain eye
              contact with your audience and deliver your message flawlessly.
            </p>
            <a href="#">
              <button className="c-btn">SERVICES</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Telepromter;
