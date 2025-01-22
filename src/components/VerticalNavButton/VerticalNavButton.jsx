import React from "react";
import "./style.css";

const Module = ({label, src, onClick}) => {
  return (
    <div className={`vertical-nav-button`} onClick={onClick}>
      <a className="label" href={src}>{label}</a>
    </div>
  );
};
export default Module;