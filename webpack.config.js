const path = require('path');

module.exports = {
   entry: "./app/assets/scripts/App.js",
   output: {
      path: path.resolve(__dirname, "./app/temp/scripts"),
      filename: "App.js"
   }
}










/*
const path = require('path');

module.exports = {
   entry: './app/assets/scripts/App.js',
   output: {
      path: path.resolve(__dirname, './app/temp/scripts'),
      filename: 'App.js'
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
               presets: ['es2015']
            }
         }
      ]
   }
}
*/