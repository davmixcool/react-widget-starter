const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.config = function(PATHS) {
  return {

          entry: {
            //style: PATHS.style,
            app: PATHS.app,

          },
          output: {
            path: PATHS.dist,

            filename: '[name].js',

          },
          resolve: {
            extensions:['','.js','.jsx']
          },
          plugins: [
            new HtmlWebpackPlugin({
              title: 'React Widget',
              id:'widget',
              template:'./config/templates/index.ejs'
            })
          ],

        }
      }
