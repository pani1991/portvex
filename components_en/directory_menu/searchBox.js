import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const SearchBox = ({ dir }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className={"searchbox " + " " + (dir ? dir : "")}>
      {open == 1 ? (
        <div className="col-12 p-3 inputbg" onClick={() => setOpen(0)}></div>
      ) : (
        ""
      )}
      <div className="search position-relative">
        <input placeholder="What are you looking for?" onClick={() => setOpen(1)} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="25"
          height="25"
          fill="var(--color1)"
        >
          <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"></path>
        </svg>
        {/* {open == 1 ? (
          <div className="col-12 p-3 inputlist">
            <div className="row g-3">
              <div className="col-md-6">
                شرکت ها :
                <div className="row g-3 mt-2">
                  <div className="col-12 product">
                    <Link href="/company/1">
                      <div
                        className="d-flex"
                        style={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Image
                            src="/file/download.jfif"
                            fixed
                            width={30}
                            height={30}
                            style={{
                              borderRadius: "var(--bs-border-radius)",
                              objectFit: "cover",
                              marginInlineEnd: "10px",
                              boxShadow: "var(--bs-box-shadow)",
                            }}
                            alt=""
                          />
                          شرکت تجهیزات پزشکی پارس
                        </div>
                        <div>
                          <strong>09146003002</strong>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-12 product">
                    <Link href="/company/1">
                      <div
                        className="d-flex"
                        style={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Image
                            src="/file/download(1).jfif"
                            fixed
                            alt=""
                            width={30}
                            height={30}
                            style={{
                              borderRadius: "var(--bs-border-radius)",
                              objectFit: "cover",
                              marginInlineEnd: "10px",
                              boxShadow: "var(--bs-box-shadow)",
                            }}
                          />
                          شرکت افرا طب
                        </div>
                        <div>
                          <strong>09146003002</strong>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                محصولات :
                <div className="row g-3 mt-2">
                  <div className="col-12 product">
                    <Link href="/">
                      <div
                        className="d-flex"
                        style={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Image
                            src="/file/718802.webp"
                            fixed
                            alt=""
                            width={30}
                            height={30}
                            style={{
                              borderRadius: "var(--bs-border-radius)",
                              objectFit: "cover",
                              marginInlineEnd: "10px",
                              boxShadow: "var(--bs-box-shadow)",
                            }}
                          />
                          فشارسنج عقربه ای مدل SP90
                        </div>
                        <div>
                          <strong>1,412,000 تومان</strong>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-12 product">
                    <Link href="/">
                      <div
                        className="d-flex"
                        style={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Image
                            src="/file/1056682.webp"
                            fixed
                            alt=""
                            width={30}
                            height={30}
                            style={{
                              borderRadius: "var(--bs-border-radius)",
                              objectFit: "cover",
                              marginInlineEnd: "10px",
                              boxShadow: "var(--bs-box-shadow)",
                            }}
                          />
                          آویز دست پاک سمن مدل humeral With Shoulder Control
                          سایز متوسط
                        </div>
                        <div style={{ minWidth: "fit-content" }}>
                          <strong>300,000 تومان</strong>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )} */}
      </div>

      <style jsx>{`
        .inputbg {
          position: fixed;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: tansparent;
          z-index: 1;
        }
        .inputlist .product {
          font-size: 0.7rem;
        }
        .inputlist {
          padding: 10px 15px;
          border-radius: 0px 0px var(--bs-border-radius) var(--bs-border-radius);
          border: 2px solid var(--color1) !important;
          border-top-width: 0px !important;
          z-index: 3;
          position: absolute;
          background-color: var(--bs-body-bg);
          top: 40px;
          position: absolute;
          color: var(--bs-heading-color);
          text-align: start;
          max-height: 185px;
          overflow-y: auto;
        }
        .search input {
          width: -webkit-fill-available;
          width: -moz-available;
          font-size: 10px;
          line-height: 20px;
          border-radius: 25px;
          padding: 10px;
          border: 1px solid !important;
          border-width: 0px;
          padding-inline-end: 81px;
          z-index: 1;
          position: relative;
        }
        .search svg {
          position: absolute;
          top: 5px;
          left: 7px;
          z-index: 1;
          fill: #fff !important;
          border-radius: 25px;
          background: var(--color1);
          width: 70px !important;
          border: 6px solid var(--color1);
          height: 31px !important;
          padding: 1px;
        }
        .ltr .search svg {
          left: auto;
          right: 7px;
        }
        .searchbox {
          min-width: calc(100% - 120px);
        }
      `}</style>
    </div>
  );
};
export default SearchBox;
