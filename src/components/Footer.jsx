import React from "react";
import Logo from "../img/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer section bg-white-2">
      <div className="section-container flex justify-between flex-wrap items-start py-28 gap-8">
        {/* Company Details */}
        <div className="flex flex-col justify-center items-start gap-8">
          {/* Logo */}
          <div className="navbar__logo--container flex justify-center items-center gap-2">
            <img src={Logo} alt="company logo" className="logo h-10 w-10" />
            <h1 className="logo__name font-semibold text-[20px] text-black-1">
              Company
            </h1>
          </div>
          {/* Description */}
          <p className="text-grey-2">
            A Fully Integrated Digital Solutions Agency
          </p>
          {/* Details */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex justify-center items-center gap-2 text-grey-2">
              <FaPhoneAlt />
              <p>+00 01234 56789</p>
            </div>
            <div className="flex justify-center items-center gap-2 text-grey-2">
              <FaEnvelope />
              <p>sampleEmail@company.com</p>
            </div>
          </div>
          {/* Socials */}
          <div className="flex justify-center items-center gap-4">
            <button className="flex justify-center items-center h-10 w-10 rounded-lg bg-main text-white-1">
              <FaFacebookF />
            </button>
            <button className="flex justify-center items-center h-10 w-10 rounded-lg bg-main text-white-1">
              <FaLinkedinIn />
            </button>
            <button className="flex justify-center items-center h-10 w-10 rounded-lg bg-main text-white-1">
              <FaTwitter />
            </button>
          </div>
        </div>

        {/* FooterLinks */}
        <div className="flex flex-col justify-center items-start gap-4 mt-4">
          <h3 className="uppercase font-normal text-xl text-main">Company</h3>
          <div className="flex flex-col">
            <p className="font-normal text-grey-2 text-sm">Services</p>
            <p className="font-normal text-grey-2 text-sm">About us</p>
            <p className="font-normal text-grey-2 text-sm">How it works</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 mt-4">
          <h3 className="uppercase font-normal text-xl text-main">Support</h3>
          <div className="flex flex-col">
            <p className="font-normal text-grey-2 text-sm">Help Center</p>
            <p className="font-normal text-grey-2 text-sm">Contact Us</p>
            <p className="font-normal text-grey-2 text-sm">
              Terms & Conditions
            </p>
            <p className="font-normal text-grey-2 text-sm">Feedback</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-4 mt-4">
          <h3 className="uppercase font-normal text-xl text-main">Privacy</h3>
          <div className="flex flex-col">
            <p className="font-normal text-grey-2 text-sm">Privacy Policy</p>
            <p className="font-normal text-grey-2 text-sm">
              Cancellation & Refund
            </p>
            <p className="font-normal text-grey-2 text-sm">
              Do not sell my info
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1.5px] bg-grey-1 my-8"></div>

        {/* Copyright */}
        <p className="text-center text-grey-2">
          CompanyName | Copyright &copy; 2022. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
