/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiToolSize16ColorWhite = ({ color = "white", className }) => {
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
        d="M9.79999 4.2C9.67784 4.32462 9.60942 4.49216 9.60942 4.66666C9.60942 4.84117 9.67784 5.00871 9.79999 5.13333L10.8667 6.2C10.9913 6.32215 11.1588 6.39057 11.3333 6.39057C11.5078 6.39057 11.6754 6.32215 11.8 6.2L14.3133 3.68666C14.6486 4.42746 14.7501 5.25282 14.6043 6.05276C14.4585 6.8527 14.0725 7.58923 13.4975 8.16418C12.9226 8.73914 12.186 9.12522 11.3861 9.27097C10.5862 9.41672 9.76079 9.31522 9.01999 8.98L4.41333 13.5867C4.14811 13.8519 3.7884 14.0009 3.41333 14.0009C3.03826 14.0009 2.67854 13.8519 2.41333 13.5867C2.14811 13.3214 1.99911 12.9617 1.99911 12.5867C1.99911 12.2116 2.14811 11.8519 2.41333 11.5867L7.01999 6.98C6.68477 6.2392 6.58327 5.41384 6.72902 4.6139C6.87477 3.81396 7.26085 3.07743 7.83581 2.50248C8.41076 1.92752 9.14729 1.54144 9.94723 1.39569C10.7472 1.24994 11.5725 1.35144 12.3133 1.68666L9.80666 4.19333L9.79999 4.2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiToolSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
