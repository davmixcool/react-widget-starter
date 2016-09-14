const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'node_modules','bulma'),
    path.join(__dirname, 'app/css', 'main.css')
  ],
  font:path.join(__dirname, 'app/fonts'),
  build: path.join(__dirname,'build'),
}

const merge = require('webpack-merge');
const validate = require('webpack-validator');
const environments = require('./config/environments');
const css = require('./config/css');
const minification = require('./config/minification');
const freeVariable = require('./config/freeVariable');
const fonts = require('./config/fonts');


const common = {
  entry: {
    //style: PATHS.style,
    app: PATHS.app,

  },
  output: {
    path: PATHS.build,
    publicPath:'/react-widget-starter/',
    filename: '[name].js',

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Widget'
    })
  ],

};


var config;

// Branch config based on npm run command
switch(process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      css.extractCSS(PATHS.style),
      minification.config(),
      fonts.config(PATHS.font),
      freeVariable.set('process.env.NODE_ENV','production'),
      {
          devtool: 'source-map'
      }
    );
    break;
  default:
    config = merge(
      common,
      css.config(PATHS.style),
      fonts.config(PATHS.font),
      environments.devServer({
        // change host and port here if needed
        host: process.env.HOST,
        post: process.env.PORT
      }),
      {
          devtool: 'eval-source-map'
      }
    );
}

module.exports = validate(config);
