var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}