import React from "react";
import ServiceCard from "./ServiceCard";
import webdesicon from "../img/webdev.png";
import webdevicon from "../img/webdes.png";
import digitalicon from "../img/digital.png";
import seoicon from "../img/seo.png";
import uiuxicon from "../img/uiux.png";
import videoicon from "../img/video.png";

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="section-container py-28 flex flex-col justify-center items-center gap-16">
        {/* Section Header */}
        <div className="section-header text-center flex flex-col justify-center items-center gap-2">
          <h2 className="header-subtitle">Services</h2>
          <h1 className="header-title">How can we help your business?</h1>
          <p className="header-desc">
            We have dedicated teams for these domains
          </p>
        </div>
        {/* Service Cards */}
        <div className="w-full grid grid-cols-[18rem_18rem_18rem] justify-evenly gap-8 ">
          <ServiceCard
            serviceIcon={webdesicon}
            serviceName="Web Design"
            serviceDesc="Service description goes here. Something about the servce. This is a sample description."
            servicePath="webdesign"
          />
          <ServiceCard
            serviceIcon={webdevicon}
            serviceName="Web Development"
            serviceDesc="Service description goes here. Something about the servce. This is a sample description."
            servicePath="webdev"
          />
          <ServiceCard
            serviceIcon={uiuxicon}
            serviceName="UI/UX Design"
            serviceDesc="Service description goes here. Something about the servce. This is a sample description."
            servicePath="uiux"
          />
          <ServiceCard
            serviceIcon={digitalicon}
            serviceName="Digital Marketing"
            serviceDesc="Service description goes here. Something about the servce. This is a sample description."
            servicePath="digitalmarketing"
          />
          <ServiceCard
            serviceIcon={seoicon}
            serviceName="SEO"
            serviceDesc="Service description goes here. Something about the servce. This is a sample description."
            servicePath="seo"
          />
          <ServiceCard
            serviceIcon={videoicon}
            serviceName="Video Editing"
            serviceDesc="Service description goes here. Something about the servce. This is a sample description."
            servicePath="videoediting"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
