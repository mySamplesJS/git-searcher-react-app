
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
	cache: true,
	entry: [
		'./src/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[chunkhash].js',
		chunkFilename: '[chunkhash].js'
	},
	resolve: {
		root: path.resolve(__dirname, 'src'),
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				drop_debugger: true
			},
			output: {comments: false}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'React App'
		}),
		new webpack.optimize.DedupePlugin()
	]
};
