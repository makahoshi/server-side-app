import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Admin from './components/Admin';
import Login from './components/Login';

//this file is the routing mapping
export default () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/login' component={Login} />

        </div>
    );
};