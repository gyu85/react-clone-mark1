import React from 'react';

import Carousel from 'components/common/carousel';

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

const KeyVisual = () => {
  const { content } = sliderContentData;

  return <Carousel content={content} loop={true} />;
};

export default KeyVisual;
