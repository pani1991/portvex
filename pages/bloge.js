import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
import Box from "../components/directory_blogRow/box";

const Blog = () => {
  const page = {
    title: "وبلاگ",
  };
  const [counter, setCounter] = useState(9);
  const incrementCount = () => {
    setCounter(counter + 9);
  };
  const blog = [
    {
      img: "/file/the-positive-link.jpg",
      title: "اوج‌گیری کولرگازی در گرم‌ترین تابستان تاریخ",
      id:1,
      dsc: "گرمای شدید و خشکسالی در ایران باعث شده است که مصرف برق به رکوردی جدید برسد کولرگازی یکی از عوامل اصلی افزایش تقاضاست که نه تنها هزینه های انرژی را بالا می برد بلکه آلودگی هوا را هم تشدید می کند",
      date: "2023-11-12T08:39:24.000Z",
    },
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
      title: "بهترین اسپرسو ساز نیمه صنعتی کدام است؟",
      id:1,
      dsc:"بهترین اسپرسوساز نیمه صنعتی باتوجه‌به نیاز و ترجیحات ما، صرفاً در یک مدل خلاصه نمی‌شود؛ بلکه دستگاه‌های مختلفی از برند‌های گوناگون می‌توانند از نظر ظاهری، دقت دمایی، درجه سختی نگهداری و نظافت، جنس بدنه، کیفیت مطلوب و… عنوان بهترین را به خود اختصاص دهند و تمام توقعات شما را به‌عنوان بهترین اسپرسو ساز نیمه صنعتی برآورده کنند. پس اگر هنوز نمی‌دانید که چطور می‌توان حین انتخاب این دستگاه، یک خرید هوشمندانه و موفقیت‌آمیز را تجربه کرد؛ ",
      date: "2023-11-09T08:39:24.000Z",
    },
    {
      img: "/file/Hamidreza-1402.09.05-2.jpg",
      title:"صفر تا صد راه اندازی کترینگ غذا",
      id:1,
      dsc: "اگر مهارت آشپزی دارید و به راه‌اندازی کترینگ فکر می‌کنید، می‌توانید از مزایای هزینه‌های کمتر آن نسبت به رستوران بهره‌مند شوید. کترینگ‌ها با تأمین غذا برای مکان‌های شغلی و اداری، جایگاه ویژه‌ای در بازار پیدا کرده‌اند و می‌توانند با منوهای متنوع و تخصصی، نیازهای گوناگون مشتریان را پوشش دهند. ا",
      date: "2023-11-08T08:39:24.000Z",
    },
    {
      img: "/file/black-fiday.jpg",
      title: "چند نوع دوربین مدار بسته داریم؟",
      id:1,
      dsc: "همه ما وسایل ارزشمندی داریم که نمی‌توانیم همه‌جا همراه خود ببریم. بنابراین وقتی از آن‌ها جدا می‌شویم، فکرمان پیششان خواهد ماند. این ابزار ارزشمند می‌تواند لوازم خانه باشد یا طلا و جواهرات، اسناد و مدارک یا لوازم و ابزارهای مربوط به محیط کار و غیره. در اینجاست که انواع دوربین مدار بسته خانگی و غیر خانگی به کمک ما می‌آید.",
      date: "2023-11-07T07:39:24.000Z",
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

        <div className="container" style={{ paddingBlock: "50px" }}>
          <div className="row g-4">
            {blog &&
              blog.slice(0, counter).map((item, i) => (
                <div key={i} className="col-md-4 col-6">
                  <Box dir={siteData.dir} content={item} i={i} />
                </div>
              ))}
            {/* <div className="col-12">
              <button className="btn mx-auto mt-4" onClick={incrementCount}>
                موارد بیشتر ....{" "}
              </button>
            </div> */}
          </div>
        </div>

        <Footer content={siteData.footer} />
      </div>
      <style jsx>{`
        .btn {
          background: var(--color1);
          color: #fff !important;
          fill: #fff !important;
          display: -webkit-box;
          display: -webkit-flex;
          display: -moz-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -moz-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-margin-start: 10px;
          -moz-margin-start: 10px;
          margin-inline-start: 10px;
          font-size: 0.7rem;
          height: 46px;
          min-width: 90px;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -moz-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 35% !important;
        }
        .hovercolor:hover {
          color: var(--color1) !important;
        }
        .banners {
          padding-block: 50px;
        }
        .box {
          box-shadow: var(--bs-box-shadow);
          height: calc(35vh - var(--bs-gutter-y) / 2);
          max-height: calc(616px - var(--bs-gutter-y) / 2);
          border-radius: var(--bs-border-radius);
          background-size: cover !important;
          background-position: center !important;
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
