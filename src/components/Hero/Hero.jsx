import React from "react";
import Cooler from "../../assets/Subject.png";
import Water from "../../assets/bottleWater.png";
import "./HeroStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
AOS.init();

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="img cooler">
        <img src={Cooler} alt="" className="img_cooler" width="100%"/>
      </div>
      <div className="img water">
        <img src={Water} alt="" className="img_water" width="100%" style={{opacity:"0.9"}} />
      </div>
      <div className="hero_title">
        <div
          className="hero_subtitle"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <h2>
            <Typewriter
              words={[`${t("greeting")}`]}
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
          <Link
              className="contact_link"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              style={{cursor:"pointer"}}
            >
              {t("contact")}
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;
