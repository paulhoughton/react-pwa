var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  entry: {
    vendor: Object.keys(pkg.dependencies).concat('./src/vendor'),
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[chunkhash:8].js',
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], { verbose: false }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CopyWebpackPlugin([{ from: 'public/' }]),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
      filename: '[name].[chunkhash:8].js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new OfflinePlugin({
      excludes: ["images/*"],
      ServiceWorker: { events: true }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: 'babel-loader',
      include: path.join(__dirname, 'src'),
    },
    {
      test: /\.css/,
      loaders: ["style-loader", "css-loader"]
    }]
  }
};
