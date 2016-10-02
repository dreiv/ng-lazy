'use strict';

var path = require('path');
var webpack = require('webpack');
var merge = require('')

// Common configuration between bundles
var commonConfig = {
    entry: {},
    resolve: {extensions: ['js', 'ts']},
    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader', 'angular2-router-loader']},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'raw-loader'}
        ]
    }
}
