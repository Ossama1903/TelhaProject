import React from "react";

const NavLinks = () => {
  const links = [{ name: "Categories" }, { name: "Ipsum" }, { name: "Dolor" }];
  return <>
  {
    links.map(link=>(
        <div>
            <div className="px-3 text-left md:cursor-pointer">
                <h1 className="py-7 text-base font-medium text-gray-500 hover:text-gray-900">
                    {link.name}
                </h1>
            </div>
        </div>
    ))
  }
  </>
};

export default NavLinks;
