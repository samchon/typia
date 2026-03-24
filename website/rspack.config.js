const path = require("path");
const rspack = require("@rspack/core");

module.exports = {
  entry: ["./src/compiler/index.ts"],
  output: {
    path: path.join(__dirname, "public", "compiler"),
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
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
            target: "es5",
          },
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
