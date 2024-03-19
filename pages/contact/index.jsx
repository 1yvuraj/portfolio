import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 flex items-center justify-center">
      <div className="max-w-[700px] w-full px-6">
        {/* text & details */}
        <div className="text-center">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12"
          >
            Get in Touch
          </motion.h2>

          {/* details */}
          <div className="flex flex-col gap-6 mx-auto">
            <p className="text-lg">
              <span style={{ color: "#FF5722" }}>Name:</span> Yuvraj Aggarwal
            </p>
            <p className="text-lg">
              <span style={{ color: "#FF5722" }}>Email:</span> jobupdateformyself@gmail.com , yuvrajaggarwal10@gmail.com
            </p>
            <p className="text-lg">
              <span style={{ color: "#FF5722" }}>LinkedIn:</span> <a href="https://www.linkedin.com/in/yuvraj-aggarwal-486571219/" target="_blank" rel="noopener noreferrer">Yuvraj Aggarwal</a>
            </p>
            <p className="text-lg">
              <span style={{ color: "#FF5722" }}>GitHub:</span> <a href="https://github.com/1yvuraj" target="_blank" rel="noopener noreferrer">Yuvraj Aggarwal</a>
            </p>
            <p className="text-lg">
              <span style={{ color: "#FF5722" }}>Resume:</span> <a href="https://drive.google.com/file/d/1vQqFhyKKUjO44ljyxjWwDmphpp_GHVt2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </p>
            <p className="text-lg">
              <span style={{ color: "#FF5722" }}>Phone:</span> 9266885819
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
