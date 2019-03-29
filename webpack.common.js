const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.scss|css$/,
        use: ["style-loader", "css-loader", "postcss-loader", "resolve-url-loader", "sass-loader?sourceMap"]
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },    
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1024
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              disable: true // webpack@2.x.x and newer
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.html$/,
        use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
        ]
    }
    ]
  },
  target: 'web',
  node: { fs: 'empty' },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".mjs", ".js", ".jsx", ".json"]
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      // favicon: path.join(__dirname, '/favicon.png'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true
  }
};
