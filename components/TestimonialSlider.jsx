import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/hmmm.jpg",
    name: "Meghali",
    position: "Friend",
    message:"Your coding finesse is astounding, effortlessly navigating complex code, inspiring with elegant solutions. Relentless pursuit of improvement shines in every",
  },
  {
    image: "/Hashim.jpeg",
    name: "Saifi",
    position: "Friend",
    message:"Your programming prowess is awe-inspiring, with a unique knack for problem-solving and keen attention to detail. Your contagious passion for coding is evident in your exceptional work.",
    },
  {
    image: "/Arpit.jpeg",
    name: "Arpit Aggarwal",
    position: "Friend",
    message:"Your exceptional programming skills tackle challenges with creativity, turning ideas into masterpieces. Your dedication sets high standards." 
   },
   {
    image: "/Pratham.jpeg",
    name: "Pratham",
    position: "Friend",
    message:"Your programming proficiency and ability to turn complex concepts into elegant solutions are remarkable. Passion and talent shine." 
   },
   

];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-1 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
