var webpack = require('webpack');
var path = require('path');

var config = {
  entry: __dirname + '/js/scripts.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: 'scripts.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

module.exports = config;