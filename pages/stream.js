import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";

const Index = () => {
  const page = {
    title: "پخش برنامه های معرفی محصول",
  };
  const date = [
    { date: "21 / 08 / 1402" },
    { date: "20 / 08 / 1402" },
    { date: "19 / 08 / 1402" },
    { date: "18 / 08 / 1402" },
  ];
  const [tab, settab] = useState(date[0].date);
  const content = [
    {
      img: "./file/202310070750265026.jpg",
      title: "پخش زنده ی ابزار فروش",
      // dsc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت ف",
      link: "/live",
      date: "21 / 08 / 1402",
    },
    {
      img: "./file/20231008031208128.jpg",
      title: "پخش زنده ی مد و پوشاک",
      // dsc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت ف",
      link: "/live",
      date: "21 / 08 / 1402",
    },
    {
      img: "./file/2023100707030333.jpg",
      title: "پخش زنده ی محصولات دیجیتال",
      // dsc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت ف",
      link: "/live",
      date: "21 / 08 / 1402",
    },
    {
      img: "./file/202310070729232923.jpg",
      title: "پخش زنده ی محصولات گیمینگ",
      // dsc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت ف",
      link: "/live",
      date: "21 / 08 / 1402",
    },
    {
      img: "./file/202310070729232923.jpg",
      title: "پخش زنده ی محصولات گیمینگ",
      // dsc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت ف",
      link: "/live",
      date: "20 / 08 / 1402",
    },

    {
      img: "./file/2023100707030333.jpg",
      title: "پخش زنده ی محصولات دیجیتال",
      // dsc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت ف",
      link: "/live",
      date: "19 / 08 / 1402",
    },
  ];
  console.log(tab);
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
      <div
        className="main"
        style={{
          background: "rgb(33, 30, 63)",
        }}
      >
        <Menu content={siteData.menu} />
        <div
          className="imgbg"
          style={{
            background: "url(./file/202309150757585758.png)",
            backgroundSize: "100% auto",
          }}
        >
          <div className="container" style={{ paddingBlock: "50px" }}>
            <div className="row">
              <div className="col-12  mb-4">
                <h1 className=" text-white">محصولات</h1>

                <div className="text-white mt-4">
                  <p>خریدی به صرفه و مطمئن</p>
                </div>
                {/* <button className="calendar mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25"
                  >
                    <path d="m8,12h-2c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm-2,4v-2h2v2s-2,0-2,0ZM19,2h-1v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-8v-1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-14,2h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3v-9h20v9c0,1.654-1.346,3-3,3Z"></path>
                  </svg>
                  جدول زمانی برنامه های امروز
                </button> */}
              </div>
            </div>
            <ul className="time row my-4 text-center p-0 m-0">
              {date &&
                date.map((item, i) => (
                  <li
                    className={tab == item.date ? "col-3 active" : "col-3"}
                    key={i}
                    onClick={() => settab(item.date ? item.date : "")}
                  >
                    {item.date ? item.date : ""}
                  </li>
                ))}
            </ul>
            <div className="row g-4 py-5">
              {content &&
                content
                  .filter((i) => i.date == tab)
                  .map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-4 col-6">
                      <Link href={item.link ? item.link : ""}>
                        <div className="box ">
                          <div
                            className="img"
                            style={{
                              background: `url(${item.img ? item.img : ""})`,
                            }}
                          ></div>
                          <div className="text p-3">
                            <h6 className="">{item.title ? item.title : ""}</h6>
                            <p className="mb-0 pb-0">
                              {item.dsc ? item.dsc : ""}
                            </p>
                            <button className="btn mt-3">
                              مشاهده پخش{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                                fill="var(--bs-light-text-emphasis)"
                              >
                                <path d="m16.395,10.122l-5.192-2.843c-.673-.379-1.473-.372-2.138.017-.667.39-1.064,1.083-1.064,1.855v5.699c0,.772.397,1.465,1.064,1.855.34.199.714.297,1.087.297.358,0,.716-.091,1.041-.274l5.212-2.854c.687-.386,1.096-1.086,1.096-1.873s-.409-1.487-1.105-1.878Zm-.961,2.003l-5.212,2.855c-.019.01-.077.042-.147-.001-.074-.043-.074-.107-.074-.128v-5.699c0-.021,0-.085.074-.128.027-.016.052-.021.074-.021.036,0,.065.016.083.026l5.192,2.844c.019.011.076.043.076.13s-.058.119-.066.125ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <Footer content={siteData.footer} />
      </div>
      <style jsx>{`
        .btn {
          width: 100%;
          font-size: 0.8rem;
          display: flex;
          justify-content: space-between;
        }
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-align: justify;
        }
        h5 {
          color: var(--bs-dark-text-emphasis);
        }
        .box {
          border-radius: var(--bs-border-radius);
          overflow: hidden;
          background: var(--bs-body-bg);
        }
        .img {
          padding-top: 90%;
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
        .time li {
          background: #2d2953;
          list-style: none;
          font-size: 1rem;
          padding: 10px;
          cursor: pointer;
        }
        .time li.active,
        .time li:hover {
          color: #fff;
          background: var(--color1);
        }
        .time {
          border-radius: var(--bs-border-radius);
          overflow: hidden;
        }
        .imgbg {
          background-repeat: no-repeat !important;
        }
        .calendar svg {
          fill: #fff;
          margin-inline-end: 10px;
        }
        .calendar {
          font-size: 0.8rem;
          border-radius: 25px;
          border: 2px solid #fff;
          color: #fff;
          background: transparent;
          padding: 10px 15px;
        }
        .main {
          background: var(--bs-tertiary-bg);
          min-height: 100vh;
        }
        .banners {
          padding-block: 50px;
        }
      `}</style>
    </div>
  );
};

export default Index;
