import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
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
        }, {
            // scss and css files
            test: /.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),

        // current MiniCssExtractPlugin types doesn't work with webpack 5
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        new MiniCssExtractPlugin() as any,
    ],
};

export default configuration;
