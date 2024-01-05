import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import siteData from "../../pages/api/api";

const Slider = ({ content, category }) => {
  const [open, setOpen] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
    }, 8000); // 8 ثانیه
    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleTitleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={
        (siteData.dir ? siteData.dir : "") +
        " slider-container position-relative"
      }
    >
      {open == 1 ? (
        <div className="col-12 p-3 inputbg" onClick={() => setOpen(0)}></div>
      ) : (
        ""
      )}
      <div className="slider w-100 h-100">
        <div
          className="slide h-100 w-100"
          style={{
            background: `url(${content[currentSlide].img + "?width=1500"})`,
          }}
        >
          {content[currentSlide].video_mp4 ? (
            <video
              className="p-0 back"
              autoPlay
              loop
              muted
              style={{
                objectFit: "cover",
              }}
              onloadstart="this.playbackRate = 0.5;"
            >
              <source
                src={
                  content[currentSlide].video_mp4
                    ? content[currentSlide].video_mp4
                    : ""
                }
                type="video/mp4"
              />
              <source
                src={
                  content[currentSlide].video_ogg
                    ? content[currentSlide].video_ogg
                    : ""
                }
                type="video/ogg"
              />
            </video>
          ) : (
            ""
          )}
          {/* <div className="container"> */}
          <div className="text text-white">
            <div className="container mt-5 pt-5">
              <div className="d-flex">
                <Link href={content[currentSlide].alert_link}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="#fff"
                    className="anime"
                  >
                    <path d="m16.395,10.122l-5.192-2.843c-.673-.379-1.473-.372-2.138.017-.667.39-1.064,1.083-1.064,1.855v5.699c0,.772.397,1.465,1.064,1.855.34.199.714.297,1.087.297.358,0,.716-.091,1.041-.274l5.212-2.854c.687-.386,1.096-1.086,1.096-1.873s-.409-1.487-1.105-1.878Zm-.961,2.003l-5.212,2.855c-.019.01-.077.042-.147-.001-.074-.043-.074-.107-.074-.128v-5.699c0-.021,0-.085.074-.128.027-.016.052-.021.074-.021.036,0,.065.016.083.026l5.192,2.844c.019.011.076.043.076.13s-.058.119-.066.125ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z"></path>
                  </svg>
                  <small className="mx-2 " style={{ color: "#fff" }}>
                    {content[currentSlide].alert}
                  </small>
                </Link>
              </div>
              <h1 style={{ color: "#fff" }} className="h1 mt-2">
                {content[currentSlide].title}
              </h1>
              <span className="my-2 d-block" style={{ color: "#fff" }}>
                {content[currentSlide].tagline}
              </span>
              {/* <a className="mt-3 slidbutton" href={content[currentSlide].link}>
                {content[currentSlide].btn_title}
              </a> */}
              <div className="mt-5 col-lg-8 col-md-8  col-12">
                <div className="search position-relative">
                  <input
                    placeholder="دنبال چه چیزی هستید؟"
                    onClick={() => setOpen(1)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                    fill="var(--color1)"
                  >
                    <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"></path>
                  </svg>
                  {open == 1 ? (
                    <div className="col-12 p-3 inputlist">
                      <div className="row g-3">
                        <div className="col-md-6">
                          شرکت ها :
                          <div className="row g-3 mt-2">
                            <div className="col-12 product">
                              <Link href="/">
                                <div
                                  className="d-flex"
                                  style={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div>
                                    <Image
                                      src="/file/download.jfif"
                                      fixed
                                      width={30}
                                      height={30}
                                      style={{
                                        borderRadius: "var(--bs-border-radius)",
                                        objectFit: "cover",
                                        marginInlineEnd: "10px",
                                        boxShadow: "var(--bs-box-shadow)",
                                      }}
                                      alt=""
                                    />
                                    شرکت تجهیزات پزشکی پارس
                                  </div>
                                  <div>
                                    <strong>09146003002</strong>
                                  </div>
                                </div>
                              </Link>
                            </div>

                            <div className="col-12 product">
                              <Link href="/">
                                <div
                                  className="d-flex"
                                  style={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div>
                                    <Image
                                      src="/file/download(1).jfif"
                                      fixed
                                      alt=""
                                      width={30}
                                      height={30}
                                      style={{
                                        borderRadius: "var(--bs-border-radius)",
                                        objectFit: "cover",
                                        marginInlineEnd: "10px",
                                        boxShadow: "var(--bs-box-shadow)",
                                      }}
                                    />
                                    شرکت افرا طب
                                  </div>
                                  <div>
                                    <strong>09146003002</strong>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          محصولات :
                          <div className="row g-3 mt-2">
                            <div className="col-12 product">
                              <Link href="/">
                                <div
                                  className="d-flex"
                                  style={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div>
                                    <Image
                                      src="/file/718802.webp"
                                      fixed
                                      alt=""
                                      width={30}
                                      height={30}
                                      style={{
                                        borderRadius: "var(--bs-border-radius)",
                                        objectFit: "cover",
                                        marginInlineEnd: "10px",
                                        boxShadow: "var(--bs-box-shadow)",
                                      }}
                                    />
                                    فشارسنج عقربه ای مدل SP90
                                  </div>
                                  <div>
                                    <strong>1,412,000 تومان</strong>
                                  </div>
                                </div>
                              </Link>
                            </div>

                            <div className="col-12 product">
                              <Link href="/">
                                <div
                                  className="d-flex"
                                  style={{
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div>
                                    <Image
                                      src="/file/1056682.webp"
                                      fixed
                                      alt=""
                                      width={30}
                                      height={30}
                                      style={{
                                        borderRadius: "var(--bs-border-radius)",
                                        objectFit: "cover",
                                        marginInlineEnd: "10px",
                                        boxShadow: "var(--bs-box-shadow)",
                                      }}
                                    />
                                    آویز دست پاک سمن مدل humeral With Shoulder
                                    Control سایز متوسط
                                  </div>
                                  <div style={{ minWidth: "fit-content" }}>
                                    <strong>300,000 تومان</strong>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="position-relative row gy-3 gx-0 mt-0 text-center"
                  style={{ flexWrap: "wrap" }}
                >
                  {category &&
                    category
                      .filter((i) => i && i.slider == 1)
                      .map((item, i) => (
                        <Link
                          style={{ width: "fit-content" }}
                          href={item && item.url ? item.url : ""}
                          key={i}
                        >
                          {" "}
                          <div
                            className="d-inline text-center category p-1"
                            key={i}
                          >
                            <span
                              className="icon d-block"
                              dangerouslySetInnerHTML={{
                                __html: item && item.icon ? item.icon : "",
                              }}
                            />
                            <small className="d-block">
                              {item && item.title ? item.title : ""}
                            </small>
                          </div>{" "}
                        </Link>
                      ))}
                </div>
                <div
                  className="position-relative row gy-3 gx-0 mt-3 text-center"
                  style={{ flexWrap: "wrap" }}
                >
                  <a href="" className="btn btnfild">
                    خریدار هستم{" "}
                  </a>
                  <a href="" className="btn btnoutline">
                    تامین کننده هستم
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {/* <div
        className={(siteData.dir ? siteData.dir : "") + " custom-paging pb-4 d-none d-md-flex"}
      >
        <div className="row g-2">
          {content &&
            content.map((item, i) => (
              <div
                title={item && item.title ? item.title : ""}
                key={i}
                className={
                  (siteData.dir ? siteData.dir : "") +
                  `  col ${i === currentSlide ? " active " : ""}` +
                  " text-start " +
                  (siteData.dir ? siteData.dir : "")
                }
                onClick={() => handleTitleClick(i)}
              >
                <div className="paging-item"></div>
              </div>
            ))}
        </div>{" "}
      </div> */}
      <style jsx>{`
        .anime {
          animation: blink-animation 1.5s steps(5, start) infinite;
          -webkit-animation: blink-animation 1.5s steps(5, start) infinite;
        }
        @keyframes blink-animation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .btn {
          display: inline !important;
          width: fit-content;
          padding: 10px 20px;
          border-radius: 25px;
          margin-inline-end: 10px;
          font-size: 13px;
        }
        .btnfild {
          background: var(--color1);
          color: #fff !important;
          border: 2px solid var(--color1);
        }
        .btnoutline {
          border: 2px solid #fff;
          color: #fff !important;
        }
        @media (min-width: 767px) {
          .h1,
          h1 {
            font-size: calc(1.375rem + 2vw);
          }
        }
        .inputbg {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: tansparent;
          z-index: 1;
        }
        .inputlist .product {
          font-size: 0.7rem;
        }
        .inputlist {
          padding: 10px 15px;
          border-radius: 0px 0px var(--bs-border-radius) var(--bs-border-radius);
          // border: 4px solid var(--color1);
          border-top-width: 0px;
          z-index: 3;
          position: absolute;
          background-color: var(--bs-body-bg);
          top: 44px;
          position: absolute;
          color: var(--bs-heading-color);
          text-align: start;
          max-height: 185px;
          overflow-y: auto;
        }
        .search input {
          width: -webkit-fill-available;
          width: -moz-available;
          font-size: 15px;
          line-height: 20px;
          border-radius: ${open == 1 ? "25px 25px 0px 0px" : "25px"};
          padding: 15px;
          // border: 4px solid var(--color1);
          border-width: 0px;
          padding-inline-end: 81px;
          z-index: 1;
          position: relative;
        }
        .search svg {
          position: absolute;
          top: 5px;
          left: 7px;
          z-index: 1;
          fill: #fff;
          border-radius: 25px;
          background: var(--color1);
          width: 70px !important;
          border: 6px solid var(--color1);
          height: 40px !important;
          padding: 4px;
        }
        .ltr .search svg {
          left: auto;
          right: 7px;
        }
        .category {
          width: 115px;
          height: 75px;
          display: inline-flex !important;
          color: #ffffff !important;
          margin-inline: 5px;
          align-items: center;
          text-align: center !important;
          justify-content: center;
          background: #000000b5;
          border-radius: var(--bs-border-radius);
          transition: all.4s ease;
          fill: #fff;
          flex-direction: column;
        }
        .category small {
          font-size: 9px;
          margin-top: 4px;
        }
        .category:hover {
          transform: scale(1.2);
        }
        .category a {
          color: #ffffff !important;
        }
        .icon {
          color: var(--bs-light-text-emphasis);
          font-size: 0.7em;
          width: 34px;
          height: 34px;
          display: block !important;
          margin-inline: auto;
          color: #ffffff !important;
        }

        .paging-item {
          width: 12px;
          height: 12px;
          background: #ffff;
          border-radius: var(--bs-border-radius);
          opacity: 0.4;
          cursor: pointer;
        }
        .active .paging-item {
          font-weight: 700;
          opacity: 1;
        }
        .custom-paging {
          bottom: 12px;
          // z-index: 3 !important;
          margin-inline-start: auto !important;
          width: fit-content !important;
          padding: 12px !important;
          position: absolute !important;
          background: hwb(0deg 0%100%/10%);
          left: 12px;
          border-radius: var(--bs-border-radius);
          height: fit-content !important;
        }
        .slider-container {
          height: 100vh !important;
          width: 100%;
          overflow: hidden;
          position: relative !important;
          // border-radius: var(--bs-border-radius);
          max-height: 616px;
          box-shadow: var(--bs-box-shadow);
        }
        .slide {
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
        }
        video {
          width: 100%;
          height: 100%;
        }
        .h5,
        .h2 {
          color: #fff;
        }
        .slidbutton {
          color: #fff !important;
          background: var(--color1);
          border: 2px solid var(--color1) !important;
          border-radius: 0px;
          padding: 6px 12px;
          transition: all.4s ease;
          display: inline-block;
          border-radius: var(--bs-border-radius);
          font-size: 0.8rem;
        }
        .slidbutton:hover {
          color: #000;
          background: #dbdbdb;
          border-color: #dbdbdb !important;
          transition: all.4s ease;
        }
        .text-white {
          position: absolute;
          top: 0px;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(
              90deg,
              rgb(0 0 0 / 87%) 0,
              rgb(0 0 0 / 20%) 100%
            ),
            linear-gradient(181deg, rgb(0 0 0 / 87%) 0, rgb(0 0 0 / 20%) 50%);
          justify-slider: center;
          width: 100%;
          padding: 36px 0px;
          justify-content: center;
        }
        .rtl .text-white {
          background: linear-gradient(
              272deg,
              rgb(0 0 0 / 87%) 0,
              rgb(0 0 0 / 20%) 100%
            ),
            linear-gradient(181deg, rgb(0 0 0 / 87%) 0, rgb(0 0 0 / 20%) 50%);
          text-align: right !important;
          direction: rtl !important;
          display: flex;
          justify-content: center;
        }
        .ltr .text-white {
          text-align: left !important;
          direction: ltr !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
