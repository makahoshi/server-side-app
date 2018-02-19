const path = require('path');
module.exports = {
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
    //tell webpack to run babel on every file it runs through, takes all of the jsx and makes it es5
    //the test will only run the babel on the js files
    //the loader runs babel and transpiles the code
    //exclude tells babel to exclude these files from running babel on these directories
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: {browsers: ['last 2 versions']}}]
                    ]
                }

            }
        ]
    }
};