'use strict';

var webpack = require('webpack');
var path = require("path");
var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
];

module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname,"dist"),
    libraryTarget: 'umd'
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js']
  }
};
