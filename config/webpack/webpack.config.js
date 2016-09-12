"use strict";

var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var paths = {
  source: path.resolve('src'),
  output: path.resolve('dist'),
}

module.exports = {
  cache:    true,
  context: paths.source,
  entry: "./index.js",

  output: {
    path:     paths.output,
    filename: "[name].min.js",
    libraryTarget: "umd"
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ["", ".js", ".jsx"],
    alias: {
      'react':      'preact-compat',
      'react-dom':  'preact-compat'
    }
  },

  module: {
    loaders: [
      {
        test:     /\.js$/,
        exclude:  /node_modules/,
        loader:   'babel-loader'
      }
    ]
  }
}
