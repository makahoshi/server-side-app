import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
//import reducers and pass it to the store the second argument is the preloaded state
//creating the client side redux store
const store = createStore(reducers, {}, applyMiddleware(thunk));
//this is where we rehydrate the html
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')) ; //not replacing the html but instead go through that html and add the event handlers