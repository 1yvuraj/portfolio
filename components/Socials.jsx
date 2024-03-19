import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";
import { TbBrandLeetcode } from "react-icons/tb";
import { GrLinkedin } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa6";

export const socialData = [
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1AN9Hv1oo_GJfA7heKhhR7yJ5MI8T11GS/view?usp=sharing",
    Icon: FaRegNewspaper,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/yuvrajaggarwal10/",
    Icon: TbBrandLeetcode,
  },
  {
    name: "Github",
    link: "https://github.com/1yvuraj",
    Icon: RiGithubLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/yuvraj-aggarwal-486571219/",
    Icon: GrLinkedin,
  },
];

const Socials = () => {
  const [showSocials, setShowSocials] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowSocials(scrollTop === 0);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-5 right-5 z-50 transition-opacity duration-300 ${showSocials ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-col gap-3">
        {socialData.map((social, i) => (
          <Link
            key={i}
            title={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
            className={`text-xl hover:text-accent transition-colors duration-300`}
          >
            <social.Icon aria-hidden />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
