const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'node',                         // Because it's backend
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};