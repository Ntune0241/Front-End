/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiFacebookSize16ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.33334H9.99999C9.11593 1.33334 8.26809 1.68453 7.64297 2.30965C7.01785 2.93478 6.66666 3.78262 6.66666 4.66668V6.66668H4.66666V9.33334H6.66666V14.6667H9.33332V9.33334H11.3333L12 6.66668H9.33332V4.66668C9.33332 4.48987 9.40356 4.3203 9.52859 4.19527C9.65361 4.07025 9.82318 4.00001 9.99999 4.00001H12V1.33334Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiFacebookSize16ColorBlack.propTypes = {
  color: PropTypes.string,
};
