const webpack = require('webpack');
const deps = require("./package.json").dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("@module-federation/dashboard-plugin");
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
      name: 'customers',
      library: { type: 'var', name: 'customers' },
      filename: 'remoteEntry.js',
      remotes: {
        fomcapp: "fomcapp",
        customers: "customers",
        orders: "orders",
        tasks: "tasks",
      },
      exposes: {
        './CustomersSearch': './src/app',
        './Table': './src/CustomersTable.jsx',
      },
      shared: {
        ...deps,
        react: {
          // eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          // eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
      }
    }),
    new DashboardPlugin({
      dashboardURL: "http://localhost:8000/api/update",
      // metadata: {
      //   source: {
      //     url: "http://github.com",
      //   },
      //   remote: "http://localhost:3000/remoteEntry.js",
      // },
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    open: true,
    hot: true,
  },
  // entry: [path.join(__dirname, "src", "bootstrap.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/"
  },
  optimization: {
    minimize: false
  },
};