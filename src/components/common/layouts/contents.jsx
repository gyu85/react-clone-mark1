import React from 'react';
import styled from 'styled-components';

const ContentsWrapper = styled.main(props => ({
  display: 'flex',
  minHeight: '500px',
  paddingTop: '24px'
}));

const Contents = ({ children }) => {
  return <ContentsWrapper>{children}</ContentsWrapper>;
};

export default Contents;
