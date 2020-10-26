import HtmlWebpackPlugin from 'html-webpack-plugin';

import path from 'path';
import webpack from 'webpack';

// const BUILD_DIR: string = 'dist';

const configuration: webpack.Configuration = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        index: 'index.html',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    entry: { app: './src/index.ts' },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
            // typescript and tsx files
            test: /\.tsx?$/,
            use: 'ts-loader',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'App Template',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

export default configuration;
