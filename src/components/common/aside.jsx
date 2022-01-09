import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

const AsideWrapper = styled.aside(props => ({
  width: '328px',
  backgroundColor: props.colors.greenLight
}));

const Title2 = styled.h2`
  text-align: center;
`;

const Aside = () => {
  const { colors } = useThemeState();

  return (
    <AsideWrapper colors={colors}>
      <Title2>Aside Content</Title2>
    </AsideWrapper>
  );
};

export default Aside;
