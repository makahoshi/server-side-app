import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    //getting the bundle,js file from public folder
    res.send(renderer(req));
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});