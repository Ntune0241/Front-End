/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiToolSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M14.7 6.30001C14.5168 6.48694 14.4142 6.73826 14.4142 7.00001C14.4142 7.26176 14.5168 7.51308 14.7 7.70001L16.3 9.30001C16.4869 9.48324 16.7383 9.58587 17 9.58587C17.2618 9.58587 17.5131 9.48324 17.7 9.30001L21.47 5.53001C21.9728 6.6412 22.1251 7.87924 21.9065 9.07916C21.6878 10.2791 21.1087 11.3839 20.2463 12.2463C19.3839 13.1087 18.2791 13.6878 17.0792 13.9065C15.8792 14.1251 14.6412 13.9728 13.53 13.47L6.62001 20.38C6.22218 20.7778 5.68262 21.0013 5.12001 21.0013C4.5574 21.0013 4.01783 20.7778 3.62001 20.38C3.22218 19.9822 2.99869 19.4426 2.99869 18.88C2.99869 18.3174 3.22218 17.7778 3.62001 17.38L10.53 10.47C10.0272 9.35882 9.87492 8.12078 10.0936 6.92087C10.3122 5.72095 10.8913 4.61617 11.7537 3.75373C12.6162 2.8913 13.721 2.31218 14.9209 2.09355C16.1208 1.87493 17.3588 2.02718 18.47 2.53001L14.71 6.29001L14.7 6.30001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiToolSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};