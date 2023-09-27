import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./NavbarStyle.scss";
import { Link } from "react-scroll";
import UzbekFlag from "../../assets/uzbek.jpg";
import RussianFlag from "../../assets/rus.png";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    location.reload();
  };

  const [showNav, setShowNav] = useState(true);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="img" />
      </div>
      <ul className="ul">
        <Link
          className="nav_link"
          to="shop"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>{t("shop")}</li>
        </Link>
        <Link
          className="nav_link"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>{t("about")}</li>
        </Link>
        <Link
          className="nav_link"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>{t("contact")}</li>
        </Link>
      </ul>
      <div className="lng">
        <div className="dropdown">
          {localStorage.getItem("language") === "uz" ? (
            <div className="lan">
              <img src={UzbekFlag} alt="" />
              <button className="dropbtn">Uzbek</button>
            </div>
          ) : (
            <div className="lan">
              <img src={RussianFlag} alt="" />
              <button className="dropbtn">Русский</button>
            </div>
          )}

          <div className="dropdown_content">
            <a
              href="#"
              onClick={(e) => {
                changeLanguage("uz");
              }}
            >
              <img src={UzbekFlag} alt="" />
              <p> Uzbek</p>
            </a>
            <a
              href="#"
              onClick={(e) => {
                changeLanguage("rus");
              }}
            >
              <img src={RussianFlag} alt="" />
              <p> Русский</p>
            </a>
          </div>
        </div>
      </div>

      <div className="menu">
        <div className="icon" onClick={toggleNavItems} >
          {" "}
          {showNav ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="menu_bg">
          <div className="nav_logo">
            <img src={logo} alt="img" />
          </div>
          <ul className="menu_ul">
            <Link
              className="nav_link"
              to="shop"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li>{t("shop")}</li>
            </Link>
            <Link
              className="nav_link"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li>{t("about")}</li>
            </Link>
            <Link
              className="nav_link"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <li>{t("contact")}</li>
            </Link>
          </ul>
          <div className="lng">
            <div className="dropdown">
              {localStorage.getItem("language") === "uz" ? (
                <div className="lan">
                  <img src={UzbekFlag} alt="" />
                  <button className="dropbtn">Uzbek</button>
                </div>
              ) : (
                <div className="lan">
                  <img src={RussianFlag} alt="" />
                  <button className="dropbtn">Русский</button>
                </div>
              )}

              <div className="dropdown_content">
                <a
                  href="#"
                  onClick={(e) => {
                    changeLanguage("uz");
                  }}
                >
                  <img src={UzbekFlag} alt="" />
                  <p> Uzbek</p>
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    changeLanguage("rus");
                  }}
                >
                  <img src={RussianFlag} alt="" />
                  <p> Русский</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
