const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const common = {
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const client = {
  entry: './client/src/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  }
};

const server = {
  entry: './client/src/index-server.jsx',
  target: 'node',
  output: {
    path: DIST_DIR,
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs-module'
  }
}

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];