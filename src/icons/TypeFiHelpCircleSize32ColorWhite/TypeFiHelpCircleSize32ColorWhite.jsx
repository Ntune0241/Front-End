/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiHelpCircleSize32ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 58.6666C46.7276 58.6666 58.6666 46.7275 58.6666 31.9999C58.6666 17.2723 46.7276 5.33325 32 5.33325C17.2724 5.33325 5.33331 17.2723 5.33331 31.9999C5.33331 46.7275 17.2724 58.6666 32 58.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M32 45.3333H32.0267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M24.24 24C24.8669 22.2177 26.1044 20.7149 27.7332 19.7577C29.362 18.8004 31.277 18.4505 33.1391 18.7699C35.0012 19.0893 36.6901 20.0574 37.9068 21.5027C39.1235 22.948 39.7894 24.7774 39.7866 26.6666C39.7866 32 31.7866 34.6666 31.7866 34.6666"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiHelpCircleSize32ColorWhite.propTypes = {
  color: PropTypes.string,
};
