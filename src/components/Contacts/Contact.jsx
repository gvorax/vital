import React from "react";
import "./ContactStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import { t } from "i18next";
AOS.init();

const Contact = () => {
  return (
    <div>
      <div className="container" id="contact">
        <div className="contact_box">
          <div className="box" data-aos="fade-right" data-aos-duration="1500">
            <h2>{t('contactTitle')}</h2>
            <div className="contact_text">
              {" "}
              {/* <div className="span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>{" "} */}
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
            <div className="contact_text">
              {" "}
              {/* <div className="span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>{" "} */}
              <p>
                {" "}
                <a href="tel:+998998813000">+998 99 881 30 00</a>
              </p>
            </div>
            <div className="contact_text">
              {" "}
              {/* <div className="span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>{" "} */}
              <p>
                {t('location')}
              </p>
            </div>
          </div>
          <div className="box_bg" data-aos="fade-left" data-aos-duration="1500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5991.695586138778!2d69.202127!3d41.333923000000006!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzAyLjEiTiA2OcKwMTInMDcuNyJF!5e0!3m2!1sen!2s!4v1695472260293!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
