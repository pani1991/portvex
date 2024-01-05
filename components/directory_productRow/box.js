import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/api";
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
        href="/product"
      >
        <div
          className="img position-relative"
          style={{
            background: `url(${content && content.img ? content.img : ""})`,
          }}
        >
          <div className="status mt-2 d-flex" style={{ minHeight: "25px" }}>
            <p className="p-0 m-0 category">
              {content.category ? (
                <span className="d-flex">
                  <span
                    className="icon d-inline"
                    dangerouslySetInnerHTML={{
                      __html: content.category.icon
                        ? content.category.icon
                        : "",
                    }}
                  ></span>
                  {content.category.title ? content.category.title : ""}
                </span>
              ) : (
                ""
              )}
            </p>
            {content && content.price && content.lastPrice ? (
              <div className="off">
                {Math.ceil((1 - content.lastPrice / content.price) * 100) + "%"}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="text p-3 ">
          {content.brand ? (
            <div
              className="d-flex mb-2"
              style={{ fontSize: "10px", alignItems: "center" }}
            >
              <div
                className="shop"
                title={content.brand.name ? content.brand.name : ""}
                style={{
                  backgroundImage: `url(${
                    content.brand.logo ? "/" + content.brand.logo : ""
                  })`,
                }}
              ></div>
              <small>{content.brand.name ? content.brand.name : ""}</small>
            </div>
          ) : (
            ""
          )}

          {content && content.title ? (
            <h4 className="h6">{content.title}</h4>
          ) : (
            ""
          )}
          {content && content.price && content.lastPrice == null ? (
            <strong className="d-block price ">
              {content.price
                ? content.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : ""}{" "}
              تومان
            </strong>
          ) : (
            <strong className="d-block price">
              {"  "}{" "}
              {content.lastPrice
                ? content.lastPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : ""}{" "}
              تومان
              <span className="price2 mx-1">
                {content.price
                  ? content.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : ""}
              </span>{" "}
            </strong>
          )}
          {content.min ? (
            <div className="d-flex mt-1" style={{ fontSize: "10px" }}>
              حداقل سفارش :<small className="mx-1">{content.min} عدد</small>
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
