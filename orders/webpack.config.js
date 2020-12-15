const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3001,
    open: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "http://localhost:3001/"
  }
};