var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/client/app.jsx',
    './src/shared/styles/app.less'
  ],

  devtool: '#inline-source-map',

  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:3000/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.less', '.local']
  },

  quiet: true,

  module: {
    loaders: [
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.local$/, loader: ExtractTextPlugin.extract("style", "css?module&localIdentName=path:[path]-file:[name]-selector:[local]-[hash:base64:5]!less") },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style", "css!less") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
      { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'url?limit=100000' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("app.css", {
      allChunks: true
    })
  ]
};