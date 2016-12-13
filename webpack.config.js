var webpack            = require('webpack');
var path               = require('path');
var BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
  entry: {
    main: 'src/js/main.coffee'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },{
        // Webpack に CreateJS のライブラリでは `this` に `window` を参照させ、`window.createjs` を export するように設定
        test: /bower_components(\/|\\)(PreloadJS|SoundJS|EaselJS|TweenJS)(\/|\\).*\.js$/,
        loader: 'imports?this=>window!exports?window.createjs'
      },{
        test: /\.coffee$/, loader: 'coffee-loader'
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.coffee'], // requireする際に、拡張子を省略するための設定
    alias: {
      'modules': 'src/js/modules',
      'utils': 'src/js/all/utils.coffee',
      'config': 'src/js/all/config.coffee'
    },
    modulesDirectories: ['node_modules', 'bower_components']
  },
  plugins: [
    // bower.jsonにあるパッケージをrequire出来るように
    new BowerWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    })
  ],
  devtool: 'source-map'
};
