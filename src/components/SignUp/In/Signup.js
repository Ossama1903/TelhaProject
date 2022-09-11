import React from "react";
import "../../../index.css";
import logo from '../../../assets/logo.png'
import Button from "../../Buttons/Button";
import TextFieldWithLabel from "../../TextField/TextFieldWithLabel";

const SignUp = () => {
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto  md:py-32 lg:py-24">
      <section className="bg-gray-50 dark:bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-40 mr-2" src={logo} alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-400 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                Register your Account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <TextFieldWithLabel inputType="text" placeHolder="First Name" labelText="First Name" />
              <TextFieldWithLabel inputType="text" placeHolder="Last Name" labelText="Last Name" />
              <TextFieldWithLabel inputType="email" placeHolder="someone@example.com" labelText="Email" />
              <TextFieldWithLabel inputType="tel" placeHolder="Phone" labelText="Phone" />
              <TextFieldWithLabel inputType="password" placeHolder="••••••••" labelText="Password" />
                
               
                
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                  <Button text="Sign In" width={12} height={4} />
                </div>
                <p className="text-sm font-light text-white text-center">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium underline text-indigo-900"
                  >
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp