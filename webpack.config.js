var path = require('path');

const cssLoaderConfig = {
  sourceMap: true
};

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  devtool: 'source-map',
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html'
    }
  },

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.css',
      '.scss'
    ],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'node_modules')
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [
          'babel-loader',
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: cssLoaderConfig
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: cssLoaderConfig
          },
          "sass-loader"
        ]
      },
      {
        test: /\.svg$|\.png$|\.jpe?g$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:base64:5].[ext]'
            }
          }
        ]
      }
    ]
  }
};