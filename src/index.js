import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import * as reducers from './reducers/index'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history/createBrowserHistory';
import {ConnectedRouter,routerMiddleware,routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk';


const history = createBrowserHistory;
const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer}),
    applyMiddleware(
        logger,
        thunk,
        routerMiddleware(history))
);

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter history ={history}>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
