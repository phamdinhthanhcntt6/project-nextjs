"use client";

import { images } from "@/assets/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Banner = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className=" w-full -z-10 max-lg:h-1/2">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image
              src={images.slide1}
              alt=""
              className="flex min-w-0 w-full h-3/4"
            />
          </div>
          <div className="embla__slide">
            <Image
              src={images.slide2}
              alt=""
              className="flex min-w-0 w-full h-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
