import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';
import ReduxThunk from 'redux-thunk';

export const renderWithRedux = (
  ui,
  {
    initialState,
    reducers = combineReducers({}),
    store = createStore(reducers, initialState, applyMiddleware(ReduxThunk)),
    ...renderOptions
  } = {}
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return {
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
    store,
  };
};
