const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// DRY
const cssLoaders = extra => {
    const loaders = ["style-loader", "css-loader"];
    if ( extra ) loaders.push( extra )
    return loaders;
}
const babelConfig = preset => {
    const configObj = {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }

    if ( preset ) configObj.options.presets.push( preset );
    return configObj;
}
// DRY(end)


module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./index.jsx",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use: cssLoaders("less-loader")
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: babelConfig()
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: babelConfig("@babel/preset-react")
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devServer: {
        port: 8080,
        hot: true
    }
}
