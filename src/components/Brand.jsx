import React from "react";
import cartoom from "../assets/cartoon.svg";
import cola from "../assets/cola.svg";
import marvel from "../assets/marvel.svg";
import flix from "../assets/flix.svg";
import max from "../assets/max.svg";
import hulu from "../assets/hulu.svg";
import bet from "../assets/bet.png";
import chick from "../assets/chick.svg";
import turn from "../assets/turn.png";
import shaq from "../assets/shaq.png";

const Brand = () => {
  const brands = [
    cartoom,
    cola,
    marvel,
    flix,
    max,
    hulu,
    bet,
    chick,
    turn,
    shaq,
  ];
  return (
    <div className="second-slick md:pt-16 pt-8">
      <div className="untern-slider2x flex flex-wrap gap-[17px] justify-center w-full">
        {brands.map((brand, index) => (
          <div key={index}>
            <div className="techno-slide2x pr-6">
              <img className="w-full" src={brand} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
