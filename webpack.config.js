const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        port: 8000
    }
}
