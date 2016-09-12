"use strict";

var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var paths = {
  source: path.resolve('src'),
  output: path.resolve('dist'),
  pkg: path.resolve('package.json')
}

var packageJson = require(paths.pkg);
var libPath = (packageJson.name || "")
var libName = libPath
  .replace(/^\s+|\s+$/g, "")
  .replace(/(^|[-_ ])+(.)/g, function (match, first, second) {
    // Second match group is the character we want to change. Throw away first.
    return second.toUpperCase();
  });


module.exports = {
  cache:    true,
  context: paths.source,
  entry: "./index.js",

  output: {
    path:     paths.output,
    filename: libPath + ".min.js",
    library:  libName,
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
        test:     /\.jsx?$/,
        exclude:  /node_modules/,
        loader:   'babel-loader'
      }
    ]
  }
}
