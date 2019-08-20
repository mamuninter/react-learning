const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./client/index.html",
});

module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/, // Find .CSS or .SCSS (If you use bootstrap library instead of cdn, then you need to right Regex like this)
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          }
        ]
      },
    ]
  },
  plugins: [htmlWebpackPlugin]
};