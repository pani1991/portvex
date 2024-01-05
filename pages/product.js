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
import ProductRow from "../components/directory_productRow";
import Banner from "../components/directory_banner";
const Product = () => {
  // const router = useRouter();
  const content = {
    id: 1,
    title: "تابلو برق صنعتی",
    img: "/file/img_33217_1.jpg",
    price: "2500000",
    lastPrice: "2110000",
    category: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22,15.184V8a5.006,5.006,0,0,0-5-5H7A5.006,5.006,0,0,0,2,8v7.184A2.993,2.993,0,0,0,3,21H21a2.993,2.993,0,0,0,1-5.816ZM7,5H17a3,3,0,0,1,3,3v7H15.849a2,2,0,0,0-1.528.708L14.074,16H9.925l-.246-.292A2,2,0,0,0,8.151,15H4V8A3,3,0,0,1,7,5ZM21,19H3a1,1,0,0,1,0-2H8.152l.246.292A2,2,0,0,0,9.925,18h4.149a2,2,0,0,0,1.528-.708L15.849,17H21a1,1,0,0,1,0,2Z"/></svg>`,
      title: "کالای دیجیتال",
    },
    shop: {
      name: "نام فروشگاه",
      logo: "./file/shop.png",
    },

    gallery: [
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
    ],

    // attributes : [
    //   {
    //     title:"",

    //   },
    // ],
  };
  const page = {
    title: content && content.title ? content.title : "",
  };
  const [tab, setTab] = useState(1);
  const [modal, setModal] = useState(null);
  const [selectImage, setSelectImage] = useState(null);
  const breadcrumb = {
    title: "فروشگاه",
    link:
      siteData && siteData.urls && siteData.urls.products
        ? "/" + siteData.urls.products
        : "",
    child: {
      title: content && content.title ? content.title : "",
    },
  };
  const product = [
    {
      id: 1,
      title: "دستگاه چانه گرد کن مخروطی تمام اتوماتیک حرفه ای",
      img: "/file/110732667.webp",
      price: "2000000",
      lastPrice: null,
      category: {
        id: 14,
        title: "تجهیزات و ماشین آلات صنعتی",
        icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 384.154 384.154" xml:space="preserve">
     <g id="XMLID_999_">
       <g>
         <g>
           <path d="M334.154,259.41h-17.077v-37.863h-60v37.863h-49.25v-37.863h-60v37.863h-52.75V66.744h52.359
             c3.171,9.612,10.779,17.22,20.391,20.391v27.472h-8.664l-0.768,31.698l-34.104,22.839l22.054,31.178l16.328-11.551
             l-10.205-14.426l25.358-16.981l25.358,16.981l-10.205,14.426l16.328,11.551l22.055-31.178l-34.104-22.839l-0.768-31.698h-8.664
             V87.135c12.761-4.21,22-16.239,22-30.391c0-17.645-14.355-32-32-32c-14.153,0-26.181,9.239-30.391,22H95.077H72.494H30.077
             v216.818C12.395,271.276,0,288.919,0,309.41c0,27.57,22.43,50,50,50h284.154c27.57,0,50-22.43,50-50
             S361.725,259.41,334.154,259.41z M177.827,44.744c6.617,0,12,5.383,12,12s-5.383,12-12,12s-12-5.383-12-12
             S171.21,44.744,177.827,44.744z M277.077,241.547h20v17.863h-20V241.547z M167.827,241.547h20v17.863h-20V241.547z
              M50.077,66.744h22.417h2.583V259.41h-25V66.744z M334.154,339.41H50c-16.542,0-30-13.458-30-30s13.458-30,30-30h284.154
             c16.542,0,30,13.458,30,30S350.696,339.41,334.154,339.41z"/>
           <rect x="53.827" y="299.41" width="35.333" height="20"/>
           <rect x="134.216" y="299.41" width="35.333" height="20"/>
           <rect x="214.604" y="299.41" width="35.334" height="20"/>
           <rect x="294.994" y="299.41" width="35.333" height="20"/>
         </g>
       </g>
     </g>
     </svg>`,
        url: "categories",
        img: "/file/download (2).jfif",
        parent: null,
        slider: 1,
        home: null,
      },

      min: 2,
    },
    {
      id: 1,
      title: "اسیاب ۰۲۱ و ماشین اسپرسو اسکاسو",
      img: "/file/img_35777_1.jpg",
      price: "40000000",
      lastPrice: null,
      category: {
        id: 14,
        title: "تجهیزات و ماشین آلات صنعتی",
        icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 384.154 384.154" xml:space="preserve"><g id="XMLID_999_"><g><g><path d="M334.154,259.41h-17.077v-37.863h-60v37.863h-49.25v-37.863h-60v37.863h-52.75V66.744h52.359 c3.171,9.612,10.779,17.22,20.391,20.391v27.472h-8.664l-0.768,31.698l-34.104,22.839l22.054,31.178l16.328-11.551 l-10.205-14.426l25.358-16.981l25.358,16.981l-10.205,14.426l16.328,11.551l22.055-31.178l-34.104-22.839l-0.768-31.698h-8.664 V87.135c12.761-4.21,22-16.239,22-30.391c0-17.645-14.355-32-32-32c-14.153,0-26.181,9.239-30.391,22H95.077H72.494H30.077 v216.818C12.395,271.276,0,288.919,0,309.41c0,27.57,22.43,50,50,50h284.154c27.57,0,50-22.43,50-50 S361.725,259.41,334.154,259.41z M177.827,44.744c6.617,0,12,5.383,12,12s-5.383,12-12,12s-12-5.383-12-12 S171.21,44.744,177.827,44.744z M277.077,241.547h20v17.863h-20V241.547z M167.827,241.547h20v17.863h-20V241.547z M50.077,66.744h22.417h2.583V259.41h-25V66.744z M334.154,339.41H50c-16.542,0-30-13.458-30-30s13.458-30,30-30h284.154 c16.542,0,30,13.458,30,30S350.696,339.41,334.154,339.41z"/><rect x="53.827" y="299.41" width="35.333" height="20"/><rect x="134.216" y="299.41" width="35.333" height="20"/><rect x="214.604" y="299.41" width="35.334" height="20"/><rect x="294.994" y="299.41" width="35.333" height="20"/></g></g></g></svg>`,
        url: "categories",
        img: "/file/download (2).jfif",
        parent: null,
        slider: 1,
        home: null,
      },

      min: 2,
    },
    {
      id: 1,
      title: "پنل خورشیدی المانی ",
      img: "/file/img_35761_1.jpg",
      price: "550000",
      lastPrice: null,
      category: {
        id: 14,
        title: "تجهیزات و ماشین آلات صنعتی",
        icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 384.154 384.154" xml:space="preserve"><g id="XMLID_999_"><g><g><path d="M334.154,259.41h-17.077v-37.863h-60v37.863h-49.25v-37.863h-60v37.863h-52.75V66.744h52.359 c3.171,9.612,10.779,17.22,20.391,20.391v27.472h-8.664l-0.768,31.698l-34.104,22.839l22.054,31.178l16.328-11.551 l-10.205-14.426l25.358-16.981l25.358,16.981l-10.205,14.426l16.328,11.551l22.055-31.178l-34.104-22.839l-0.768-31.698h-8.664 V87.135c12.761-4.21,22-16.239,22-30.391c0-17.645-14.355-32-32-32c-14.153,0-26.181,9.239-30.391,22H95.077H72.494H30.077 v216.818C12.395,271.276,0,288.919,0,309.41c0,27.57,22.43,50,50,50h284.154c27.57,0,50-22.43,50-50 S361.725,259.41,334.154,259.41z M177.827,44.744c6.617,0,12,5.383,12,12s-5.383,12-12,12s-12-5.383-12-12 S171.21,44.744,177.827,44.744z M277.077,241.547h20v17.863h-20V241.547z M167.827,241.547h20v17.863h-20V241.547z M50.077,66.744h22.417h2.583V259.41h-25V66.744z M334.154,339.41H50c-16.542,0-30-13.458-30-30s13.458-30,30-30h284.154 c16.542,0,30,13.458,30,30S350.696,339.41,334.154,339.41z"/><rect x="53.827" y="299.41" width="35.333" height="20"/><rect x="134.216" y="299.41" width="35.333" height="20"/><rect x="214.604" y="299.41" width="35.334" height="20"/><rect x="294.994" y="299.41" width="35.333" height="20"/></g></g></g></svg>`,
        url: "categories",
        img: "/file/download (2).jfif",
        parent: null,
        slider: 1,
        home: null,
      },

      min: 1,
    },
    {
      id: 1,
      title: "یو پی اس ذخیره برق فاراتل UPS (اداری ، آزمایشگاه)",
      img: "/file/img_34894_1.jpg",
      price: "36360000",
      lastPrice: null,
      category: {
        id: 14,
        title: "تجهیزات و ماشین آلات صنعتی",
        icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 384.154 384.154" xml:space="preserve"><g id="XMLID_999_"><g><g><path d="M334.154,259.41h-17.077v-37.863h-60v37.863h-49.25v-37.863h-60v37.863h-52.75V66.744h52.359 c3.171,9.612,10.779,17.22,20.391,20.391v27.472h-8.664l-0.768,31.698l-34.104,22.839l22.054,31.178l16.328-11.551 l-10.205-14.426l25.358-16.981l25.358,16.981l-10.205,14.426l16.328,11.551l22.055-31.178l-34.104-22.839l-0.768-31.698h-8.664 V87.135c12.761-4.21,22-16.239,22-30.391c0-17.645-14.355-32-32-32c-14.153,0-26.181,9.239-30.391,22H95.077H72.494H30.077 v216.818C12.395,271.276,0,288.919,0,309.41c0,27.57,22.43,50,50,50h284.154c27.57,0,50-22.43,50-50 S361.725,259.41,334.154,259.41z M177.827,44.744c6.617,0,12,5.383,12,12s-5.383,12-12,12s-12-5.383-12-12 S171.21,44.744,177.827,44.744z M277.077,241.547h20v17.863h-20V241.547z M167.827,241.547h20v17.863h-20V241.547z M50.077,66.744h22.417h2.583V259.41h-25V66.744z M334.154,339.41H50c-16.542,0-30-13.458-30-30s13.458-30,30-30h284.154 c16.542,0,30,13.458,30,30S350.696,339.41,334.154,339.41z"/><rect x="53.827" y="299.41" width="35.333" height="20"/><rect x="134.216" y="299.41" width="35.333" height="20"/><rect x="214.604" y="299.41" width="35.334" height="20"/><rect x="294.994" y="299.41" width="35.333" height="20"/></g></g></g></svg>`,
        url: "categories",
        img: "/file/download (2).jfif",
        parent: null,
        slider: 1,
        home: null,
      },

      min: 1,
    },
    {
      id: 1,
      title: "مینی فرز رونیکس مدل 3130",
      img: "/file/204788.webp",
      price: "1320000",
      lastPrice: null,
      category: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m17.979,13.024c-1.119-1.116-2.813-1.318-4.14-.607l-4.832-4.832v-3.086c0-1.013-.545-1.956-1.422-2.462L4.604.318C3.673-.22,2.492-.063,1.73.697L.705,1.724C-.056,2.483-.211,3.665.326,4.596l1.719,2.981h0c.506.878,1.45,1.423,2.462,1.423h3.086l4.826,4.826c-.278.508-.426,1.079-.426,1.674,0,.936.365,1.814,1.028,2.476l5.014,5c.658.656,1.554,1.024,2.48,1.024.985,0,2.088-.521,2.718-1.289,1.126-1.372.976-3.475-.341-4.787l-4.913-4.899ZM3.777,6.579l-1.719-2.982c-.086-.148-.061-.337.061-.459l1.025-1.026c.122-.121.311-.147.46-.061l2.98,1.72c.26.15.422.43.422.729v2.5h-2.5c-.3,0-.579-.161-.729-.421Zm17.91,14.863c-.276.337-.666.534-1.097.556-.421.02-.841-.139-1.142-.438l-5.014-5c-.284-.283-.44-.659-.44-1.06s.157-.776.44-1.06c.294-.293.681-.44,1.067-.44s.772.147,1.066.44l4.914,4.899c.596.595.687,1.518.207,2.103Zm-11.25-4.343c.39.392.389,1.024-.002,1.414l-4.477,4.462c-.658.656-1.553,1.024-2.48,1.024-.881,0-2.088-.521-2.718-1.29-1.125-1.371-.976-3.474.342-4.786l5.668-5.655c.39-.39,1.024-.39,1.414.002.39.391.389,1.024-.002,1.414l-5.669,5.655c-.596.595-.688,1.518-.208,2.102.277.338.667.535,1.098.557.426.019.841-.139,1.142-.438l4.478-4.462c.391-.39,1.023-.39,1.415.002Zm-.544-12.465C10.813,2.291,12.917.56,15.384.117c.863-.154,1.73-.157,2.579-.006.666.118,1.203.588,1.402,1.224.229.729,0,1.531-.612,2.145l-2.335,2.242c-.485.485-.564,1.261-.165,1.749.23.281.553.445.911.464.349.017.694-.112.947-.365l2.614-2.521c.486-.486,1.213-.667,1.893-.45.664.209,1.151.762,1.272,1.441.15.848.148,1.717-.006,2.581-.281,1.572-1.1,3.036-2.306,4.123-.191.172-.431.257-.669.257-.273,0-.546-.111-.743-.33-.37-.41-.337-1.043.073-1.413.877-.79,1.472-1.852,1.676-2.988.098-.548.112-1.095.043-1.632l-2.445,2.359c-.635.637-1.53.984-2.448.936-.916-.046-1.776-.481-2.36-1.195-1.042-1.274-.904-3.226.314-4.443l2.334-2.242.009-.009c-.535-.068-1.081-.054-1.625.044-1.788.32-3.313,1.577-3.982,3.279-.201.514-.782.767-1.296.565s-.768-.782-.565-1.296Z"></path></svg>`,
        title: "تجهیزات صنعتی",
      },
      min: 2,
    },
  ];
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
            <div className="col-12">
              <div className="row g-3">
                <div className="col-lg-9 col-md-7">
                  <div className=" box p-4">
                    <div className="row">
                      <div className="col-lg col-md-12 col-12">
                        <div className="img">
                          <div className="deadline">
                            پیشنهاد شگفت انگیز :
                            <span className="mx-1">۵۵ : ۲۳ : ۱۰ : ۱</span>
                          </div>
                          <span className="heart d-block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              id="Outline"
                              viewBox="0 0 24 24"
                              width="512"
                              height="512"
                            >
                              <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                            </svg>
                          </span>
                          <Image
                            fill
                            src={content && content.img ? content.img : ""}
                            alt={content && content.title ? content.title : ""}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <div className="gallery mt-3">
                          <div
                            className="row g-2 mx-auto p-0"
                            style={{
                              marginInline: "-0.25rem",
                            }}
                          >
                            {content &&
                              content.gallery &&
                              content.gallery.slice(0, 3).map((item, i) => (
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
                            {content &&
                              content.gallery &&
                              content.gallery.slice(3, 4).map((item, i) => (
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
                          </div>
                        </div>
                      </div>

                      <div className="col-lg col-12">
                        <h5>{content && content.title ? content.title : ""}</h5>
                        <div className="row">
                          <div className="col-12">
                            <div className="col-12 d-flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Filled"
                                viewBox="0 0 24 24"
                                width="12"
                                height="12"
                                fill="#fba722"
                              >
                                <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z"></path>
                              </svg>
                              <small className="mx-1">۴.۴</small>
                              <small className="mx-1">(۶۲۶)</small>
                              {"   •  "}
                              <small className="mx-2">۵۸۱ دیدگاه</small>
                              {"  •  "}
                              <small className="mx-2">۷۸ پرسش</small>
                            </div>
                            <div className="row attributes mt-3">
                              <div className="col-12">
                                رنگ :
                                <strong className="text-dark mx-1">مشکی</strong>
                              </div>
                              <div className="row w-100 mx-0">
                                <div className="d-flex p-0">
                                  <div
                                    className="attributesbox active"
                                    title="مشکی"
                                  >
                                    <div style={{ background: "#000" }}></div>
                                  </div>
                                  <div className="attributesbox" title="قرمز">
                                    <div style={{ background: "red" }}></div>
                                  </div>
                                  <div className="attributesbox" title="سفید">
                                    <div style={{ background: "#fff" }}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-2 attributesbox2">
                              ویژگی :
                              <ul className="m-0 p-0 mt-2">
                                <li>
                                  پایداری و قابلیت اطمینان :
                                  <strong className="mx-2">
                                    مطابقت با استانداردها و مقررات صنعتی
                                  </strong>
                                </li>
                                <li>
                                  قابلیت خوانایی و نمایش اطلاعات :
                                  <strong className="mx-2">
                                    نمایش وضعیت عملکرد مختلف با نمادها یا اعداد
                                    خوانا.
                                  </strong>
                                </li>
                                <li>
                                  مقاومت در برابر شرایط محیطی :
                                  <strong className="mx-2">
                                    مقاومت در برابر آب، گرد و غبار، شوک‌ها و
                                    ارتعاشات.
                                  </strong>
                                </li>
                                <li>
                                  قابلیت اتصال و اتصالات :
                                  <strong className="mx-2">
                                    پورت‌ها و ورودی‌های مختلف برای اتصال به سایر
                                    تجهیزات صنعتی.
                                  </strong>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ProductRow
                        content={product}
                        title={"سایر محصولات این فروشنده"}
                        dsc={"خریدی به صرفه و مطمئن"}
                      />
                      <div className="col-12 dsc pt-4">
                        <div className="d-flex tabs">
                          <span
                            className={tab == 1 ? "tab active" : "tab"}
                            onClick={() => setTab(tab == 1 ? 1 : 1)}
                          >
                            مشخصات
                          </span>
                          <span
                            className={tab == 2 ? "tab active" : "tab"}
                            onClick={() => setTab(tab == 2 ? 2 : 2)}
                          >
                            توضیحات
                          </span>
                        </div>
                        <div
                          className={
                            tab == 1 ? "respansive" : "respansive d-none"
                          }
                        >
                          <table className="my-2 w-100">
                            <tbody>
                              <tr className="">
                                <td className="title px-1 py-2">
                                  پایداری و قابلیت اطمینان :
                                </td>
                                <td className="px-1 py-2">
                                  مطابقت با استانداردها و مقررات صنعتی
                                </td>
                              </tr>
                              <tr>
                                <td className="title px-1 py-2">
                                  قابلیت خوانایی و نمایش اطلاعات :
                                </td>
                                <td className="px-1 py-2">
                                  نمایش وضعیت عملکرد مختلف با نمادها یا اعداد
                                  خوانا.
                                </td>
                              </tr>
                              <tr>
                                <td className="title px-1 py-2">
                                  مقاومت در برابر شرایط محیطی :
                                </td>
                                <td className="px-1 py-2">
                                  مقاومت در برابر آب، گرد و غبار، شوک‌ها و
                                  ارتعاشات.
                                </td>
                              </tr>
                              <tr>
                                <td className="title px-1 py-2">
                                  قابلیت اتصال و اتصالات :
                                </td>
                                <td className="px-1 py-2">
                                  پورت‌ها و ورودی‌های مختلف برای اتصال به سایر
                                  تجهیزات صنعتی.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={tab == 2 ? "detal" : "detal d-none"}>
                          <div className="mt-3">
                            تولید ومونتاژ انواع تابلو برق های صنعتی
                            <br />
                            <br />
                            مسکونی تجاری بیمارستانی وکارخانه های صنعتی
                            <br />
                            <br />
                            تابلوتوزیع_بانک خازن_تابلو برق چنج آور_بوسترپمپ
                            ابرسانی وآتش نشانی _تابلو برق اضطراری_تابلوبرق
                            اگزاست فن
                          </div>
                        </div>
                      </div>
                      <ProductRow
                        content={product}
                        title={"آخرین محصولات این فروشنده"}
                        dsc=""
                        link={0}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3  col-md-5">
                  <div>
                    <div className=" box p-4 price">
                      <div
                        className="d-flex follow"
                        style={{ justifyContent: "space-between" }}
                      >
                        <h6>فروشنده</h6>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                          >
                            <path d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"></path>
                          </svg>
                          دنبال کردن
                        </button>
                      </div>
                      <div className="mt-3">
                        <Link href="/company" className="d-flex">
                          <div
                            className="shop"
                            title="کالای صنعت ایران"
                            style={{
                              backgroundImage: `url(/./file/kala.jfif)`,
                            }}
                          ></div>
                          <div>
                            <small className="d-block">فروشگاه</small>
                            <strong>کالا صنعت ایران</strong>
                          </div>
                        </Link>
                      </div>
                      <div className="mobileprice">
                        <hr />
                        <div
                          className="d-flex mt-3"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="d-flex price3">
                            از
                            <h6 className="mx-1">
                              {"2100000"
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </h6>
                            <small>تومان</small>
                          </div>
                          -
                          <div className="d-flex price3">
                            تا
                            <h6 className="mx-1">
                              {"2800000"
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </h6>
                            <small>تومان</small>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn">ارسال درخواست خرید</button>
                        </div>
                      </div>
                    </div>
                    {/* <div className=" box p-4 mt-3 ">
                      <a href="" className="link">
                        Shenzhen N+1 Intelligent Technology Co. Ltd
                      </a>
                      <div className="d-flex mt-3 follow">
                    
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                          >
                            <path d="m13.5,12c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-10,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm17,1.84v6.66c0,2.757-2.243,5-5,5h-5.917C6.082,24,.47,19.208.03,12.854c-.241-3.476,1.027-6.878,3.479-9.333S9.363-.206,12.836.029c6.26.425,11.164,5.833,11.164,12.312Zm-2,0c0-5.431-4.084-9.962-9.299-10.316-.229-.016-.458-.023-.686-.023-2.656,0-5.209,1.048-7.091,2.933-2.044,2.046-3.101,4.883-2.899,7.782.373,5.38,5.024,9.285,11.059,9.285h5.917c1.654,0,3-1.346,3-3v-6.66Z"></path>
                          </svg>{" "}
                          Chat
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <h5 className="mb-4">
                  {content && content.title ? content.title : ""}
                </h5>
                <div className="row g-3">
                  <div className="col-sm-6 col-9">
                    <Image
                      fixed
                      src={selectImage ? selectImage : ""}
                      alt={content && content.title ? content.title : ""}
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
                        {content &&
                          content.gallery &&
                          content.gallery.map((item, i) => (
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

        <Banner content={banner} siteData={siteData} />
        <Footer content={siteData.footer} />
      </div>

      <ul className="tool-list">
        <li className="mb-3">
          <Link href="/webchat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className="d-block mx-auto mb-1"
              width="25px"
              height="25px"
            >
              <path d="m13.5,12c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-10,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm17,1.84v6.66c0,2.757-2.243,5-5,5h-5.917C6.082,24,.47,19.208.03,12.854c-.241-3.476,1.027-6.878,3.479-9.333S9.363-.206,12.836.029c6.26.425,11.164,5.833,11.164,12.312Zm-2,0c0-5.431-4.084-9.962-9.299-10.316-.229-.016-.458-.023-.686-.023-2.656,0-5.209,1.048-7.091,2.933-2.044,2.046-3.101,4.883-2.899,7.782.373,5.38,5.024,9.285,11.059,9.285h5.917c1.654,0,3-1.346,3-3v-6.66Z"></path>
            </svg>
            گفتگوی انلاین
          </Link>
        </li>
        <li className="mb-3">
          <Link href="/videochat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className="d-block mx-auto mb-1"
              width="25px"
              height="25px"
            >
              <path d="m8.5,9.5c0,.551.128,1.073.356,1.537-.49.628-.795,1.407-.836,2.256-.941-.988-1.52-2.324-1.52-3.792,0-3.411,3.122-6.107,6.659-5.381,2.082.428,3.769,2.105,4.213,4.184.134.628.159,1.243.091,1.831-.058.498-.495.866-.997.866h-.045c-.592,0-1.008-.527-.943-1.115.044-.395.021-.81-.08-1.233-.298-1.253-1.32-2.268-2.575-2.557-2.286-.525-4.324,1.207-4.324,3.405Zm-3.89-1.295c.274-1.593,1.053-3.045,2.261-4.178,1.529-1.433,3.531-2.141,5.63-2.011,3.953.256,7.044,3.719,6.998,7.865-.019,1.736-1.473,3.118-3.208,3.118h-2.406c-.244-.829-1.002-1.439-1.91-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.538,0,1.025-.215,1.384-.561h2.932c2.819,0,5.168-2.245,5.208-5.063C21.573,4.715,17.651.345,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.499,1.405-2.496,3.265-2.855,5.266-.109.608.372,1.166.989,1.166.472,0,.893-.329.972-.795Zm7.39,8.795c-3.695,0-6.892,2.292-7.955,5.702-.165.527.13,1.088.657,1.253.526.159,1.087-.131,1.252-.657.789-2.53,3.274-4.298,6.045-4.298s5.257,1.768,6.045,4.298c.134.428.528.702.955.702.099,0,.198-.015.298-.045.527-.165.821-.726.657-1.253-1.063-3.41-4.26-5.702-7.955-5.702Z"></path>
            </svg>
            راهنمای خرید
          </Link>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              className="d-block mx-auto mb-1"
              width="25px"
              height="25px"
            >
              <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"></path>
              <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"></path>
            </svg>
            بازخورد
          </a>
        </li>
      </ul>

      <style jsx>{`
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
        .hovercolor:hover {
          color: var(--color6) !important;
        }
        .tool-list {
          box-shadow: var(--bs-box-shadow);
          -webkit-border-radius: var(--bs-border-radius);
          -moz-border-radius: var(--bs-border-radius);
          border-radius: var(--bs-border-radius);
          background: var(--bs-body-bg);
          left: 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: fit-content;
          position: fixed;
          top: calc(50vh - 104px);
          list-style: none;
          padding: 10px 5px;
          text-align: center;
          font-size: 9px;
          color: var(--bs-heading-color);
          fill: var(--bs-heading-color);
          z-index: 2;
        }
        .tool-list a {
          color: var(--bs-heading-color) !important;
          fill: var(--bs-heading-color) !important;
        }
        .tool-list a svg path {
          color: var(--bs-body-color) !important;
        }
        .follow button {
          border: 1px solid var(--bs-body-color) !important;
          background: transparent;
          display: flex;
          align-items: center;
          border-radius: 20px;
          margin-inline-start: 15px;
          padding: 4px 10px;
          font-size: 9px;
        }
        .follow button:hover {
          color: var(--color6) !important;
        }
        .follow button:hover svg {
          fill: var(--color6) !important;
        }
        .follow button svg {
          width: 10px;
          height: 10px;
          margin-inline-end: 8px;
        }
        .link {
          text-decoration: underline !important;
          color: var(--bs-heading-color) !important;
          font-weight: 700;
          font-size: larger;
        }
        .link:hover {
          color: var(--color6) !important;
        }
        .heart svg {
          width: 20px;
          height: 20px;
          fill: var(--bs-body-color);
        }
        .heart:hover svg {
          fill: var(--color6);
        }
        .heart {
          position: absolute;
          width: 32px;
          height: 32px;
          bottom: 8px;
          z-index: 1;
          background: var(--bs-body-bg);
          left: 8px;
          border-radius: 50%;
          padding: 6px;
          display: flex;
          cursor: pointer;
        }

        .ltr .heart {
          left: auto;
          right: 8px;
        }
        .dsc .respansive {
          overflow-x: auto;
          padding-bottom: 10px;
        }
        .dsc .respansive .title {
          width: 100px;
        }
        .dsc .respansive td:nth-child(2) {
          border-bottom: 1px solid var(--color5);
          color: var(--bs-heading-color);
        }
        .dsc .tabs .tab.active {
          border-bottom-color: var(--color1);
          color: var(--color1);
        }
        .dsc .tabs .tab {
          border-bottom: 3px solid transparent;
          margin-inline-end: 15px;
          padding: 10px;
          cursor: pointer;
        }
        .dsc .tabs {
          border-bottom: 1px solid var(--color5);
        }
        .dsc {
          border-top: 1px solid var(--color5);
        }
        @media (min-width: 768px) {
          .seller .pricebox {
            justify-content: flex-end !important;
          }
        }
        .seller strong {
          color: var(--bs-heading-color);
        }
        .seller .pricebox {
          align-items: center;
        }
        .seller .btn {
          -webkit-margin-start: 15px !important;
          -moz-margin-start: 15px !important;
          margin-inline-start: 15px !important;
          padding: 5px !important !important;
          font-size: 0.7em !important;
          width: fit-content !important;
          margin-top: 0px !important;
          width: fit-content;
        }
        .seller {
          border-top: 1px solid var(--color5);
        }
        .sellers {
          border-top: 1px solid var(--color5);
        }
        .attributesbox2 ul li strong {
          color: var(--bs-heading-color);
        }
        .attributesbox2 ul li {
          margin-bottom: 7px;
        }
        .attributesbox2 ul {
          font-size: 11px;
          padding-inline-start: 14px !important;
        }
        .attributesbox.active div {
          border: 3px solid var(--color2);
        }
        .attributesbox.active {
          border: 1px solid var(--color2);
        }
        .attributesbox div {
          border: 4px solid transparent;
          width: calc(100% - 5px);
          height: calc(100% - 5px);
          margin: auto;
          border-radius: var(--bs-border-radius);
        }
        .attributesbox {
          border-radius: var(--bs-border-radius);
          background: var(--bs-tertiary-bg);
          border: 1px solid var(--color5);
          width: 32px;
          height: 32px;
          margin-inline-end: 10px;
          margin-block: 5px;
          cursor: pointer;
          display: inline-flex;
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
        .mobileprice {
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
        .price {
          border: 1px solid var(--color5);
          border-radius: var(--bs-border-radius);
          background: var(--bs-tertiary-bg);
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
        .color1 {
          color: var(--color1) !important;
        }
        .text-dark {
          color: var(--bs-dark-text-emphasis);
        }
        .deadline {
          position: absolute;
          top: 8px;
          right: 8px;
          background: var(--bs-body-bg);
          border-radius: var(--bs-border-radius);
          padding: 4px 8px !important;
          z-index: 1;
          color: var(--color6);
          box-shadow: var(--bs-box-shadow);
        }
        .ltr .deadline {
          right: auto !important;
          left: 8px;
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
          height: 250px !important;
          background: var(--bs-tertiary-bg);
        }
        @media (min-width: 992px) {
          .img {
            width: 340px;
            height: 340px !important;
          }
          .col-lg:nth-child(1) {
            width: fit-content !important;
            max-width: fit-content !important;
          }
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

export default Product;
