var webpack = require('webpack');

module.exports = {
    entry: {
        entry1: './javascripts/app.js',
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loader: 'babel-loader'
        }]
    },
};
