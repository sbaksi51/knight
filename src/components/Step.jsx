import React from "react";

const Step = ({ stepNumber, stepTitle, stepDesc }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-[15rem] text-center">
      <div className="bg-white-2 rounded-full h-16 w-16 flex justify-center items-center text-[2rem] font-semibold text-main">
        {stepNumber}
      </div>
      <h2 className="text-white-1 font-normal text-lg">{stepTitle}</h2>
      <p className="text-main-light text-[12px]">{stepDesc}</p>
    </div>
  );
};

export default Step;
