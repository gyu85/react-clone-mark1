import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledSwiper = styled(Swiper)`
  height: 220px;

  &:hover .swiper-button-prev,
  &:hover .swiper-button-next {
    display: block;
  }

  .swiper-pagination {
    position: absolute;
    right: 16px;
    bottom: 16px;
    left: initial;
    width: auto;
    height: 26px;
    padding: 0 12px;
    border-radius: 26px;
    font-size: 12px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .swiper-pagination-current {
    font-weight: bold;
    color: #fff;
  }

  .swiper-pagination-total {
    opacity: 0.5;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
`;

const KeyVisual = () => {
  return (
    <StyledSwiper
      modules={[Pagination, Navigation]}
      navigation
      pagination={{ type: 'fraction' }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mySwiper'
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </StyledSwiper>
  );
};

export default KeyVisual;
