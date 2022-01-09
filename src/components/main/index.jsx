import React from 'react';
import styled from 'styled-components';

import { useThemeState } from 'context/theme';

import Layout from '../common/layouts/layout';
import Contents from '../common/layouts/contents';
import ContentArticle from '../common/layouts/contentArticle';
import Aside from '../common/aside';

const Title2 = styled.h2`
  text-align: center;
`;
const Title3 = styled.h3`
  text-align: center;
`;

const KeyVisual = styled.div(props => ({
  height: '200px',
  marginTop: '24px',
  backgroundColor: props.colors.violet,

  [Title3]: {
    paddingTop: '30px',
    color: props.colors.white
  }
}));

const Main = () => {
  const { colors } = useThemeState();

  return (
    <Layout>
      <Title2>MAIN</Title2>

      <KeyVisual colors={colors}>
        <Title3>KeyVisual content</Title3>
      </KeyVisual>

      <Contents>
        <ContentArticle>
          <Title3>Main content</Title3>
        </ContentArticle>
        <Aside />
      </Contents>
    </Layout>
  );
};

export default Main;
