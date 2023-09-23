import React from "react";
import "./ContactStyle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  return (
    <div>
      <div className="container" id="contact">
        <div className="contact_box">
          <div className="box" data-aos="fade-right" data-aos-duration="1500">
            <h2>Contact Us</h2>
            <div className="contact_text">
              {" "}
              <div className="span"></div> <p> sayhello@gmail.com</p>
            </div>
            <div className="contact_text">
              {" "}
              <div className="span"></div>{" "}
              <p>
                {" "}
                <a href="tel:+998999999999"> +998 99 999 99 99 </a>
              </p>
            </div>
            <div className="contact_text">
              {" "}
              <div className="span"></div> <p> Tashkent, Uzbekistan</p>
            </div>
          </div>
          <div className="box_bg" data-aos="fade-left" data-aos-duration="1500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5536.875310868759!2d69.24754207087284!3d41.31761766324699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1693320330756!5m2!1sen!2s"
              width="100%"
              height="600"
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
