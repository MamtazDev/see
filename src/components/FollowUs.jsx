import React from "react";
import Gallery from "./Gallery";

const FollowUs = () => {
  return (
    <section className="first-slick ninth-slick md:pt-28 pt-14">
      <h1 className="text-black md:text-4xl text-3xl font-semibold pb-2 pl-16">
        FOLLOW US AT @SEEPROSERVICES
      </h1>

      <Gallery />
      <button className="top-btn">Back to top </button>
    </section>
  );
};

export default FollowUs;
