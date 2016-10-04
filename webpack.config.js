'use strict';

const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// Common configuration between bundles
var commonConfig = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader', 'angular2-router-loader']},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, include: root('src', 'app'), loader: 'raw-loader'}
        ]
    },

    plugins: [
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src')
        ),
        new CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}

// Development bundle configuration
var devConfig = merge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});

module.exports = devConfig;

// Helpers
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
