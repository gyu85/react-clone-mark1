import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

import { getPathHome } from 'utils/routes';

import Gnb from './gnb';
import SUbGnb from './subGnb';

const HeaderEl = styled.header(props => ({
  borderBottom: `1px solid ${props.colors.gray03}`
}));

const HeaderInner = styled.div`
  max-width: 1100px;
  padding: 0 32px;
  margin: 0 auto;
  box-sizing: border-box;
  align-items: center;
`;

const GnbWrapper = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
`;

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

const Header = () => {
  const { colors } = useThemeState();
  return (
    <HeaderEl colors={colors}>
      <HeaderInner>
        <SUbGnb />
        <GnbWrapper>
          <Logo>
            <LinkLogo href={getPathHome()}>
              <ImgLogo
                src='https://placehold.co/186x32/424242/fff?text=CLONE LOGO'
                width='186'
                height='32'
                alt='클론로고'
              />
            </LinkLogo>
          </Logo>
          <Gnb />
        </GnbWrapper>
      </HeaderInner>
    </HeaderEl>
  );
};

export default Header;
