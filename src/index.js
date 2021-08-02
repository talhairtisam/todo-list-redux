import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {  createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { todoReducer } from './redux/reducer';



const Middleware = [logger];


const store = createStore(todoReducer,applyMiddleware(...Middleware))


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
