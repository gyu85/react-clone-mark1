import { format } from 'url';

const ROUTES = {
  HOME: {
    INDEX: '/',
    MEMBER: '/member/{id}'
  },
  STORY: {
    INDEX: '/stroy'
  },
  BAMINAD: {
    INDEX: '/baemin-ad'
  },
  RELAYCHANNEL: {
    INDEX: '/relay-channel'
  },
  KNOWHOW: {
    INDEX: '/knowhow'
  },
  AFFILEATES: {
    INDEX: '/affiliates'
  },
  GUIDE: {
    INDEX: '/guide'
  },
  NOTICE: {
    INDEX: '/notice'
  },
  CSCENTER: {
    INDEX: '/cscenter'
  },
  LOGIN: {
    INDEX: '/login'
  },
  JOIN: {
    INDEX: '/join'
  }
};

const getPath = (category, subCategory, query = {}, params = {}) => {
  let path = `${ROUTES[category][subCategory]}${
    query ? `${format({ query })}` : ''
  }`;

  for (const [key, value] of Object.entries(params)) {
    path = path?.replace(new RegExp(`{${key}}`, 'g'), `${value || ''}`);
  }

  return path;
};

export const getPathHome = () => getPath('HOME', 'INDEX');
export const getPathStroy = () => getPath('STORY', 'INDEX');
export const getPathBaminAd = () => getPath('BAMINAD', 'INDEX');
export const getPathRelayChannel = () => getPath('RELAYCHANNEL', 'INDEX');
export const getPathKnowHow = () => getPath('KNOWHOW', 'INDEX');
export const getPathAffiliates = () => getPath('AFFILEATES', 'INDEX');
export const getPathGuide = () => getPath('GUIDE', 'INDEX');
export const getPathNotice = () => getPath('NOTICE', 'INDEX');
export const getPathCsCenter = () => getPath('CSCENTER', 'INDEX');
export const getPathLogin = () => getPath('LOGIN', 'INDEX');
export const getPathJoin = () => getPath('JOIN', 'INDEX');
