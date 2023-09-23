import React from "react";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import "./FooterStyle.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_top">
          <div className="img_box">
            <img src={logo} alt="" />
          </div>
          <div className="socials">
            <div className="icon">
              <a href="#">
                <img src={telegram} alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <img src={facebook} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <ul>
            <a href="#" className="nav_link">
              <li>Shop</li>
            </a>
            <a href="#" className="nav_link">
              <li>About us</li>
            </a>
            <a href="#" className="nav_link">
              <li>Contacts</li>
            </a>
          </ul>
          <p>@gvorax 09.2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
