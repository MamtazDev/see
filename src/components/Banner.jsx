import React from "react";

const Banner = () => {
  return (
    <section className="hero-sec">
      <div className="w-full h-full hero-inner flex items-end">
        <div className="lg:w-1/2 w-full h-full hero-content relative z-10 md:pl-12 pl-6 pb-60 flex flex-col justify-end">
          <h1 className="pro-head text-white md:text-5xl text-4xl font-bold md:max-w-3xl relative z-10">
            SEE PRODUCTION SERVICES VIDEO ASSIST
          </h1>
          <h6 className="mat-head text-white mt-4 relative z-10">
            WHAT YOU SEE MATTERS
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Banner;
