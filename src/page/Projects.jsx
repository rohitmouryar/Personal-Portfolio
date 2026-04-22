import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Restaurant Website",
      desc: "Food ordering & table booking system",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal animated portfolio",
      link: "#",
    },
    {
      title: "Employee Management System",
      desc: "Intern + HR workflow system",
      link: "#",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="projects">
        
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Container Animation */}
        <motion.div
          className="project-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3, // cards ek-ek karke ayenge 🔥
              },
            },
          }}
        >
          {projectData.map((project, index) => (
            
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>

          ))}
        </motion.div>

      </div>
    </>
  );
};

export default Projects;