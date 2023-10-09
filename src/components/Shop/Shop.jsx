import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { t } from "i18next";
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
import Water from "../../assets/bootle.png";

import "./ShopStyle.scss";
import ProductModal from "../Modal/ProductModal";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../../context/context";
import { data } from "jquery";

const Shop = ({ modal, setModal }) => {
  const { setPro_id } = useContext(ProductContext);
  const [info, setInfo] = useState(false);
  const [num, setNum] = useState();
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://selva.zirapcha.uz/api/product/all");

      setData1(res.data.data.products);
    };

    fetchData();
  }, []);

  return (
    <div className="shop" id="shop">
      <div>
        <h2 data-aos="fade-up" className="shop_title">
          {t("shopTitle")}
        </h2>
        <div className="information">
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
            <h2>{t("shopSubTitle")}</h2>
            <p>{t("shopPar")}</p>
            <h2>{t("shopTitle2")}</h2>
            <p>{t("shopPar2")}</p>
            <button onClick={() => setModal(true)} className="item_btn">
              {t("shopBuy")}
            </button>
          </div>
        </div>
        <div data-aos="fade-up">
          <Swiper
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
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
            {data1.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="shop_item"
                    // onClick={() => {
                    //   setInfo((prev) => !prev);
                    //   setNum();
                    // }}
                    onClick={() => {
                      setInfo(true);
                      setNum(item._id);
                    }}
                  >
                    <div className="item_img">
                      <img
                        src={`https://selva.zirapcha.uz/api/api/file/${item.images[0]}`}
                        alt=""
                      />

                      {/* <div className="toggle">
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
                              setNum(item._id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                          </svg>
                        )}
                      </div> */}
                    </div>
                    <p>{item.name}</p>
                    <button
                      className="item_btn"
                      // onClick={() => {
                      //   setPro_id(item._id);
                      //   setModal(true);
                      // }}
                    >
                      {t("shopBuy")}
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {info && <ProductModal setInfo={setInfo} setModal={setModal} num={num} />}
    </div>
  );
};

export default Shop;
