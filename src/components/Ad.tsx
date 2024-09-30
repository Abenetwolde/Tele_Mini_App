/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import { addCommas } from "@persian-tools/persian-tools";
import { Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
// Import Swiper styles
import 'swiper/css';
interface Props {
  url: string;
  title: string;
  price: number;
  quantity: number;
  imageURL: string | [];
  discountedPrice: number;
}
function Ads({
  url,
  title,
  price,
  quantity,
  imageURL,
  discountedPrice
}: Props) {

    
  
  return (
    <div className="w-full max-h-40">
      <Swiper
        slidesPerView={1.5} // Show 1 full card and half of the next
        spaceBetween={-30} // Negative space to overlap slides
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        effect="slide"
        grabCursor={true}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-40" // Tailwind classes for Swiper container
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <div className="flex justify-center items-center w-64 h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Slide 1"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>

        {/* Repeat for other slides */}
        <SwiperSlide>
          <div className="flex justify-center items-center w-64 h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Slide 2"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-64 h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Slide 3"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-64 h-64 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/150"
              alt="Slide 4"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Ads;
