import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/apien";
const HellpBox = ({ content }) => {
  return (
    <div
      className={"hellpbox mt-1 " + (siteData.dir ? siteData.dir : "")}
      title={content && content.title ? content.title : ""}
    >
      {" "}
      <a href={content && content.url ? content.url : ""}>
        <div
          className="img position-relative"
          style={{
            background: `url(${content && content.image ? content.image : ""})`,
          }}
        ></div>
        <div className="text p-2">
          {content && content.title ? (
            <h4 className="h6 mb-0 text-center">{content.title}</h4>
          ) : (
            ""
          )}
        </div>
      </a>
      <style jsx>{`
        .text .h6 {
          font-size: 0.9em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          min-height: 29px;
          font-weight: 500;
        }
        .hellpbox .img {
          background-size: cover !important;
          background-position: center !important;
          padding-top: 70%;
        }
        .hellpbox {
          background: var(--bs-body-bg);
          border-radius: var(--bs-border-radius);
          margin-inline: auto;
          overflow: hidden;
          box-shadow: rgba(99, 99, 99, 0.08) 0px 2px 8px 0px;
        }
        .hellpbox:hover {
          box-shadow: var(--bs-box-shadow);
        }
      `}</style>
    </div>
  );
};
export default HellpBox;
