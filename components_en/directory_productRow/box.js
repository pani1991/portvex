import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/apien";
const ProductBox = ({ content }) => {
  return (
    <div
      className={"productbox mt-1 " + (siteData.dir ? siteData.dir : "")}
      title={content && content.title ? content.title : ""}
    >
      {" "}
      <Link
        // href={
        //   content && content.id && siteData.urls.product
        //     ? "/" + siteData.urls.product + "/" + content.id
        //     : ""
        // }
        href={"/product/" + content.id}
      >
        <div
          className="img position-relative"
          style={{
            background: `url(${
              content.thumbnail_image ? content.thumbnail_image : ""
            })`,
          }}
        >
          <div className="status mt-2 d-flex" style={{ minHeight: "25px" }}>
            <p className="p-0 m-0 category">
              {content.category ? (
                <span className="d-flex">
                  {/* <span
                    className="icon d-inline"
                    dangerouslySetInnerHTML={{
                      __html: content.category.icon
                        ? content.category.icon
                        : "",
                    }}
                  ></span> */}
                  {content.category}
                </span>
              ) : (
                ""
              )}
            </p>
            {content && content.before_discount && content.after_discount ? (
              <div className="off">
                {Math.ceil(
                  (1 - content.after_discount / content.before_discount) * 100
                ) + "%"}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="text p-3 ">
          {content.booth[0] ? (
            <div
              className="d-flex mb-2"
              style={{ fontSize: "10px", alignItems: "center" }}
            >
              <div
                className="shop"
                title={content.booth[0].title ? content.booth[0].title : ""}
                style={{
                  backgroundImage: `url(${
                    content.booth[0].logo ? content.booth[0].logo : ""
                  })`,
                }}
              ></div>
              <small>
                {content.booth[0].title ? content.booth[0].title : ""}
              </small>
            </div>
          ) : (
            ""
          )}

          {content && content.title ? (
            <h4 className="h6">{content.title}</h4>
          ) : (
            ""
          )}
          {content && content.before_discount && content.after_discount == null ? (
            <strong className="d-block price ">
              {content.before_discount
                ? content.before_discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : ""}{" "}
             $
            </strong>
          ) : (
            <strong className="d-block price">
              {"  "}{" "}
              {content.after_discount
                ? content.after_discount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : ""}{" "}
             $
              <span className="price2 mx-1">
                {content.before_discount
                  ? content.before_discount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : ""}
              </span>{" "}
            </strong>
          )}
          {content.hadagale_sefaresh ? (
            <div className="d-flex mt-1" style={{ fontSize: "10px" }}>
           minimum order :
              <small className="mx-1">{content.hadagale_sefaresh} number
              </small>
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
      <style jsx>{`
        .status .category {
          color: var(--bs-light-text-emphasis);
          font-size: 0.7em;
          background: var(--bs-tertiary-bg);
          padding: 5px !important;
          border-radius: var(--bs-border-radius);
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
        .off {
          background: var(--color6);
          color: #fff;
          border-radius: var(--bs-border-radius);
          display: flex;
          font-size: 0.75em;
          width: 35px;
          height: 25px;
          align-items: center;
          justify-content: center;
        }
        .price2 {
          color: var(--bs-light-text-emphasis);
          opacity: 0.8;
          font-size: 0.7em;
          text-decoration: line-through;
        }
        .status {
          align-items: center;
          justify-content: space-between;
          position: absolute;
          top: 0px;
          left: 16px;
          right: 16px;
        }
        .shop {
          border-radius: var(--bs-border-radius);
          width: 25px;
          height: 25px;
          background-size: contain !important;
          background-position: center !important;
          background-color: var(--bs-tertiary-bg);
          background-repeat: no-repeat !important;
          box-shadow: var(--bs-box-shadow);
          margin-inline-end: 10px;
        }

        .price {
          color: var(--color1);
        }
        .text .h6 {
          font-size: 0.9em;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          min-height: 29px;
        }
        .productbox .img {
          background-size: cover !important;
          background-position: center !important;
          padding-top: 95%;
        }
        .productbox {
          background: var(--bs-body-bg);
          border-radius: var(--bs-border-radius);
          margin-inline: auto;
          transition: all.4s ease;
          overflow: hidden;
        }
        .productbox:hover {
          box-shadow: var(--bs-box-shadow);
          transition: all.4s ease;
        }
      `}</style>
    </div>
  );
};
export default ProductBox;
