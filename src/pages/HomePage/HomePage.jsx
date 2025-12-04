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
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={style.hero_component}
      >
        <div className={style.left_side}>
          
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={style.upper_text_style}
          >
            Hello, I'm <span className={style.highlight}>Arman</span>
          </motion.p>

          <motion.p
           initial={{ opacity: 0, x: -40 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.2, delay: 0.3 }}
           className={style.bottom_text_style}
          >
          <span className={style.typewriter}>
          &lt;Software Engineer/&gt;
          </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className={style.detail_text}
          >
            <b>Fullstack</b> and <b>LangChain</b> developer with strong <b>DSA</b> skills,
            building <b>scalable</b> applications and intelligent <b>AI-powered</b> features.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
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
