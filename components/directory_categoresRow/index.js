import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/api";
import Box from "./box";
import styles from "./index.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="arrow-circle-down"
      viewBox="0 0 24 24"
      width="512"
      height="512"
      className={className}
      style={{
        ...style,
        display: "block",
        right: "15px",
        zIndex: "1",
        width: "60px",
        height: "60px",
      }}
      onClick={onClick}
    >
      <path
        opacity={0.1}
        d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12Z"
      ></path>
      <path
        opacity={0.8}
        d="M16,12a2.993,2.993,0,0,1-.752,1.987c-.291.327-.574.637-.777.84L11.647,17.7a1,1,0,1,1-1.426-1.4L13.05,13.42c.187-.188.441-.468.7-.759a1,1,0,0,0,0-1.323c-.258-.29-.512-.57-.693-.752L10.221,7.7a1,1,0,1,1,1.426-1.4l2.829,2.879c.2.2.48.507.769.833A2.99,2.99,0,0,1,16,12Z"
      ></path>
    </svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        ...style,
        display: "block",

        left: "15px",
        zIndex: "1",
        width: "60px",
        height: "60px",
      }}
      onClick={onClick}
      id="arrow-circle-down"
      viewBox="0 0 24 24"
      width="512"
      height="512"
    >
      <path
        opacity={0.1}
        d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM2,12A10,10,0,1,1,12,22,10.011,10.011,0,0,1,2,12Z"
      ></path>
      <path
        opacity={0.8}
        d="M8,12a2.993,2.993,0,0,1,.752-1.987c.291-.327.574-.637.777-.84L12.353,6.3a1,1,0,0,1,1.426,1.4L10.95,10.58c-.187.188-.441.468-.7.759a1,1,0,0,0,0,1.323c.258.29.512.57.693.752L13.779,16.3a1,1,0,0,1-1.426,1.4L9.524,14.822c-.2-.2-.48-.507-.769-.833A2.99,2.99,0,0,1,8,12Z"
      ></path>
    </svg>
  );
}
const CategoresRow = ({ content, title }) => {
  var settings = {
    dots: false,
    // className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    // slidesToShow: content.length < 3 ? content.length : 3,
    slidesPerRow: content.length < 5 ? content.length : 5,
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesPerRow: content.length < 4 ? content.length : 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesPerRow: content.length < 4 ? content.length : 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesPerRow: content.length < 3 ? content.length : 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesPerRow: content.length < 1 ? content.length : 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 500,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      className={
        (content.class_name
          ? styles.categoresrow + " " + content.class_name
          : styles.categoresrow) +
        " " +
        (siteData.dir ? siteData.dir : "")
      }
    >
      <div className={styles.container + " container "}>
        <div className="row text-center">
          <div className="col-12  mb-4">
            {title ? <h2 className="h4">{title}</h2> : ""}
          </div>
        </div>

        <div
          className="row shadowe position-relative"
          style={{ marginInline: "-.75rem" }}
        >
          <Slider {...settings}>
            {content &&
              content
                .filter((i) => i.home != null)
                .map((item, i) => (
                  <div key={i}>
                    <div className="my-2" style={{ paddingInline: ".75rem" }}>
                      <Box dir={siteData.dir} content={item} i={i} />
                    </div>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
      <style jsx>{`
        .shadowe::before {
          --bs-gradinat-light: linear-gradient(
            272deg,
            rgb(246 247 251 / 100%) 0,
            rgb(246 247 251 / 0%) 100%
          );
          content: "";
          display: block;
          width: 15%;
          height: 100%;
          position: absolute;
          top: 0px;
          right: 0px;
          background: var(--bs-gradinat-light);
          z-index: 1;
        }
        .shadowe::after {
          --bs-gradinat-light: linear-gradient(
            272deg,
            rgb(246 247 251 / 0%) 0,
            rgb(246 247 251 / 100%) 100%
          );
          content: "";
          display: block;
          width: 15%;
          height: 100%;
          position: absolute;
          top: 0px;
         left: 0px;
          background: var(--bs-gradinat-light);
          z-index: 0;
        }
      `}</style>
    </div>
  );
};
export default CategoresRow;
