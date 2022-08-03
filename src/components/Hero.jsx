import React from "react";
import { FaCaretRight } from "react-icons/fa";
import HeroImg from "../img/hero.svg";

const Hero = () => {
  return (
    <div className="hero section">
      <div className="section-container py-28 min-h-[calc(100vh-6rem)] flex justify-between items-center gap-16">
        {/* Text Left Div */}
        <div className="hero__text flex-1 flex flex-col justify-center items-start gap-2">
          <h2 className="text-2xl text-grey-2 font-normal">
            Welcome to Campeon
          </h2>
          <div className="wrapper box-content flex h-[90px] font-bold text-[4rem] text-black-1">
            <h1>Groom</h1>
            <div className="words overflow-hidden text-main">
              <span className="block h-full pl-4 animate-word-carousel">
                In Style
              </span>
              <span className="block h-full pl-4 animate-word-carousel">
                In Elegance
              </span>
              <span className="block h-full pl-4 animate-word-carousel">
                In Flair
              </span>
              <span className="block h-full pl-4 animate-word-carousel">
                In Style
              </span>
            </div>
          </div>
          <h2 className="text-2xl text-grey-2 font-normal">
            Explore our products and get to know us
          </h2>
          <div className="buttons flex justify-start items-center gap-4 mt-6">
            <button className="btn-2">
              <a href="#services">Learn More</a>
              <FaCaretRight />
            </button>
          </div>
        </div>
        {/* Image Right Div */}
        <div className="hero__image flex-1 flex justify-center items-center">
          <img
            src={HeroImg}
            alt="man sitting on desk"
            className="w-full animate-floating-div"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
