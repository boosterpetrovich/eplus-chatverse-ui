/**
 * Created by Max3014 on 4/20/2018.
 */

'use strict';

const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		publicPath: 'dist',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
};