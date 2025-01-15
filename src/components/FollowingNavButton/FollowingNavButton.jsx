import React from "react";
import "./style.css";

const Module = ({label, src}) => {
  return (
    <div className={`following-nav-button`} highlight="false">
      <a className="label" href={src} rel="no-refresh" tabIndex="0">{label}</a>
    </div>
  );
};
export default Module;