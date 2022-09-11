import React from "react";
import TextCard from "./TextCard";
import img_src from "../../assets/customer_home2.jpg";

const PictureCardWithBg = (props) => {
  var reverseCheck;
  reverseCheck = props.arrangement === "-reverse" ? true : false;

  var flexArrangement =
    reverseCheck === true ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div>
      <div className="w-full bg-indigo-200 py-10 relative">
        <div className="static z-auto ">
          <div
            className={`Containerr flex flex-col ${flexArrangement} items-center gap-10 max-w-full py-1`}
          >
            <div className="max-w-full md:max-w-1/2">
              <a href="#">
                <img src={img_src} />
              </a>
            </div>
            <TextCard reverse={reverseCheck} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureCardWithBg;
