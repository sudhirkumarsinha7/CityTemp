// @flow
import type {Node} from 'react';
import type {Dispatch} from 'redux';
import type {ReduxStore} from '../reducers/ReduxStore';
import React, {Component} from 'react';
import {
  AppState,
  StatusBar,
  View,
  AsyncStorage,
  BackHandler,
} from 'react-native';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators,
} from 'redux';
import {Provider, connect} from 'react-redux';
import {persistStore, persistReducer, purgeStoredState} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import progressReducer from '../reducers/Progress';

import AuthenticateReducer from '../reducers/cityTemp.js';
import {rootSaga} from '../sagas/Root';

const rootConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['cityTempList','progress'],
};
const combinedReducer = combineReducers({
  auth: AuthenticateReducer,
  progress: progressReducer,
});
const persistedReducer = persistReducer(rootConfig, combinedReducer);
const rootReducer = (state, action) => {
  return persistedReducer(state, action);
};
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {
    auth: {cityTempList: []},
    progress: {},
  },
  applyMiddleware(thunkMiddleware, sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export {store, persistor};
