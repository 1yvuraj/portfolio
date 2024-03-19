import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex flex-col lg:flex-row items-center justify-center">
      <Circles />
      <div className="container mx-auto flex flex-col lg:flex-row items-center mt-12 lg:mt-0">
        <div className="text-center lg:text-left lg:w-[30vw] lg:mr-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 lg:mt-12"
          >
            My work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
          >
            My work as an SDE stands out for its fusion of innovative coding practices, intricate software architecture, and seamless project management, ensuring solutions that transcend expectations.
          </motion.p>
        </div>

        {/* slider */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full lg:max-w-[65%] lg:mb-0"
        >
          <WorkSlider />
        </motion.div>
      </div>
      <Bulb className="lg:hidden mt-4" /> {/* Adjust the margin-top as needed */}
    </div>
  );
};

export default Work;
