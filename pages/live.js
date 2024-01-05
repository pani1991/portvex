import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";

const Live = () => {
  const [modal, setModal] = useState(null);
  const [selectImage, setSelectImage] = useState(null);
  const page = {
    title: "پخش زنده",
  };
  const gallery = [
    {
      img: "/file/img_33217_1.jpg",
    },
    {
      img: "/file/img_33217_8.jpg",
    },
    {
      img: "/file/img_33217_10.jpg",
    },
    {
      img: "/file/img_33217_9.jpg",
    },
  ];
  return (
    <div className={"position-relative " + (siteData.dir ? siteData.dir : "")}>
      <Head>
        <title>
          {page && page.title ? page.title + " | " : ""}
          {siteData && siteData.title ? siteData.title : ""}
        </title>
        <meta
          name="description"
          content={siteData && siteData.descripton ? siteData.descripton : ""}
        />
        <meta
          name="keywords"
          content={
            siteData &&
            siteData.metaKeywords &&
            siteData.metaKeywords.map((item) => item)
          }
        />
        <link rel="icon" href={siteData.favIcone} />
      </Head>
      <Helmet>
        <body data-bs-theme={siteData.theme} />
      </Helmet>
      <div className="main">
        <Menu content={siteData.menu} />

        <div className="container" style={{ paddingBlock: "50px" }}>
          <div className="row g-4">
            <div className="col-lg-4 col-md-8 col-12">
              <div className="box" style={{ overflow: "hidden" }}>
                <video
                  className="p-0 back"
                  controls
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    borderRadius: "var(--bs-border-radius)",
                    boxShadow: "var(--bs-box-shadow)",
                  }}
                >
                  <source src="./file/video.mp4" type="video/mp4" />
                  <source src="./file/video.ogg" type="video/ogg" />
                </video>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="box box2 p-3" style={{ overflow: "hidden" }}>
                <div
                  className="h-100 d-flex price"
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="col-12 ">
                    <div className="img">
                      <Image
                        fill
                        src="/file/img_33217_1.jpg"
                        alt=""
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="gallery mt-2">
                      <dir
                        className="row g-2  p-0 "
                        style={{
                          marginInline: "-0.25rem",
                        }}
                      >
                        {gallery &&
                          gallery.slice(0, 3).map((item, i) => (
                            <div
                              className="col-3"
                              onClick={() =>
                                setModal(1) +
                                setSelectImage(item.img ? item.img : "")
                              }
                              key={i}
                            >
                              <div className="galletyitem">
                                <div
                                  className="galletyitembox"
                                  style={{
                                    background: `url(${
                                      item.img ? item.img : ""
                                    })`,
                                  }}
                                  key={i}
                                ></div>
                              </div>
                            </div>
                          ))}
                        {gallery &&
                          gallery.slice(3, 4).map((item, i) => (
                            <div
                              className="col-3"
                              onClick={() =>
                                setModal(1) +
                                setSelectImage(item.img ? item.img : "")
                              }
                              key={i}
                            >
                              <div className="galletyitem galletyitem2">
                                <div
                                  className="galletyitembox"
                                  style={{
                                    background: `url(${
                                      item.img ? item.img : ""
                                    })`,
                                  }}
                                  key={i}
                                ></div>
                              </div>
                            </div>
                          ))}
                      </dir>
                    </div>
                  </div>
                  <div className="mobileprice">
                    <hr />
                    <div
                      className="d-flex mt-3"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div>
                        <span className="off">2%</span>
                        <div className="d-flex price2">
                          <small>
                            {"2100000"
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </small>
                          <small className="mx-1">تومان</small>
                        </div>
                      </div>
                      <div className="d-flex price3">
                        <h6 className="mx-1">
                          {"2000000"
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </h6>
                        <small>تومان</small>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <button className="btn">افزودن به سبد خرید</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 ">
              <div className="box commentbox">
                <div
                  className="p-3"
                  style={{ height: "calc(100% - 60px)", overflowY: "auto" }}
                >
                  <div className="col-12 mb-4">
                    <div
                      className="d-flex"
                      style={{ alignItems: "flex-start" }}
                    >
                      <Image
                        src="/file/avatar.png"
                        alt=""
                        width={50}
                        height={50}
                        fixed
                        style={{
                          objectFit: "cover",
                          borderRadius: "50%",
                          border: "1px solid var(--bs-body-color)",
                          marginInlineEnd: "10px",
                        }}
                      />
                      <div className="text pt-2">
                        <strong className="d-block mb-0">سعید رحیمی</strong>
                        <small className="d-block mb-2">15 دقیقه قبل</small>
                        <div className="col-12 comment p-3  my-2">
                          طریقه ارسال محصول به چه شکلی هستش؟
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="d-flex"
                      style={{ alignItems: "flex-start" }}
                    >
                      <Image
                        src="/file/avatar2.png"
                        alt=""
                        width={50}
                        height={50}
                        fixed
                        style={{
                          objectFit: "cover",
                          borderRadius: "50%",
                          border: "1px solid var(--bs-body-color)",
                          marginInlineEnd: "10px",
                        }}
                      />
                      <div className="text pt-2">
                        <strong className="d-block mb-0">مهدی رضایی</strong>
                        <small className="d-block mb-2">17 دقیقه قبل</small>
                        <div className="col-12 comment p-3  my-2">
                          قیمت محصول در تعداد بالاتر از 1000 عدد چقدر هستش؟
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row mx-0"
                  style={{
                    overflowY: "auto",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    className="col-12 d-flex py-2"
                    style={{ alignItems: "center" }}
                  >
                    <input placeholder="متن پیام ..." />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      className="bi bi-send-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer content={siteData.footer} />
      </div>
      {modal == 1 ? (
        <div className="modale">
          <div className="box">
            <div className="head p-3">
              <h6>تصاویر اصلی</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
                onClick={() => setModal(null)}
              >
                <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"></path>
              </svg>
            </div>
            <div className="body p-3">
              <div className="row g-3">
                <div className="col-sm-6 col-9">
                  <Image
                    fixed
                    src={selectImage ? selectImage : ""}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "auto",
                      borderRadius: "var(--bs-border-radius)",
                    }}
                  />
                </div>
                <div className="col-sm-6 col-3">
                  <div className="gallery mt-0">
                    <div
                      className="row g-2 mx-auto p-0"
                      style={{
                        marginInline: "-0.25rem",
                      }}
                    >
                      {gallery &&
                        gallery.map((item, i) => (
                          <div
                            className="col-lg-2 col-md-3 col-sm-4 col-12"
                            onClick={() =>
                              setSelectImage(item.img ? item.img : "")
                            }
                            key={i}
                          >
                            <div className="galletyitem">
                              <div
                                className="galletyitembox"
                                style={{
                                  background: `url(${
                                    item.img ? item.img : ""
                                  })`,
                                }}
                                key={i}
                              ></div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <style jsx>{`
        .bi-send-fill {
          transform: rotate(223deg);
          cursor: pointer;
        }
        .ltr .bi-send-fill {
          transform: rotate(45deg);
        }
        .modale {
          position: fixed;
          top: 0px;
          left: 0px;
          background: #0000009c;
          width: 100%;
          height: 100vh;
          z-index: 100;
          opacity: 1;
          display: block;
          padding: 20px;
        }
        .modale .box {
          box-shadow: var(--bs-box-shadow);
          border-radius: var(--bs-border-radius);
          background: var(--bs-body-bg);
          height: calc(100vh - 40px);
          overflow: hidden;
        }
        .modale .box .head {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--bs-border-color);
        }
        .modale .box .head svg {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
        .modale .box .body {
          overflow-y: auto;
          height: calc(100% - 60px);
        }
        .avatar {
          width: 100%;
          border-radius: var(--bs-border-radius);
          border: 1px solid var(--bs-body-color);
          height: 208px;
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
        input {
          border: 0px solid var(--bs-light-text-emphasis) !important;
          border-radius: var(--bs-border-radius);
          height: 45px;
          font-size: 0.8rem;
          padding: 4px;
          width: -webkit-fill-available;
          width: -moz-available;
        }
        .comment {
          border-radius: var(--bs-border-radius);
          background: var(--bs-tertiary-bg);
          border: 1px solid var(--bs-body-color);
          color: var(--bs-dark-text-emphasis) !important;
        }
        .text strong,
        .text small {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          color: var(--bs-dark-text-emphasis) !important;
        }
        .text {
          width: -webkit-fill-available;
          width: -moz-available;
        }
        .galletyitem2::after {
          content: "...";
          z-index: 2;
          position: absolute;
          top: 4px;
          left: 4px;
          font-size: 3rem;
          color: #000;
          width: calc(100% - 8px);
          display: flex;
          justify-content: center;
          line-height: 0rem;
          height: 60%;
          align-items: center;
        }
        .galletyitem2::before {
          content: "";
          width: calc(100% - 8px);
          height: calc(100% - 8px);
          display: block;
          z-index: 1;
          position: absolute;
          top: 4px;
          left: 4px;
          backdrop-filter: blur(3px);
          border-radius: var(--bs-border-radius);
        }
        .gallery .galletyitem {
          width: 100%;
          cursor: pointer;
          border-radius: var(--bs-border-radius);
          padding: 4px;
          border: 1px solid var(--bs-border-color) !important;
          position: relative;
        }
        .gallery .galletyitembox {
          width: 100%;
          padding-top: 100%;
          background-size: contain !important;
          background-position: center !important;
          border-radius: calc(var(--bs-border-radius) - 2px);
          background-repeat: no-repeat !important;
        }
        .img {
          position: relative;
          border-radius: var(--bs-border-radius);
          overflow: hidden;
          height: 200px !important;
          background: var(--bs-tertiary-bg);
        }
        @media (min-width: 992px) {
          .img {
            width: 100%;
            height: 280px !important;
          }
          .col-lg:nth-child(1) {
            width: fit-content !important;
            max-width: fit-content !important;
          }
        }
        .shop {
          margin-inline-end: 10px;
          border-radius: var(--bs-border-radius);
          width: 45px;
          height: 45px;
          background-size: contain !important;
          background-position: center !important;
          background-color: var(--bs-tertiary-bg);
          background-repeat: no-repeat !important;
          box-shadow: var(--bs-box-shadow);
        }
        .btn {
          font-size: 0.875em;
          line-height: 2em;
          width: 100%;
          color: #fff;
          background: var(--color1);
          padding-block: 13px;
          border-color: var(--color1);
          margin-top: 4px;
        }
        .price2 {
          color: var(--bs-light-text-emphasis);
          opacity: 0.8;
          font-size: 0.8rem !important;
        }
        .price2 small {
          font-size: 0.6rem !important;
          text-decoration: line-through;
        }
        .price3,
        .price3 h6 {
          color: var(--bs-emphasis-color);
        }
        .off {
          font-size: 0.5rem !important;
          line-height: 0.6rem !important;
          background: var(--color6);
          color: #fff;
          padding: 0px 10px;
          border-radius: 25px;
        }
        @media (min-width: 768px) {
          .pricebox {
            justify-content: flex-end !important;
          }
        }
        strong {
          color: var(--bs-heading-color);
        }
        .pricebox {
          align-items: center;
        }
        .box {
          border-radius: var(--bs-border-radius);
          background: var(--bs-body-bg);
          height: 95vh;
          overflow: hidden;
          box-shadow: var(--bs-box-shadow);
          max-height: 535px;
        }
        @media (max-width: 767px) {
          .box2 {
            height: auto !important;
          }
          .commentbox {
          }
        }
        .main {
          background: var(--bs-tertiary-bg);
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Live;
