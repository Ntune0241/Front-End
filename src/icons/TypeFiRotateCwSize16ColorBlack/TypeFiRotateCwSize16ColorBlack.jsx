/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiRotateCwSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_10975)">
        <path
          d="M15.3333 2.66666V6.66666H11.3333"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M13.66 9.99999C13.2266 11.2266 12.4064 12.2791 11.3228 12.999C10.2392 13.7188 8.95097 14.067 7.65228 13.991C6.35359 13.9151 5.11477 13.4191 4.1225 12.5778C3.13024 11.7365 2.43828 10.5955 2.15091 9.32669C1.86354 8.05792 1.99632 6.73011 2.52924 5.54337C3.06217 4.35662 3.96636 3.37523 5.10557 2.74708C6.24478 2.11893 7.55729 1.87806 8.84531 2.06075C10.1333 2.24345 11.3271 2.83981 12.2467 3.75999L15.3333 6.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_10975">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiRotateCwSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
