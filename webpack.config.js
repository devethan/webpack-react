const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  mode: "none", // production, development, none
  module: {
    rules: [
        // 'babel-loader' can change javascript files written on ES6 to on ES5
        // It can be read in browsers which not supported ES6
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },
      // Loader can help Webpack to understand by excuting 'html-loader' when read HTML file
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // HtmlWebPackPlugin imports the 'bundle.js' to 'index.html' automatically when building webpack.
    new HtmlWebPackPlugin({
      template: "./public/index.html", // read
      filename: "index.html" // write
    })
  ]
};
