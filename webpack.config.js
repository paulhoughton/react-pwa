var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/vendor',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css/,
      loaders: ["style-loader", "css-loader"]
    }]
  }
};
