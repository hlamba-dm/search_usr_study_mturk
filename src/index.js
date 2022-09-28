import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import './index.html';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./app/reducers";

//firebase imports
import { rrfProps } from "./api/firebaseApi/fbConfig";
import { pushToFireBase } from "./api/firebaseApi/fbMiddle";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";

import App from "./app/App";
// import reportWebVitals from './reportWebVitals';

const store = createStore(
  rootReducer,
  applyMiddleware(pushToFireBase(getFirebase), ),
  //applyMiddleware(logger)
  // applyMiddleware(pushToFireBase(getFirebase), logger)
);

ReactDOM.render(
  // comment <React.StrictMode> to resolve findDOMNode warning
  // <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps(store)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();