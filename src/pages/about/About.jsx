import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";

import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        doloribus? Similique consequuntur necessitatibus distinctio tenetur vel.
        Iure itaque veritatis veniam.
      </Header>

      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-section-image">
            <img src={StoryImage} alt="section_Story_Image" />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              eaque itaque. Ab eum architecto fugit ullam earum non numquam?
              Laborum quam nisi beatae possimus autem minima perferendis dicta
              saepe vel distinctio repellat praesentium blanditiis dolore, a
              libero odio eaque ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nam ab consectetur voluptate ipsa iste iusto doloribus odio! Vero,
              fuga libero mollitia repellendus ipsa qui.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nihil natus mollitia nostrum doloribus!
            </p>
          </div>
        </div>
      </section>
      <section className="about-vision">
        <div className="container about-vision-container">
          <div className="about-section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              eaque itaque. Ab eum architecto fugit ullam earum non numquam?
              Laborum quam nisi beatae possimus autem minima perferendis dicta
              saepe vel distinctio repellat praesentium blanditiis dolore, a
              libero odio eaque ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nam ab consectetur voluptate ipsa iste iusto doloribus odio! Vero,
              fuga libero mollitia repellendus ipsa qui.
            </p>
          </div>
          <div className="about-section-image">
            <img src={VisionImage} alt="section_vision_image" />
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="container about-mission-container">
          <div className="about-section-image">
            <img src={MissionImage} alt="section_mission_image" />
          </div>
          <div className="about-section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              eaque itaque. Ab eum architecto fugit ullam earum non numquam?
              Laborum quam nisi beatae possimus autem minima perferendis dicta
              saepe vel distinctio repellat praesentium blanditiis dolore, a
              libero odio eaque ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              nam ab consectetur voluptate ipsa iste iusto doloribus odio! Vero,
              fuga libero mollitia repellendus ipsa qui.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nihil natus mollitia nostrum doloribus!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
