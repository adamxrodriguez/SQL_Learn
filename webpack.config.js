/*

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: './dist/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/build',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // // Creates `style` nodes from JS strings
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './index.html'
  })
  ].concat(devMode ? [] : [new MiniCssExtractPlugin({
    filename: "main.css",
  })]),
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    
    hot: true,
    port: 8080,
  },
};



*/



// const { path } = require("browserify/lib/builtins");
const miniCssPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const development = process.env.NODE_ENV !== "production";



module.exports = {
  mode:  process.env.NODE_ENV, //"development", //
  entry:'./src/index.js', // the root || start of your project
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },

  plugins: [new miniCssPlugin(), 
    new HtmlWebpackPlugin({template: './dist/index.html'})
  ],
  
  module: {
    rules: [
        { 
        test: /\.jsx?/,
        exclude: /node_modules/, // |bower_components
        use: {
          loader: 'babel-loader',
          options: {
           presets: ['@babel/preset-env']
          }
        }},
        
        {
        test: /\.s[ac]ss$/i,
        use: //[ //'style-loader',
        //miniCssPlugin.loader,
        //'css-loader', 'sass-loader']
        [ miniCssPlugin.loader,'css-loader','sass-loader' ]
            
        }], 
  },
  
  devServer: {
    
    static: {
      directory: path.resolve(__dirname),
    },
    proxy: {
      secure: false,
        '/': 'http://localhost:3000',
    },
    compress: true,
    port: 8000,
    hot: true
  },

};





/** 

const path = require("path");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";
}

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // This is unnecessary in Webpack 5, because it's the default.
  // However, react-refresh-webpack-plugin can't find the entry without it.
  entry: "./src/index.js",

  output: {
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, "dist"),
    // this places all images processed in an image folder
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        //  
        //  * The `type` setting replaces the need for "url-loader"
        //  * and "file-loader" in Webpack 5.
        //  *
        //  * setting `type` to "asset" will automatically pick between
        //  * outputing images to a file, or inlining them in the bundle as base64
        //  * with a default max inline size of 8kb
        //  
        type: "asset",

        //  
        //  * If you want to inline larger images, you can set
        //  * a custom `maxSize` for inline like so:
        //  
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
          options: {
             
            //  * From the docs: When set, the given directory will be used
            //  * to cache the results of the loader. Future webpack builds
            //  * will attempt to read from the cache to avoid needing to run
            //  * the potentially expensive Babel recompilation process on each run.
             
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // required if using webpack-dev-server
  devServer: {
    hot: true,
  },
};

*/
