import React from "react";
import BackToHome from "../components/BackToHome";
import InputField from "../components/InputField";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";

const ContactPage = () => {
  return (
    <div className="section items-start">
      <div className="section-container py-28 flex flex-col justify-center items-start gap-8">
        {/* Back to Home Button */}
        <BackToHome />

        {/* Page Content */}
        <div className="w-full flex justify-center items-start py-8 gap-16">
          {/* Info Div */}
          <div className="flex flex-1 flex-col justify-center items-start gap-16">
            {/* Info Text */}
            <div>
              <h1 className="text-black-1 text-5xl">Contact Information</h1>
              <p className="text-grey-2 mt-4">
                Feel free to contact us if you have any questions.
              </p>
              <p className="text-grey-2">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
            </div>
            {/* Info Details */}
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex justify-center items-center gap-2 text-grey-2">
                <FaPhoneAlt />
                <p>+00 01234 56789</p>
              </div>
              <div className="flex justify-center items-center gap-2 text-grey-2">
                <FaEnvelope />
                <p>sampleEmail@company.com</p>
              </div>
              <div className="flex justify-center items-center gap-2 text-grey-2">
                <BsClockFill />
                <p>Mon-Fri from 10am to 5pm</p>
              </div>
            </div>
            {/* Socials */}
            <div className="flex justify-start items-center gap-4">
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
          {/* Form Div */}
          <div className="flex-1 flex flex-col justify-center items-center gap-12">
            {/* Form Inputs */}
            <div className="input-container w-full flex flex-col justify-center items-center gap-8">
              <InputField fieldName="Your Name" fieldType="text" />
              <InputField fieldName="Email Address" fieldType="email" />
              <InputField fieldName="Phone Number" fieldType="tel" />
              <InputField
                fieldName="Tell us about your project"
                fieldType="text"
              />
            </div>
            {/* Service Inputs */}
            <div className="service-type flex flex-col justify-center items-start w-full gap-4">
              <p className="font-medium">What type of service do you need?</p>
              <div className="service-checkbox flex justify-start items-center flex-wrap gap-4 text-grey-2 text-sm">
                <label className="flex justify-center items-center gap-1">
                  <input type="checkbox" />
                  Web Design
                </label>
                <label className="flex justify-center items-center gap-1">
                  <input type="checkbox" />
                  Web Development
                </label>
                <label className="flex justify-center items-center gap-2">
                  <input type="checkbox" />
                  UI/UX Design
                </label>
                <label className="flex justify-center items-center gap-1">
                  <input type="checkbox" />
                  Digital Marketing
                </label>
                <label className="flex justify-center items-center gap-1">
                  <input type="checkbox" />
                  SEO
                </label>
                <label className="flex justify-center items-center gap-1">
                  <input type="checkbox" />
                  Video Editing
                </label>
                <label className="flex justify-center items-center gap-1">
                  <input type="checkbox" />
                  Other Reasons
                </label>
              </div>
            </div>

            {/* Button */}
            <button className="btn self-end">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
