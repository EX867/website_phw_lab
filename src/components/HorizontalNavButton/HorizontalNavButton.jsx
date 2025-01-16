import React from "react";
import "./style.css";

const HorizontalNavButton = ({label = "Text", src, className}) => {
  return (
    <div className={`horizontal-nav-button ${className}`}>
      <a className="label" href={src}>{label}</a>
    </div>
  );
};

export default HorizontalNavButton;
