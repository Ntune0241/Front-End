/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiPhoneOffSize24ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_143_5783)">
        <path
          d="M6.92001 17.08C4.67449 13.6174 3.27249 9.67625 2.82668 5.57336C2.79336 5.20465 2.83718 4.83304 2.95535 4.48219C3.07351 4.13135 3.26344 3.80895 3.51303 3.53552C3.76263 3.2621 4.06642 3.04364 4.40507 2.89406C4.74372 2.74447 5.1098 2.66704 5.48001 2.66669H9.48001C10.1271 2.66033 10.7544 2.88947 11.245 3.3114C11.7357 3.73334 12.0561 4.31929 12.1467 4.96003C12.3155 6.24012 12.6286 7.497 13.08 8.70669C13.2594 9.18393 13.2982 9.70258 13.1919 10.2012C13.0855 10.6998 12.8385 11.1575 12.48 11.52L10.7867 13.2134M14.24 17.7467C15.5932 19.101 17.1224 20.2671 18.7867 21.2134L20.48 19.52C20.8425 19.1615 21.3002 18.9145 21.7988 18.8082C22.2975 18.7018 22.8161 18.7406 23.2933 18.92C24.503 19.3714 25.7599 19.6845 27.04 19.8534C27.6808 19.9439 28.2667 20.2644 28.6886 20.755C29.1106 21.2456 29.3397 21.873 29.3333 22.52V26.52C29.3349 26.8914 29.2588 27.2589 29.11 27.5992C28.9613 27.9394 28.7431 28.2448 28.4695 28.4958C28.1958 28.7469 27.8728 28.938 27.521 29.057C27.1692 29.1759 26.7965 29.2201 26.4267 29.1867C22.3238 28.7409 18.3827 27.3389 14.92 25.0934C13.3137 24.0734 11.8247 22.8796 10.48 21.5334L14.24 17.7467Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M30.6667 1.33334L1.33334 30.6667"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_143_5783">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

TypeFiPhoneOffSize24ColorBlack.propTypes = {
  color: PropTypes.string,
};
