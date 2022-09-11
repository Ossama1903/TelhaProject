import React from "react";

const TextFieldWithLabel = (props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.labelText}
      </label>
      <input
        type={props.inputType}
        name="email"
        id="email"
        className="bg-gray-50 border-none text-black sm:text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 dark:bg-white  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeHolder}
        required
      />
    </div>
  );
};

export default TextFieldWithLabel;
