import Header from "../../components/Header";

import HeaderImage from "../../images/header_bg_5.jpg";
// import { MdEmail } from "react-icons/md";
import { BsInstagram, BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";
import { trainers } from "../../data";
import "./traniers.css";

const Traniers = () => {
  return (
    <div>
      <>
        <Header title={"Our Traniers"} image={HeaderImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          corporis veniam, optio error cupiditate delectus accusamus
        </Header>
        <scetion className="trainers">
          <div className="container trainers-container">
            {trainers.map(({ id, image, name, job, socials }) => {
              return (
                <Trainer
                  key={id}
                  image={image}
                  name={name}
                  job={job}
                  socials={[
                    { icon: <BsInstagram />, link: socials[0] },
                    { icon: <BsMessenger />, link: socials[1] },
                    { icon: <IoLogoWhatsapp />, link: socials[2] },
                    { icon: <FaLinkedinIn />, link: socials[3] },
                  ]}
                ></Trainer>
              );
            })}
          </div>
        </scetion>
      </>
    </div>
  );
};

export default Traniers;
