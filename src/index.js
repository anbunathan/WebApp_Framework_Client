import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import decode from "jwt-decode";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import App from './App';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

ReactDOM.render(
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>    
    </BrowserRouter>, 
document.getElementById('root'));


