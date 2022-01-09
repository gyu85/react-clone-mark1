import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

const MainWrapper = styled.article`
  width: 668px;
  min-height: 200px;
  padding-right: 40px;
`;

const InnerMain = styled.div(props => ({
  height: '100%',
  backgroundColor: props.colors.redLight
}));

const ContentArticle = ({ children }) => {
  const { colors } = useThemeState();
  return (
    <MainWrapper>
      <InnerMain colors={colors}>{children}</InnerMain>
    </MainWrapper>
  );
};

export default ContentArticle;
