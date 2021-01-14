import { resolve } from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
export const entry = "./src/index.js";
export const output = {
  filename: "bundle.js",
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, "./dist"),
};
export const mode = "development";
export const devServer = {
  open: true,
  port: 8080,
  hot: true,
  writeToDisk: true
};
export const module = {
  rules: [
    {
      test: /\.js$/,
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
  new CleanWebpackPlugin(),
];
