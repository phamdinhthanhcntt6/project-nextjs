"use client";
import { images } from "@/assets/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-3/4 ${isHidden ? "hidden" : ""}`}>
      <div className="w-full bg-transparent z-10 fixed">
        {/*fixed*/}
        <div className="mx-auto flex xl:max-w-7xl items-center justify-between p-6 px-8">
          <div className="lg:hidden">
            <a>
              <Image
                src={images.menu}
                alt=""
                className="w-6 h-6 max-lg:ml-12 max-md:ml-0"
              />
            </a>
          </div>
          <a href="/" className="max-lg:w-24 max-lg:h-14 max-lg:mx-auto">
            <Image
              src={images.logo}
              alt="Logo"
              className="w-44 h-24 max-lg:w-24 max-lg:h-14 "
            />
          </a>
          <div className="max-lg:hidden">
            <a
              href="/about"
              className="text-base font-bold leading-6 text-white mx-4"
            >
              About us
            </a>
            <a
              href="#"
              className="text-base font-bold leading-6 text-white mx-4"
            >
              Service
            </a>
            <a
              href="#"
              className="text-base font-bold leading-6 text-white mx-4"
            >
              Report
            </a>
            <a
              href="#"
              className="text-base font-bold leading-6 text-white mx-4"
            >
              Media
            </a>
            <a
              href="#"
              className="text-base font-bold leading-6 text-white mx-4"
            >
              Carreers
            </a>
            <a
              href="#"
              className="text-base font-bold leading-6 text-white mx-4"
            >
              Contact
            </a>
          </div>
          <div className="inline-block max-lg:hidden">
            <div className="text-base font-bold leading-6 text-white">EN</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
