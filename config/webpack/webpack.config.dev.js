"use strict";
var webpack = require('webpack');
var config = require('./webpack.config');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

config.output.filename = config.output.filename.replace(/\.min\.js$/, ".js");
config.plugins = [
  new LodashModuleReplacementPlugin({
    "currying":     true,
    "flattening":   true,
    "paths":        true,
    "placeholders": true,
    "shorthands":   true
  }),
  new webpack.SourceMapDevToolPlugin("[file].map")
]

module.exports = config;
