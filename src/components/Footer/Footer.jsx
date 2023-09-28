import React from "react";
import telegram from "../../assets/telegramblack.png";
import instagram from "../../assets/instagramblack.png";
import facebook from "../../assets/facebookblack.png";
import "./FooterStyle.scss";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { t } from "i18next";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_top">
          <div className="img_box">
            <img src={logo} alt="" />
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
          <div className="socials">
            <div className="icon">
              <a href="https://t.me/selvauz">
                <img src={telegram} alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/Selva.uz/">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.facebook.com/selva.uz/">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
