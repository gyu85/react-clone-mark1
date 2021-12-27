import React, { Fragment } from 'react';

import styled from 'styled-components';
import { useThemeState } from 'context/theme';

const Title1 = styled.h1(props => ({
  color: 'red',
  [props.tablet]: {
    color: 'pink'
  },
  [props.mobile]: {
    color: 'violet'
  }
}));

const Main = () => {
  const {
    mq: { tablet, mobile }
  } = useThemeState();

  return (
    <Fragment>
      <Title1 tablet={tablet} mobile={mobile}>
        Main
      </Title1>
    </Fragment>
  );
};

export default Main;
