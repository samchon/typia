const path = require("path");
const rspack = require('@rspack/core');

module.exports = {
  entry: ["./src/compilers/index.ts"],
  output: {
    path: path.join(__dirname, "public", "compilers"),
    filename: "index.js",
    chunkFormat: false,
  },
  optimization: {
    minimize: true,
  },

  mode: "development",
  target: "web",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.rspack.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new rspack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
