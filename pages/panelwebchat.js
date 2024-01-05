import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
const WebChat = () => {
  const [modal, setModal] = useState(null);
  const [selectImage, setSelectImage] = useState(null);
  const [open, setOpen] = useState(null);

  const page = {
    title: "پنل کاربر - ویدئو چت",
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
        <div
          style={{
            background: "var(--bs-body-bg)",
          }}
        >
          <div className="container py-4 position-relative">
            <div className="row g-3 h-100">
              <div className="col-lg-2 col-md-3 col-12 h-100">
                <div className="box box2 p-3" style={{ overflow: "hidden" }}>
                  <div
                    className="h-100 d-flex price"
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <ul className="m-0 p-0 sidemenu">
                      <li className="mb-3">
                        <Link href="/dashboard">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"></path>
                            <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"></path>
                          </svg>
                          داشبورد
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"></path>
                            <circle cx="7" cy="22" r="2"></circle>
                            <circle cx="17" cy="22" r="2"></circle>
                          </svg>
                          سفارشات
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/">
                          <svg
                            width="512pt"
                            height="512pt"
                            viewBox="0 0 512 512"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="#000000ff">
                              <path
                                fill="#000000"
                                opacity="1.00"
                                d=" M 241.69 0.00 L 270.31 0.00 C 276.08 0.96 281.90 1.58 287.71 2.33 C 319.56 6.93 350.24 19.07 376.80 37.20 C 412.87 61.77 441.17 97.58 456.57 138.42 C 466.42 164.35 471.20 192.23 470.29 219.96 C 469.62 235.70 465.87 251.14 461.11 266.11 C 455.16 284.55 447.39 302.35 438.82 319.72 C 415.28 367.12 386.07 411.42 355.50 454.53 C 350.51 461.49 345.70 468.61 339.95 474.98 C 323.22 493.55 300.10 506.26 275.44 510.35 C 272.40 510.87 269.38 511.48 266.34 512.00 L 245.66 512.00 C 242.62 511.48 239.59 510.87 236.56 510.34 C 212.60 506.35 190.09 494.25 173.47 476.54 C 168.93 471.68 164.91 466.37 161.08 460.95 C 129.13 416.22 98.43 370.31 73.84 321.05 C 63.12 299.43 53.49 277.14 47.26 253.78 C 44.51 243.37 42.41 232.75 41.80 221.99 C 39.44 169.33 57.99 116.21 92.13 76.11 C 126.44 35.17 176.60 7.87 229.68 1.65 C 233.70 1.23 237.69 0.60 241.69 0.00 M 238.41 47.47 C 200.14 51.41 163.49 69.08 136.58 96.57 C 106.78 126.38 89.07 167.83 88.12 209.97 C 87.49 221.85 89.80 233.63 92.98 245.01 C 99.12 266.39 108.45 286.66 118.50 306.45 C 142.06 351.75 170.44 394.35 200.27 435.74 C 206.55 445.01 215.09 452.74 225.06 457.87 C 242.49 467.08 264.04 467.86 282.16 460.15 C 290.58 456.54 298.32 451.27 304.60 444.57 C 308.70 440.26 312.05 435.31 315.50 430.47 C 334.17 404.51 352.03 377.95 368.64 350.63 C 385.24 323.02 400.82 294.64 412.51 264.56 C 419.01 246.77 424.94 228.12 423.83 208.93 C 423.08 184.70 416.91 160.66 406.00 139.01 C 389.15 105.51 360.79 77.93 326.72 62.21 C 299.38 49.32 268.45 44.37 238.41 47.47 Z"
                              ></path>
                              <path
                                fill="#000000"
                                opacity="1.00"
                                d=" M 247.41 128.46 C 263.59 126.85 280.25 129.77 294.71 137.28 C 311.20 145.67 324.88 159.55 332.83 176.27 C 337.28 185.24 339.85 195.06 340.90 204.98 C 343.42 229.45 334.64 254.84 317.43 272.44 C 304.00 286.62 285.42 295.77 266.03 298.02 C 254.60 298.95 242.88 298.61 231.87 295.13 C 204.35 287.25 181.70 264.50 174.05 236.91 C 167.63 215.30 170.53 191.22 181.61 171.62 C 194.79 147.66 220.20 131.04 247.41 128.46 M 248.33 171.39 C 231.41 174.20 217.15 188.35 214.16 205.24 C 211.03 219.99 216.82 236.03 228.26 245.76 C 239.99 255.97 257.50 258.82 271.88 252.90 C 286.71 247.14 297.46 232.43 298.54 216.57 C 299.72 202.81 293.58 188.81 282.83 180.19 C 273.38 172.41 260.35 169.09 248.33 171.39 Z"
                              ></path>
                            </g>
                          </svg>
                          آدرس ها
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                          </svg>
                          مورد علاقه ها
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m8,12h-2c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm-2,4v-2h2v2s-2,0-2,0ZM19,2h-1v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-8v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-14,2h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3v-9h20v9c0,1.654-1.346,3-3,3Z"
                              class="jsx-c272283a359f5b7a"
                            ></path>
                          </svg>
                          زمان های رزرو شده
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                          >
                            <path d="m13.5,12c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-10,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm17,1.84v6.66c0,2.757-2.243,5-5,5h-5.917C6.082,24,.47,19.208.03,12.854c-.241-3.476,1.027-6.878,3.479-9.333S9.363-.206,12.836.029c6.26.425,11.164,5.833,11.164,12.312Zm-2,0c0-5.431-4.084-9.962-9.299-10.316-.229-.016-.458-.023-.686-.023-2.656,0-5.209,1.048-7.091,2.933-2.044,2.046-3.101,4.883-2.899,7.782.373,5.38,5.024,9.285,11.059,9.285h5.917c1.654,0,3-1.346,3-3v-6.66Z"></path>
                          </svg>
                          گفتگوی آنلاین
                        </Link>
                      </li>

                      <li className="mb-3">
                        <Link href="/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                          >
                            <path d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"></path>
                            <path d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"></path>
                          </svg>
                          خروج
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12 h-100">
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
              <div className="col-lg-7 col-md-5 ">
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
                            من در خدمتتونم میتونم به 2 روش در خدمتتون باشم
                          </div>
                          <div
                            style={{ marginInlineStart: "auto" }}
                            className="col-md-5 col-11 comment p-3 my-2"
                          >
                            میتونید برای کسب اطلاعات بیشتر یک تایم مشاوره خرید
                            ویدئویی رزرو کنید. و یا از طریق چت در خدمتتونم.
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
        .sidemenu {
          list-style: none;
          color: var(--bs-dark-text-emphasis);
          fill: var(--bs-dark-text-emphasis);
        }
        .sidemenu svg {
          width: 20px !important;
          height: 20px !important;
          margin-inline-end: 10px !important;
          fill: var(--bs-dark-text-emphasis) !important;
        }
        .sidemenu svg path {
          fill: var(--bs-dark-text-emphasis) !important;
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
          max-height: 435px;
        }
        @media (max-width: 767px) {
          .box2 {
            height: auto !important;
          }
        }
        .img {
          position: relative;
          border-radius: var(--bs-border-radius);
          overflow: hidden;
          height: 200px !important;
          background: var(--bs-tertiary-bg);
          width: 100%;
        }
        @media (min-width: 992px) {
          .col-lg:nth-child(1) {
            width: fit-content !important;
            max-width: fit-content !important;
          }
        }
        .galletyitem2::after {
          content: "...";
          z-index: 1;
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
        .bi-send-fill {
          transform: rotate(223deg);
          cursor: pointer;
        }
        .ltr .bi-send-fill {
          transform: rotate(45deg);
        }
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
        form {
          max-width: 300px;
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
        .main {
          background: var(--bs-tertiary-bg);
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default WebChat;
