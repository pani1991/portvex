import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const AboutBox = ({ content, siteData }) => {
  return (
    <div className={"banner " + (siteData.dir ? siteData.dir : "")}>
      <div className="container banners">
        <div className="row gy-4">
          {content &&
            content.map((item, i) => (
              <div className="col-lg-3 col-sm-6" key={i}>
                <a href={item.link ? item.link : ""}>
                  <div
                    className="box"
                    style={{
                      background: `url(${item.img ? "/" + item.img : ""})`,
                    }}
                  ></div>
                </a>
              </div>
            ))}
        </div>
      </div>
      <style jsx>{`
        .banners {
          padding-block: 30px;
        }
        .banners .box {
          height: calc(35vh - var(--bs-gutter-y) / 2);
          max-height: calc(616px - var(--bs-gutter-y) / 2);
          border-radius: var(--bs-border-radius);
          background-size: cover !important;
          background-position: center !important;
        }
      `}</style>
    </div>
  );
};
export default AboutBox;
