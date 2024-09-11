const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js", // Point d'entrée du projet
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		clean: true, // Nettoie le dossier dist avant chaque build
	},
	mode: "development", // Ou 'production' en fonction du build
	devServer: {
		static: "./dist",
		port: 3000, // Port de développement local
		open: true, // Ouvre automatiquement le navigateur
	},
	module: {
		rules: [
			{
				test: /\.js$/, // Gestion des fichiers JS/JSX
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/, // Gestion des fichiers CSS
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html", // Template HTML de base
		}),
	],
};
