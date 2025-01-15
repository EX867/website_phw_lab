import React from "react";
import "./style.css";

const Module = ({label, src}) => {
  return (
    <div className={`vertical-nav-button`}>
      <a className="label" href={src}>{label}</a>
    </div>
  );
};
export default Module;