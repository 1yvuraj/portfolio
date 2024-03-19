import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/Npm.jpeg",
          link: "https://www.npmjs.com/package/baniya-yuvraj-currency-converter?activeTab=code",
        },
        {
          title: "title",
          path: "/well.jpg",
          link: "https://drive.google.com/file/d/1r5e49gZnjAZwPWh_pOTDhjIonSeWThgN/view",
        },
        {
          title: "title",
          path: "/YuvrajShell.jpg",
          link: "https://shellpotfolio.netlify.app/",
        },
        {
          title: "title",
          path: "/Hashtag.jpg",
          link: "https://hashtag-jemtec.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/brain.jpg",
          link: "https://braintumor-detection.onrender.com/",
        },
        {
          title: "title",
          path: "/Dashboard.jpg",
          
          link: "https://kamona-wd.github.io/kwd-dashboard/",
        },
        {
          title: "title",
          path: "/Hub.jpg",
          link: "https://usabilityhub-websiteclone.netlify.app/",
        },
        
        {
          title: "title",
          path: "/Estate.jpg",
          link: "https://aggarwal-estate.onrender.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/Flapy.jpg",
          link: "https://flappybacon.netlify.app/",
         
        },
        {
          title: "title",
          path: "/movie.jpg",
          link: "https://moviestationapp.netlify.app/",
        },
        {
          title: "title",
          path: "/Emi.jpg",
          link: "https://usabilityhub-websiteclone.netlify.app/",
        },
        {
          title: "title",
          path: "/Whack.jpg",
          link: "https://635976debc254b0d50b693d9--shimmering-rugelach-a2f50b.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/yoga.jpg",
          link: "https://github.com/1yvuraj/Flexmoney?tab=readme-ov-file",
        },
        {
          title: "title",
          path: "/food.jpg",
          link: "https://65f8842c3a347103afc965dc--scintillating-melba-999d4a.netlify.app/",
        },
        {
          title: "title",
          path: "/ContextApi.jpg",
          link: "https://contextapitodos.netlify.app/",
        },
        {
          title: "title",
          path: "/management.jpg",
          link: "https://stirring-blancmange-c68aa9.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/ContextApiBest.jpg",
          link: "https://contextapitoggle.netlify.app/",
        },
        {
          title: "title",
          path: "/open.jpg",
          link: "https://openboardapp.netlify.app/",
        },
        {
          title: "title",
          path: "/Password.jpg",
          link: "https://passmakers.netlify.app/",
        },
        {
          title: "title",
          path: "/Tech.jpg",
          link: "https://techystar-react.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/Logic.jpg",
          link: "https://github.com/1yvuraj/LogicSquare",
          
        },
        {
          title: "title",
          path: "/bager.jpg",
          link: "https://www.figma.com/proto/VLZG6QhsRs7SRpFGQhKbkv/SIMMI?node-id=4-13&starting-point-node-id=4%3A13&t=UxHxOmjOjKynTH4o-1/",
        },
        {
          title: "title",
          path: "/shopy.jpg",
          link: "https://github.com/1yvuraj/MADE2AUTOMATE?tab=readme-ov-file/",
        },
        {
          title: "title",
          path: "/Whack.jpg",
          link: "https://635976debc254b0d50b693d9--shimmering-rugelach-a2f50b.netlify.app/",
        },
      ],
    },
   
    
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={250}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
