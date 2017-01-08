var webpack = require('webpack');
var path = require('path');


 module.exports = {
  
  entry: './10/entry.js',
  output: {
    path: './',
    filename: 'bundle.js',
  },
  module:{
    loaders : [
      {
        test : /\.js?$/,
        loader : 'babel-loader',
		query: {
          presets: ['es2015', 'react','stage-0'],
          plugins: ['transform-decorators-legacy']
        }
	  }
    ]
  },
};

