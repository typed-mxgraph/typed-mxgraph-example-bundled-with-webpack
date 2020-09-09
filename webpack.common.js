const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.ts',
    style: './src/style.scss',
    polyfills: './src/polyfills.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
        enforce: 'pre',
        include: [
          path.join(__dirname, './src'),
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
        include: [
          path.join(__dirname, './src/styles'),
          path.join(__dirname, './src/style.scss'),
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: './src/assets', to: 'assets' },
      { from: './src/favicon.png', to: 'favicon.png' },

      { from: './node_modules/mxgraph/javascript/src/css', to: 'assets/mxgraph/css' },
      { from: './node_modules/mxgraph/javascript/src/images', to: 'assets/mxgraph/images' },
      { from: './node_modules/mxgraph/javascript/src/resources', to: 'assets/mxgraph/resources' },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
