const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
	envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch(e){}

module.exports = {
	entry: './app/app.jsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			app: path.resolve(__dirname, 'app'),
			api: path.resolve(__dirname, 'app/api'),
			components: path.resolve(__dirname, 'app/components'),
			router: path.resolve(__dirname, 'app/router')
		},
		extensions: ['.js', '.jsx']
	},
	plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			},
			{
				loader: 'style-loader!css-loader!stylus-loader',
				test: /\.styl$/
			}
		]
	},
	devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
}
