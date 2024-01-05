import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Link from "next/link";
const weekDays = [
  "شنبه",
  "یک شنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];
const Reservation = () => {
  const page = {
    title: "رزرو زمان",
  };
  const [select, setSelect] = useState(new Date());
  const time = [
    {
      date: "12 / 08 / 1401",
      status: 1,
      time: "9",
    },
    {
      date: "12 / 08 / 1401",
      status: 1,
      time: "9:5",
    },
    {
      date: "12 / 08 / 1401",
      status: 0,
      time: "10",
    },
    {
      date: "12 / 08 / 1401",
      status: 0,
      time: "10:5",
    },

    {
      date: "12 / 08 / 1401",
      status: 0,
      time: "11",
    },

    {
      date: "12 / 08 / 1401",
      status: 0,
      time: "11:5",
    },
    {
      date: "12 / 08 / 1401",
      status: 1,
      time: "12",
    },

    {
      date: "12 / 08 / 1401",
      status: 0,
      time: "12:5",
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
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-12 box">
              <Calendar
                weekDays={weekDays}
                calendar={persian}
                locale={persian_fa}
                format={"YYYY/MM/DD"}
                onChange={setSelect}
              />
              <br />
              <div className="col-12 mt-3">
                <div className="row g-3">
                  {time &&
                    time.map((item, i) => (
                      <div className="col-lg-3 col-md-4 col-6" key={i}>
                        <button
                          className={
                            item.status && item.status == 1 ? "btn3" : "btn2"
                          }
                        >
                          {item.date ? item.date : ""}
                          <br />
                          {item.status && item.status == 1
                            ? "این محدوده زمانی رزرو شده است"
                            : item.time
                            ? " محدوده زمانی : " + item.time
                            : ""}
                        </button>
                      </div>
                    ))}
                </div>
                <div className="fild col-12 mt-4">
                  <label>
                    متن توضیحات شما در خصوص زمان رزرو شده و موضوع جلسه ...
                  </label>
                  <textarea />
                </div>
                <Link
                  className="btn text-white"
                  href="/videochat"
                  style={{
                    fontSize: "0.875em",
                    lineHeight: "2em",
                    width: "100%",
                    color: "#fff",
                    background: "var(--color1)",
                    paddingBlock: "13px",
                    borderColor: "var(--color1)",
                    marginTop: "4px",
                    borderRadius: "var(--bs-border-radius)",
                    width: "fit-content",
                    minWidth: "200px",
                    marginInlineStart: "auto",
                    display: "block",
                  }}
                >
                  رزرو زمان مورد نظر
                </Link>
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
        .btn {
          font-size: 0.875em;
          line-height: 2em;
          width: 100%;
          color: #fff !important;
          background: var(--color1);
          padding-block: 13px;
          border-color: var(--color1);
          margin-top: 4px;
          border-radius: var(--bs-border-radius);
          width: fit-content;
          min-width: 200px;
          margin-inline-start: auto;
          display: block;
        }
        .btn:hover {
          color: var(--color1);
        }
        .btn2 {
          font-size: 0.7rem;
          line-height: 2em;
          width: 100%;
          color: var(--color1) !important;
          background: transparent !important;
          padding-block: 13px;
          border: 2px solid var(--color1);
          margin-top: 4px;
          border-radius: var(--bs-border-radius);
        }
        .btn2:hover {
          color: #fff !important;
          background: var(--color1) !important;
        }
        .btn3 {
          font-size: 0.7rem;
          line-height: 2em;
          width: 100%;
          color: var(--bs-body-color) !important;
          background: transparent !important;
          padding-block: 13px;
          border: 2px solid var(--bs-body-color);
          margin-top: 4px;
          border-radius: var(--bs-border-radius);
          cursor: none;
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

export default Reservation;
