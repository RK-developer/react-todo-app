var path = require("path");
module.exports = {
  entry: {
    app: ["./client/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./build",
  }
};
//webpack-dev-server --content-base build/
