/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiCloudOffSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_4287)">
        <path
          d="M22.61 16.95C22.9322 16.1893 23.0609 15.3606 22.9845 14.5381C22.9082 13.7155 22.6293 12.9246 22.1726 12.2362C21.716 11.5478 21.0959 10.9832 20.3677 10.593C19.6396 10.2027 18.8261 9.99902 18 10H16.74C16.3318 8.39249 15.4341 6.95158 14.171 5.87666C12.908 4.80173 11.3421 4.14593 9.68999 4M4.99999 5C3.43807 5.86364 2.2098 7.22478 1.51058 8.86691C0.811359 10.509 0.681344 12.3378 1.14122 14.0623C1.60109 15.7869 2.62444 17.3081 4.04847 18.384C5.47251 19.4599 7.21543 20.0288 8.99999 20H18C18.5798 19.9993 19.155 19.8978 19.7 19.7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path d="M1 1L23 23" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <defs>
        <clipPath id="clip0_143_4287">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiCloudOffSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
