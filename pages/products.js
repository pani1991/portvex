import React, { useState, useEffect } from "react";
import siteData from "./api/api";
import { Helmet } from "react-helmet";
import Head from "next/head";
import Link from "next/link";
import Menu from "../components/directory_menu";
import Footer from "../components/directory_footer";
import Breadcrumb from "../components/directory_breadcrumb";
import Box from "../components/directory_productRow/box";
import Banner from "../components/directory_banner";
const Index = () => {
  const page = {
    title: "محصولات",
  };
  const breadcrumb = {
    title: "محصولات",
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
      id: 1,
      title: "چانه گرد کن مخروطی تمام اتوماتیک حرفه ای",
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
      brand: {
        name: "شرکت پاک اندیشان",
        logo: "./file/kala.jfif",
        link: "/company/1",
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
      brand: {
        name: "کالای صنعتی محمودی",
        logo: "./file/download.jfif",
        link: "/company/1",
      },
      min: 2,
    },
    {
      id: 1,
      title: "پنل خورشیدی المانی ",
      img: "/file/img_35761_1.jpg",
      price: "550000",
      lastPrice: "500000",
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
      brand: {
        name: "کالای صنعتی محمودی",
        logo: "./file/download1.jfif",
        link: "/company/1",
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
      brand: {
        name: "کالای صنعتی محمودی",
        logo: "./file/download.jfif",
        link: "/company/1",
      },
      min: 1,
    },
    {
      id: 1,
      title: "الکتروموتور چینی سه فاز و تکفاز گیربکس حلزونی",
      img: "/file/img_34427_1.jpg",
      price: "100000",
      lastPrice: "950000",
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
      brand: {
        name: "کالای صنعتی محمودی",
        logo: "./file/download.jfif",
        link: "/company/1",
      },
      min: 1,
    },
    {
      id: 1,
      title: "الکتروموتور چینی سه فاز و تکفاز گیربکس حلزونی ",
      img: "/file/img_34441_1.jpg",
      price: "2000000",
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
      brand: {
        name: "کالای صنعتی محمودی",
        logo: "./file/download1.jfif",
        link: "/company/1",
      },
      min: 2,
    },

    {
      id: 1,
      title: "کوره هوای گرم",
      img: "/file/img_35734_1.jpg",
      price: "1520000",
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
      brand: {
        name: "کالای صنعتی محمودی",
        logo: "./file/download.jfif",
        link: "/company/1",
      },
      min: 10,
    },
    {
      id: 1,
      title: "گیوتین قیچی خم کن",
      img: "/file/img_35360_1.jpg",
      price: "175000000",
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
      brand: {
        name: "کالای صنعتی محمودی",
        logo: "./file/download.jfif",
        link: "/company/1",
      },
      min: 1,
    },
  ];
  const category = [
    {
      id: 1,
      title: "کشاورزی و باغبانی",
      icon: null,
      url: "categories",
      img: "./file/agriculture-and-horticulture.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 2,
      title: "مصالح و تاسیسات ساختمان",
      icon: null,
      url: "categories",
      img: "/file/building-materials-and-facilities.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 3,
      title: "ابزار آلات، یراق و تجهیزات ایمنی",
      icon: null,
      url: "categories",
      img: "/file/safety-tools-and-fittings-and-equipment.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 4,
      title: "ورزش، سفر و سرگرمی",
      icon: null,
      url: "categories",
      img: "/file/sports-travel-and-entertainment.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 5,
      title: "تجهیزات فروشگاهی و انبارداری",
      icon: null,
      url: "categories",
      img: "/file/warehousing-and-store-equipment.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 5,
      title: "قطعات و لوازم یدکی خودرو",
      icon: null,
      url: "categories",
      img: "/file/car-spare-parts.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 5,
      title: "موتور برق",
      icon: null,
      url: "categories",
      img: "/file/power_generator.jpg",
      parent: null,
      slider: null,
      home: 1,
    },

    {
      id: 9,
      title: "پزشکی و آزمایشگاهی",
      icon: null,
      url: "categories",
      img: "/file/medical-and-laboratory.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 10,
      title: "پوشاک، لباس و اکسسوری",
      icon: null,
      url: "categories",
      img: "/file/clothing-and-clothes-and-accessories.jpg",
      parent: null,
      slider: null,
      home: 1,
    },
    {
      id: 11,
      title: "باربیکیو",
      icon: null,
      url: "categories",
      img: "/file/barbecue.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "تجهیزات و ملزومات اداری",
      icon: null,
      url: "categories",
      img: "/file/office-equipment.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "صنایع دستی و محصولات فرهنگی و مذهبی",
      icon: null,
      url: "categories",
      img: "/file/handicrafts-and-cultural-and-religious-products.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "صنایع شیمیایی",
      icon: null,
      url: "categories",
      img: "/file/chemical-industry.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "وسایل نقلیه و ماشین آلات راهسازی و ساختمانی",
      icon: null,
      url: "categories",
      img: "/file/vehicles.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "تجهیزات عطاری",
      icon: null,
      url: "categories",
      img: "/file/attari.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "کالای دیجیتال",
      icon: null,
      url: "categories",
      img: "/file/electronic-devices.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "ملزومات چاپ و بسته بندی",
      icon: null,
      url: "categories",
      img: "/file/printing-and-packaging-essentials.jpg",
      parent: 1,
      home: 1,
    },
    {
      id: 11,
      title: "دوربین مدار بسته",
      icon: null,
      url: "categories",
      img: "/file/cctv.jpg",
      parent: 1,
      home: 1,
    },

    {
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
    {
      id: 12,
      title: "مواد اولیه",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-box-seam" viewBox="0 0 16 16">
      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
    </svg>`,
      url: "categories",
      img: "/file/8ee53a1c7c90bd688cd900dbde49d152eb1aea35_1678523815.jpg",
      parent: null,
      slider: 1,
      home: null,
    },
    {
      id: 13,
      title: "عمده فروشی کالا",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-boxes" viewBox="0 0 16 16">
      <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
    </svg>`,
      url: "categories",
      img: "/file/c8a0a71e88adcb2d05484b0020b5194e0556389a_1668867956.webp",
      parent: null,
      slider: 1,
      home: null,
    },
  ];
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    // جستجو در آیتم‌ها و تنظیم نتایج
    const filteredResults = content.filter((item) => {
      return item.title && item.title.includes(inputValue);
    });
    setResults(filteredResults);
  };
  const [selectCategory, setselectCategory] = useState(null);
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
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="box p-3 mb-4">
                <div className="fild">
                  <label>جستجو</label>
                  <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="box p-3 filter">
                <div
                  className="col-12 d-flex"
                  // onClick={() => (drop == 1 ? setDrop(null) : setDrop(1))}
                  style={{ justifyContent: "space-between", cursor: "pointer" }}
                >
                  <strong
                    className="h6"
                    style={{ color: "var(  --bs-dark-text-emphasis)" }}
                  >
                    فیلترها
                  </strong>
                  <div onClick={() => setResults([]) + setselectCategory(null)}>
                    <span className="d-inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="10"
                        height="10"
                      >
                        <path d="m15.707,9.707l-2.293,2.293,2.293,2.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Zm8.293,2.293c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"></path>
                      </svg>{" "}
                      حذف فیلترها
                    </span>
                    {/* {drop == null ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                      >
                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                      >
                        <path d="M18,15.5a1,1,0,0,1-.71-.29l-4.58-4.59a1,1,0,0,0-1.42,0L6.71,15.21a1,1,0,0,1-1.42-1.42L9.88,9.21a3.06,3.06,0,0,1,4.24,0l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,18,15.5Z"></path>
                      </svg>
                    )} */}
                  </div>
                </div>
                {drop == 1 ? (
                  <>
                    <div className="mt-4 mb-2">
                      <div className="col-12 mb-3">دسته بندی</div>
                      <ul>
                        {category &&
                          category.map((item, i) => (
                            <>
                              <li
                                key={i}
                                onClick={() => setselectCategory(item.title)}
                              >
                                <label for={"car" + i}>
                                  <input
                                    type="checkbox"
                                    id={"car" + i}
                                    checked={
                                      selectCategory &&
                                      selectCategory == item.title
                                        ? "checked"
                                        : ""
                                    }
                                  />
                                  <span
                                    className="icon d-inline"
                                    dangerouslySetInnerHTML={{
                                      __html: item.icon ? item.icon : "",
                                    }}
                                  />
                                  {item.title ? item.title : ""}
                                </label>
                              </li>
                              {item.child ? (
                                <ul
                                  className="mb-2"
                                  style={{ marginInlineStart: "25px" }}
                                >
                                  {item.child.map((item2, i2) => (
                                    <li key={i2}>
                                      <label for={"car" + i2}>
                                        <input
                                          type="checkbox"
                                          id={"car" + i2}
                                          checked={
                                            selectCategory &&
                                            selectCategory == item.title
                                              ? "checked"
                                              : ""
                                          }
                                        />

                                        {item2.title ? item2.title : ""}
                                      </label>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                ""
                              )}
                            </>
                          ))}
                      </ul>
                    </div>
                    <hr />
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-6">
              <div className="row g-4">
                <div className="col-12 d-flex" style={{ alignItems: "center" }}>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path d="M24,1c0,.553-.448,1-1,1H10c-.552,0-1-.447-1-1s.448-1,1-1h13c.552,0,1,.447,1,1Zm-4,4H10c-.552,0-1,.447-1,1s.448,1,1,1h10c.552,0,1-.447,1-1s-.448-1-1-1Zm-3,5h-7c-.552,0-1,.447-1,1s.448,1,1,1h7c.552,0,1-.447,1-1s-.448-1-1-1Zm-3,5h-4c-.552,0-1,.447-1,1s.448,1,1,1h4c.552,0,1-.447,1-1s-.448-1-1-1Zm-6.293,4.293l-1.707,1.707V1c0-.553-.448-1-1-1s-1,.447-1,1V21l-1.708-1.708c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l2.707,2.707c.39,.39,.902,.585,1.415,.585s1.024-.195,1.414-.585l2.707-2.707c.391-.391,.391-1.023,0-1.414s-1.023-.391-1.414,0Z" />
                    </svg>{" "}
                    <div className="fild mx-2 mt-0">
                      <select className="p-2 py-1 mt-0">
                        <option>ترتیب بر اساس</option>
                        <option>منتخب ها</option>
                        <option>پربازدیدترین</option>
                        <option>جدیدترین</option>
                        <option>پرفروش ترین</option>
                        <option>ارزان‌ترین</option>
                        <option>گران‌ترین</option>‌
                      </select>
                    </div>
                  </div>
                </div>
                {/* {content &&
                  content.map((item, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 col-6" key={i}>
                      <Box dir={siteData.dir} content={item} i={i} />
                    </div>
                  ))} */}

                {results.length > 0
                  ? results
                      .filter((i) =>
                        selectCategory ? i.category.title == selectCategory : i
                      )

                      .map((item, i) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12 col-6"
                          key={i}
                        >
                          <Box dir={siteData.dir} content={item} i={i} />
                        </div>
                      ))
                  : content && selectCategory
                  ? content
                      .filter((i) => i.category.title == selectCategory)
                      .map((item, i) => (
                        <div
                          className="col-lg-4 col-md-6 col-sm-12 col-6"
                          key={i}
                        >
                          <Box dir={siteData.dir} content={item} i={i} />
                        </div>
                      ))
                  : content.map((item, i) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12 col-6"
                        key={i}
                      >
                        <Box dir={siteData.dir} content={item} i={i} />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
        <Banner content={banner} siteData={siteData} />
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
