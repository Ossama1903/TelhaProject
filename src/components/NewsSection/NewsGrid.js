import React from "react";
import SqaurePictureCard from "../Cards/SqaurePictureCard";

const NewsGrid = () => {
  return (
    <div className="Containerr">
      <div className="py-16 flex flex-col gap-y-12 items-center">
        <div className="flex md:flex-row flex-col justify-between gap-12 ">
          <SqaurePictureCard />
          <SqaurePictureCard />
        </div>
        <div className="md:pt-8 flex md:flex-row flex-col justify-between gap-12">
          <SqaurePictureCard />
          <SqaurePictureCard />
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
