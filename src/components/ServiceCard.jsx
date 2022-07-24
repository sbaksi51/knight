import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  serviceName,
  serviceIcon,
  serviceDesc,
  servicePath,
}) => {
  return (
    <div className="bg-white-1 rounded-lg p-8 hover:shadow-[0px_0px_8px_-2px_rgba(0,0,0,0.25)] w-[18rem] flex flex-col justify-center items-start gap-6 ease-in-out duration-200 border-[1px] border-grey-1 hover:border-main-light">
      {/* Icon */}
      <img src={serviceIcon} alt={serviceName} className=" w-[3rem]" />
      {/* Text */}
      <div className="flex flex-col justify-center items-start gap-2">
        <h2 className="font-semibold text-xl text-black-1">{serviceName}</h2>
        <p className="font-normal text-xs text-grey-2">{serviceDesc}</p>
      </div>
      {/* Link */}
      <Link
        to={servicePath}
        className="font-medium text-main uppercase text-sm"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
