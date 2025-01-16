import React from "react";
import "./style.css";

const ContentButton = ({label, href}) => {
  return (
    <button className="content-button">
        <a href={href}>{label}</a>
    </button>
  );
};

export default ContentButton;