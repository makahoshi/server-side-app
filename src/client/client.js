import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>,
    document.querySelector('#root')) ; //not replacing the html but instead go through that html and add the event handlers