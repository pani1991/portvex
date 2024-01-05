import React, { useState } from "react";
import { useRouter } from "next/router";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
import Breadcrumb from "../components/directory_breadcrumb";
import Banner from "../components/directory_banner";
const Cart = () => {
  const router = useRouter();
  const page = {
    title: "سبدخرید",
  };
  const breadcrumb = {
    title: "سبدخرید",
    link: null,
    child: null,
  };
  const banner = [
    {
      img: "./file/Schon-Lavender-Extract-Relaxing-Body-Wash.png",
      link: "/",
    },
    {
      img: "./file/Schon-Hydrating-With-Avocado-Extract-Shampoo.png",
      link: "/",
    },
    {
      img: "./file/Schon-Hand-And-Face-Cream..png",
      link: "/",
    },
    {
      img: "./file/Schon-Daily-Defense-Foundation.png",
      link: "/",
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
        <Breadcrumb
          dir={siteData.dir}
          content={breadcrumb}
          siteData={siteData}
        />
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-8 col-md-7">
              <div className="box p-4">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="col-12 delete">
                      <span className="d-inline-flex">
                        حذف محصول{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                          width="10"
                          height="10"
                        >
                          <path d="m15.707,9.707l-2.293,2.293,2.293,2.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Zm8.293,2.293c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="col-12 d-flex">
                      <div
                        style={{
                          marginInlineEnd: "15px",
                        }}
                      >
                        <Image
                          fixed
                          src="./file/fef8aad9dc4eee8cc16f89b2d9eaf8fc6f537a30_1657346618.webp"
                          alt="نام محصول"
                          width={120}
                          height={120}
                          style={{
                            borderRadius: "var(--bs-border-radius)",
                            minWidth: "120px",
                          }}
                        />
                      </div>
                      <div className="width">
                        <h3 className="h6 mb-3">تلویزیون 55 اینچ ال جی مدل</h3>
                        <div className="inputnumber my-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                          >
                            <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"></path>
                          </svg>
                          <input placeholder="1" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-dash-lg"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                            ></path>
                          </svg>
                        </div>
                        <span className="d-block mb-2 pt-1 text-danger">
                          تخفیف : (۲۴٪) ۸۶,۴۰۰ تومان
                        </span>
                        <span className="big2 d-block text2">
                          {" "}
                          ۲۱۴,۹۶۰ تومان
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="box p-4">
                <div className="d-flex mb-3 justify-content">
                  <span>قیمت کالاها (۳)</span>
                  <span className="">۹۳۲,۵۰۰ تومان</span>
                </div>
                <div className="d-flex mb-3 justify-content text2">
                  <span>جمع سبد خرید</span>
                  <span className="">۷۱۷,۵۴۰ تومان</span>
                </div>
                <div className="d-flex mb-3 justify-content text-danger">
                  <span>سود شما از خرید</span>
                  <span>
                    <span className="big">(۲۴٪) ۲۱۴,۹۶۰ </span> تومان
                  </span>
                </div>
                <div className="col-12">
                  <button className="btn">افزودن به سبد خرید</button>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
        <Banner content={banner} siteData={siteData} />
        <Footer content={siteData.footer} />
      </div>
      <style jsx>{`
        .width {
          width: -webkit-fill-available;
          width: -moz-available;
        }
        .inputnumber svg {
          width: 15px;
          height: 15px;
          fill: var(--color6) !important;
          cursor: pointer;
        }
        .inputnumber input {
          border-radius: var(--bs-border-radius);
          border: 0px solid transparent;
          font-size: 18px;
          width: 60px;
          color: var(--bs-body-color);
          text-align: center;
        }
        .inputnumber {
          width: fit-content;
          border: 1px solid var(--color5);
          padding: 2px 9px;
          display: flex;
          align-items: center;
          border-radius: var(--bs-border-radius);
        }
        .big2 {
          font-size: large;
          font-weight: 700;
        }
        .delete span {
          color: var(--color6);
          fill: var(--color6);
          font-size: 0.8em;
          cursor: pointer;
          -webkit-margin-end: 5px;
          -moz-margin-end: 5px;
          margin-inline-end: 5px;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -moz-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .delete span svg {
          margin-inline-start: 3px;
        }
        .delete {
          text-align: end;
        }
        .text-danger {
          color: var(--color6) !important;
        }
        .btn {
          font-size: 0.875em;
          line-height: 2em;
          width: 100%;
          color: #fff;
          background: var(--color6);
          padding-block: 10.5px;
          border-color: var(--color6);
          margin-top: 4px;
        }
        .btn:hover {
          color: var(--color6) !important;
          border-color: var(--color6) !important;
        }
        .big {
          font-size: larger;
          font-weight: 700;
        }
        .text2 {
          color: var(--bs-dark-text-emphasis);
        }
        .justify-content {
          justify-content: space-between;
        }
        .box {
          box-shadow: var(--bs-box-shadow);
          border-radius: var(--bs-border-radius);
          background: var(--bs-body-bg);
        }
        .main {
          background: var(--bs-tertiary-bg);
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Cart;
