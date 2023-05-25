const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "source/js/script.js"),
    // sw: path.resolve(__dirname, "src/js/sw.js"), ini jangan diapus dulu
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "app/"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "source/templates/index.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: path.resolve(__dirname, "source/templates/about.html"),
    }),
    new HtmlWebpackPlugin({
      filename: "detail.html",
      template: path.resolve(__dirname, "source/templates/detail.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "source/assets"),
          to: path.resolve(__dirname, "app/assets/"),
        },
      ],
    }),
  ],
};
