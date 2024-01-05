import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const Breadcrumb = ({ content, siteData }) => {
  return (
    <div className={siteData.dir ? siteData.dir : ""}>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <ul className="breadcrumb">
              <li>
                <Link href="/en/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    className="icon"
                  >
                    <path d="M22,5.724V1.987c0-.553-.447-1-1-1s-1,.447-1,1v2.379L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.204,5.579c-1.38,.93-2.204,2.479-2.204,4.145v9.276c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-3.999Zm0,13.276c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V9.724c0-.999,.494-1.929,1.322-2.486L10.322,2.514c.51-.345,1.094-.517,1.678-.517s1.168,.172,1.678,.517l7.001,4.724c.827,.558,1.321,1.487,1.321,2.486v9.276Z"></path>
                  </svg>
                  home
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Outline"
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                  >
                    <path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path>
                  </svg>
                </Link>
              </li>

              <li>
                {content && content.title ? (
                  content.link ? (
                    <Link href={content && content.link ? content.link : ""}>
                      {content.title}

                      {content && content.child ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Outline"
                          viewBox="0 0 24 24"
                          width="15"
                          height="15"
                        >
                          <path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path>
                        </svg>
                      ) : (
                        ""
                      )}
                    </Link>
                  ) : (
                    content.title +
                    (content && content.child ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="15"
                        height="15"
                      >
                        <path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path>
                      </svg>
                    ) : (
                      ""
                    ))
                  )
                ) : (
                  ""
                )}
              </li>
              {content && content.child ? (
                <li>{content.child.title ? content.child.title : ""}</li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        a:hover,
        a:hover .icon path {
          color: var(--color1) !important;
          fill: var(--color1) !important;
        }
        li a {
          display: flex;
          align-items: center;
        }
        .icon {
          margin-inline-end: 8px;
          fill: var(--bs-body-color) !important;
        }
        svg path {
          fill: var(--bs-body-color) !important;
        }
        .breadcrumb {
          margin: 0px;
          padding: 0px;
          list-style: none;
          color: var(--bs-body-color) !important;
          fill: var(--bs-body-color) !important;
        }
        .ltr svg#Outline {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};
export default Breadcrumb;
