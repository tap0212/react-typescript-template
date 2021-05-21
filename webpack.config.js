/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// Instantiate the plugin.
// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
});

module.exports = {
    // Our application entry point.
    entry: './src/index.tsx',

    // These rules define how to deal
    // with files with given extensions.
    // For example, .tsx files
    // will be compiled with ts-loader,
    // a spcific loader for webpack
    // that knows how to work with TypeScript files.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    // Telling webpack which extensions
    // we are interested in.
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
            }),
        ],
    },

    // What file name should be used for the result file,
    // and where it should be palced.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    // Use the html plugin.
    plugins: [htmlPlugin],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        historyApiFallback: true,
    },
};
