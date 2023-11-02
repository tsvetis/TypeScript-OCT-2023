const path = require("path");

module.exports = {
  // devtool: "eval-source-map",
  entry: path.resolve(__dirname, "src/index.ts"), // Your entry TypeScript file
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true,
    open: true,
    compress: true,
  },
};
