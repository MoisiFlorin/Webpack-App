const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {

  devServer: {
    contentBase: './dist',
    open: true
  },

  entry: { app: './src/index.js',
},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'My Awesome application',
        myPageHeader: 'Hello World',
        template: './src/index.html',
        filename: './index.html' 
    })
]
  
};