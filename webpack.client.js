const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    //tell webpack the root file of our sever application   this is the entry point of the application
    entry: "./src/client/client.js",
    //tell webpack where to put the output file that is generated
    //after the coe is bundled the output will be in this location
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);