import React, { useReducer, useContext, createContext } from 'react';

const getInitTheme = () => {
  return {
    colors: {
      blue: '#4c80f1',
      blueLight: '#87b1f3',
      blueDark: '#2c5ae9',

      gray01: '#f8fafb',
      gray02: '#f1f5f5',
      gray03: '#eaeeef',
      gray04: '#e1e4e6',
      gray05: '#ced3d6',
      gray06: '#a9afb3',
      gray07: '#878d91',
      gray08: '#4d5256',
      gray09: '#363a3c',
      gray10: '#292a2b',

      white: '#FFF',

      illustLine: '#495666',

      green: '#35d48d',
      greenLight: '#76e8ad',
      greenDark: '#1bbf83',

      red: '#ff5d5d',
      redLight: '#ff8e89',
      redDark: '#f24147'
    },
    mq: {
      tablet: '@media screen and (max-width:768px)',
      mobile: '@media screen and (max-width:425px)'
    }
  };
};

const ThemeStateContext = createContext(getInitTheme());

const ThemeDispatch = createContext({ tpye: 'GET' });

function reducer(state, action = 'GET') {
  switch (action.type) {
    case 'GET':
      return state;

    default:
      throw new Error('There is no actions.');
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitTheme());

  return (
    <ThemeDispatch.Provider value={dispatch}>
      <ThemeStateContext.Provider value={state}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeDispatch.Provider>
  );
};

export const useThemeState = () => {
  const state = useContext(ThemeStateContext);

  if (state) {
    return state;
  } else {
    throw new Error('can not find theme state.');
  }
};

export const useThemeDispatch = () => {
  const dispatch = useContext(ThemeDispatch);

  if (dispatch) {
    return dispatch;
  } else {
    throw new Error('can not find theme dispatch.');
  }
};
