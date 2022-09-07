import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import "../../index.css";
import SimpleHeading from "../TextHeadings/SimpleHeading";
import IconCard from "../Cards/IconCard";

const ServiceSection = () => {
  return (
    <section>
      <hr className="border-1 border-gray-500 style-two" />
      <div className="Containerr">
        <div className="text-center mt-20 mb-10 max-w-full">
          <SimpleHeading color="neutral-700" text="Lorem Ipsum" size={4} />
          <hr className="mt-10 mb-14 mx-auto w-14 border border-indigo-600" />
          <div>
            <Paragraph 
              text="We make products more accessible and affordable to the food industry because of our unique position between suppliers and our customers. By streamlining the supply chain and building valuable partnerships along the way, everyone benefits from our redistribution business model."
              textSize="text-base md:text-xl"
            />
            <Paragraph text="Discover what's possible when you partner with us." textSize="text-base md:text-xl" />
          </div>
          <div className="flex flex-col gap-10 md:flex-row my-20 justify-between">
            <IconCard headingText="Lorem Ipsum" paragraphText="Our customers get access to a wider variety of products, ensuring more sales up and down the supply chain." />
            <IconCard headingText="Lorem Ipsum" paragraphText="Our customers get access to a wider variety of products, ensuring more sales up and down the supply chain."/>
            <IconCard headingText="Lorem Ipsum" paragraphText="Our customers get access to a wider variety of products, ensuring more sales up and down the supply chain."/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
