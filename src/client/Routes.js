import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

//this file is the routing mapping
export default () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
        </div>
    );
};