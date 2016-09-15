const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


exports.config = function(paths) {
  return {
    postcss: [autoprefixer],
    module:{
      loaders: [
        {
      test: /\.scss$/,
      loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
      ]
  },
  {
    test: /\.sass$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'sass?sourceMap'
    ]
},
{
    test: /\.css$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',


    ]
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
      loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
      ]
  },
  {
    test: /\.sass$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'sass?sourceMap'
    ]
},
{
    test: /\.css$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',


    ]
}
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  };
}
