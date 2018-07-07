const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: "./js/index.js",
  devServer: {
    port: 4000,
    compress: false,
    proxy: {
      '/test': {
        target: 'http://t00005162-7.corp.vipshop.com:3334',
        changeOrigin: true
      }
    }
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "capella.js",
    publicPath: "/build/"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  devtool: '#source-map'
}