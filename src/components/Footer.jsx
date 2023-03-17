import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <div className="container  footer-container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="FooterLogo" />
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sunt
            praesentium nesciunt amet maxime quod, ad iure? Eos, suscipit
            asperiores!
          </p>
          <div className="footer-socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="about">About</Link>
          <Link to="">Plans</Link>
          <Link to="">Trainers</Link>
          <Link to="">Gallery</Link>

          <Link to="contact">Contact</Link>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="about">About</Link>
          <Link to="">Plans</Link>
          <Link to="">Trainers</Link>
          <Link to="">Gallery</Link>

          <Link to="contact">Contact</Link>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </article>
      </div>
      <div className="footer-copyright">
        <small>2023 CELEBİ TUTORİALS &copy; EVERYTHING WILL BE GOOD </small>
      </div>
    </footer>
  );
};

export default Footer;
