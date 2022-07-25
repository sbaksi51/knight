import React from "react";

const InputField = ({ fieldName, fieldType }) => {
  return (
    <div className="input-wrapper">
      <div className="input-data">
        <input type={fieldType} required />
        <div className="input-underline"></div>
        <label>{fieldName}</label>
      </div>
    </div>
  );
};

export default InputField;
