var path = require('path');
var webpack = require("webpack");

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
  ? ['./src/index.js']
  : [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ];

var plugins = PRODUCTION
  ? [ new webpack.optimize.UglifyJsPlugin()]
  : [   new webpack.HotModuleReplacementPlugin() ];

  plugins.push(
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION),
    })
  );

module.exports = {
devtool: 'source-map',
entry: entry,
plugins: plugins,
resolve: {
  extensions: ['.js','.jsx']
},
module: {
  loaders: [
    {
    test: /\.(js|jsx)$/,
    loaders: ['babel-loader'],
    exclude: '/node_modules/'
  },
  {
  test: /\.(png|jpg|gif)$/,
  loaders: ['url-loader?limit=10000&name=images/[hash:12].ext'],
  exclude: '/node_modules/'
},
{
test: /\.css$/,
loaders: [
  'style-loader?sourceMap',
  'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:15]'
],
exclude: '/node_modules/'
},
{
test: /\.(scss|sass)$/,
loaders: [
  'style-loader?sourceMap',
    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:15]',
    'resolve-url-loader',
    'sass-loader?sourceMap'
],
exclude: '/node_modules/'
}
]
},
output: {
  path: path.join(__dirname,'dist'),
  publicPath: '/dist',
  filename: 'bundle.js',
}



};
