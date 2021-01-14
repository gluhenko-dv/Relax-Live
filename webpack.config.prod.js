import { resolve } from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export const entry = "./index.js";
export const output = {
  filename: "bundle.[contenthash].js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "dist"),
  environment: {
    // The environment supports arrow functions ('() => { ... }').
    arrowFunction: false,
  },
};
// eslint-disable-next-line no-undef
export const context = resolve(__dirname, "src");
export const mode = "production";
export const module = {
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
};
export const plugins = [
  new HTMLWebpackPlugin({
    template: "./index.html",
  }),
  new CleanWebpackPlugin(),
];
