import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiCompilerexplorer } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          TbBrandNextjs,
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          BiLogoSpringBoot,
          SiMysql,
          FaWordpress,
          FaJava,
          TbBrandCpp,
          DiNodejsSmall,
          SiExpress
        ],
      },
      {
        title: "Programming",
        icons: [FaJava, TbBrandCpp, FaJs, FaPython],
      },
      {
        title: "Database",
        icons: [SiMysql, SiMongodb],
      },
      {
        title: "Library",
        icons: [FaReact],
      },
      {
        title: "IDE",
        icons: [SiJupyter, SiVisualstudiocode, BiLogoSpringBoot, SiCompilerexplorer],
      },
      {
        title: "Version Control Skills",
        icons: [FaGit, FaGithub],
      },
      {
        title: "Database",
        icons: [SiMysql, SiMongodb],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Hastag Hackathon",
        Description: "My team won the first prize in the Hastag Hackathon, held in Greater Noida.",
        stage: "2023",
        Link: "https://drive.google.com/file/d/1v9w1p5NRdtEqm1tb1Ee-TYAxYKpxgnW5/view?usp=sharing"
      },
      {
        title: "Samadhan Hackathon",
        Description: "My team clinched the top spot at the Samadhan Hackathon (WEB DEV) in Uttarakhand. Our name made it to the local paper the next day.",
        stage: "2022",
        Link: "https://drive.google.com/file/d/1wQDcTvm7rLoOkmlhFfM5d6UkD8xxne3U/view"
      },
      {
        title: "Awards",
        Description:"My awards and certificates reflect dedication, perseverance, and excellence, highlighting extensive hard work and unwavering commitment",
        stage: "All",
        Link: "https://drive.google.com/file/d/19vEeF5bjf-7Q_RN-lAewspHep6HLjG1o/view"
      }
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Hashtag",
        Description: "#EmpoweringInnovation: Leading the Technical Frontier of Our College Society 🚀",
        stage: "21..24",
      },
      {
        title: "Coding Blocks Company",
        Description: "Teaching Assistant (DSA) -Mentored CS and IT undergrads in programming, showcasing varied problem-solving methods with 90% accuracy.",
        stage: "22..23",
      },
      {
        title: "PepCoding Company",
        Description: "Teaching Assistant (DSA) -Mentored CS and IT undergrads in programming, showcasing varied problem-solving methods with 90% accuracy.",
        stage: "21..22",
        Link: "https://drive.google.com/file/d/19qBR_lvvOPqQLdNMXELUuOtoQGK2H0hg/view?usp=sharing"
      },
     
    ],
  },
];

// Import statements remain unchanged

const About = () => {
  const [index, setIndex] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className={`h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto ${!visible && 'fixed top-0 w-full z-50'}`}>
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className={`xl:flex absolute bottom-0 -left-[370px] ${!visible && 'hidden'}`}
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Experienced SDE proficient in Spring Boot, MySQL, Java, SQL, HTML, CSS, JavaScript, C, C++, React JS, NodeJs, Express, and more. Skilled in full-stack development, API integration, and DB management. Committed to seamless user experiences and project success.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                <strong>{item.title}</strong> 
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0" style={{ color: "#FF5722" }}>{item.title}</div>
                <div className="hidden md:flex">  </div>
                <div className="font-bold font-size: small mb-2 md:mb-0">{item.Description}</div>
                <div className="md:hidden mb-2">  </div> {/* Add spacing for mobile view */}
                <div>{item.stage}</div>

                <div className="flex flex-wrap justify-between md:justify-start gap-2"> {/* Updated flex and added flex-wrap */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2.5xl text-white mb-4 justify-center">
                      <Icon />
                    </div>
                  ))}
                </div>
                {/* Add Link */}
                <div>
                  {item.Link && (
                    <a
                      href={item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Click Me!
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="font-bold font-size: small mb-2 md:mb-0" style={{ color: "#FF5722" }}>Proficient in programming languages 🤓😜😜 and eager to learn and contribute effectively as an SDE!</p>
        
          
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;
