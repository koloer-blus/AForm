const ora = require('ora');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod');

const spinner = ora(`📦${chalk.blue("Webpack starts to compile your project")}\n`).start();

webpack(webpackConfig, function (error, status) {
  if (error) {
    spinner.fail(`${chalk.red("Compilation failed!!!")}❌\n`);
    console.log(error);
    process.exit();
    return;
  }
  spinner.succeed(`${chalk.green("Compiled successfully!!!")}✅\n`);

  process.stdout.write(status.toString({
    colors: true,
    modules: true,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');
  process.exit();
});