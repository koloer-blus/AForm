const HtmlWebpackPlugin = require('html-webpack-plugin');

class CommonUIStylePlugin {
  constructor(options) {
    this.opts = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('CommonStylePlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'CommonUIStylePlugin',
        (data, cb) => {
          console.log(this.opts);
        },
      );
    });
  }
}

module.exports = CommonUIStylePlugin;