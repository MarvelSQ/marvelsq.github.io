const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PrefetchCssPlugin = require('html-prefetch-css-webpack-plugin');

module.exports = {
  mode: NODE_ENV,
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].chunk.js',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    port: 3004
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MarvelSQ : Pages',
      filename: 'index.html',
      template: path.resolve(__dirname, './template.html')
    }),
    new PrefetchCssPlugin()
  ]
};
