import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutStyle.scss";
import Profile from "../../assets/profile.png";
import { t } from "i18next";
AOS.init();

const About = () => {
  return (
    <div className="about" id="about">
      <div className="qa container" data-aos="fade-up" data-aos-duration="2500">
        <div className="quality">
          <img
            src="https://justwater.com/cdn/shop/files/Droplets_1000px.webp?v=1677497199&width=550"
            alt=""
          />
          <p>Sustainably Sourced</p>
        </div>
        <div className="quality">
          <img
            src="//justwater.com/cdn/shop/files/ICON_Naturally_Occurring_Mineral_Content_8b9e3e03-3df6-439b-8331-b20870c7cc0f.png?v=1677497220&width=1420"
            alt=""
          />
          <p>Sustainably Sourced</p>
        </div>
        <div className="quality">
          <img
            src="https://justwater.com/cdn/shop/files/Bcorp_1000px_33e81898-f588-4bb7-a838-34dfd1491234.png?v=1677497244&width=1420"
            alt=""
          />
          <p>Sustainably Sourced</p>
        </div>
        <div className="quality">
          <img
            src="https://justwater.com/cdn/shop/files/NationalMinoritySupplierCouncil_1000px_86a75e1c-bf17-4bd8-9d95-ec66dc40043a.png?v=1677497266&width=1420"
            alt=""
          />
          <p>Sustainably Sourced</p>
        </div>
        <div className="quality">
          <img
            src="https://justwater.com/cdn/shop/files/ICON_Recycleable1_f7ab0b65-7320-4ffe-8ced-59be1d756d82.png?v=1677497284&width=14200"
            alt=""
          />
          <p>Sustainably Sourced</p>
        </div>
      </div>

      <div className="information container">
        <div
          className="about_img"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <img src={Profile} alt="" />
        </div>
        <div
          className="about_text"
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          <h2>{t("about")}</h2>
          <p>{t("aboutTitle")}</p>
          <div className="btn_div">
            <a href="#">{t("contact")}</a>
          </div>
        </div>
      </div>

      <div className="products container">
        <div
          className="product_hover"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="product_first"></div>
          <div className="product_data">
            <div className="effect">
              <h2>{t("waterTitle")}</h2>
              <p>{t("waterSubtitle")}</p>
            </div>
          </div>
        </div>
        <div
          className="product_hover_2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="product_second"></div>
          <div className="product_data">
            <div className="effect">
              <h2>{t("coolerTitle")}</h2>
              <p>{t("coolerSubtitle")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
