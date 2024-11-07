/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import { addCommas } from "@persian-tools/persian-tools";
import { Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Navigation,Pagination } from 'swiper/modules';

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

    
  const imageSources:any = [
    "https://th.bing.com/th/id/OIP.HTmQ9WaJ-BMCAt5oZPnXrgHaFj?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.HTmQ9WaJ-BMCAt5oZPnXrgHaFj?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.HTmQ9WaJ-BMCAt5oZPnXrgHaFj?rs=1&pid=ImgDetMain",
  ];
  
  return (
    <div className="w-full">
    <Swiper
      modules={[EffectFade, Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
        type: 'bullets', // Enables dot indicators
      }}
      // effect="slide"
      grabCursor={true}
      onSlideChange={() => console.log('Slide changed')}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full h-20 p-3"
    >
      {imageSources.map((src:any, index:any) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center w-full h-full rounded-2xl overflow-hidden shadow-md px-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}

export default Ads;
