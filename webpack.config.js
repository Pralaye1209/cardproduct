const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader', 
      //   type: 'javascript/auto',
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'dist'),
    // },
    port: 8080,
    open: true,
  },
};
