const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',  // Main entry point for your app
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),  // Output path (dist folder)
        clean: true,  // Cleans dist folder before each build
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',  // Use the HTML template
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,  // Handle CSS imports
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Handle images
                type: 'asset/resource',
            },
        ],
    },
    
    mode: 'development',  // Use 'production' for final builds
    devServer: {
        static: './dist',
        hot: true,  // Enable Hot Module Replacement for development
    },
};