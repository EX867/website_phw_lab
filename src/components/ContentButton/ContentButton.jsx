import React from "react";
import "./style.css";

export const ContentButton = ({label, href}) => {
  return (
    <div className={`content-button`}>
        <a href={href}>{label}</a>
    </div>
  );
};