"use client";
import Image from "next/image";
import { dataMainService, dataService } from "./data";
import { images } from "@/assets/image";

const Content = () => {
  return (
    <div className="w-full flex items-center  mx-auto flex-col">
      <div className="w-full mx-auto flex-col bg-[#f6f9fc] pb-20 pt-10">
        <div className="xl:max-w-6xl mx-auto flex-col w-full grid md:grid-cols-3 gap-10 justify-start align-top p-3">
          {dataService.map((item) => (
            <div className="flex flex-col justify-between text-center max-md:text-left ">
              <div className="text-center max-md:text-left items-center flex flex-col">
                <div className="flex flex-col max-md:flex-row gap-2">
                  <Image src={item.src} alt="" className="w-32 mb-6 " />
                  <div className="flex flex-col justify-center">
                    <span className="text-base font-medium mb-2">
                      {item.name}
                    </span>
                    <span className="text-sm font-normal text-gray-500 mb-6">
                      {item.url}
                    </span>
                  </div>
                </div>
                <span className="font-normal">{item.desc}</span>
              </div>
              <div className="mt-6 font-medium text-sm uppercase text-[#008EE4]">
                Detail &gt;
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex flex-col xl:max-w-6xl max-lg:pl-6 px-8 md:mb-20 max-md:mt-96 mt-20 justify-between w-full">
        <div className="items-start justify-start w-full">
          <div className="flex w-full flex-row mb-5">
            <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
            <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px">
              SERVICE
            </span>
            <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="font-black text-5xl max-md:text-xl">
              Main services
            </span>
          </div>
          <div className="w-3/4 mt-5">
            <span className="font-light text-xl">
              Appota focuses on building an entertainment ecosystem that brings
              valuable products and services to businesses and users.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {dataMainService.map((item) => (
            <div className="flex flex-col text-left">
              <div className="inline">
                <span className="text-gray-300 text-5xl font-black">
                  {item.id}.
                </span>
                <span className="ml-1 text-2xl font-bold uppercase">
                  {item.name}
                </span>
              </div>
              <div className="border-2 border-[#008EE4]"></div>
              <Image alt="" src={item.image} className="h-3/4" />
              <div className="flex flex-col">
                {item.service.map((service) => (
                  <div className="flex flex-col my-3">
                    <div className="w-full justify-between">
                      <div className="flex flex-row">
                        <Image src={service.icon} alt="" className="mr-3" />
                        <span className="font-bold">{service.name}</span>
                      </div>
                      <div>
                        <Image src="" alt="" />
                      </div>
                    </div>
                    <div className="w-full mt-3">
                      <div className="border w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Content;
