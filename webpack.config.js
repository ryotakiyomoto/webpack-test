const path = require('path');

module.exports = {
  // エントリーポイントの設定
  entry: path.join(__dirname, "src", "index.js"),

  output: {
    path: path.join(__dirname, "dist"),
    filename: 'main.js'
  }
};
