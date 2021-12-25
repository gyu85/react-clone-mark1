import React, { Fragment } from 'react';

import { ThemeContextProvider } from './context/theme';

import Wrapper from './containers/wrapper';
import GlobalStyle from './assets/styles/globalStyle';
import SpoqaHanSansNeo from './assets/styles/fonts';

function App() {
  return (
    <Fragment>
      <ThemeContextProvider>
        <Wrapper />
        <SpoqaHanSansNeo />
        <GlobalStyle />
      </ThemeContextProvider>
    </Fragment>
  );
}

export default App;
