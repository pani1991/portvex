import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/api";
import Alert from "./alert";
const Footer = ({ content }) => {
  return (
    <div
      className={
        "footer container-fluid p-0 " + " " + (siteData.dir ? siteData.dir : "")
      }
    >
      <Alert dir={siteData.dir} content={content.banner} />

      <div className="footerbox">
        <div className="container pb-3 pt-5">
          <div className="row g-3">
            <div className="col-md-6 aboutlinks">
              <div className="d-flex col-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  width="35px"
                  height="35px"
                  fill="var(--color1)"
                  style={{ marginInlineEnd: "15px" }}
                >
                  <path d="M22.17,1.82l-1.05-.91c-1.21-1.21-3.17-1.21-4.38,0-.03,.03-1.88,2.44-1.88,2.44-1.14,1.2-1.14,3.09,0,4.28l1.16,1.46c-1.46,3.31-3.73,5.59-6.93,6.95l-1.46-1.17c-1.19-1.15-3.09-1.15-4.28,0,0,0-2.41,1.85-2.44,1.88-1.21,1.21-1.21,3.17-.05,4.33l1,1.15c1.15,1.15,2.7,1.78,4.38,1.78,7.64,0,17.76-10.13,17.76-17.76,0-1.67-.63-3.23-1.83-4.42ZM6.24,22c-1.14,0-2.19-.42-2.91-1.15l-1-1.15c-.41-.41-.43-1.08-.04-1.51,0,0,2.39-1.84,2.42-1.87,.41-.41,1.13-.41,1.55,0,.03,.03,2.04,1.64,2.04,1.64,.28,.22,.65,.28,.98,.15,4.14-1.58,7.11-4.54,8.82-8.81,.13-.33,.08-.71-.15-1,0,0-1.61-2.02-1.63-2.04-.43-.43-.43-1.12,0-1.55,.03-.03,1.87-2.42,1.87-2.42,.43-.39,1.1-.38,1.56,.08l1.05,.91c.77,.77,1.2,1.82,1.2,2.96,0,6.96-9.77,15.76-15.76,15.76Z"></path>
                </svg>
                <div className="width">
                  <div
                    className="d-flex"
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <strong
                      className="d-inline-block"
                      style={{
                        color: "var(--bs-heading-color)",
                        fontSize: "larger",
                      }}
                    >
                      09146003002
                    </strong>{" "}
                    <span>info@portvex1400.ir</span>
                  </div>
                  <p>24 ساعت شبانه روز تیم پشتیبانی ما پسخگوی شما خواهند بود</p>
                </div>
              </div>

              <p className="mb-2 mt-2">
                با عضویت در خبرنامه ی Portvex از آخرین تخفیفات مطلع گردید
              </p>
              <div
                className="col-12 d-flex form"
                style={{ alignItems: "flex-end" }}
              >
                <div className="fild">
                  <label>ایمیل</label>
                  <input type="text" />
                </div>
                <button className="btn">عضویت</button>
              </div>
              <div className="col-12 mt-2" style={{ textAlign: "end" }}>
                {siteData &&
                  siteData.social &&
                  siteData.social.map((item, i) => (
                    <a href={item && item.link ? item.link : ""} key={i}>
                      <span
                        title={item && item.title ? item.title : ""}
                        className="icon d-inline"
                        dangerouslySetInnerHTML={{
                          __html: item && item.icon ? item.icon : "",
                        }}
                      />
                    </a>
                  ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="aboutbox p-3 h-100">
                <h6 className="mb-2">
                  {siteData.footer && siteData.footer.about_title
                    ? siteData.footer.about_title
                    : ""}
                </h6>

                <div
                  className=""
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      siteData.footer && siteData.footer.about_dsc
                        ? siteData.footer.about_dsc
                        : "",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row g-3 mt-4">
            <hr />
            {siteData.footer &&
              siteData.footer.about_links &&
              siteData.footer.about_links.map((item, i) => (
                <div className="col-lg col-md-3 col-6 aboutlinks" key={i}>
                  <h6>{item && item.title ? item.title : ""}</h6>
                  <ul className="p-0 m-0">
                    {item &&
                      item.items &&
                      item.items.map((item2, i2) => (
                        <li key={i2}>
                          <a href={item2 && item2.link ? item2.link : ""}>
                            {item2 && item2.title ? item2.title : ""}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="footerbox copyright">
        <div className="container py-3">
          <a
            href={
              siteData.footer && siteData.footer.copyright_link
                ? siteData.footer.copyright_link
                : ""
            }
          >
            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html:
                  siteData.footer && siteData.footer.copyright
                    ? siteData.footer.copyright
                    : "",
              }}
            />
          </a>
        </div>
      </div>
      <style jsx>{`
      .width{
        width: -webkit-fill-available;
        width: -moz-available;
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
        .aboutbox {
          background: var(--bs-tertiary-bg);
          border-radius: var(--bs-border-radius);
        }
        .fild {
          width: -webkit-fill-available;
          width: -moz-available;
        }
        .form .btn {
          background: var(--color1);
          color: #fff !important;
          fill: #fff !important;
          display: flex;
          align-items: center;
          margin-inline-start: 10px;
          font-size: 0.7rem;
          height: 46px;
          min-width: 90px;
          justify-content: center;
          width: 35% !important;
        }
        .form .btn:hover {
          color: var(--color1) !important;
          background: transparent;
          border-color:var(--color1) !important;
        }
        .icon {
          color: var(--bs-light-text-emphasis);
          font-size: 0.7em;
          width: 25px;
          height: 25px;
          display: inline-block !important;
          margin-inline-start: 10px;
          fill: var(--bs-light-text-emphasis);
        }
        .aboutlinks ul li {
          list-style: none;
          margin-top: 8px;
        }
        .copyright {
          font-size: 10px;
        }
        .footerbox .box {
          border-radius: var(--bs-border-radius);
          border: 1px solid var(--bs-light-text-emphasis);
        }
        .footerbox .box2 {
          padding-top: 100% !important;
          background-repeat: no-repeat !important;
          background-size: contain !important;
          background-position: center !important;
        }

        .footerbox {
          background: var(--bs-body-bg);
          border-top: 1px solid var(--bs-tertiary-bg) !important;
        }
        .app::before {
          content: "";
          display: block;
          position: absolute;
          top: 28px;
          width: 200%;
          left: 0px;
          background: var(--bs-body-bg);
          padding-top: 50%;
          z-index: 1;
          transform: rotate(354deg);
          box-shadow: inset rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        }
        .appdsc {
          max-width: 450px;
        }
        .container {
          z-index: 2;
          position: relative;
        }
        .app {
          overflow: hidden;
        }
        .app .btn {
          background: var(--color1);
          color: #fff !important;
          fill: #fff !important;
          display: flex;
          align-items: center;
        }
        .app .btn .icon {
          width: 30px;
          height: 30px;
          fill: #fff !important;
          display: flex;
          margin-inline-end: 7px;
          color: #fff !important;
        }
        .app .btn:hover {
          color: var(--color1) !important;
        }
        .app .btn small {
          font-size: 10px;
          display: block;
          text-align: start;
        }
        @media (max-width: 576px) {
          .app::before {
            height: calc(100% + 300px);
          }
          .app {
            padding-top: 88px !important;
            text-align: center;
          }
          .appdsc {
            max-width: 100%;
          }
        }
        .footer {
          overflow: hidden;
          background: var(--bs-tertiary-bg);
        }
      `}</style>
    </div>
  );
};
export default Footer;
