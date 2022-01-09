import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 1100px;
  min-height: calc(100% - 174px);
  padding: 80px 32px 64px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
