/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiPhoneMissedSize16ColorWhite = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_9986)">
        <path
          d="M15.3333 0.666656L11.3333 4.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M11.3333 0.666656L15.3333 4.66666"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6495 14.555 13.8196C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.608 13.3983 14.6301 13.2133 14.6133C11.1619 14.3904 9.19134 13.6894 7.46001 12.5667C5.84923 11.5431 4.48356 10.1775 3.46001 8.56668C2.33333 6.82748 1.63217 4.84734 1.41334 2.78668C1.39668 2.60233 1.41859 2.41652 1.47767 2.2411C1.53676 2.06567 1.63172 1.90447 1.75652 1.76776C1.88131 1.63105 2.03321 1.52182 2.20253 1.44703C2.37186 1.37224 2.5549 1.33352 2.74001 1.33335H4.74001C5.06354 1.33016 5.3772 1.44473 5.62251 1.6557C5.86783 1.86667 6.02806 2.15964 6.07334 2.48001C6.15775 3.12006 6.31431 3.7485 6.54001 4.35335C6.6297 4.59196 6.64911 4.85129 6.59594 5.1006C6.54277 5.34991 6.41925 5.57875 6.24001 5.76001L5.39334 6.60668C6.34238 8.27571 7.72431 9.65764 9.39334 10.6067L10.24 9.76001C10.4213 9.58077 10.6501 9.45725 10.8994 9.40408C11.1487 9.35091 11.4081 9.37032 11.6467 9.46001C12.2515 9.68571 12.88 9.84227 13.52 9.92668C13.8439 9.97237 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.9531 14.6667 11.28Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_9986">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiPhoneMissedSize16ColorWhite.propTypes = {
  color: PropTypes.string,
};
