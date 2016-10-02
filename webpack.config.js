'use strict';

var path = require('path');
var inject = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('');

// Common configuration between bundles
var commonConfig = {
    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
        'app': './src/bootstrap',
    },
    resolve: {extensions: ['js', 'ts']},
    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader']},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'raw-loader'}
        ]
    },
    plugins: [
        new inject({template: 'src/index.html'})
    ]
}

// Development configuration
var devConfig = merge(commonConfig, {
    output: {
        path: root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
});

module.exports = devConfig;

// Helpers
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
