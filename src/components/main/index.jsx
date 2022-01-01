import React, { Fragment } from 'react';

import Tnb from '../common/layouts/tnb';
import Header from '../common/layouts/header';
import Contents from '../common/layouts/contents';
import Footer from '../common/layouts/footer';

const Main = () => {
  return (
    <Fragment>
      <Tnb />
      <Header />
      <Contents />
      <Footer />
    </Fragment>
  );
};

export default Main;
