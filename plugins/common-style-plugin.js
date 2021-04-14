const HtmlWebpackPlugin = require('html-webpack-plugin');

class CommonUIStylePlugin {
  constructor(options) {
    this.opts = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('CommonUIStylePlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'CommonUIStylePlugin',
        (data, cb) => {
          const { html } = data;
          const insertIndex = data.html.indexOf('<style>');
          data.html = `${html.slice(0, insertIndex)}
          ${this.opts.cssStyleString}
          ${html.slice(insertIndex)}`;
          cb(null, data);
        },
      );
    });
  }
}

module.exports = CommonUIStylePlugin;