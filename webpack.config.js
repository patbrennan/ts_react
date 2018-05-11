module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "./dist/bundle.js" // folder created automatically by webpack
  },
  devtool: "source-map",
  resolve: {  // Ts specific; resolves file extensions so webpack works w/Ts
    // allows us to simply `import` w/out specifying ext names. Tells Webpack which
    // extensions to look for. Specify "" so it can look for files that don't need
    // anything to be added.
    extensions: ["*", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // tell webpack what loader to use on certain file extensions
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};