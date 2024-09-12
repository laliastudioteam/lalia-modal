const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
		library: {
			name: "LaliaModal",
			type: "umd",
		},
		clean: true,
	},
	mode: "development", // ou 'production'
	devServer: {
		static: path.join(__dirname, "dist"),
		port: 3000,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			publicPath: "/", // Définit le chemin de base pour les assets
		}),
		new CopyWebpackPlugin({
			patterns: [
				{from: "public/favicon.ico", to: "favicon.ico"},
				{from: "public/logo192.png", to: "logo192.png"},
				{from: "public/manifest.json", to: "manifest.json"},
			],
		}),
	],
};
