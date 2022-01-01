import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

const TnbWrapper = styled.div(props => ({
  height: '50px',
  backgroundColor: props.colors.yellow,

  [Title4]: {
    color: props.colors.white
  }
}));

const Title4 = styled.strong`
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 17px;
  text-align: center;
`;

const Tnb = () => {
  const { colors } = useThemeState();

  return (
    <TnbWrapper colors={colors}>
      <Title4>TNB</Title4>
    </TnbWrapper>
  );
};

export default Tnb;
