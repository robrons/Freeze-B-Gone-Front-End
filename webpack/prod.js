const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const base = require('./base.js');

const buildPath = path.resolve(__dirname, '../public');

const prod = webpackMerge(base, {
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('prod'),
    }),
  ],
});

module.exports = prod;
