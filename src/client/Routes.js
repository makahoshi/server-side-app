import React from 'react';
import Home from './components/Home';
import Users, { loadData } from './components/Users';
import Admin from './components/Admin';
import Login from './components/Login';
//this file for route mapping
//you can export any function from the component and import here to be used in the index.js where the rendering occurs
export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        loadData,
        path: '/users',
        exact: true,
        component: Users
    },
    {
        path: '/admin',
        exact: true,
        component: Admin
    },
    {
        path: '/login',
        exact: true,
        component: Login
    }
];

/* this is the traditional way to define routes in client side
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
>*/