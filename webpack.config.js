let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/src/index.ts",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(path.resolve(__dirname), 'index.html'),
      inject: 'body'
    }),
  ]
};