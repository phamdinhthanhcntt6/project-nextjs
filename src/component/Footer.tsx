"use client";

import { images } from "@/assets/image";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [isRotated, setIsRotated] = useState(false);
  const handleRotate = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className="max-md:-mt-96">
      <div className="bg-[#F6F9FC] w-full pb-16 max-md:-mt-48">
        <div className="mx-auto flex flex-col xl:max-w-7xl max-lg:pl-6 px-8 pt-6 w-full md:-mt-48">
          <div className="flex flex-row md:justify-between">
            <Image
              src={images.logo}
              alt="Logo"
              className="w-44 h-24 max-lg:w-24 max-lg:h-14 max-lg:mx-auto max-md:-ml-1"
            />
            <div className="mt-10 grid grid-cols-3 gap-6 max-md:mt-5">
              <Image src={images.icon} alt="" className="w-6 h-6" />
              <Image src={images.icon} alt="" className="w-6 h-6" />
              <Image src={images.icon} alt="" className="w-6 h-6" />
            </div>
          </div>
          <div className="flex w-full justify-between max-md:flex-col">
            <div
              className="flex justify-between w-full md:hidden"
              onClick={handleRotate}
            >
              <span className="font-bold mb-2 text-right">CONTACT US</span>
              <Image
                src={images.down}
                alt=""
                className={`transform ${
                  isRotated ? "rotate-180" : ""
                } transition-transform duration-500 ease-in-out w-6 h-6 opacity-50`}
              />
            </div>

            <div
              className={`flex flex-col w-7/12  max-md:w-full ${
                !isRotated ? "max-md:hidden" : ""
              }`}
            >
              <span className="uppercase text-black font-bold text-xs">
                head office:
              </span>
              <p className="text-base text-gray-500">
                Building 11 (LE Building), Alley 71, Lang Ha St, Thanh Cong
                Ward, Ba Dinh Dist, Hanoi, Vietnam.
              </p>
              <span className="uppercase text-black font-bold text-xs">
                head office:
              </span>
              <p className="text-base text-gray-500">
                Building 11 (LE Building), Alley 71, Lang Ha St, Thanh Cong
                Ward, Ba Dinh Dist, Hanoi, Vietnam.
              </p>
              <span className="uppercase text-black font-bold text-xs">
                head office:
              </span>
              <p className="text-base text-gray-500">
                Building 11 (LE Building), Alley 71, Lang Ha St, Thanh Cong
                Ward, Ba Dinh Dist, Hanoi, Vietnam.
              </p>
            </div>

            <div className="md:w-2/5 w-full flex justify-between  mt-5 text-right max-md:flex-col max-md:flex max-md:text-left">
              <div className="flex flex-col  text-left">
                <div className="flex justify-between w-full md:hidden">
                  <span className="font-bold mb-2 text-right">ABOUT</span>
                  <Image
                    src={images.down}
                    alt=""
                    className="w-6 h-6 opacity-50"
                  />
                </div>
                <span className="font-bold mb-2 max-md:hidden">ABOUT</span>
                <span className="max-md:hidden font-normal text-gray-500">
                  About us
                </span>
                <span className="max-md:hidden text-gray-500">About us</span>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex justify-between md:hidden w-full">
                  <span className="font-bold mb-2 text-right">
                    MEMBER COMPANIES
                  </span>
                  <Image
                    src={images.down}
                    alt=""
                    className="w-6 h-6 opacity-50"
                  />
                </div>
                <span className="font-bold mb-2 max-md:hidden">
                  MEMBER COMPANIES
                </span>
                <span className="max-md:hidden font-normal text-gray-500">
                  About us
                </span>
                <span className="max-md:hidden font-normal text-gray-500">
                  About us
                </span>
              </div>
              <div className="flex flex-col  text-left">
                <div className="flex justify-between w-full md:hidden">
                  <span className="font-bold mb-2 text-right">USEFUL INFO</span>
                  <Image
                    src={images.down}
                    alt=""
                    className="w-6 h-6 opacity-50"
                  />
                </div>
                <span className="font-bold mb-2 max-md:hidden">
                  USEFUL INFO
                </span>
                <span className="max-md:hidden font-normal text-gray-500">
                  About us
                </span>
                <span className="max-md:hidden font-normal text-gray-500">
                  About us
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
