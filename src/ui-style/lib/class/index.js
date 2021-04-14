const center = require('./center');
const flex = require('./flex');
const util = require('../util');
/**
 * 这里的首字母务必大写
 */
const BaseName = {
  center: 'Center',
  flex: 'Flex',
};

module.exports = {
  center,
  style: [
    util.translateJsToCssClass(center, BaseName.center),
    util.translateJsToCssClass(flex, BaseName.flex),
  ],
};
