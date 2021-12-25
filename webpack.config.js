var config = {};
var TerserPlugin = require("terser-webpack-plugin");
var path = require('path');

function generateConfig(name) {
  var terser = name.indexOf('min') > -1;

  var config = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: name + '.js',
      // sourceMapFilename: name + '.map',
      library: 'vue-ace-editor',
      libraryTarget: 'umd'
    },
    node: {
      global: false
    },
    // devtool: 'source-map',
    plugins: [],
    module: {
      rules:[
        {
          test: /\.js$/,
          exclude: path.resolve(__dirname, "node_modules/"),
          use: 'babel-loader'
        }
      ]
    }
  };

  if (terser) config.plugins.push(new TerserPlugin());
  return config;
}

['vue-ace-editor.min'].forEach(function (key) {
  config[key] = generateConfig(key);
});

module.exports = config;
