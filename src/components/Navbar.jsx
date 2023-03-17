import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";

import Logo from "../images/logo.png";

import { FaBars } from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";

import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [clickIcon, setClickIcon] = useState(false);

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav__logo" onClick={() => setClickIcon(false)} />
        </Link>
        <ul className={`navbar__links ${clickIcon ? "show-nav" : "hide-nav"}`}>
          {links.map(({ name, path }, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? `active-nav` : ``)}
                  onClick={() => setClickIcon((previous) => !previous)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__btn-toggle"
          onClick={() => setClickIcon((previous) => !previous)}
        >
          {clickIcon ? <VscChromeClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
