import React from "react";
import { FaCaretRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="section">
      <div className="section-container py-36 flex justify-center items-center gap-16">
        <div>
          <h1 className="header-title font-bold">Got a project for us?</h1>
          <p className="header-desc text-[1.2rem]">
            Feel free to contact us for any questions or to get a free quote
          </p>
        </div>
        <button className="btn ">
          Contact Us <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
