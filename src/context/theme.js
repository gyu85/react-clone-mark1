import React, { useReducer, useContext, createContext } from 'react';

const getInitTheme = () => {
  return {
    colors: {}
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
    <ThemeDispatch.Provider value={dispatch({ type: 'GET' })}>
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
