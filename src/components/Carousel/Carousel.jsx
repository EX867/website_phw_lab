/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Carousel = ({
  textContent = false,
  context,
  layout,
  className,
  hasItem = true,
  hasItemLast = true,
}) => {
  return (
    <div className={`carousel ${context} ${layout} ${className}`}>
      {context === "tablet" && (
        <>
          <div className="item" />

          <div className="div" />
        </>
      )}

      {(layout === "center-aligned-hero" ||
        layout === "multi-browse" ||
        layout === "uncontained" ||
        (context === "tablet" && layout === "hero")) && (
        <div className="item-2" />
      )}

      {context === "mobile" &&
        ["center-aligned-hero", "multi-browse", "uncontained"].includes(
          layout,
        ) && <div className="item-3" />}

      {(layout === "center-aligned-hero" ||
        layout === "multi-browse" ||
        layout === "uncontained" ||
        (context === "tablet" && layout === "hero")) && (
        <div className="item-last" />
      )}

      {context === "mobile" && layout === "hero" && (
        <>
          <>{hasItem && <div className="item-4" />}</>

          <>{hasItemLast && <div className="item-last-2" />}</>
        </>
      )}
    </div>
  );
};
