import React from "react";
import "./style.css";

const Module = ({label, src, highlight=false, onClick}) => {
  return (
    <div className={`vertical-nav-button`} onClick={onClick} highlight={highlight}>
      <a className="label" href={src}>{label}</a>
    </div>
  );
};
export default Module;