import React from 'react';
import Home from './components/Home';
import Users from './components/Users';
import Admin from './components/Admin';
import Login from './components/Login';

//this file for rout mapping
export default routes = [
    {
        path: '/',
        exact: true,
        component: 'Home'
    },
    {
        path: '/users',
        exact: true,
        component: 'Users'
    },
    {
        path: '/admin',
        exact: true,
        component: 'Admin'
    },
    {
        path: '/login',
        exact: true,
        component: 'Login'
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