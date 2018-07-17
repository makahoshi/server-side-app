import 'babel-polyfill';
import express from 'express';
import Routes from './client/Routes';
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    //getting the bundle,js file from public folder
  //creating the store so that we can pass the store to the load dta function
    const store = createStore();
    //some logic to initialize and load date into the store
  //looks at the request and then based on that request will look at what components need to be rendered on the page
    //calling matchRoutes to determine based on the route what component needs to be rendered
    //matchRoutes looks at the array of routes and the route path and then will return an array of components that will be rendered
    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
       console.log(route);
       console.log('loadData', route.loadData);
      //we call theload data function in here
//the load data function is on the route object
      //each load data function will have access to the server side redux store
      return route.loadData ? route.loadData(store) : null;
    });

    //all of the promises are in that match Routes array here we can determine whether the requests are done
    //here we will wait for the requests to be done
    Promise.all(promises).then(() => {
      //here we know that all of the promises are done which means we can now render the app
      res.send(renderer(req, store));

    })
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});