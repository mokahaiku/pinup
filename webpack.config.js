const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/app',
    options: './src/options/options',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }],
    }, {
      test: /(\.css|\.scss)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.json$/,
      use: 'file-loader?name=[name].[ext]',
    }, {
      test: /\.(jpe?g|png|gif)$/i,
      use: 'file-loader?name=[name].[ext]',
    }, {
      test: /\.pug$/,
      use: [{
        loader: 'pug-loader',
      }],
    }],
  },
};
