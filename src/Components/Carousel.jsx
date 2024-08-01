import React from 'react';
import '../Styles/Carosel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Front1 from '../Images/Front3.jpg';
import Front2 from '../Images/Front2.jpg';
import Front3 from '../Images/Front1.jpg';

export const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          bulletElement: 'span',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <div className="image-container">
              <img src={Front1} alt="Image 1" className="carousel-image" />
            </div>
            <div className="text-overlay">Precision in Practice: Elevate Your Skills in Physiotherapy and Dry Needling</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="image-container">
              <img src={Front2} alt="Image 2" className="carousel-image" />
            </div>
            <div className="text-overlay">Healing with Precision: Innovate, Learn, Lead</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <div className="image-container">
              <img src={Front3} alt="Image 3" className="carousel-image" />
            </div>
            <div className="text-overlay">Skill, Science, Success: Your Physiotherapy and Dry Needling Future</div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

