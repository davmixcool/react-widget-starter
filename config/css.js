const ExtractTextPlugin = require('extract-text-webpack-plugin');


exports.config = function(paths) {
  return {
    module:{
      loaders: [
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"],
          include: paths
        },
        {
          test: /\.sass$/,
          loaders: ["style", "css", "sass"],
          include: paths
        },
        {
          test: /\.css$/,
          loaders: ['style','css'],
          include: paths
        }
      ]
    }
  }
}

exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"],
          include: paths
        },
        {
          test: /\.sass$/,
          loaders: ["style", "css", "sass"],
          include: paths
        },
        {
          test: /\.css$/,
          loaders: ["style", "css", "sass"],
          include: paths
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  };
}
