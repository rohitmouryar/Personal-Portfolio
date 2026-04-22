import { motion } from "framer-motion";
import "../styles/projectCard.css";

const ProjectCard = ({ title, desc, link }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>

      <a href={link} target="_blank">View Project</a>
    </motion.div>
  );
};

export default ProjectCard;