const webpack = require('webpack');

exports.config = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        },
        mangle: {
          except: ['$','webpackJsonp'],
          screw_ie8: true
        }
      })
    ]


  };
}
