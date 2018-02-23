import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    //getting the bundle,js file from public folder
    const store = createStore();
    //some logic to initialize and load date into the store
    res.send(renderer(req, store));
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});