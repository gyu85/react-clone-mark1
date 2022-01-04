import React from 'react';
import styled from 'styled-components';

import {
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

const GnbList = styled.ul`
  display: flex;

  li {
    padding-left: 24px;
  }

  li:first-child {
    padding-left: 0;
  }
`;

const LinkGnb = styled.a(props => ({
  fontSize: '18px'
}));

const Gnb = () => {
  return (
    <GnbList>
      {gnbData.reduce((target, item, idx) => {
        const { name, href } = item;

        target.push(
          <li key={`gnb-${idx}`}>
            <LinkGnb href={href}>{name}</LinkGnb>
          </li>
        );

        return target;
      }, [])}
    </GnbList>
  );
};

export default Gnb;
