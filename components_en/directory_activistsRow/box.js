import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/apien";
const ActivistsBox = ({ content }) => {
  return (
    <div
      className={"activistsbox mt-1 " + (siteData.dir ? siteData.dir : "")}
      title={content && content.title ? content.title : ""}
    >
      {" "}
      <Link
        // href={
        //   content && content.id ? siteData.urls.active + "/" + content.id : ""
        // }
        href={"en/company/" + content.id}
      >
        <div
          className="img position-relative"
          style={{
            background: `url(${
              content && content.thumbnail_image ? content.thumbnail_image : ""
            })`,
          }}
        >
          <div className="shopbox p-3 pb-2">
            {content.logo ? (
              <div
                className="shop"
                style={{
                  backgroundImage: `url(${content.logo})`,
                }}
              ></div>
            ) : (
              ""
            )}
            <div className="shopstatus">
              {content.online && content.online == "آنلاین"
                ? "online"
                : "offline"}

              <span
                className="circle"
                style={{
                  background:
                    content.online && content.online == "آنلاین"
                      ? "green"
                      : "red",
                }}
              ></span>
            </div>
          </div>
        </div>
        <div className="text p-3 pt-4">
          {content && content.title ? (
            <h4 className="h6 text-center mb-0">{content.title}</h4>
          ) : (
            ""
          )}
          <div className="status mt-1 d-flex" style={{ minHeight: "25px" }}>
            <p className="p-0 m-0 category">
              {content.category ? (
                <span className="d-flex" style={{ alignItems: "center" }}>
                  {/* <span
                    className="icon d-inline"
                    dangerouslySetInnerHTML={{
                      __html: content.category.icon
                        ? content.category.icon
                        : "",
                    }}
                  ></span> */}
                  {content.category ? content.category : ""}
                </span>
              ) : (
                ""
              )}
            </p>
            {content && content.phone ? (
              <p
                className="p-0 m-0 category"
                style={{ color: "var(--color1)" }}
              >
                {content.mobile}
              </p>
            ) : (
              ""
            )}{" "}
          </div>
          {content.products ? (
            <div className="row g-3 mt-0">
              {content.products.map((item, i) => (
                <div
                  className="col-4"
                  key={i}
                  title={item && item.title ? item.title : ""}
                >
                  <div
                    className="product"
                    style={{
                      background: `url(${
                        item && item.image ? item.image : ""
                      })`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
      <style jsx>{`
        .product {
          box-shadow: var(--bs-box-shadow);
          border-radius: var(--bs-border-radius);
          padding-top: 100%;
          background-size: cover !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
        .shopstatus .circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
          margin-inline-start: 5px;
        }
        .shopstatus {
          background: var(--bs-tertiary-bg);
          padding: 6px 10px;
          border-radius: 20px;
          box-shadow: var(--bs-box-shadow);
          font-size: 9px;
          color: var(--bs-heading-color);
          height: fit-content;
          display: flex;
          align-items: center;
        }
        .addres {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box !important;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .status .category {
          color: var(--bs-light-text-emphasis);
          font-size: 0.7em;
        }
        .icon {
          color: var(--bs-light-text-emphasis);
          font-size: 0.7em;
          width: 14px;
          height: 14px;
          display: inline-block !important;
          margin-inline-end: 5px;
          fill: var(--bs-light-text-emphasis);
        }
        .status {
          align-items: center;
          justify-content: space-between;
        }
        .shop {
          border-radius: 50%;
          width: 35px;
          height: 35px;
          background-size: contain !important;
          background-position: center !important;
          background-color: var(--bs-tertiary-bg);
          background-repeat: no-repeat !important;
          box-shadow: var(--bs-box-shadow);
        }
        .shopbox {
          position: absolute;
          bottom: -28px;
          right: 0px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .text .h6 {
          font-size: 0.9em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .activistsbox .img {
          background-size: cover !important;
          background-position: center !important;
          padding-top: 25%;
        }
        .activistsbox {
          background: var(--bs-body-bg);
          border-radius: var(--bs-border-radius);
          margin-inline: auto;
          overflow: hidden;
          transition: all.4s ease;
        }
        .activistsbox:hover {
          box-shadow: var(--bs-box-shadow);
          transition: all.4s ease;
        }
      `}</style>
    </div>
  );
};
export default ActivistsBox;
