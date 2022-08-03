import React from "react";
import InputField from "../components/InputField";

const SignUpPage = () => {
    return (
      <div className="section items-start">
        <div className="section-container py-28 flex flex-col justify-center items-start gap-20">
              {/* Form Inputs */}
              <div className="input-container self-center w-2/5 flex flex-col justify-center items-center gap-8">
                <InputField fieldName="Your Name" fieldType="text" />
                <InputField fieldName="Email Address" fieldType="email" />
                <InputField fieldName="Phone Number" fieldType="tel" />
              </div>
              {/* Button */}
              <button className="btn self-center">Sign Up</button>
            </div>
        </div>
    );
  };
  
  export default SignUpPage;