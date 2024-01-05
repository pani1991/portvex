import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/api";
import { toJalaali } from "jalaali-js";
const BlogBox = ({ content }) => {
  return (
    <div
      className={"blogbox mt-1 " + (siteData.dir ? siteData.dir : "")}
      title={content && content.title ? content.title : ""}
    >
      {" "}
      <Link
        // href={
        //   content && content.id ? "/"+siteData.urls.blog + "/" + content.id : ""
        // }
        href="/blogonpage" 
      >
        <div
          className="img position-relative m-3 "
          style={{
            background: `url(${content && content.img ? content.img : ""})`,
          }}
        >
          {content && content.date ? (
            <div className="date">
              <span className="d-block">
                {toJalaali(new Date(content.date)).jd}
              </span>
              <small className="d-block">
                {toJalaali(new Date(content.date)).jm
                  ? toJalaali(new Date(content.date)).jm == 1
                    ? "فروردین"
                    : "" || toJalaali(new Date(content.date)).jm == 2
                    ? "اردیبهشت"
                    : "" || toJalaali(new Date(content.date)).jm == 3
                    ? "خرداد"
                    : "" || toJalaali(new Date(content.date)).jm == 4
                    ? "تیر"
                    : "" || toJalaali(new Date(content.date)).jm == 5
                    ? "مرداد"
                    : "" || toJalaali(new Date(content.date)).jm == 6
                    ? "شهریور"
                    : "" || toJalaali(new Date(content.date)).jm == 7
                    ? "مهر"
                    : "" || toJalaali(new Date(content.date)).jm == 8
                    ? "آبان"
                    : "" || toJalaali(new Date(content.date)).jm == 9
                    ? "آذر"
                    : "" || toJalaali(new Date(content.date)).jm == 10
                    ? "دی"
                    : "" || toJalaali(new Date(content.date)).jm == 11
                    ? "بهمن"
                    : "" || toJalaali(new Date(content.date)).jm == 12
                    ? "اسفند"
                    : ""
                  : ""}
              </small>
              <small className="d-block">
                {toJalaali(new Date(content.date)).jy}
              </small>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="text p-3 pt-1">
          {content && content.title ? (
            <h4 className="h5 mb-2">{content.title}</h4>
          ) : (
            ""
          )}
          {content && content.dsc ? (
            <div
              className="dsc mt-1"
              style={{ textAlign: "justify", minHeight: "59px" }}
              dangerouslySetInnerHTML={{
                __html: content.dsc,
              }}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
      <style jsx>{`
        .date span {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .date {
          position: absolute;
          background: var(--color1);
          border-radius: var(--bs-border-radius);
          padding: 3px;
          color: #fff;
          font-size: 0.65rem;
          line-height: 0.7rem;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          top: 10px;
          left: 10px;
          box-shadow: var(--bs-box-shadow);
        }
        .ltr .date {
          right: 10px;
          left: auto;
        }
        .text .dsc {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
        .text .h5 {
          font-size: 1.2em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          min-height: 40px;
        }
        .blogbox .img {
          background-size: cover !important;
          background-position: center !important;
          padding-top: 40%;
          border-radius: var(--bs-border-radius);
        }
        .blogbox {
          background: var(--bs-body-bg);
          border-radius: var(--bs-border-radius);
          margin-inline: auto;
          overflow: hidden;
          transition: all.4s ease;
        }
        .blogbox:hover {
          box-shadow: var(--bs-box-shadow);
          transition: all.4s ease;
        }
      `}</style>
    </div>
  );
};
export default BlogBox;
