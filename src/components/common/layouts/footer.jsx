import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

const FooterEl = styled.footer(props => ({
  backgroundColor: props.colors.greenLight,

  [Title2]: {
    color: props.colors.white
  }
}));

const Title2 = styled.h2`
  height: 56px;
  line-height: 56px;
  text-align: center;
`;

const Footer = () => {
  const { colors } = useThemeState();

  return (
    <FooterEl colors={colors}>
      <Title2>Footer</Title2>
    </FooterEl>
  );
};

export default Footer;
