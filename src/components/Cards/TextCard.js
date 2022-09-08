import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import SimpleHeading from "../TextHeadings/SimpleHeading";
import Button from "../Buttons/Button";

const TextCard = () => {
  return (
    <div className="max-w-full md:max-w-1/2 text-base md:pl-10 lg:pl-20">
      <SimpleHeading color="neutral-700" text="Lorem Ipsum" size={4} />
      <Paragraph
        text="Explore the many reasons distributors, food processors, and national account operators choose us as the solution to their supply chain's most difficult problems."
        textSize="sm:text-base md:text-sm lg:text-base"
      />
      <div className="mt-5 sm:mt-8 flex justify-start">
        <Button text="Lorem Ipsum" width={12} height={4} />
      </div>
    </div>
  );
};

export default TextCard;
