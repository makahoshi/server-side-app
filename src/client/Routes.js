import React from 'react';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
//this file for route mapping
//you can export any function from the component and import here to be used in the index.js where the rendering occurs
export default [
    {
        ...HomePage,
        path: '/',
        exact: true,
    },
    {
        ...UsersPage,
        path: '/users',
        exact: true,
    },
    {
        ...AdminPage,
        path: '/admin',
        exact: true,
       // component AdminPage   instead of defining component here we will be defining the component in the component itself in the export statement
    },
    {
        ...LoginPage,
        path: '/login',
        exact: true,
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