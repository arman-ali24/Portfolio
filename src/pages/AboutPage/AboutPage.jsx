import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2023"}
                  timeline_title={"Senior Secondary (I.Sc)"}
                  location={"High School Ratanpura, Gopalganj"}
                  details={
                    "Completed my High School Degree from State Board with CGPA of 8.70"
                  }
                />
              </div>
              
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2023 - 2027"}
                  timeline_title={"B.Tech in Computer Science"}
                  location={"IES College of Technology, Bhopal"}
                  details={
                    "Currently persuing my Bachelors Degree in Computer Science with a CGPA of 7.50"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div>
            </div>
          </div>


         { /* <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"0000 - 0000"}
                  timeline_title={"_____"}
                  location={"______"}
                  details={
                    "____________. "
                  }
                />
              </div>
              
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"0000 - 0000"}
                  timeline_title={"______"}
                  location={"______"}
                  details={
                    "_______"
                  }
                />
              </div>
            </div>
          </div> */ }
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
