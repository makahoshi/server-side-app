import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript'; //this will be used to protet us from xss attacks

//this file gets rendered on the server
//we create the static html on the server where we also have access to the redux store
//this file gets called after we called the loaddata functions, so at this point the store has all of the data we need to render the application

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
  //this is the html template that we refer to that we send down to the client

  //the window.inital_state is where we are sending the store as a json object to the client so that the first time we render the app the data appears
    return`
    <html>
    <head></head> 
    <body>
    <div id="root">${content}</div>
    <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
    </script>
    <script src="bundle.js"></script>
    </body>
    </html>`;

}