const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
    },
  },
  context: path.resolve(__dirname, "src"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
