import React from "react";

const Paragraph = (props) => {

  return (
    <p className={`max-w-full ${props.textSize} font-light leading-relaxed mt-3 mb-4 text-neutral-800`}>
     {props.text}
    </p>
  );
};

export default Paragraph;
