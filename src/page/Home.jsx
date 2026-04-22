import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Rohit 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
    </>
  );
};

export default Home;