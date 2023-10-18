import React from "react";
import production from "../assets/production.svg";
import Slider from "react-slick";

const StageWest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="first-slick fifth-slick md:pt-40 pt-20">
      <h1 className="text-black md:text-4xl text-3xl font-semibold pb-2 pl-16">
        STAGE WEST
      </h1>
      <div className="fifth-slick-inner relative">
        <div>
          <Slider
            className="untern-slider5x w-full relative z-10"
            {...settings}
          >
            {[1, 2, 3].map((index) => (
              <div key={index}>
                <div className="techno-slide5x flex items-center justify-center relative">
                  <img className="w-full" src={production} alt="" />
                  <div className="absolute flex items-center justify-center flex-col z-10 west-inner">
                    <h2 className="text-white text-center md:text-4xl text-3xl font-semibold">
                      STAGE WEST AND PRODUCTION
                    </h2>
                    <p className="text-white text-center font-medium md:text-xl text-lg mx-auto mt-4 md:mb-12 mb-6 md:max-w-2xl">
                      Our state-of-the-art stage is the perfect setting to bring
                      your creative vision to life.Equipped with cutting-edge
                      facilities and amenities, we provide a seamless and
                      professional environment for your productions.Whether
                      you're working on a film, TV show, commercial, or
                      photoshoot, our stage and in-house production gear are
                      here to support you every step of the way.{" "}
                    </p>
                    <a href="#">
                      <button className="c-btn">READ ON</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* <div>
            <div className="techno-slide5x flex items-center justify-center relative">
              <img className="w-full" src={production} alt="" />
              <div className="absolute flex items-center justify-center flex-col z-10 west-inner">
                <h2 className="text-white text-center md:text-4xl text-3xl font-semibold">
                  STAGE WEST AND PRODUCTION
                </h2>
                <p className="text-white text-center font-medium md:text-xl text-lg mx-auto mt-4 md:mb-12 mb-6 md:max-w-2xl">
                  Our state-of-the-art stage is the perfect setting to bring
                  your creative vision to life.Equipped with cutting-edge
                  facilities and amenities, we provide a seamless and
                  professional environment for your productions.Whether you're
                  working on a film, TV show, commercial, or photoshoot, our
                  stage and in-house production gear are here to support you
                  every step of the way.{" "}
                </p>
                <a href="#">
                  <button className="c-btn">READ ON</button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="techno-slide5x flex items-center justify-center relative">
              <img className="w-full" src={production} alt="" />
              <div className="absolute flex items-center justify-center flex-col z-10 west-inner">
                <h2 className="text-white text-center md:text-4xl text-3xl font-semibold">
                  STAGE WEST AND PRODUCTION
                </h2>
                <p className="text-white text-center font-medium md:text-xl text-lg mx-auto mt-4 md:mb-12 mb-6 md:max-w-2xl">
                  Our state-of-the-art stage is the perfect setting to bring
                  your creative vision to life.Equipped with cutting-edge
                  facilities and amenities, we provide a seamless and
                  professional environment for your productions.Whether you're
                  working on a film, TV show, commercial, or photoshoot, our
                  stage and in-house production gear are here to support you
                  every step of the way.{" "}
                </p>
                <a href="#">
                  <button className="c-btn">READ ON</button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="techno-slide5x flex items-center justify-center relative">
              <img className="w-full" src={production} alt="" />
              <div className="absolute flex items-center justify-center flex-col z-10 west-inner">
                <h2 className="text-white text-center md:text-4xl text-3xl font-semibold">
                  STAGE WEST AND PRODUCTION
                </h2>
                <p className="text-white text-center font-medium md:text-xl text-lg mx-auto mt-4 md:mb-12 mb-6 md:max-w-2xl">
                  Our state-of-the-art stage is the perfect setting to bring
                  your creative vision to life.Equipped with cutting-edge
                  facilities and amenities, we provide a seamless and
                  professional environment for your productions.Whether you're
                  working on a film, TV show, commercial, or photoshoot, our
                  stage and in-house production gear are here to support you
                  every step of the way.{" "}
                </p>
                <a href="#">
                  <button className="c-btn">READ ON</button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StageWest;
