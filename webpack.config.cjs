const path = require('path');

module.exports = {
  mode: 'development', // or 'production' based on your needs
  entry: './src/main.jsx', // Adjust this path if your entry file is located elsewhere
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Add .jsx to the list of resolvable extensions
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Ensure you have Babel set up to transpile JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add presets for React
          },
        },
      },
      // Add other loaders (e.g., CSS, images) as needed
    ],
  },
  devtool: 'source-map', // Optional: for better debugging
};