import React from "react";
import "./style.css";

const HeaderNavButton = ({label = "Link", src, className}) => {
  return (
    <div className={`header-nav-button ${className}`}>
      <a className="label" href={src}>{label}</a>
    </div>
  );
};

export default HeaderNavButton;