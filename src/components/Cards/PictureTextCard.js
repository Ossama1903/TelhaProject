import React from "react";
import TextCard from "./TextCard";
import img_src from '../../assets/customer_home2.jpg';

const PictureTextCard = (props) => {

  return (
    <div className={`Containerr flex flex-col md:flex-row${props.arrangement} items-center gap-10 max-w-full pb-24`}>
      <div className="max-w-full md:max-w-1/2">
        <a href="#">
          <img src={img_src} />
        </a>
      </div>
      <TextCard />
    </div>
  );
};

export default PictureTextCard;
