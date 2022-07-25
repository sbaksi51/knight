import React from "react";
import Step from "./Step";
import RightArrow from "../img/rightarrow.svg";

const Howitworks = () => {
  return (
    <div className="works section ">
      <div
        className="section-container py-24 flex justify-center items-center flex-col gap-16 bg-no-repeat bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('Wave.svg')" }}
      >
        <div className="section-header flex justify-center items-center flex-col gap-2">
          <h2 className="header-subtitle text-main-light">How it works</h2>
          <h1 className="header-title text-white-2">So how does it work?</h1>
        </div>
        <div className="steps flex justify-center items-center mb-12">
          <Step
            stepNumber="1"
            stepTitle="Step Title Text"
            stepDesc="Step description. This is a sample description. Place sample description here."
          />
          <img src={RightArrow} alt="arrow" className="self-start" />
          <Step
            stepNumber="2"
            stepTitle="Step Title Text"
            stepDesc="Step description. This is a sample description. Place sample description here."
          />
          <img src={RightArrow} alt="arrow" className="self-start" />

          <Step
            stepNumber="3"
            stepTitle="Step Title Text"
            stepDesc="Step description. This is a sample description. Place sample description here."
          />
          <img src={RightArrow} alt="arrow" className="self-start" />

          <Step
            stepNumber="4"
            stepTitle="Step Title Text"
            stepDesc="Step description. This is a sample description. Place sample description here."
          />
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
