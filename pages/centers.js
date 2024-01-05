import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
import Breadcrumb from "../components/directory_breadcrumb";
import Box from "../components/directory_centerRow/box";
import Banner from "../components/directory_banner";
const Index = () => {
  const page = {
    title: "استان ها",
  };
  const breadcrumb = {
    title: "استان ها",
    link: null,
    child: null,
  };
  const [drop, setDrop] = useState(1);
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
  const content = [
    {
      img: "./file/1397011222134298713770774.jpg",
      title: "آذربایجان غربی",
      company: "26",
      poroduct: "107",
      flag: null,
    },
    {
      img: "./file/azarbayejan.jfif",
      title: "آذربایجان شرقی",
      company: "56",
      poroduct: "89",
      flag: "./file/Flag_of_the_United_Arab_Emirates.svg.png",
    },
    {
      img: "./file/Mashhad-guide-jpg.webp",
      title: "مشهد",
      company: "206",
      poroduct: "450",
      flag: "./file/download (1).png",
    },
    {
      img: "./file/shiraz.jfif",
      title: "شیراز",
      company: "51",
      poroduct: "227",
      flag: "./file/Flag_of_the_United_Arab_Emirates.svg.png",
    },
    {
      img: "./file/tehran.png",
      title: "تهران",
      company: "126",
      poroduct: "1107",
      flag: null,
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
          <div className="row g-4">
            {content &&
              content.map((item, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={i}>
                  <Box dir={siteData.dir} content={item} i={i} />
                </div>
              ))}
          </div>
        </div>
        <Banner content={banner} siteData={siteData} />
        <Footer content={siteData.footer} />
      </div>
      <style jsx>{`
        .filter ul {
          list-style: none;
          margin: 0px;
          padding: 0px;
          font-size: 0.9em;
        }
        .filter ul li label {
          display: flex;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .filter ul li input {
          margin-inline-end: 10px;
          width: 17px;
          height: 17px;
        }
        .filter ul .icon {
          max-width: 13px;
          max-height: 13px;
          display: inline-block !important;
          fill: var(--bs-body-color) !important;
        }
        .filter span {
          color: var(--color6);
          fill: var(--color6);
          font-size: 0.8em;
          cursor: pointer;
          margin-inline-end: 5px;
          align-items: center;
        }
        .filter span svg {
          margin-inline-end: 3px;
        }
        .box {
          box-shadow: var(--bs-box-shadow);
          border-radius: var(--bs-border-radius);
          background-color: var(--bs-body-bg);
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
