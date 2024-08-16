import { images } from "@/assets/image";
import Image from "next/image";
import { mediaData, mediaTypeData } from "./data";

const Content = () => {
  return (
    <div>
      <div className="w-full bg-[#F6F9FC] py-16">
        <div className="mx-auto flex flex-col xl:max-w-6xl max-lg:pl-6 px-8 md:mb-8">
          <div className="items-start justify-start w-full">
            <div className="flex w-full flex-row mb-5">
              <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
              <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px">
                MEDIA
              </span>
              <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
            </div>
            <div className="flex flex-row justify-between w-full">
              <span className="font-black text-5xl max-md:text-xl">News</span>
              <span className="text-sm uppercase text-gray-500 text-right font-semibold">
                See more &gt;
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

      <div className="mx-auto flex flex-col xl:max-w-6xl max-lg:pl-6 px-8 md:mb-8 mt-2">
        <div className="items-start justify-start w-full">
          <div className="flex w-full flex-row mb-5">
            <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
            <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px">
              Media
            </span>
            <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="font-black text-5xl max-md:text-xl">Library</span>
            <span className="text-sm uppercase text-gray-500 text-right font-semibold">
              See more &gt;
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col xl:max-w-6xl max-lg:pl-6 px-8 md:mb-8 mt-2">
        <div className="flex flex-row gap-4">
          {mediaTypeData.map((item) => (
            <button
              className="font-bold text-lg px-6 rounded-sm hover:rounded-full hover:bg-[#008EE4] hover:text-white hover:duration-5000"
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid grid-cols-3 xl:max-w-6xl max-lg:pl-6 px-8 md:mb-8 mt-2 gap-10">
        {mediaData.map((item) => (
          <div className="flex flex-col">
            <Image src={item.src} alt="" className="border" />
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col mt-2">
                <span className="font-semibold">{item.name}</span>
                <span className="text-sm">
                  Type:{" "}
                  <span>
                    {item.types.map((item) => (
                      <span className="text-[#008EE4] text-sm">
                        {item.name},
                      </span>
                    ))}
                  </span>
                </span>
              </div>
              <Image
                src={images.download}
                alt=""
                className="border-[#008EE4] border-2 rounded-full p-1 font-bold "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Content;
