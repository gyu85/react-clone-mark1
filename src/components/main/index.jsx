import React from 'react';
import styled from 'styled-components';

import Layout from '../common/layouts/layout';
import Contents from '../common/layouts/contents';
import ContentArticle from '../common/layouts/contentArticle';
import Aside from '../common/aside';

import KeyBanner from './keyBanner';

const Title2 = styled.h2`
  text-align: center;
`;
const Title3 = styled.h3`
  text-align: center;
`;

const Main = () => {
  return (
    <Layout>
      <Title2>MAIN</Title2>

      <KeyBanner />

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
