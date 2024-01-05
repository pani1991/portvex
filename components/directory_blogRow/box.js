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
        href={"blog/"+content.id}
      >
        <div
          className="img position-relative m-3 "
          style={{
            background: `url(${
              content && content.thumbnail_image ? content.thumbnail_image : ""
            })`,
          }}
        >
          {content && content.date ? (
            <div className="date">
              <span className="d-block">
              {content.date?content.date.slice(8,10):""}
              </span>
              <small className="d-block">
                {content.date
                  ? content.date.slice(5,7) == 1
                    ? "فروردین"
                    : "" ||  content.date.slice(5,7)== 2
                    ? "اردیبهشت"
                    : "" || content.date.slice(5,7) == 3
                    ? "خرداد"
                    : "" || content.date.slice(5,7) == 4
                    ? "تیر"
                    : "" || content.date.slice(5,7) == 5
                    ? "مرداد"
                    : "" || content.date.slice(5,7) == 6
                    ? "شهریور"
                    : "" || content.date.slice(5,7) == 7
                    ? "مهر"
                    : "" || content.date.slice(5,7) == 8
                    ? "آبان"
                    : "" || content.date.slice(5,7) == 9
                    ? "آذر"
                    : "" || content.date.slice(5,7) == 10
                    ? "دی"
                    : "" || content.date.slice(5,7) == 11
                    ? "بهمن"
                    : "" || content.date.slice(5,7) == 12
                    ? "اسفند"
                    : ""
                  : ""}
              </small>
              <small className="d-block">
                {content.date?content.date.slice(0,4):""}
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
          {content && content.description ? (
            <div
              className="dsc mt-1"
              style={{ textAlign: "justify", minHeight: "59px" }}
              dangerouslySetInnerHTML={{
                __html: content.description,
              }}
            />
          ) : (
            ""
          )}
        </div>
      </Link>
      <style jsx>{`
        // @media (min-width: 1100px) {
        //   .blogbox {
        //     max-width: 33.3%;
        //   }
        // }
        // @media (max-width: 1100px && min-width:990px) {
        //   .blogbox {
        //     max-width: 50%;
        //   }
        // }
        // @media (max-width: 990px && min-width:767px) {
        //   .blogbox {
        //   }
        // }

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
