const webpack = require('webpack');
// const deps = require("./package.json").dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new ModuleFederationPlugin({
      name: 'fomcapp',
      library: { type: 'var', name: 'fomcapp' },
      filename: 'remoteEntry.js',
      remotes: {
        fomcapp: "fomcapp",
        customers: "customers"
        // order: "orders",
        // tasks: "tasks"
      },
      exposes: {
        "./Header": "./src/Header.jsx",
        "./Sidebar": "./src/Sidebar.jsx"
      },
      shared: ["react", "react-dom"]
      // shared: {
      //   ...deps,
      //   react: {
      //     eager: true,
      //     singleton: true,
      //     requiredVersion: deps.react,
      //   },
      //   "react-dom": {
      //     eager: true,
      //     singleton: true,
      //     requiredVersion: deps["react-dom"],
      //   }
      // }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3003,
    open: true,
    hot: true,
  },
  output: {
    // path: path.resolve(__dirname, "build"),
    publicPath: "http://localhost:3003/"
  },
  optimization: {
    minimize: false
  }
};