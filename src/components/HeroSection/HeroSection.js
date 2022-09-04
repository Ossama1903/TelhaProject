import React from "react";
import HeroBg from "../../assets/HeroBg.jpeg";
import Button from "../Buttons/Button";
import '../../index.css'

const HeroSection = () => {
  return (

    <section className='bg-[url("https://www.dotfoods.com/globalassets/corporate/images/with-copy/1600x533_hero/homepage_hero_header_1600x533.2.jpeg")] max-w-full bg-cover bg-center' >
      <div className="Containerr">
        <main style={{ maxWidth: '50%' }} className='py-36 m-auto lg:m-0 centered'>
          <div className="text-center lg:text-left">
            <div className="text-3xl font-bold tracking-tight sm:text4xl md:text-5xl">
              <h1 className="block xl:inline text-white">Data to enrich your </h1>
            </div>
            <div style={{ paddingTop: 16}} className="text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-full">
              <h1 className="block xl:inline px-3 rounded-md text-indigo-800 bg-white max-w-full">
                Online Business
              </h1>
            </div>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <Button text='Lorem Ipsum' />
            </div>
          </div>
          <div></div>
        </main>
      </div >
    </section >


  );
};

export default HeroSection;