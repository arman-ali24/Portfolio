import Navbar from "../../Components/Navbar/Navbar.jsx";
import style from "./HomePage.module.css";
import HeroImage from "../../assets/armanPort.jpeg";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        exit={{ opacity: 0 }}
        className={style.hero_component}
      >
        <div className={style.left_side}>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.upper_text_style}
          >
            Hello I'm Arman
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "3.5",
              delay: 0.5,
            }}
            className={style.bottom_text_style}
          >
            &lt;Software Engineer/&gt;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: "40",
              duration: "1",
              delay: "1.5",
            }}
            className={style.detail_text}
          >
            Pre-final year Computer Science student skilled in DSA,
            Full Stack Development, and AI integration, Experienced in building
            scalable architectures and integrating LangChain-based intelligent features.
            Seeking opportunities to grow as a software engineer.

          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: "-7vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            transition={{ delay: 2.5, stiffness: 40, duration: 0.7 }}
            className={style.download_btn}
          >
            <a
              className="link_under_button"
              target="_blank"
              href="https://drive.google.com/file/d/1ceSDB0Eul7XyZgRKhBKsVU24iEvAYfMV/view?usp=drive_link"
            >
              Download CV
            </a>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, stiffness: 40, duration: 1 }}
          className={style.right_section}
        >
          <div className={style.img_section}>
            <img src={HeroImage} alt="Arman" className={style.hero_image} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
