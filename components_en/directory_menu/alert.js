import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
const Alert = ({ dir, content }) => {
  return (
    <Link href={content && content.link ? content.link : "/"}>
      <div
        className={styles.banner + " " + (dir ? dir : "")}
        style={{
          background: `url(${content && content.img ? content.img : ""})`,
        }}
      >
        <div className="container h-100 text-center">
          <div className="h-100 text-white">
          Participate in the live broadcasting of companies By participating in the live broadcast of the companies from the last
            Their products have become
          </div>
        </div>

        <style jsx>{`
          .container {
            min-height: 100%;
          }
        `}</style>
      </div>{" "}
    </Link>
  );
};
export default Alert;
