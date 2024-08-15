"use client";
import { images } from "@/assets/image";
import Image from "next/image";
import { useState } from "react";
var $ = require("jquery");

if (typeof window !== "undefined") {
  // @ts-ignore
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  items: 4,
  loop: false,
  // center: true,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: "URLHash",
  stagePadding: 100,
  // loop: true,
  // margin: 10,
  // items: 3.5,
  // autoplay: false,
  // center: true,
  // dots: false,
};

const Content = () => {
  const [isActive, setIsActive] = useState(false);
  const [isChoose, setIsChoose] = useState(false);

  return (
    <div className="w-full flex items-center justify-center mx-auto flex-col">
      <div className="flex items-center justify-center xl:max-w-7xl mx-auto flex-col w-full">
        <div className="mx-auto flex flex-col xl:max-w-7xl max-lg:pl-6 px-8 md:mb-20">
          <div className="flex w-full flex-row">
            <div className="border-2 border-[#008EE4] w-1/6 h-px max-lg:hidden" />
            <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px">
              ABOUT US
            </span>
            <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
          </div>
          <span className="font-black text-6xl mt-5 max-md:text-xl">
            We are Appota
          </span>
          <div className="w-4/5 mx-auto mt-10 flex flex-col">
            <span className="text-3xl italic font-extralight text-black-700 max-md:not-italic max-md:text-base">
              Appota is a pioneer in providing technology solutions and digital
              entertainment content in the Vietnamese market. Currently, Appota
              owns an ecosystem with more than 55 million internet users, making
              it one of the largest game publishers in Vietnam. Additionally, it
              is the only official partner responsible for developing the
              Facebook Gaming Creator network in the country.
            </span>
          </div>
        </div>

        <div className="mx-auto flex flex-row max-lg:pl-6 px-8 md:mb-20 mt-20 justify-between w-full">
          <div className="border w-full"></div>
        </div>

        <div className="mx-auto flex flex-row xl:max-w-7xl max-lg:pl-6 px-8 md:mb-20 mt-20 justify-between w-full">
          <div className="bg-blue-600 static w-96 h-96 max-md:hidden">
            <Image
              src={images.image1}
              alt=""
              className="-mt-10 ml-10 w-96 h-96"
            />
          </div>
          <div className="w-7/12 text-left flex flex-col max-md:w-max">
            <span className="text-4xl max-md:text-2xl font-black">
              Vision & Mission
            </span>
            <span className="text-lg font-normal mt-6">
              <span className="font-bold">Vision:</span> Appota’s vision is to
              become the largest entertainment technology ecosystem in Vietnam
              and Southeast Asia.
            </span>
            <span className="text-lg font-normal mt-6">
              <span className="font-bold"> Mission:</span> Appota believes in
              the power of the Mobile Internet Technologies. We aspire to make
              mobile platforms that create opportunities and improve people’s
              lives and experiences in developing nations.
            </span>
          </div>
        </div>

        <div className="mx-auto flex flex-row xl:max-w-7xl max-lg:pl-6 px-8 md:mb-20 mt-20 justify-between w-full mb-10">
          <div className="w-7/12 text-left flex flex-col max-md:w-max">
            <span className="text-4xl max-md:text-2xl font-black">
              Core value
            </span>
            <span className="text-lg font-normal mt-6">
              <span className="font-bold">Vision:</span> Appota’s vision is to
              become the largest entertainment technology ecosystem in Vietnam
              and Southeast Asia.
            </span>
            <span className="text-lg font-normal mt-6">
              <span className="font-bold"> Mission:</span> Appota believes in
              the power of the Mobile Internet Technologies. We aspire to make
              mobile platforms that create opportunities and improve people’s
              lives and experiences in developing nations.
            </span>
          </div>
          <div className="bg-blue-600 static w-96 h-96 max-md:hidden">
            <Image
              src={images.image1}
              alt=""
              className="-mt-10 -ml-10 w-96 h-96"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#0096DA] w-full py-16 my-10 text-center mx-auto items-center flex flex-col mb-32">
        <span className="text-white text-4xl font-bold mb-10 justify-center">
          Milestones
        </span>
        <div className="w-1/3 flex flex-row justify-between h-[1px] mb-14 mt-4 max-md:hidden text-center">
          <span className="font-semibold text-white">Now</span>
          <span className="font-semibold text-white">2017</span>
          <span className="font-semibold text-white">2014</span>
          <span className="font-semibold text-white">2011</span>
        </div>
        <div className="border w-1/3 flex flex-row justify-between h-[1px] border-gray-500 max-md:hidden" />
        <div className="w-1/3 flex flex-row justify-between h-[1px] -mt-[13px] max-md:hidden">
          <div
            className="w-6 h-6 rounded-full bg-gray-500 items-center flex justify-center"
            onClick={() => setIsChoose(!isChoose)}
          >
            {isChoose && <div className="w-4 h-4 rounded-full bg-white" />}
          </div>
          <div
            className="w-6 h-6 rounded-full bg-gray-500 items-center flex justify-center"
            onClick={() => setIsChoose(!isChoose)}
          >
            {isChoose && <div className="w-4 h-4 rounded-full bg-white" />}
          </div>
          <div
            className="w-6 h-6 rounded-full bg-gray-500 items-center flex justify-center"
            onClick={() => setIsChoose(!isChoose)}
          >
            {isChoose && <div className="w-4 h-4 rounded-full bg-white" />}
          </div>
          <div
            className="w-6 h-6 rounded-full bg-gray-500 items-center flex justify-center"
            onClick={() => setIsChoose(!isChoose)}
          >
            {isChoose && <div className="w-4 h-4 rounded-full bg-white" />}
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-row max-lg:pl-6 px-8 md:mb-20 mt-20 w-screen gap-5 overflow-x-auto flex-nowrap">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item w-1/2 mx-auto">
            <Image src={images.image1} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.image} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/5" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.image1} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/5" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.image1} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/5" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.image1} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/10" />
          </div>
          <div className="item w-1/2 mx-auto">
            <Image src={images.logo} alt="Ocean" className="w-1/10 h-1/5" />
          </div>
        </OwlCarousel>
      </div>

      <div className="flex items-center justify-center xl:max-w-7xl mx-auto flex-col w-full max-md:mb-10">
        <span className="text-4xl max-md:text-2xl font-black">
          Company Structure
        </span>
        <Image src={images.logo} alt="" className="w-96 max-md:w-2/3" />
        <div className="bg-gray-500 h-16 w-px border-gray-300 border-[1.5px] -mt-10 max-md:hidden" />
        <div className="bg-gray-500 h-px w-[76.5%] border-gray-300 border-[1.5px] max-md:hidden" />
        <div className="flex w-11/12 justify-between -mt-[2.3px] max-md:grid max-md:grid-cols-2 max-md:gap-3">
          <div className="flex flex-col mx-auto items-center">
            <div className="bg-gray-500 h-16 w-px border-gray-300 border-[1.5px] max-md:hidden" />
            <div
              className={`${
                isActive ? "border-blue-500" : ""
              }  border relative`}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <Image
                src={images.acheckin}
                alt=""
                className="w-44 h-16 max-md:w-32"
              />
              {isActive && (
                <div className="w-44 h-16 max-md:w-32 bg-blue-500 absolute -z-10  left-0 top-0 translate-x-2 translate-y-2 delay-1000" />
              )}
            </div>
          </div>
          <div className="flex flex-col mx-auto items-center">
            <div className="bg-gray-500 h-16 w-px border-gray-300 border-[1.5px] max-md:hidden" />
            <div className="active:border-blue-500 border relative">
              <Image
                src={images.acheckin}
                alt=""
                className="w-44 h-16 max-md:w-32"
              />
              <div className="w-44 h-16 max-md:w-32 bg-blue-500 absolute -z-10 top-2 left-2" />
            </div>
          </div>
          <div className="flex flex-col mx-auto items-center">
            <div className="bg-gray-500 h-16 w-px border-gray-300 border-[1.5px] max-md:hidden" />
            <div className="active:border-blue-500 border relative">
              <Image
                src={images.acheckin}
                alt=""
                className="w-44 h-16 max-md:w-32"
              />
              <div className="w-44 h-16 max-md:w-32 bg-blue-500 absolute -z-10 top-2 left-2" />
            </div>
          </div>
          <div className="flex flex-col mx-auto items-center">
            <div className="bg-gray-500 h-16 w-px border-gray-300 border-[1.5px] max-md:hidden" />
            <div className="active:border-blue-500 border relative">
              <Image
                src={images.acheckin}
                alt=""
                className="w-44 h-16 max-md:w-32"
              />
              <div className="w-44 h-16 max-md:w-32 bg-blue-500 absolute -z-10 top-2 left-2" />
            </div>
          </div>
          <div className="flex flex-col mx-auto items-center">
            <div className="bg-gray-500 h-16 w-px border-gray-300 border-[1.5px] max-md:hidden" />
            <div className="active:border-blue-500 border relative">
              <Image
                src={images.acheckin}
                alt=""
                className="w-44 h-16 max-md:w-32"
              />
              <div className="w-44 h-16 max-md:w-32 bg-blue-500 absolute -z-10 top-2 left-2" />
            </div>
          </div>
          <div className="flex flex-col mx-auto items-center">
            <div className="bg-gray-500 h-16 w-px border-gray-300 border-[1.5px] max-md:hidden" />
            <div className="active:border-blue-500 border relative">
              <Image
                src={images.acheckin}
                alt=""
                className="w-44 h-16 max-md:w-32"
              />
              <div className="w-44 h-16 max-md:w-32 bg-blue-500 absolute -z-10 top-2 left-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  2;
};
export default Content;
