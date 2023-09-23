import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

import Bottle from "../../assets/cooler1-removebg-preview.png";
import Water from "../../assets/bootle.jpg";

import "./ShopStyle.scss";

const Shop = ({ modal, setModal }) => {
  const [info, setInfo] = useState(false);
  const [num, setNum] = useState();
  const data = [
    {
      id: 123123123,
      model: "MF-42342",
      info: {
        title: "Модель Sel-301",
        coldInfo: "❄️3 лит/в час холодная вода (+10)С°",
        hotInfo: "☕️5 лит/ в час горячая вода (+95)С°",
        delivery: "🚛Доставка и установка по городу",
        warrantly: "🔧Сервис 1 год",
      },
    },
    {
      id: 123123122313,
      model: "MF-42342",
      info: {
        title: "Модель Sel-301",
        coldInfo: "❄️3 лит/в час холодная вода (+10)С°",
        hotInfo: "☕️5 лит/ в час горячая вода (+95)С°",
        delivery: "🚛Доставка и установка по городу",
        warrantly: "🔧Сервис 1 год",
      },
    },
    {
      id: 123123123112,
      model: "MF-42342",
      info: {
        title: "Модель Sel-301",
        coldInfo: "❄️3 лит/в час холодная вода (+10)С°",
        hotInfo: "☕️5 лит/ в час горячая вода (+95)С°",
        delivery: "🚛Доставка и установка по городу",
        warrantly: "🔧Сервис 1 год",
      },
    },
    {
      id: 1231231235555,
      model: "MF-42342",
      info: {
        title: "Модель Sel-301",
        coldInfo: "❄️3 лит/в час холодная вода (+10)С°",
        hotInfo: "☕️5 лит/ в час горячая вода (+95)С°",
        delivery: "🚛Доставка и установка по городу",
        warrantly: "🔧Сервис 1 год",
      },
    },
    {
      id: 123123123777,
      model: "MF-42342",
      info: {
        title: "Модель Sel-301",
        coldInfo: "❄️3 лит/в час холодная вода (+10)С°",
        hotInfo: "☕️5 лит/ в час горячая вода (+95)С°",
        delivery: "🚛Доставка и установка по городу",
        warrantly: "🔧Сервис 1 год",
      },
    },
  ];

  return (
    <div className="shop" id="shop">
      <div className="container">
        <h2 data-aos="fade-up" className="shop_title">Shop</h2>
        <div className="information container">
          <div
            className="about_img"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <img src={Water} alt="" />
          </div>
          <div
            className="about_text"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <h2>Selva by Vital bu nima? </h2>
            <p>
              Kompaniya Vital brendi bilan hamkorlikda o’z suvlarini ishlab
              chiqaradi.
            </p>
            <h2>Bu nima beradi ?</h2>
            <p>
              Vital kompaniyasi Xitoy va Yaponiya texnalogiysi asosida ya’ni
              inson omili aralashuvi siz o’z suvlarini ishlab chiqaradi. Ushbu
              jarayonda suv 9 bosqichda suvni tozlanib, bir marotabalik
              qadoqlarga avtomat ravishda qadoqlanadi. Bo’sh idishlarning o’zi
              ham 3 xil haroratda 15 bosqichlik tozalash konveyridan avtomat
              ravihda o’tib idishlar suv quyish bo’limlariga avtomat tarzda
              o’tkaziladi.
            </p>
            <button onClick={() => setModal(true)} className="item_btn">
              {" "}
              Sotib olish{" "}
            </button>
          </div>
        </div>
        <div data-aos="fade-up">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="shop_item">
                    <div className="item_img">
                      <img src={Bottle} alt="" />
                      <div className="toggle">
                        {info && item.id === num ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 close"
                            onClick={() => {
                              setInfo((prev) => !prev);
                              setNum();
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 hamburger"
                            onClick={() => {
                              setInfo(true);
                              setNum(item.id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <p>{item.model}</p>
                    <button className="item_btn" onClick={() => setModal(true)}>
                      Buy
                    </button>
                    {info && item.id === num && (
                      <div className="bg_transparent">
                        <div className="item_data">
                          <p> {item.info.title} </p>
                          <p>{item.info.coldInfo}</p>
                          <p>{item.info.hotInfo}</p>
                          <p>{item.info.delivery}</p>
                          <p>{item.info.warrantly}</p>
                          <button
                            className="modal_btn"
                            onClick={() => {
                              setInfo(false);
                              setModal(true);
                            }}
                          >
                            Buy
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Shop;
