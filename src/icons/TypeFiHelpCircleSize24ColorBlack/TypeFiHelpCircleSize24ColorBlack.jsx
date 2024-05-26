/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiHelpCircleSize24ColorBlack = ({ color = "black", className }) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M12 17H12.01" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path
        d="M9.09 8.99999C9.3251 8.33166 9.78915 7.7681 10.4 7.40912C11.0108 7.05015 11.7289 6.91893 12.4272 7.0387C13.1255 7.15848 13.7588 7.52151 14.2151 8.06352C14.6713 8.60552 14.9211 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiHelpCircleSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
