import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';
import {
  getPathNotice,
  getPathCsCenter,
  getPathLogin,
  getPathJoin
} from 'utils/routes';

const serviceData = [
  { name: '배달의민족', href: 'https://www.baemin.com/' },
  { name: '카카오', href: 'https://www.kakaocorp.com/page/' },
  { name: '라인', href: 'https://line.me/ko/' },
  { name: '쿠팡', href: 'https://www.coupang.com/' },
  { name: '당근마켓', href: 'https://www.daangn.com/' }
];

const customerData = [
  { name: '공지사항', href: getPathNotice() },
  { name: '고객센터', href: getPathCsCenter() },
  { name: '로그인', href: getPathLogin() },
  { name: '회원가입', href: getPathJoin() }
];

const SubGnbWrapper = styled.div`
  display: flex;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
`;

const ServicesLinks = styled.div(props => ({
  [LinkService]: {
    color: props.colors.gray07,

    '&:after': {
      backgroundColor: props.colors.gray05
    }
  }
}));

const LinkService = styled.a`
  display: inline-block;
  position: relative;
  padding: 0 8px 0 9px;
  line-height: 20px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &:first-child:after {
    display: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 0px;
    width: 1px;
    height: 12px;
  }
`;

const SubGnb = () => {
  const { colors } = useThemeState();

  return (
    <SubGnbWrapper>
      <ServicesLinks colors={colors}>
        {serviceData.reduce((target, item, index) => {
          const { name, href } = item;

          target.push(
            <LinkService
              key={`servicelinks-${index}`}
              href={href}
              target='_blank'
              rel='norefferer'
            >
              {name}
            </LinkService>
          );

          return target;
        }, [])}
      </ServicesLinks>
      <ServicesLinks colors={colors}>
        {customerData.reduce((target, item, index) => {
          const { name, href } = item;

          target.push(
            <LinkService
              key={`customerlinks-${index}`}
              href={href}
              target='_blank'
              rel='norefferer'
              colors={colors}
            >
              {name}
            </LinkService>
          );

          return target;
        }, [])}
      </ServicesLinks>
    </SubGnbWrapper>
  );
};

export default SubGnb;
