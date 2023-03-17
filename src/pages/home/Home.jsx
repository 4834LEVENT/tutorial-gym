import FQAs from "../../components/FQAs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonial from "../../components/Testimonial";
import Values from "../../components/Values";
import "./home.css";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FQAs />
      <Testimonial />
    </>
  );
};

export default Home;
