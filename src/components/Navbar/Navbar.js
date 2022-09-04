import React, { useState } from "react";
import "../../index.css";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import IconButton from "../Buttons/IconButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="bg-gray-200 md:flex gap-3 place-content-end hidden py-2">
        <h3 className="text-xs mx-2 cursor-pointer hover:text-white">
          Become a Customer
        </h3>
        <h3 className="text-xs mx-2 cursor-pointer hover:text-white">
          Become a Supplier
        </h3>
      </div>
      <div className="Containerr">
        <div className="flex items-center font-medium md:justify-between justify-center">
          <div className="z-50 py-5 md:pt-0 md:pb-0 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="Logo" className="md:cursor-pointer h-9" />
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
              <ion-icon
                name={`${open ? "close-outline" : "menu-outline"}`}
              ></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden items-center gap-8 font-[Poppins] font-normal">
            <li className="py-7 px-3 inline-block  cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <IconButton text="Log In" iconName="log-in-outline" />
          </div>

          {/* Mobile View Navigation */}
          <ul
            className={`
                    md:hidden bg-white absolute w-full h-full bottom-0 uppercase py-24 pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
          >
            <li className="py-7 px-3 inline-block text-sm cursor-pointer font-medium text-gray-500 hover:text-gray-900">
              Home
            </li>

            <NavLinks />
            <li className="py-7 px-3 cursor-pointer font-medium text-gray-500 hover:text-gray-900">Become a Customer</li>
            <li className="py-7 px-3 cursor-pointer font-medium text-gray-500 hover:text-gray-900">Become a Supplier</li>
            <div className="py-7 px-3">
              <IconButton text="Sign In" iconName="log-in-outline" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
