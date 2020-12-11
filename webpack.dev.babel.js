const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.babel.js');
const ESDocPlugin = require('../node_module_projects/esdoc-webpack-plugin');
// const ESDocPlugin = require('esdoc-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
      // new webpack.WatchIgnorePlugin({paths: ['/home/narwic/Projects/Home/flag-generator/src/.external-ecmascript.js', /^src/]}),
      new ESDocPlugin({
          conf: '.esdoc.json',
          cwd: '.',
          showOutput: false,
          destination: './docs',
          preserveTmpFile: true
      })
  ]
});
