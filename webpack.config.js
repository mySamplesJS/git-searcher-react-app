"use strict";

var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
	cache: true,
	entry: [
		'react-hot-loader/patch',
		'./src/index.jsx' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-eval-source-map',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	resolve: {
		root: path.resolve(__dirname, "src"),
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./dist",
		noInfo: true, // do not print bundle build stats
		hot: true, // enable HMR
		inline: true, // embed the webpack-dev-server runtime into the bundle
		historyApiFallback: true, // serve index.html in place of 404 responses to allow HTML5 history
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new DashboardPlugin(),
		new ExtractTextPlugin('[name].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
