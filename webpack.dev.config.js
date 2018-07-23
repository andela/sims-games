const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    proxy: {
      '/**': {
        target: 'http://[::1]:8000',
        secure: false
      }
    },
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    hot: true
  }
});