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
    const store = createStore();
    //some logic to initialize and load date into the store
    //calling matchRoutes to determine based on the route what component needs to be rendered
    //matchRoutes looks at the array of routes and the route path and then will return an array of components that will be rendered
    matchRoutes(Routes, req.path)
    res.send(renderer(req, store));
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});