/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiDownloadSize32ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M7 10L12 15L17 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 15V3" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

TypeFiDownloadSize32ColorBlack.propTypes = {
  color: PropTypes.string,
};
