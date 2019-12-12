const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/test.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  mode: "none", // production, development, none
  module: {
    rules: [{
      test: /\.html$/, // regular expression which to test
      use: [
        {
            // Loader can help Webpack to understand by excuting 'html-loader' when read HTML file
          loader: "html-loader", // name of loader
          options: {
            // options of loader
            // minimize: true
          }
        }
      ]
    }]
  },
  plugins: [
      // HtmlWebPackPlugin imports the 'bundle.js' to 'index.html' automatically when building webpack. 
    new HtmlWebPackPlugin({
      template: "./public/index.html", // read
      filename: "index.html" // write
    })
  ]
};
