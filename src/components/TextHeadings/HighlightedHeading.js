import React from "react";

const HighlightedHeading = (props) => {
  return (
    <h1 className="block xl:inline px-3 rounded-md text-indigo-800 bg-white max-w-full text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl ">
      {props.text}
    </h1>
  );
};

export default HighlightedHeading;
