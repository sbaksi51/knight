import React from "react";
import BackToHome from "../components/BackToHome";
import InputField from "../components/InputField";

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
          </div>
          {/* Form Div */}
          <div className="flex-1 flex flex-col justify-center items-center gap-12">
            {/* Form Inputs */}
            <div className="input-container w-full flex flex-col justify-center items-center gap-8">
              <InputField fieldName="Your Name" fieldType="text" />
              <InputField fieldName="Email Address" fieldType="email" />
              <InputField fieldName="Phone Number" fieldType="tel" />
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
