import path from 'path';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';

module.exports = {
  entry: './src/index.js',
  plugins: [
      new CleanWebpackPlugin(),
  ],
  target: 'web',
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'flag-gen.js',
      library: 'FlagGen',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this',
  },
  module: {
      rules: [
          {
              test: /\.m?js$/,
              exclude: [/(node_modules|bower_components|docs)/, /^\.external-ecmascript\.js$/, /src/],
              use: ['babel-loader', 'eslint-loader'],
          }
      ]
  },
}
