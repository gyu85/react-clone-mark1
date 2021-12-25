import { createGlobalStyle } from 'styled-components';

import spoqaHansBold from '../font/SpoqaHanSansNeo-Bold.woff';
import spoqaHansMedium from '../font/SpoqaHanSansNeo-Medium.woff';
import spoqaHansRegular from '../font/SpoqaHanSansNeo-Regular.woff';
import spoqaHansLight from '../font/SpoqaHanSansNeo-Light.woff';

const spoqaHanSansNeo = createGlobalStyle`
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    src: local('Spoqa Han Sans Neo Bold'),
    url('${spoqaHansBold}') format('woff')
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    src: local('Spoqa Han Sans Neo Medium'),
    url('${spoqaHansMedium}') format('woff')
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    src: local('Spoqa Han Sans Neo Regular'),
    url('${spoqaHansRegular}') format('woff')
  }

  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 300;
    src: local('Spoqa Han Sans Neo Light'),
    url('${spoqaHansLight}') format('woff')
  }
`;

export default spoqaHanSansNeo;
