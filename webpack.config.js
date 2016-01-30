'use strict';

let HtmlWebpackPlugin = require('html-webpack-plugin');
let UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
// var webpack = require('webpack');
let autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: 'build',
    filename: '[chunkhash].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /.*ts$/,
        loader: 'ts-loader',
        exclude: [
          'node_modules'
        ]
      },
      {
        test: /\.html$/,
        loader: "raw",
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: "style!css!postcss!stylus",
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "url-loader",
        exclude: /node_modules/
      }
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
    // new UglifyJsPlugin()
  ]
};