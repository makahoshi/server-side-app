
//tell webpack to run babel on every file it runs through, takes all of the jsx and makes it es5
//the test will only run the babel on the js files
//the loader runs babel and transpiles the code
//exclude tells babel to exclude these files from running babel on these directories
module.exports = {
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
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }

            }
        ]
    }
};