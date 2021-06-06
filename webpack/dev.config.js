const { merge } = require("webpack-merge");
const path = require("path");
const DotEnv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const baseConfig = require("./base.config.js");

DotEnv.config({ path: ".env.dev" });

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    compress: false,
    host: 'localhost',
    port: 3000,
    publicPath: '/',
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../static"),
          to: "",
        },
      ],
    })
  ],
});
