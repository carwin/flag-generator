import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

module.exports = {
  entry: './src/index.js',
  plugins: [
      new CleanWebpackPlugin(),
  ],
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'flag-gen.js',
      library: 'FlagGen',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this',
  },
  externals: {
      'lodash': {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          amd: 'lodash',
          root: '_'
      }
  },
  module: {
      rules: [
          {
              test: /\.(js)$/,
              exclude: /(node_modules|bower_components)/,
              use: 'babel-loader'
          }
      ]
  },
}
