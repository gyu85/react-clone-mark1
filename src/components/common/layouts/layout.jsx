import React, { Fragment } from 'react';

import Tnb from '../tnb';
import Header from '../layouts/header/header';
import Container from './container';
import Footer from '../layouts/footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Tnb />
      <Header />
      <Container children={children} />
      <Footer />
    </Fragment>
  );
};

export default Layout;
