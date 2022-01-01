import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

const HeaderEl = styled.header(props => ({
  height: '68px',
  backgroundColor: props.colors.blueLight,

  [Title1]: {
    color: props.colors.white
  }
}));

const Title1 = styled.h1`
  text-align: center;
  line-height: 68px;
`;

const Header = () => {
  const { colors } = useThemeState();
  return (
    <HeaderEl colors={colors}>
      <Title1>Header</Title1>
    </HeaderEl>
  );
};

export default Header;
