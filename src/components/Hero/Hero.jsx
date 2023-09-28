import React from "react";
import Cooler from "../../assets/Subject.png";
import Water from "../../assets/bottleWater.png";
import "./HeroStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import Car from "../../assets/car_delivery.png";
import { useTranslation } from "react-i18next";
AOS.init();

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="img cooler">
        <img src={Cooler} alt="" className="img_cooler" width="100%"/>
      </div>
      <div className="img water">
        <img src={Water} alt="" className="img_water" style={{opacity:"0.9"}} />
      </div>
      <div className="hero_title">
        <div
          className="hero_subtitle"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <h2>
            <Typewriter
              words={[`${t("greeting")}👋`]}
              autoStart={true}
              loop={true}
            />
          </h2>
          <p>
            <Typewriter
              words={[
                `${t('intro_title')}`,
                `${t('intro_subtitle')}`,
              ]}
              autoStart={true}
              loop={true}
            />
          </p>
          <a href="#contact" className="contact_link">
            {t('contact')}
          </a>
        </div>
        {/* <div
          className=""
          data-aos="fade-left"
          data-aos-duration="2500"
        >
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
