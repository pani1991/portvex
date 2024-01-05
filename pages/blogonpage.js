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
import BlogRow from "../components/directory_blogRow";
import { toJalaali } from "jalaali-js";
const Blog = () => {
  // const router = useRouter();
  const content = {
    id: 1,
    title: "اوج‌گیری کولرگازی در گرم‌ترین تابستان تاریخ",
    img: "/file/the-positive-link.jpg",
    dsc: "ناسا اعلام کرده تابستان ۱۴۰۲ (۲۰۲۳ میلادی) گرم‌ترین تابستان تاریخ زمین تا امروز بوده است. آگهی‌های منتشر شده در «سایت ما» هم نشان می‌دهد گرمای بی سابقه امسال، جستجو و تمایل مردم برای خرید انواع کولر گازی و آبی و پنکه را به نسبت سال قبل بیشتر کرده است. طبق آمار در پنج ماهه اول سال ۱۴۰۲ بیشتر از ۵۰ درصد همه آگهی‌های دسته وسایل سرمایشی در سایت ما به کولر گازی اختصاص داشت و کولر آبی و پنکه هم به ترتیب در رتبه‌های بعدی هستند.",
    date: "2023-11-12T08:39:24.000Z",
    gallery: [
      {
        img: "/file/khorma-pazan-report-04.jpg",
      },
      {
        img: "/file/khorma-pazan-report-05.jpg",
      },
      {
        img: "/file/khorma-pazan-report-03.jpg",
      },
      {
        img: "/file/khorma-pazan-report-021.jpg",
      },
    ],
  };
  const blog_item = content;
  const page = {
    title: blog_item && blog_item.title ? blog_item.title : "",
  };

  const breadcrumb = {
    title: "وبلاگ",
    link:
      siteData && siteData.urls && siteData.urls.blog
        ? "/" + siteData.urls.blog
        : "",
    child: {
      title: blog_item && blog_item.title ? blog_item.title : "",
    },
  };

  const blog = [
    {
      img: "/file/B04A7880.jfif",
      title: "پلی‌استیشن ۴ و فری‌فایر",
      id:1,
      dsc: "پلی‌استیشن ۴ یک کنسول بازی است که توسط شرکت سونی ساخته شده است فری‌فایر یک بازی آنلاین است که در سبک بقا و تیراندازی اول شخص است این بازی روی پلی‌استیشن ۴ قابل اجرا است و می توانید با دوستان خود بازی کنید این بازی بسیار محبوب و هیجان انگیز است و بیش از ۵۰۰ میلیون بار دانلود شده است",
      date: "2023-11-11T08:39:24.000Z",
    },
    {
      img: "/file/B04A7006.jfif",
      title: "کرمانشاه، البرز و همدان؛ دوچرخه‌بازترین مردم ایران",
      id:1,
      dsc: "دوچرخه‌سواری یکی از ورزش های سالم و محبوب است که برای بدن و ذهن مفید است به گزارش [سایت خبری]، بر اساس آمار سازمان ورزش و جوانان، سه استان کرمانشاه، البرز و همدان بیشترین تعداد دوچرخه‌بازان را در کشور دارند این سه استان با داشتن زیرساخت های مناسب، مسیرهای زیبا و فرهنگ دوچرخه‌سواری، مردم را به این ورزش",
      date: "2023-11-09T08:39:24.000Z",
    },
    {
      img: "/file/hair-straightener.jpg",
      title: "راهنمای خرید بهترین اتو مو؛ انواع، نکات مهم خرید و پرفروش‌ها",
      id:1,
      dsc: "اگر به دنبال خرید اتو مویی از نوع تخت هستید، احتمالا می‌دانید که گزینه‌های زیادی از جمله مدل‌های سرامیکی، تیتانیوم، تورمالین همراه با فناوری‌های بیشتر به‌منظور راحتی در استفاده‌ی بیشتر در بازار وجود دارد، بنابراین با این همه مشخصات متنوع برای این دسته از محصولات چگونه می‌توان بهترین مدل‌های اتو مو برای خرید را انتخاب کرد؟ ",
      date: "2023-11-09T08:39:24.000Z",
    },
  ];

  const [modal, setModal] = useState(null);
  const [selectImage, setSelectImage] = useState(null);
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
      <div className="main" id="top">
        <Menu content={siteData.menu} />
        <Breadcrumb
          dir={siteData.dir}
          content={breadcrumb}
          siteData={siteData}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="box p-3">
                <div className="img">
                  <Image
                    alt=""
                    src={blog_item && blog_item.img ? blog_item.img : ""}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      minHeight: "40px",
                      borderRadius: "var(--bs-border-radius)",
                    }}
                  />
                </div>
                <div className="col-12 py-5 px-lg-5 px-md-3 px-0">
                  <h1 className="h3 text-center mb-4">
                    {blog_item && blog_item.title ? blog_item.title : ""}
                  </h1>

                  {content && blog_item.date ? (
                    <div className="date mb-3">
                      تاریخ انتشار :
                      <span className="mx-0">
                        {" " + toJalaali(new Date(blog_item.date)).jd + " / "}
                      </span>
                      <span className="mx-1">
                        {toJalaali(new Date(blog_item.date)).jm
                          ? toJalaali(new Date(blog_item.date)).jm == 1
                            ? "فروردین"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 2
                            ? "اردیبهشت"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 3
                            ? "خرداد"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 4
                            ? "تیر"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 5
                            ? "مرداد"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 6
                            ? "شهریور"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 7
                            ? "مهر"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 8
                            ? "آبان"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 9
                            ? "آذر"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 10
                            ? "دی"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 11
                            ? "بهمن"
                            : "" || toJalaali(new Date(blog_item.date)).jm == 12
                            ? "اسفند"
                            : ""
                          : ""}
                      </span>
                      <span className="mx-0">
                        {" / " + toJalaali(new Date(blog_item.date)).jy}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: blog_item.dsc ? blog_item.dsc : "",
                    }}
                  />
                </div>
                {blog_item && blog_item.gallery ? (
                  <div className="gallery mt-3 px-lg-5 px-md-3 px-0">
                    <div className="row g-3">
                      <div className="h5">
                        گالری تصاویر
                      </div>
                      {blog_item &&
                        blog_item.gallery &&
                        blog_item.gallery.map((item, i) => (
                          <div
                            className="col-lg-2 col-md-3 col-6"
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
       
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="row " id="news">
            <div className="col-12">
              <BlogRow content={blog} title={"آخرین اخبار"} />
            </div>
          </div>{" "}
        </div>

        <Footer content={siteData.footer} />
      </div>
      {modal == 1 ? (
        <div className="modale">
          <div className="box">
            <div className="head p-3">
              <h6>گالری تصاویر</h6>
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
                <div className=" col-9">
                  <Image
                    fixed
                    src={selectImage ? selectImage : ""}
                    alt={
                      content &&
                      content.title
                        ? content.title
                        : ""
                    }
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
                <div className=" col-3">
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
                            className=" col-sm-3 col-12"
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
        .galletyitem2::after {
          content: "بیشتر ...";
          z-index: 2;
          position: absolute;
          top: 0px;
          left: 0px;
          font-size: 1rem;
          color: #fff;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          line-height: 0rem;
          align-items: center;
        }
        .galletyitem2::before {
          content: "";
          width: 100%;
          height: 100%;
          display: block;
          z-index: 1;
          position: absolute;
          top: 0px;
          left: 0px;
          backdrop-filter: blur(3px);
          border-radius: var(--bs-border-radius);
        }
        .gallery .galletyitem {
          width: 100%;
          cursor: pointer;
          border-radius: var(--bs-border-radius);
          border: 1px solid var(--bs-border-color) !important;
          position: relative;
        }
        .gallery .galletyitembox {
          width: 100%;
          padding-top: 100%;
          background-size: cover !important;
          background-position: center !important;
          border-radius: calc(var(--bs-border-radius) - 2px);
          background-repeat: no-repeat !important;
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


export default Blog;
