exports.config = function(path) {
  return {
    module:{
      loaders: [
        {
            test: /\.woff$/,
            // Inline small woff files and output them below font/.
            // Set mimetype just in case.
            loader: 'url',
            query: {
              name: 'font/[name].[ext]',
              limit: 5000,
              mimetype: 'application/font-woff'
            },
            include: path
          },
          {
            test: /\.ttf$|\.eot$/,
            loader: 'file',
            query: {
              name: 'font/[name].[ext]'
            },
            include: path
          }
      ]
    }
  }
}
