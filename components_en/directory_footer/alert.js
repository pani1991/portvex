import Image from "next/image";
import Link from "next/link";
import React from "react";
const Alert = ({ dir, content }) => {
  return (
    <Link href={content && content.link ? content.link : "/"}>
      <div
        className={"banner " + " " + (dir ? dir : "")}
        style={{
          background: `url(${content && content.img ? content.img : ""})`,
        }}
      >
        <div className="container h-100 text-center">
          <div className="h-100 text-white">
          Participate in the live broadcasting of companies By participating in the live broadcast of the companies from the last
             Their products were informed
          </div>
        </div>

        <style jsx>{`
          .banner {
            max-height: 60px !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
            width: 100%;
            height: auto;
            min-height: 60px;
            display: flex;
            align-items: center;
          }
          .container {
            min-height: 100%;
          }
        `}</style>
      </div>{" "}
    </Link>
  );
};
export default Alert;
