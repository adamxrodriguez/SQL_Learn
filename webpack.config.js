// const { path } = require("browserify/lib/builtins");
const MiniCssPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// console.log(process.env.TEST_ENV);

module.exports = {
  mode: "development",
  entry: "./client/index.js" // the root || start of your project
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  plugins: [new miniCssPlugin(), new HtmlWebpackPlugin({template: './index.html',}),],
  
  module: {
    rules: [
        { 
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }},
        {
        test: /\.s[ac]ss$/i,
        use: [ //'style-loader',
        miniCssPlugin.loader,
        'css-loader', 'sass-loader']
        //use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            
        }], 
  }
  
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    proxy: {
        '/api': 'http://localhost:3000'
    },
    compress: true;
    port: 8000
  },

};
