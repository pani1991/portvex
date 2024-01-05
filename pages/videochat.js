import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
const WebChat = () => {
  const [open, setOpen] = useState(null);
  const page = {
    title: "چت آنلاین",
  };

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
        <div
          style={{
            background: "var(--bs-body-bg)",
          }}
        >
          <div className="container py-4 position-relative">
            {open == null ? (
              <div className="blure">
                <div className="container">
                  <div className=" col-lg-6 col-md-8 login mx-auto">
                    <form className="mx-auto">
                      <div className="row g-4">
                        <div className="col-12">
                          <div className="fild">
                            <label>نام و نام خانوادگی</label>
                            <input type="text" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="fild">
                            <label>شماره تماس</label>
                            <input type="text" className="" />
                            {/* <span className="error">متن ارور</span> */}
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btnline"
                            onClick={() => setOpen(1)}
                          >
                            ورود به چت
                            <Image
                              alt=""
                              fixed
                              width={15}
                              height={15}
                              src="/google.png"
                              style={{ marginInlineStart: "10px" }}
                            />
                          </button>
                        </div>
                        <div className="col-12">
                          <button className="btn" onClick={() => setOpen(1)}>
                            {" "}
                            ورود به چت
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="row g-3 h-100">
              <div className="col-lg-3 col-md-4 col-12 h-100">
                <div className="box box2 p-3" style={{ overflow: "hidden" }}>
                  <div className="col-12 mb-3">
                    <div
                      className="avatar"
                      style={{
                        background: `url(./file/portrait-of-young-asian-customer-service-support-agent-telemarketer-wearing-headset-waving-hand-and-looking-at-camera-make-business-conference-internet-call-free-video.jpg)`,
                      }}
                    ></div>
                  </div>
                  <div className=" price">
                    <div className="d-flex mt-3">
                      <div>
                        <strong>
                          چانه گرد کن مخروطی تمام اتوماتیک حرفه ای
                        </strong>
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
                      <div className="col-12">
                        <button className="btn">افزودن به سبد خرید</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 ">
                <div className="box commentbox">
                  <div
                    className="p-3"
                    style={{ height: "calc(100% - 60px)", overflowY: "auto" }}
                  >
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
                          <small className="d-block mb-2">17 دقیقه قبل</small>
                          <div className="col-md-5 col-11  comment p-3  my-2">
                            سلام وقتتون بخیر. من نتونستم به پخش زنده معرفی محصول
                            برسم به همین خاطر چند سوال دارم که نیاز به راهنمایی
                            دارن
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mb-4 seler">
                      <div
                        className="d-flex"
                        style={{
                          alignItems: "flex-start",
                          flexDirection: "row-reverse",
                        }}
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
                            marginInlineStart: "10px",
                          }}
                        />
                        <div className="text pt-2">
                          <small
                            className="d-block mb-2"
                            style={{ textAlign: "end" }}
                          >
                            1:50 دقیقه پیش
                          </small>
                          <div
                            style={{ marginInlineStart: "auto" }}
                            className="col-md-5 col-11 comment p-3 my-2"
                          >
                            علاوه بر مواردی که خدمتتون عرض کردم می تونم یه تایم
                            هم برای هماهنگی بیشتر برای مراجعه حضوری براتون تنظیم
                            کنم
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
        </div>

        <Footer content={siteData.footer} />
      </div>
      <style jsx>{`
        .fild {
          position: relative;
          line-height: 42px;
          font-size: 0.875em;
          margin-top: 6px;
        }
        .fild label {
          top: -10px;
          display: block;
          font-size: 0.8em;
          color: var(--bs-body-color);
          line-height: normal;
          position: absolute;
          background: var(--bs-body-bg);
          margin-inline-start: 9px;
          padding: 0px 5px;
        }
        .fild input[type="text"],
        .fild input[type="password"],
        .fild select,
        .fild textarea {
          line-height: 42px;
          font-size: 0.875em;
          border-radius: var(--bs-border-radius);
          width: -webkit-fill-available;
          width: -moz-available;
          border: 1px solid var(--bs-body-color) !important;
          padding-inline: 5px;
          background: transparent;
        }
        .fild.danger input[type="text"],
        .fild.danger input[type="password"],
        select.danger {
          border: 1px solid var(--color6) !important;
        }
        .fild.danger label {
          color: var(--color6) !important;
        }
        .fild.danger .error {
          font-size: 0.8em;
          color: var(--color6) !important;
          font-weight: 600;
        }
        .btnline {
          font-size: 0.875em;
          line-height: 2em;
          width: 100%;
          color: #fc2f46;
          background: transparent;
          padding-block: 13px;
          border: 2px solid #fc2f46;
          margin-top: 4px;
          border-radius: 12px !important;
        }
        .login {
          padding-block: 50px;
          background: var(--bs-body-bg);
          box-shadow: var(--bs-box-shadow);
          border-radius: var(--bs-border-radius);
        }
        .blure {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          z-index: 2;
          display: flex;
          align-items: center;
        }
        .bi-send-fill {
          transform: rotate(223deg);
          cursor: pointer;
        }
        .ltr .bi-send-fill {
          transform: rotate(45deg);
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
        @media (max-width: 767px) {
          .box2 {
            height: auto !important;
          }
        }
        form {
          max-width: 300px;
        }
        .box {
          border-radius: var(--bs-border-radius);
          background: var(--bs-body-bg);
          height: 95vh;
          overflow: hidden;
          box-shadow: var(--bs-box-shadow);
          max-height: 435px;
        }
        @media (max-width: 767px) {
          .box2 {
            height: auto !important;
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

export default WebChat;
