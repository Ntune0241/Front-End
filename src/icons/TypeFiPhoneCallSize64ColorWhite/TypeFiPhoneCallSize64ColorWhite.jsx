/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFiPhoneCallSize64ColorWhite = ({ color = "white", className }) => {
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
        d="M40.1334 13.3334C42.738 13.8416 45.1317 15.1154 47.0082 16.9919C48.8847 18.8684 50.1585 21.2621 50.6667 23.8667M40.1334 2.66675C45.5448 3.26791 50.5909 5.69121 54.4433 9.53877C58.2957 13.3863 60.7254 18.4294 61.3334 23.8401M58.6667 45.1201V53.1201C58.6697 53.8627 58.5176 54.5979 58.2201 55.2783C57.9225 55.9588 57.4862 56.5696 56.9389 57.0717C56.3916 57.5738 55.7456 57.956 55.042 58.194C54.3385 58.4319 53.593 58.5203 52.8534 58.4534C44.6476 57.5618 36.7654 54.7578 29.84 50.2667C23.3969 46.1725 17.9343 40.7099 13.84 34.2667C9.3333 27.31 6.52867 19.3894 5.65336 11.1467C5.58672 10.4093 5.67436 9.66611 5.91069 8.96441C6.14703 8.26272 6.52688 7.61792 7.02607 7.07107C7.52525 6.52422 8.13284 6.08731 8.81013 5.78814C9.48743 5.48897 10.2196 5.33411 10.96 5.33341H18.96C20.2542 5.32068 21.5088 5.77896 22.4901 6.62283C23.4713 7.46671 24.1122 8.63861 24.2934 9.92008C24.631 12.4803 25.2572 14.994 26.16 17.4134C26.5188 18.3679 26.5965 19.4052 26.3838 20.4024C26.1711 21.3997 25.677 22.315 24.96 23.0401L21.5734 26.4267C25.3695 33.1029 30.8972 38.6306 37.5734 42.4267L40.96 39.0401C41.6851 38.3231 42.6004 37.829 43.5977 37.6163C44.5949 37.4036 45.6322 37.4813 46.5867 37.8401C49.0061 38.7429 51.5199 39.3691 54.08 39.7067C55.3754 39.8895 56.5584 40.542 57.4041 41.5401C58.2498 42.5382 58.6991 43.8123 58.6667 45.1201Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPhoneCallSize64ColorWhite.propTypes = {
  color: PropTypes.string,
};
