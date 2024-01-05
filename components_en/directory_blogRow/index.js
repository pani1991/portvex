import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/apien";
import Box from "./box";
import styles from "./index.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BlogRow = ({ content, title, dsc }) => {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: content.length < 3 ? content.length : 3,
    slidesToScroll: 2,
    initialSlide: 0,
    className: "p-0",
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    responsive: [

      {
        breakpoint: 1100,
        settings: {
          slidesToShow: content.length < 3 ? content.length : 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: content.length < 2 ? content.length : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: content.length < 1.5 ? content.length : 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={
        (content.class_name
          ? styles.blogrow + " " + content.class_name
          : styles.blogrow) +
        " " +
        (siteData.dir ? siteData.dir : "")
      }
    >
      <div className={styles.container + " container"}>
        <div className="row">
          <div className="col-12  mb-4">
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              {title ? <h2 className="h4">{title}</h2> : ""}
              <a
                href={
                  siteData.urls && siteData.urls.blog
                    ? siteData.urls.blog
                    : ""
                }
                className={styles.blog + " more"}
              >
             more ...
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginInline: "-.75rem" }}>
          <Slider {...settings}>
            {content &&
              content.map((item, i) => (
                <div key={i}>
                  <div style={{ paddingInline: ".75rem" }}>
                    <Box dir={siteData.dir} content={item} i={i} />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default BlogRow;
