var path    = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry:  [
    './client',
    'webpack-hot-middleware/client'
  ],
  output: {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test:    /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react-hmre'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader",
        "css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", 'postcss-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  eslint: {
    configFile: './.eslintrc'
  },
}
