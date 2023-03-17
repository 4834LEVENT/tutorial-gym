import React from "react";

const Header = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-bg">
          <img src={image} alt="header_bg_img" />
        </div>
        <div className="header-content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
