import { images } from "@/assets/image";
import Image from "next/image";
import { careerData } from "./data";

const Content = () => {
  return (
    <div>
      <div className="w-full bg-[#F6F9FC] py-16">
        <div className="mx-auto flex flex-col xl:max-w-6xl max-lg:pl-6 px-8 md:mb-12">
          <div className="items-start justify-start w-full">
            <div className="flex w-full flex-row mb-5">
              <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
              <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px uppercase">
                careers
              </span>
              <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
            </div>
            <div className="flex flex-row justify-between w-full">
              <span className="font-black text-5xl max-md:text-xl">
                About us
              </span>
            </div>
          </div>
        </div>

        <div className=" mx-auto grid max-md:grid-cols-1 grid-cols-3 xl:max-w-6xl max-lg:pl-6 px-8 md:mb-20 max-md:mt-10 gap-10">
          <div className="flex flex-col w-fit border border-gray-400">
            <Image src={images.image} alt="" className="w-full" />
            <div className="bg-[#F6F9FC] p-6">
              <span className="text-base font-medium text-gray-500">
                July 23, 2024
              </span>
              <p className="text-black font-semibold text-lg">
                Appota chính thức hợp tác cùng Học viện Công nghệ Bưu chính Viễn
                thông (PTIT) trong lĩnh vực đào tạo thiết kế và phát triển Game
              </p>
            </div>
          </div>
          <div className="flex flex-col w-fit border border-gray-400">
            <Image src={images.image} alt="" className="w-full" />
            <div className="bg-[#F6F9FC] p-6">
              <span className="text-base font-medium text-gray-500">
                July 23, 2024
              </span>
              <p className="text-black font-semibold text-lg">
                Appota chính thức hợp tác cùng Học viện Công nghệ Bưu chính Viễn
                thông (PTIT) trong lĩnh vực đào tạo thiết kế và phát triển Game
              </p>
            </div>
          </div>
          <div className="flex flex-col w-fit border border-gray-400">
            <Image src={images.image} alt="" className="w-full" />
            <div className="bg-[#F6F9FC] p-6">
              <span className="text-base font-medium text-gray-500">
                July 23, 2024
              </span>
              <p className="text-black font-semibold text-lg">
                Appota chính thức hợp tác cùng Học viện Công nghệ Bưu chính Viễn
                thông (PTIT) trong lĩnh vực đào tạo thiết kế và phát triển Game
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col xl:max-w-6xl max-lg:pl-6 px-8 md:mb-12 mt-16">
        <div className="items-start justify-start w-full">
          <div className="flex w-full flex-row mb-5">
            <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
            <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px uppercase">
              careers
            </span>
            <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="font-black text-5xl max-md:text-xl">
              Job Oppotunities
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-20 max-md:grid-cols-1 max-md:mt-10">
          {careerData.map((item) => (
            <div
              className="bg-[#F6F9FC] border flex flex-col p-4"
              key={item.id}
            >
              <span className="font-bold">{item.name}</span>
              <span className="my-1 flex-row flex items-center">
                <Image src={images.pin} alt="pin" className="w-4 h-4 mr-3" />
                Location: {item.location}
              </span>
              <span className="my-1 flex-row flex items-center">
                <Image
                  src={images.calendar}
                  alt="pin"
                  className="w-4 h-4 mr-3"
                />
                Deadline: {item.deadline}
              </span>
              <div className="flex flex-row w-full justify-between mt-2 items-center">
                <span className="uppercase text-[#0096DA] font-bold text-sm">
                  Công ty CP APPOTA
                </span>
                <button className="uppercase bg-[#0096DA] p-1 px-2 text-xs rounded-sm text-white">
                  Apply now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex flex-col xl:max-w-6xl max-lg:pl-6 px-8 md:mb-12 mt-16">
        <div className="items-start justify-start w-full">
          <div className="flex w-full flex-row mb-5">
            <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
            <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px uppercase">
              careers
            </span>
            <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="font-black text-5xl max-md:text-xl">
              Join the Appota Talent Network
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
