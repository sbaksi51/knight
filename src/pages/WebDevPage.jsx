import React from "react";
import BackToHome from "../components/BackToHome";

const WebDevPage = () => {
  return (
    <div className="section min-h-screen items-start">
      <div className="section-container py-28 flex flex-col justify-center items-start gap-8">
        {/* Back to Home Button */}
        <BackToHome />

        {/* Page Content */}
        <div>
          <h1 className="header-title">Web Development</h1>
        </div>
      </div>
    </div>
  );
};

export default WebDevPage;
