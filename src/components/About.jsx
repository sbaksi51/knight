import React from "react";
import AboutImg from "../img/team.svg";
import { BsCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about section bg-white-1">
      <div className="section-container py-36 flex justify-center items-center gap-16">
        {/* Left Image Div */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={AboutImg}
            alt="team"
            className="w-full animate-floating-div"
          />
        </div>
        {/* Right Text Div */}
        <div className="flex-1 flex flex-col justify-center items-start gap-8">
          <div className="about-header">
            <h2 className="header-subtitle">About</h2>
            <h1 className="header-title mt-2">Why choose us?</h1>
          </div>
          <p className="header-desc">
            We provide fully integrated digital solutions and we can help you
            take your product to the next level.
          </p>
          <div className="service-features w-full flex flex-col justify-center items-start gap-4">
            <div className="flex justify-start items-center gap-4">
              <BsCheckCircleFill size={24} className="text-main" />
              <p className="font-normal text-lg">
                Dedicated and Professional teams
              </p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <BsCheckCircleFill size={24} className="text-main" />
              <p className="font-normal text-lg">In sync with your team</p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <BsCheckCircleFill size={24} className="text-main" />
              <p className="font-normal text-lg">On-time delivery</p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <BsCheckCircleFill size={24} className="text-main" />
              <p className="font-normal text-lg">24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
