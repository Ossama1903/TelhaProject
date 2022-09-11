import React from "react";
import tempImg from '../../assets/customer_home2.jpg';
import SimpleHeading from "../TextHeadings/SimpleHeading";
import Paragraph from "../Paragraph/Paragraph";
import SmallHeading from "../TextHeadings/SmallHeading";

const SqaurePictureCard = () => {
  return (
    <div className="flex md:flex-row max-w-full">
        <div className="mt-2">
            <img src={tempImg} className="md:w-full" />
        </div>
      <div className={`max-w-full text-sm pl-5 lg:pl-10`}>
        <SmallHeading text="Lorem Ipsum" />
        <Paragraph
          text="Dot Foods donated $57,366 worth of food to Ukrainian refugees, thanks to the generosity of our employees."
          textSize="sm:text-base md:text-sm lg:sm"
        />
        <div className="mt-5 lg:mt-10 ">
          <a className="text-indigo-600 text-sm"> Read More </a>
        </div>
      </div>
    </div>
  );
};

export default SqaurePictureCard;
