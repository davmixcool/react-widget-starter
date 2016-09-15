const path = require('path');


const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'app/css', 'main.css')
  ],
  font:path.join(__dirname, 'app/fonts'),
  dist: path.join(__dirname,'dist'),
}
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const merge = require('webpack-merge');
const validate = require('webpack-validator');
const environments = require('./config/environments');
const css = require('./config/css');
const minification = require('./config/minification');
const freeVariable = require('./config/freeVariable');
const fonts = require('./config/fonts');
const common = require('./config/common');
const babel = require('./config/babel');
const utilities = require('./config/utilities');


var config;

// Branch config based on npm run command
switch(process.env.npm_lifecycle_event) {
  case 'dist':
  case 'watch':
  case 'stats':
    config = merge(
      common.config(PATHS),
      css.config(PATHS.style),
      minification.config(),
      babel.config(PATHS.app),
      fonts.config(PATHS.font),
      freeVariable.set('process.env.NODE_ENV','production'),
      {
          devtool: 'source-map'
      }
    );
    break;
  default:
    config = merge(
      common.config(PATHS),
      css.config(PATHS.style),
      fonts.config(PATHS.font),
      babel.config(PATHS.app),
      utilities.reactDev(),
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
