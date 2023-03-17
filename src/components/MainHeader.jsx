import { Link } from "react-router-dom";
import image from "../images/main_header.png";
const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="container   main-header-container">
        <div className="main-header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            enim sequi voluptate deserunt, tenetur rem nulla quibusdam illum
            totam esse!
          </p>
          <Link to="plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main-header-right">
          <div className="main-header-circle"></div>
          <div className="main-header-image">
            <img src={image} alt="main_header_img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
