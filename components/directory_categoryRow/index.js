import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/api";
import styles from "./index.module.css";

const CategoryRow = ({ content, title }) => {
  const [open, setOpen] = useState(null);
  return (
    <div
      className={
        (content.class_name
          ? styles.categoryrow + " " + content.class_name
          : styles.categoryrow) +
        " " +
        (siteData.dir ? siteData.dir : "")
      }
    >
      <div className={styles.container + " container"}>
        <div className="row text-center">
          <div className="col-12  mb-4">
            {title ? <h2 className="h4">{title}</h2> : ""}
          </div>
        </div>
        <div className="row g-4">
          {content &&
            content
              .filter((i) => i.parent == null && i.home && i.home == 1)
              .map((item, i) => (
                <div key={i} className="col-lg-3 col-md-4 col-6">
                  <div className={styles.box + " p-2"}>
                    <Link href={item.url ? item.url : ""}>
                      {" "}
                      <div className={styles.boxheader + " d-flex "}>
                        <div
                          className="d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <Image
                            src={item.img ? item.img : ""}
                            width={40}
                            alt=""
                            height={40}
                            fixed
                            style={{
                              boxShadow: "var(--bs-box-shadow)",
                              borderRadius: "50%",
                              marginInlineEnd: "10px",
                              objectFit: "cover",
                            }}
                          />
                          {item && item.title ? item.title : ""} (5)
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            width="512"
                            height="512"
                            style={{
                              transform: `${
                                siteData.dir && siteData.dir == "ltr"
                                  ? "rotate(180deg)"
                                  : ""
                              }`,
                            }}
                            className="mx-0"
                          >
                            <path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path>
                          </svg>
                        </div>
                      </div>
                    </Link>

                    {/* <div className={styles.boxheader + " mt-4"}>
                      <div
                        className="row g-2"
                        style={{ borderTop: "1px solid var( --color3)" }}
                      >
                        {content &&
                          content
                            .filter((x) => x.id && x.parent == item.id)
                            .map((item2, i2) => (
                              <Link href="">
                                {" "}
                                <div className="col-12" key={i2}>
                                  <span
                                    className="icon d-inline-block"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        item2 && item2.icon ? item2.icon : "",
                                    }}
                                  />

                                  <span className={styles.child}>
                                    {item && item2.title ? item2.title : ""}
                                  </span>
                                </div>{" "}
                              </Link>
                            ))}
                      </div>
                    </div> */}
                  </div>
                </div>
              ))}
          <div className="col-lg-3 col-md-4 col-6">
            <a className="d-block" href="./categories">
              <div className={styles.box + " p-3"}>
                <div className={styles.boxheader + " d-flex "}>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    <span className="icon d-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M4.5,17.5H2a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2H4.5a2,2,0,0,0,2-2V19.5A2,2,0,0,0,4.5,17.5Zm0,4.5H2V19.5H4.5Z"></path>
                        <path d="M22,17.5H19.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V19.5A2,2,0,0,0,22,17.5ZM22,22H19.5V19.5H22Z"></path>
                        <path d="M4.5,8.75H2a2,2,0,0,0-2,2v2.5a2,2,0,0,0,2,2H4.5a2,2,0,0,0,2-2v-2.5A2,2,0,0,0,4.5,8.75Zm0,4.5H2v-2.5H4.5Z"></path>
                        <path d="M22,8.75H19.5a2,2,0,0,0-2,2v2.5a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2v-2.5A2,2,0,0,0,22,8.75Zm0,4.5H19.5v-2.5H22Z"></path>
                        <path d="M4.5,0H2A2,2,0,0,0,0,2V4.5a2,2,0,0,0,2,2H4.5a2,2,0,0,0,2-2V2A2,2,0,0,0,4.5,0Zm0,4.5H2V2H4.5Z"></path>
                        <path d="M13.25,17.5h-2.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h2.5a2,2,0,0,0,2-2V19.5A2,2,0,0,0,13.25,17.5Zm0,4.5h-2.5V19.5h2.5Z"></path>
                        <path d="M13.25,8.75h-2.5a2,2,0,0,0-2,2v2.5a2,2,0,0,0,2,2h2.5a2,2,0,0,0,2-2v-2.5A2,2,0,0,0,13.25,8.75Zm0,4.5h-2.5v-2.5h2.5Z"></path>
                        <path d="M13.25,0h-2.5a2,2,0,0,0-2,2V4.5a2,2,0,0,0,2,2h2.5a2,2,0,0,0,2-2V2A2,2,0,0,0,13.25,0Zm0,4.5h-2.5V2h2.5Z"></path>
                        <path d="M22,0H19.5a2,2,0,0,0-2,2V4.5a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0Zm0,4.5H19.5V2H22Z"></path>
                      </svg>
                    </span>
                    موارد بیشتر ...
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="512"
                      height="512"
                      style={{
                        transform: `${
                          siteData.dir && siteData.dir == "ltr"
                            ? "rotate(180deg)"
                            : ""
                        }`,
                      }}
                      className="mx-0"
                    >
                      <path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path>
                    </svg>
                  </div>{" "}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryRow;
