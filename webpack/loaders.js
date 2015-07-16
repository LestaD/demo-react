var path = require('path');
var pkg = require('../package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DEBUG = process.env.NODE_ENV === 'development';

var jsxLoader;
var cssLoader;
var fileLoader = 'file-loader?name=[path][name].[ext]';
var htmlLoader = [
  'file-loader?name=[path][name].[ext]',
  'template-html-loader?' + [
    'raw=true',
    'engine=lodash',
    'version=' + pkg.version,
    'title=' + pkg.name,
    'debug=' + DEBUG
  ].join('&')
].join('!');
var jsonLoader = ['json-loader'];

if (DEBUG) {
  jsxLoader = [];
  jsxLoader.push('react-hot');
  jsxLoader.push('babel-loader?optional=runtime');
  stylusLoader = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader',
    'stylus-loader?'
  ].join('!');
  cssLoader = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader'
  ].join('!');
} else {
  jsxLoader = ['babel-loader?optional=runtime'];
  stylusLoader = ExtractTextPlugin.extract('style-loader', [
    'css-loader',
    'postcss-loader',
    'stylus-loader?'
  ].join('!'));
  cssLoader = ExtractTextPlugin.extract('style-loader', [
    'css-loader',
    'postcss-loader'
  ].join('!'));
}

var loaders = [{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loaders: jsxLoader
}, {
  test: /\.css$/,
  loader: cssLoader
}, {
  test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.eot$|\.woff$|\.ttf$/,
  loader: fileLoader
}, {
  test: /\.json$/,
  exclude: /node_modules/,
  loaders: jsonLoader
}, {
  test: /\.html$/,
  loader: htmlLoader
}, {
  test: /\.styl$/,
  loader: 'style-loader!css-loader!postcss-loader!stylus-loader?paths=' +
    path.resolve(__dirname, '../app/stylus')
}];

module.exports = loaders;