import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I'm Rohit Maurya, a Full Stack Developer skilled in React,
          Node.js, MongoDB. I build scalable and modern web applications.
        </motion.p>

        <div className="skills">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;