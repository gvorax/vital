import { React, useState } from "react";
import "./NavbarStyle.scss";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import UzbekFlag from "../../assets/uzbek.jpg";
import RussianFlag from "../../assets/rus.png";
import UsaFlag from "../../assets/usa.png";
import hamburger from '../../assets/hamburger.png';
import close from "../../assets/close.png"
import "../../i18n/i18n";
import { Link } from "react-scroll";

const NavbarX = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };


  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    location.reload();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="img" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        {!showNavbar ? (
          <img src={hamburger}/>
        ) :(
          <img src={close}/>
        )}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
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
            <div className="lng">
              <div className="dropdown">
                {localStorage.getItem("language") == "uz" ||
                localStorage.getItem("language") == null ? (
                  <div className="lan">
                    <img src={UzbekFlag} alt="" />
                    <button className="dropbtn">Uzbek</button>
                  </div>
                ) : null}
                {localStorage.getItem("language") == "rus" ? (
                  <div className="lan">
                    <img src={RussianFlag} alt="" />
                    <button className="dropbtn">Русский</button>
                  </div>
                ) : null}
                {localStorage.getItem("language") == "eng" ? (
                  <div className="lan">
                    <img src={UsaFlag} alt="" />
                    <button className="dropbtn">English</button>
                  </div>
                ) : null}

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
                  <a
                    href="#"
                    onClick={(e) => {
                      changeLanguage("eng");
                    }}
                  >
                    <img src={UsaFlag} alt="" />
                    <p> English</p>
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarX;
