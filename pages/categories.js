import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
import Breadcrumb from "../components/directory_breadcrumb";

const Index = () => {
  const page = {
    title: "دسته بندی ها",
  };

  const breadcrumb = {
    title: "دسته بندی ها",
    link: null,
    child: null,
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
        <Breadcrumb
          dir={siteData.dir}
          content={breadcrumb}
          siteData={siteData}
        />
        <div className="container">
          <div className="row g-4 mb-4">
            {siteData.category &&
              siteData.category
                .filter((i) => i.parent == null)
                .map((item, i) => (
                  <div className="box col-12 p-3" key={i}>
                    <Link href={item.url ? item.url : ""}>
                      {" "}
                      <div className="boxheader  ">
                        <div
                          className="d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <Image
                            src={item.img ? item.img : ""}
                            width={45}
                            height={45}
                            fixed
                            alt=""
                            style={{
                              boxShadow: "var(--bs-box-shadow)",
                              borderRadius: "50%",
                              marginInlineEnd: "10px",
                              objectFit: "cover",
                            }}
                          />
                          {item && item.title ? item.title : ""} (5)
                        </div>
                      </div>
                    </Link>

                    <div className=" mt-4">
                      <div className="row g-3">
                        {siteData.category &&
                          siteData.category
                            .filter((x) => x.id && x.parent == item.id)
                            .map((item2, i2) => (
                              <Link
                                href=""
                                className="col-lg-3 col-md-3 col-6"
                                key={i2}
                              >
                                {" "}
                                <div>
                                  <Image
                                    src={item2.img ? item2.img : ""}
                                    width={30}
                                    height={30}
                                    alt=""
                                    fixed
                                    style={{
                                      boxShadow: "var(--bs-box-shadow)",
                                      borderRadius: "50%",
                                      marginInlineEnd: "10px",
                                      objectFit: "cover",
                                    }}
                                  />
                                  <span className="child">
                                    {item && item2.title ? item2.title : ""}
                                  </span>
                                </div>{" "}
                              </Link>
                            ))}
                      </div>
                    </div>
                  </div>
                ))}
          </div>{" "}
        </div>
        <Footer content={siteData.footer} />
      </div>
      <style jsx>{`
        .boxheader {
          justify-content: space-between;
          color: var(--bs-heading-color);
          font-size: 0.9rem !important;
          align-items: center;
        }
        .icon {
          width: 20px !important;
          height: 20px !important;
          fill: var(--bs-heading-color);
          margin-inline-end: 10px;
        }
        .child {
          color: var(--bs-heading-color);
        }
        .icon2 {
          min-width: 30px !important;
          min-height: 30px !important;
        }
        .box {
          // box-shadow: var(--bs-box-shadow);
          border-radius: var(--bs-border-radius);
          background-color: var(--bs-body-bg);
          border: 1px solid var(--bs-body-color) !important;
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
