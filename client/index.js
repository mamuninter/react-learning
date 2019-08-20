import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import App from "../client/components/App";

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import postReducer from '../client/postReducer'

const store = createStore(postReducer)


// if we don't subcribe, yet our crud operation will work
function onStateChange() {
  const state = store.getState();
  console.log(JSON.stringify(state, null, 2));
}

store.subscribe(onStateChange)

ReactDOM.render((
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
), document.getElementById('app'))
