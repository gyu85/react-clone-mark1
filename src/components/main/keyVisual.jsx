import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { IcoArrowPrevt24x24, IcoArrowNext24x24 } from 'assets/images/common';

const sliderContentData = {
  content: [
    {
      imageUrl: 'http://placeimg.com/450/220/nature/grayscale',
      linkUrl: ' /baemin-ad',
      mainBannerText: '배민1(one)<br>클론 페이지 입니다.',
      subBannerText: '한 번에 한 주문만 배달하는',
      bannerTextColor: '#ffffff',
      bannerBackgroundColor: '#414141',
      bannerDisplayOrder: 0,
      openNewWindowYn: 'N'
    },
    {
      imageUrl: 'http://placeimg.com/450/220/arch/sepia',
      linkUrl: 'https://www.daangn.com/',
      mainBannerText: '당근마켓 홈페이지 <br>주소입니다!',
      subBannerText: '클론 페이지 입니다.',
      bannerTextColor: '#ffffff',
      bannerBackgroundColor: '#29261c',
      bannerDisplayOrder: 1,
      openNewWindowYn: 'Y'
    },
    {
      imageUrl: 'http://placeimg.com/450/220/tech/grayscale',
      linkUrl: 'https://www.coupang.com/',
      mainBannerText: '쿠팡 주소입니다.<br>그냥 쿠팡주소로 했습니다.',
      subBannerText: '클론 페이지 입니다.',
      bannerTextColor: '#ffffff',
      bannerBackgroundColor: '#7a7a7a',
      bannerDisplayOrder: 3,
      openNewWindowYn: 'Y'
    },
    {
      imageUrl: 'http://placeimg.com/450/220/nature/sepia',
      linkUrl: 'https://line.me/ko/',
      mainBannerText: '라인 페이지 입니다.<br>그냥 쓸 주소가 없었어요.',
      subBannerText: '클론 페이지입니다.',
      bannerTextColor: '#ffffff',
      bannerBackgroundColor: '#7f7157',
      bannerDisplayOrder: 4,
      openNewWindowYn: 'Y'
    }
  ]
};

const StyledSwiper = styled(Swiper)`
  height: 220px;

  .btn-prev,
  .btn-next {
    display: none;
  }

  &:hover .btn-prev,
  &:hover .btn-next {
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
`;

const NavigationCustomButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 50%;
  padding: 8px;
  margin-top: -25px;

  &.btn-prev {
    left: 0;
  }

  &.btn-next {
    right: 0;
  }

  &[disabled] {
    opacity: 0.3;
  }

  & > svg {
    vertical-align: top;
  }
`;

const LinkBanner = styled.a(props => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: '0 48px',
  flexDirection: 'column',
  justifyContent: 'center',
  boxSizing: 'border-box',
  backgroundColor: `${props.bannerBgColor}`,
  backgroundImage: `url(${props.bannerBgImage})`,
  backgroundPosition: '100% 0',
  backgroundSize: 'auto 100%',
  backgroundRepeat: 'no-repeat',
  [`&:hover`]: { textDecoration: 'none' }
}));

const Title4 = styled.h4(props => ({
  fontSize: '18px',
  fontWeight: 'normal',
  lineHeight: '26px',
  color: props.bannerTextColor
}));

const BannerText = styled.p(props => ({
  paddingTop: '8px',
  fontSize: '32px',
  lineHeight: '44px',
  color: `${props.bannerTextColor}`
}));

const KeyVisual = () => {
  const { content } = sliderContentData;

  return (
    <StyledSwiper
      modules={[Pagination, Navigation]}
      navigation={{
        nextEl: '.btn-next',
        prevEl: '.btn-prev'
      }}
      pagination={{ type: 'fraction' }}
      loop={true}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='mySwiper'
    >
      <NavigationCustomButton type='button' className='btn-prev'>
        <IcoArrowPrevt24x24 />
      </NavigationCustomButton>
      <NavigationCustomButton type='button' className='btn-next'>
        <IcoArrowNext24x24 />
      </NavigationCustomButton>

      {content.reduce((target, item, idx) => {
        const {
          imageUrl,
          linkUrl,
          mainBannerText,
          subBannerText,
          bannerTextColor,
          bannerBackgroundColor,
          bannerDisplayOrder,
          openNewWindowYn
        } = item;

        target.push(
          <SwiperSlide key={`banner-key-${bannerDisplayOrder}`}>
            <LinkBanner
              href={linkUrl}
              target={`${openNewWindowYn === 'Y' ? '_blank' : '_self'}`}
              rel={'noreferrer'}
              bannerBgColor={bannerBackgroundColor}
              bannerBgImage={imageUrl}
            >
              <Title4 bannerTextColor={bannerTextColor}>{subBannerText}</Title4>
              <BannerText
                bannerTextColor={bannerTextColor}
                dangerouslySetInnerHTML={{ __html: mainBannerText }}
              />
            </LinkBanner>
          </SwiperSlide>
        );

        return target;
      }, [])}
    </StyledSwiper>
  );
};

export default KeyVisual;
