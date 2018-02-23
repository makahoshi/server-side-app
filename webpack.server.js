const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  //inform webpack that we're building a bundle for nodejs, rather than the browser
    target: "node",

  //tell webpack the root file of our sever application   this is the entry point of the application
    entry: "./src/index.js",

    //tell webpack where to put the output file that is generated
    //after the coe is bundled the output will be in this location
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    //tells webpack not to bundle any libraries into our output bundle on the server
    //if that library exists inside the node modules folder
    //anything that is in our node_modules folder will not be bundled in our server bundle
    externals : [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);