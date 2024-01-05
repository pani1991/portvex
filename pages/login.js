import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
import Image from "next/image";
const Index = () => {
  const page = {
    title: "صفحه ورود به حساب کاربری",
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
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-6 col-md-7 col-11 mx-auto box">
              <form className="mx-auto">
                <div className="row g-4">
                  <div className="col-12">
                    <h4 className="h6 text-center">ورود به حساب کاربری</h4>
                  </div>
                  <div className="col-12">
                    <div className="fild">
                      <label>نام کاربری</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="fild">
                      <label>گذرواژه</label>
                      <input type="text" className="" />
                      {/* <span className="error">متن ارور</span> */}
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btnline">
                      ورود به حساب کاربری با گوگل{" "}
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
                    <button className="btn"> ورود به حساب کاربری</button>
                  </div>
                  <div
                    className="col-12 d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Link href="/restpassword">فراموشی رمز عبور</Link>
                    <Link href="/singup"> ثبت نام</Link>
                  </div>
                </div>
              </form>
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
        form {
          max-width: 300px;
        }
        .box {
          padding-block: 50px;
          background: var(--bs-body-bg);
          box-shadow: var(--bs-box-shadow);
          border-radius: var(--bs-border-radius);
        }
        .main {
          background: var(--bs-tertiary-bg);
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Index;
