import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

const ContentWrapper = styled.div(props => ({
  maxWidth: '1100px',
  minHeight: 'calc(100% - 174px)',
  padding: '80px 32px 64px',
  margin: '0 auto',
  boxSizing: 'border-box'
}));

const Title2 = styled.h2`
  text-align: center;
`;
const Title3 = styled.h3`
  text-align: center;
`;

const Container = styled.div(props => ({
  display: 'flex',
  minHeight: '500px',
  paddingTop: '24px'
}));

const KeyVisual = styled.div(props => ({
  height: '200px',
  marginTop: '24px',
  backgroundColor: props.colors.violet,

  [Title3]: {
    paddingTop: '30px',
    color: props.colors.white
  }
}));

const MainWrapper = styled.main(props => ({
  width: '668px',
  minHeight: '200px',
  paddingRight: '40px'
}));

const InnerMain = styled.div(props => ({
  height: '100%',
  backgroundColor: props.colors.redLight
}));

const AsideWrapper = styled.aside(props => ({
  width: '328px',
  backgroundColor: props.colors.greenLight
}));

const Contents = () => {
  const { colors } = useThemeState();

  return (
    <ContentWrapper colors={colors}>
      <Title2>Contents</Title2>
      <KeyVisual colors={colors}>
        <Title3>KeyVisual content</Title3>
      </KeyVisual>
      <Container colors={colors}>
        <MainWrapper>
          <InnerMain colors={colors}>
            <Title3>Main content</Title3>
          </InnerMain>
        </MainWrapper>
        <AsideWrapper colors={colors}>
          <Title2>Aside Content</Title2>
        </AsideWrapper>
      </Container>
    </ContentWrapper>
  );
};

export default Contents;
