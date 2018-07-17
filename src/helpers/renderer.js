import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';

//this file gets rendered on the server

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>); //this is the html of our app
//this is what gets sent back to the client
  //componentDidmount and those lifecycle methods will not be called on the server
//  the html will get sent back to the data before any data fetching is complete
    return`
    <html>
    <head></head> 
    <body>
    <div id="root">${content}</div>
    <script src="bundle.js"></script>
    </body>
    </html>`;

}