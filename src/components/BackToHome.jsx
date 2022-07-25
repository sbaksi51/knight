import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <Link
      to="/"
      className="flex justify-center items-center gap-2 text-main hover:text-main-dark ease-in-out duration-300 font-medium"
    >
      <FiChevronLeft />
      <p className="text-sm">Back to Home</p>
    </Link>
  );
};

export default BackToHome;
