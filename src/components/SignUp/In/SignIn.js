import React from "react";
import "../../../index.css";
import logo from "../../../assets/logo.png";
import Button from "../../Buttons/Button";
import TextFieldWithLabel from "../../TextField/TextFieldWithLabel";

const SignIn = () => {
  return (
    <div className="small-container">
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
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <TextFieldWithLabel inputType="email" placeHolder="someone@example.com" labelText="Email" />
              <TextFieldWithLabel inputType="password" placeHolder="••••••••" labelText="Password" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-white"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                  <Button text="Sign In" width={12} height={4} />
                </div>
                <p className="text-sm font-light text-white">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium underline text-indigo-900"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
