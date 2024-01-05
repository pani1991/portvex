import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const AboutBox = ({ content, siteData }) => {
  return (
    <div className={"aboutbox " + (siteData.dir ? siteData.dir : "")}>
      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <div className="box p-5">
              <div className="col-lg-6 col-md-9 py-4">
                {content && content.title ? (
                  <h3 className="h5 mb-3 text-white">{content.title}</h3>
                ) : (
                  ""
                )}
                {content && content.text ? (
                  <div
                    style={{ textAlign: "justify" }}
                    className=" text-white mb-3"
                    dangerouslySetInnerHTML={{
                      __html: content.text,
                    }}
                  />
                ) : (
                  ""
                )}
                <ul className="m-0 mt-2 p-0">
                  {content &&
                    content.button &&
                    content.button.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.link ? item.link : ""}
                          className="text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                          >
                            <path d="M13.845,17.267l-3.262,3.262A5.028,5.028,0,0,1,3.472,13.42l3.262-3.265A1,1,0,0,0,5.319,8.741L2.058,12.006A7.027,7.027,0,0,0,12,21.943l3.262-3.262a1,1,0,0,0-1.414-1.414Z" />
                            <path d="M21.944,2.061A6.979,6.979,0,0,0,16.975,0h0a6.983,6.983,0,0,0-4.968,2.057L8.74,5.32a1,1,0,0,0,1.414,1.415l3.265-3.262A4.993,4.993,0,0,1,16.973,2h0a5.028,5.028,0,0,1,3.554,8.583l-3.262,3.262A1,1,0,1,0,18.68,15.26L21.942,12A7.037,7.037,0,0,0,21.944,2.061Z" />
                            <path d="M14.293,8.293l-6,6a1,1,0,1,0,1.414,1.414l6-6a1,1,0,0,0-1.414-1.414Z" />
                          </svg>
                          {item.title ? item.title : ""}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        li {
          list-style: none;
          display: inline-block;
          margin-inline-end: 25px;
        }
        li svg {
          width: 12px;
          height: 12px;
          margin-inline-end: 8px;
          fill: #fff;
        }
        .box {
          background: linear-gradient(
              270deg,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0) 100%
            ),
            url(${content && content.bg ? content.bg : ""});
          box-shadow: var(--bs-box-shadow);
          height: calc(35vh - var(--bs-gutter-y) / 2);
          max-height: calc(616px - var(--bs-gutter-y) / 2);
          border-radius: var(--bs-border-radius);
          background-size: cover !important;
          background-position: center !important;
          position: relative;
        }
       .ltr .box {
          background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0) 100%
            ),
            url(${content && content.bg ? content.bg : ""});
    
        }
        .box::before {
          content: "";
        }
        .aboutbox {
          padding-block: 50px;
        }
      `}</style>
    </div>
  );
};
export default AboutBox;
