import React from "react";
import SimpleHeading from "../TextHeadings/SimpleHeading";
import PictureCardWithBg from "../Cards/PictureCardWithBg";
import NewsGrid from "./NewsGrid";
import TextCard from "../Cards/TextCard";

const NewsSection = () => {
  return (
    <section className="py-10">
      <hr className="mb-10 border-1 border-gray-500 style-two" />
      <div className="Containerr">
        <div className="text-center mt-20 mb-10 max-w-full">
          <SimpleHeading color="neutral-700" text="Lorem Ipsum" size={4} />
          <hr className="mt-10 mb-14 mx-auto w-14 border border-indigo-600" />
        </div>
      </div>

      <PictureCardWithBg arrangement="-reverse" />
      <NewsGrid />
      <hr className="mt-5 border-1 border-gray-500 style-two" />
      <div className="Containerr pt-20 pb-14">
        <div className="flex md:flex-row flex-col justify-around items-center gap-y-20">
          <TextCard />
          <TextCard />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
