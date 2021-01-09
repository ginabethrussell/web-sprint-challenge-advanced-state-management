import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import "./index.css";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and library methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.