import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/api";
const CenterBox = ({ content }) => {
  return (
    <div
      className={"centerbox mt-1 p-3 " + (siteData.dir ? siteData.dir : "")}
      title={content && content.title ? content.title : ""}
      style={{
        background: `linear-gradient(180deg, rgba(34,193,195,0) 0%, rgba(0,0,0,1) 100%), url(${
          content && content.image ? content.image : ""
        })`,
      }}
    >
      <Link
        className="h-100 w-100"
        href={
          content && content.id
            ? "/" + siteData.urls.centers 
            // + "/" + content.id
            : ""
        }
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        {/* <Image
          src={content.flag ? content.flag : ""}
          alt=""
          width={20}
          height={20}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        /> */}

        {content && content.title ? (
          <h4 className="text-white h5 mt-2">{content.title}</h4>
        ) : (
          ""
        )}
        <p
          className="d-flex pb-0 mb-0 col-12 text-white mt-2"
          style={{ justifyContent: "space-between" }}
        >
          <small>غرفه : {content.count_gorfe ? content.count_gorfe : ""}</small>
          <small>
            محصولات : {content.count_product ? content.count_product : ""}
          </small>
        </p>
      </Link>
      <style jsx>{`
        .centerbox {
          background-size: cover !important;
          background-position: center !important;
          height: 300px;
          border-radius: var(--bs-border-radius);
          margin-inline: auto;
          overflow: hidden;
          transition: all.4s ease;
          color: #fff;
        }
        .centerbox:hover {
          box-shadow: var(--bs-box-shadow);
          transition: all.4s ease;
        }
      `}</style>
    </div>
  );
};
export default CenterBox;
