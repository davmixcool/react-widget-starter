exports.reactDev = function() {

    {
      module:{
        loaders: [
          {
          test: require.resolve('react'),
          loader: 'expose?React'
        }
        ]
      }
    }
  }

  exports.dontParse = function(options) {
    const alias = {};
    alias[options.name] = options.path;

    return {
      module: {
        noParse: [
          options.path
        ]
      },
      resolve: {
        alias: alias
      }
    };
  }
