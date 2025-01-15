import React from "react";

const IconX = ({ color = "#1E1E1E", className }) => {
  return (
    <svg
      className={`size-16-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 4L4 12M4 4L12 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
};
export default IconX;