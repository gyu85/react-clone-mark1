import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

import {
  getPathHome,
  getPathStroy,
  getPathBaminAd,
  getPathRelayChannel,
  getPathKnowHow,
  getPathAffiliates,
  getPathGuide
} from 'utils/routes';

const gnbData = [
  {
    name: '외식업 이야기',
    href: getPathStroy()
  },
  {
    name: '배민광고신청',
    href: getPathBaminAd()
  },
  {
    name: '배민주문접수',
    href: getPathRelayChannel()
  },
  {
    name: '사장님꿀팁',
    href: getPathKnowHow()
  },
  {
    name: '이벤트∙혜택',
    href: getPathAffiliates()
  },
  {
    name: '이용가이드',
    href: getPathGuide()
  }
];

const HeaderEl = styled.header(props => ({
  height: '68px',
  backgroundColor: props.colors.blueLight
}));

const Logo = styled.h1`
  width: 186px;
  height: 32px;
`;

const LinkLogo = styled.a`
  display: block;
`;

const ImgLogo = styled.img`
  display: block;
`;

const GnbWrapper = styled.div``;

const GnbList = styled.ul``;

const Header = () => {
  const { colors } = useThemeState();
  return (
    <HeaderEl colors={colors}>
      <Logo>
        <LinkLogo href={getPathHome()}>
          <ImgLogo
            src='https://placehold.co/186x32/424242/fff?text=LOGO'
            width='186'
            height='32'
            alt='클론로고'
          />
        </LinkLogo>
      </Logo>
      <GnbWrapper>
        <GnbList>
          {gnbData.reduce((item, idx) => {
            const { name, href } = item;
            console.log(name);
            return <li key={`gnb-${idx}`}>{name}</li>;
          }, [])}
        </GnbList>
      </GnbWrapper>
    </HeaderEl>
  );
};

export default Header;
