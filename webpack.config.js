var path = require("path");
var webpack = require("webpack");

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
    },
    module: {
        loaders:  [{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react', 'stage-0']
                }
            }]
    }
};
