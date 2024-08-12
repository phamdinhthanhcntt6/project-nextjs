import { images } from "@/assets/image";
import Image from "next/image";

const Content = () => {
  return (
    <div className="mb-96">
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
          <span className="text-2xl italic font-light text-gray-600 max-md:not-italic max-md:text-base">
            Appota Group is the pioneering company in providing technology
            solutions and digital entertainment content in Vietnam. With the
            mission of using life-enhancing technology, we aim to build a
            complete entertainment ecosystem, bringing valuable products and
            services to businesses and users.
          </span>
          <button className="text-left mt-4 max-md:mb-20">
            <span className="uppercase text-gray-500 font-semibold">
              Detail &gt;
            </span>
          </button>
        </div>
      </div>

      <div className="bg-gray-200 max-md:pt-20 items-center justify-between mx-auto max-h-96 pt-10 flex px-10 flex-col">
        <div className="mx-auto flex xl:max-w-7xl justify-between w-full md:px-40">
          <div className="flex flex-col text-center max-md:mx-1">
            <span className="text-3xl max-md:text-xl font-bold uppercase">
              50M+
            </span>
            <span className="font-bold text-base uppercase max-md:text-sm max-md:font-light">
              Users
            </span>
          </div>
          <div className="flex flex-col text-center max-md:mx-1">
            <span className="text-3xl max-md:text-xl font-bold uppercase">
              50M+
            </span>
            <span className="font-bold text-base max-md:text-sm uppercase max-md:font-light">
              Users
            </span>
          </div>
          <div className="flex flex-col text-center max-md:mx-1">
            <span className="text-3xl max-md:text-xl font-bold uppercase">
              50M+
            </span>
            <span className="font-bold text-base max-md:text-sm uppercase max-md:font-light">
              Users
            </span>
          </div>
        </div>
        <div className="mt-auto flex justify-between gap-px max-md:flex-col max-md:mt-10 xl:max-w-7xl max-lg:pl-6 px-8 ">
          <div className="flex flex-col text-center">
            <Image
              src={images.slide1}
              alt=""
              className="md:mt-10 h-96 max-md:h-48"
            />
          </div>
          <div className="flex flex-col text-center">
            <Image
              src={images.slide1}
              alt=""
              className="md:mt-10 h-96 max-md:h-48"
            />
          </div>
          <div className="flex flex-col text-center">
            <Image
              src={images.slide1}
              alt=""
              className="md:mt-10 h-96 max-md:h-48"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col xl:max-w-7xl max-lg:pl-6 px-8 md:mb-20 max-md:mt-96 mt-60">
        <div className="items-start justify-start w-full">
          <div className="flex w-full flex-row mb-5">
            <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
            <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px">
              SERVICE
            </span>
            <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="font-black text-6xl max-md:text-xl">
              Main services
            </span>
            <span className="uppercase text-gray-500 text-right font-semibold">
              Detail &gt;
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#008EE4] -mt-28">
        <div className="w-full bg-[#008EE4] -mt-28">
          <div className="mx-auto flex flex-col xl:flex-row xl:max-w-7xl max-lg:pl-6 px-8 md:mb-20 mt-44 justify-between">
            <div className="flex flex-col w-full xl:w-max justify-between py-28">
              <button className="text-3xl font-bold hover:text-white text-gray-300 hover:border-l-[6px] pl-3 hover:translate-x-6 transition duration-600 text-left">
                B2B2C Services
              </button>
              <button className="text-3xl font-bold hover:text-white text-gray-300 hover:border-l-[6px] pl-3 hover:translate-x-6 transition duration-600 text-left">
                B2B Services
              </button>
              <button className="text-3xl font-bold hover:text-white text-gray-300 hover:border-l-[6px] pl-3 hover:translate-x-6 transition duration-600 text-left">
                Development
              </button>
              <button className="text-3xl font-bold hover:text-white text-gray-300 hover:border-l-[6px] pl-3 hover:translate-x-6 transition duration-600 text-left">
                Market research
              </button>
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 w-full xl:w-max justify-between">
              <Image src={images.image} alt="" className="w-full xl:w-96" />
              <Image src={images.image} alt="" className="w-full xl:w-96" />
              <Image src={images.image} alt="" className="w-full xl:w-96" />
              <Image src={images.image} alt="" className="w-full xl:w-96" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F6F9FC] py-16">
        <div className="mx-auto flex flex-col xl:max-w-7xl max-lg:pl-6 px-8 md:mb-8">
          <div className="items-start justify-start w-full">
            <div className="flex w-full flex-row mb-5">
              <div className="border-2 border-[#008EE4] w-1/12 h-px max-lg:hidden" />
              <span className="-mt-2 mx-2 flex flex-row max-lg:text-xs text-base w-24 max-lg:-mt-1.5 text-[#008EE4] font-bold max-md:-ml-px">
                MEDIA
              </span>
              <div className="border-2 border-[#008EE4] w-full h-1 lg:hidden" />
            </div>
            <div className="flex flex-row justify-between w-full">
              <span className="font-black text-6xl max-md:text-xl">News</span>
              <span className="uppercase text-gray-500 text-right font-semibold">
                See more &gt;
              </span>
            </div>
          </div>
        </div>

        <div className=" mx-auto grid max-md:grid-cols-1 grid-cols-3 xl:max-w-7xl max-lg:pl-6 px-8 md:mb-20 max-md:mt-10 gap-10">
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

      <div className="mx-auto flex flex-col xl:max-w-7xl max-lg:pl-6 px-8 text-center pt-6 w-full">
        <span className="text-black text-5xl max-md:text-3xl font-black max-md:text-left">
          Partners
        </span>
        <div className="overflow-x-auto flex flex-row text-center gap-8 mt-5 hide-scrollbar w-full justify-center">
          <span className="active:border-b-[3px] active:text-[#008EE4] font-semibold border-[#008EE4] pb-1">
            Game Publishing
          </span>
          <span className="active:border-b-[3px] active:text-[#008EE4] font-semibold border-[#008EE4] pb-1">
            Game Publishing
          </span>
          <span className="active:border-b-[3px] active:text-[#008EE4] font-semibold border-[#008EE4] pb-1">
            Game Publishing
          </span>
          <span className="active:border-b-[3px] active:text-[#008EE4] font-semibold border-[#008EE4] pb-1">
            Game Publishing
          </span>
          <span className="active:border-b-[3px] active:text-[#008EE4] font-semibold border-[#008EE4] pb-1">
            Game Publishing
          </span>
        </div>
        <div className="flex flex-row text-center gap-1 mt-5 hide-scrollbar w-full justify-center max-md:grid max-md:grid-cols-2">
          <Image
            src={images.napas}
            alt=""
            className="border rounded-md scale-75"
          />
          <Image
            src={images.napas}
            alt=""
            className="border rounded-md scale-75"
          />
          <Image
            src={images.napas}
            alt=""
            className="border rounded-md scale-75"
          />
          <Image
            src={images.napas}
            alt=""
            className="border rounded-md scale-75"
          />
          <Image
            src={images.napas}
            alt=""
            className="border rounded-md scale-75"
          />
        </div>
      </div>
    </div>
  );
};
export default Content;
