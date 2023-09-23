import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./NavbarStyle.scss";
import { Link } from "react-scroll";
import UzbekFlag from "../../assets/uzbek.jpg";
import RussianFlag from "../../assets/rus.png";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";

const Navbar = () => {
  const {t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    location.reload()
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="img" />
      </div>
      <ul>
        <Link
          className="nav_link"
          to="shop"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>{t('shop')}</li>
        </Link>
        <Link
          className="nav_link"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>{t('about')}</li>
        </Link>
        <Link
          className="nav_link"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>{t('contact')}</li>
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
  );
};

export default Navbar;
