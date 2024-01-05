import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import siteData from "../../pages/api/apien";
import styles from "./index.module.css";
import SearchBox from "./searchBox";
import Alert from "./alert";
import { useRouter } from "next/router";
const Header = ({ content, fixed }) => {
  const [open2, setOpen2] = useState(null);
  const [mobilemenu, setMobilemenu] = useState(null);
  const [openMenus, setOpenMenus] = useState([]);
  const toggleMenu = (menuId) => {
    if (openMenus.includes(menuId)) {
      setOpenMenus(openMenus.filter((id) => id !== menuId));
    } else {
      setOpenMenus([...openMenus, menuId]);
    }
  };
  const renderSubMenu = (menuItem) => {
    const subMenuItems = content.menu.filter(
      (item) => item.parent && item.parent.id === menuItem.id
    );
    const isOpen = openMenus.includes(menuItem.id);

    return (
      <ul className={subMenuItems.length == 0 ? "d-none" : ""}>
        {subMenuItems.map((subMenuItem) => (
          <li key={subMenuItem.id}>
            <a
              href={subMenuItem.link}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {subMenuItem.title}
            </a>
            {renderSubMenu(subMenuItem)}
          </li>
        ))}
      </ul>
    );
  };
  const renderMenu = (menuItem) => {
    const subMenuItems = content.menu.filter(
      (item) => item.parent && item.parent.id === menuItem.id
    );
    const isOpen = openMenus.includes(menuItem.id);

    return (
      <li key={menuItem.id}>
        <a
          href={menuItem.link}
          onClick={(e) => {
            e.preventDefault();
            toggleMenu(menuItem.id);
          }}
        >
          {menuItem.title}
          {subMenuItems.length > 0 && (
            <svg
              width="10"
              height="10"
              viewBox="0 0 16 16"
              className="arrow-icon"
            >
              <path
                fillRule="evenodd"
                d="M8 11.293l3.646-3.647a1 1 0 011.415 1.414l-4 4a1 1 0 01-1.415 0l-4-4a1 1 0 111.415-1.414L8 11.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </a>
        {isOpen && renderSubMenu(menuItem)}
      </li>
    );
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 90);
    });
  }, []);

  const router = useRouter();

  const handleChange = (event) => {
    const selectedLang = event.target.value;

    // تغییر مسیر به صفحه مربوط به زبان انتخاب شده
    router.push(`/${selectedLang}`);
  };
  return (
    <div
      className={
        (content.class_name
          ? styles.menu + " " + content.class_name
          : styles.menu) +
        " " +
        (fixed && fixed == "fixed" ? "menufixed" : "") +
        " " +
        (siteData.dir ? siteData.dir : "") +
        (scroll ? " menufixed2" : "")
      }
    >
      {/* <Alert dir={siteData.dir} content={content.banner} /> */}

      <div className={styles.container + " container pb-2 pt-2"}>
        <div className="row">
          <div className="col-12 d-flex">
            <Link
              href="/"
              className={styles.shine + " d-flex"}
              style={{ alignItems: "center" }}
            >
              <Image
                alt=""
                src={content && content.logo ? content.logo : ""}
                width={0}
                height={0}
                sizes="100vw"
                className={styles.logo}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "45px",
                  paddingInlineEnd: "10px",
                }}
              />
            </Link>
            <div className="d-flex width">
              <div
                className={
                  styles.menurow + " py-2 d-flex position-relative width"
                }
              >
                {fixed != "fixed" || (fixed == "fixed" && scroll != false) ? (
                  <div
                    className="d-none d-md-inline-block mx-auto"
                    style={{ width: "calc(100% - 400px)" }}
                  >
                    <SearchBox dir={siteData.dir} />
                  </div>
                ) : (
                  ""
                )}
                <ul
                  className={styles.tools + " d-flex m-0 p-0"}
                  style={{ alignItems: "center" }}
                >
                  {/* <li onClick={() => setMobilemenu(1)} className="d-md-none ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="512"
                      height="512"
                    >
                      <rect y="11" width="24" height="2" rx="1"></rect>
                      <rect y="4" width="24" height="2" rx="1"></rect>
                      <rect y="18" width="24" height="2" rx="1"></rect>
                    </svg>
                  </li> */}

                  {/* <li className={styles.theme}>
                    <span
                      title="تم دارک"
                      className="d-inline-block"
                      style={{ minWidth: "fit-content" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"></path>
                      </svg>
                    </span>
                    <span
                      title="تم لایت"
                      className="d-inline-block"
                      style={{ minWidth: "fit-content" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm0-8c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Zm1-5V1c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1Zm0,19v-3c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1ZM5,12c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1Zm19,0c0-.55-.45-1-1-1h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1ZM6.71,6.71c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm14,14c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-16,0l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29ZM18.71,6.71l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z"></path>
                      </svg>
                    </span>
                  </li> */}
                  {/* <li>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                      </svg>
                    </a>
                  </li> */}
                  <li>
                    <Link href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
                        <circle cx="7" cy="22" r="2" />
                        <circle cx="17" cy="22" r="2" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.button + ""} href="/webchat">
                      <span className={styles.btntext + " mx-2"}>chat</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="m13.5,12c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3.5-1.5c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-10,0c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm17,1.84v6.66c0,2.757-2.243,5-5,5h-5.917C6.082,24,.47,19.208.03,12.854c-.241-3.476,1.027-6.878,3.479-9.333S9.363-.206,12.836.029c6.26.425,11.164,5.833,11.164,12.312Zm-2,0c0-5.431-4.084-9.962-9.299-10.316-.229-.016-.458-.023-.686-.023-2.656,0-5.209,1.048-7.091,2.933-2.044,2.046-3.101,4.883-2.899,7.782.373,5.38,5.024,9.285,11.059,9.285h5.917c1.654,0,3-1.346,3-3v-6.66Z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li>
                  <Link legacyBehavior href={siteData.urls.login}>
                      <a className={styles.button + ""}>
                        <span className={styles.btntext + " mx-1"}>
                          Login | Register
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Outline"
                          viewBox="0 0 24 24"
                          width="512"
                          height="512"
                        >
                          <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"></path>
                          <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"></path>
                        </svg>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className="mb-2 mt-0" /> */}

        {scroll == false ? (
          <div className={styles.top + " py-1"}>
            <div className="d-flex width">
              <div
                className={styles.menurow + " d-flex position-relative width"}
              >
                <ul
                  className={
                    styles.itemsfull +
                    "  m-0 p-0 d-md-inline-flex d-none " +
                    (mobilemenu == 1 ? styles.mobilemenufull : "")
                  }
                  style={{ alignItems: "center" }}
                >
                  <div
                    className="d-block d-md-none py-2"
                    style={{
                      background: "var(--bs-body-bg)",
                      zIndex: "100",
                      height: "40px",
                      paddingInline: "25px",
                    }}
                    onClick={() => setMobilemenu(null)}
                  >
                    <div className="row mx-0">
                      <div className="col-12 " style={{ textAlign: "end" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Outline"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                          className={styles.close + " m-1"}
                          style={{ cursor: "pointer" }}
                        >
                          <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {content.menu.map((menuItem) =>
                    !menuItem.parent ? renderMenu(menuItem) : null
                  )}
                </ul>
                <ul
                  className={styles.tools + " d-flex m-0 p-0"}
                  style={{ alignItems: "center" }}
                >
                  <li style={{ fontSize: "0.7rem" }}>
                    lang :
                    <select
                      style={{
                        fontSize: "0.7rem",
                        border: "0px solid transparent",
                        background: "transparent",
                        color: "var(--color1)",
                      }}
                      onChange={handleChange}
                    >
                      <option
                        value="en"
                        style={{ background: "transparent", color: "#000" }}
                      >
                        English
                      </option>
                      <option
                        value="/"
                        style={{ background: "transparent", color: "#000" }}
                      >
                        فارسی
                      </option>

                      <option
                        value="ar"
                        style={{ background: "transparent", color: "#000" }}
                      >
                        عربی
                      </option>
                    </select>
                  </li>
                  <li>
                    <a className={styles.button + ""}>
                      <span className={styles.btntext + " mx-1"}>
                        Download the application
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M15,24h-6c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h6c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5ZM9,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3h-6Zm5,17h0c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1h0c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1Z"></path>
                      </svg>
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <style jsx>{`
        .width {
          width: -webkit-fill-available;
          width: -moz-available;
        }
        .menufixed {
          --bs-dark-text-emphasis: #fff;
          background: transparent;
          border-width: 0px;
          box-shadow: none;
          position: fixed !important;
          top: 0px;
          left: 0px;
          background: transparent !important;
        }
        .menufixed2 {
          --bs-dark-text-emphasis: #53616e;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          background: var(--bs-body-bg) !important;
          position: fixed !important;
          top: 0px;
          left: 0px;
        }
      `}</style>
    </div>
  );
};
export default Header;
