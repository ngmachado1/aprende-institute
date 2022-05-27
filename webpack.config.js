const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, { mode }) => {
    console.log({ mode })

    const isProduction = mode === 'production'

    const backendUrl = isProduction
        ? 'https://fierce-shelf-74800.herokuapp.com/api/notes'
        : 'http://localhost:3001/api/notes'

    return {
        // entry: './src/index.js',
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new webpack.DefinePlugin({
                BACKEND_URL: JSON.stringify(backendUrl)
            }),
            new HtmlWebpackPlugin({ template: 'src/index.html' }),
            new MiniCssExtractPlugin(),
            new CopyPlugin({
                patterns: [
                    { from: './src/assets/Images', to: path.resolve(__dirname, 'build/assets/Images') },
                    { from: './src/assets/css/', to: path.resolve(__dirname, 'build/assets/css/') },
                    { from: './src/assets/Fonts/', to: path.resolve(__dirname, 'build/assets/Fonts/') },
                ],
            }),
        ],
        devServer: {
            open: true,
            port: 3000,
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic'
                                }
                            ]
                        ]
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                publicPath: path.resolve(__dirname, '/assets/Images'),
                                outputPath: 'assets/Images',
                            }
                        },
                    ],
                },
            ]
        }
    }
}