"use strict";

var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var paths = {
  source: path.resolve('src'),
  output: path.resolve('dist'),
  pkg: path.resolve('package.json')
}

module.exports = {
  cache:    true,
  context: paths.source,
  entry: "./index.js",

  output: {
    path:     paths.output,
    filename: "victory-standalone.js",
    library:  "Victory",
    libraryTarget: "umd"
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ["", ".js", ".jsx"]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new LodashModuleReplacementPlugin({
      "currying":     true,
      "flattening":   true,
      "paths":        true,
      "placeholders": true,
      "shorthands":   true
    }),
    new webpack.SourceMapDevToolPlugin("[file].map"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  module: {
    loaders: [
      {
        test:     /\.js?$/,
        exclude:  /node_modules/,
        loader:   'babel-loader'
      }
    ]
  }
}
