const color = require('./color');
const util = require('../util');
/**
 * 这里的首字母务必大写
 */
const BaseName = {
  color: 'Color',
};

module.exports = {
  color,
  style: [util.translateJsToCssVariable(color, BaseName.color)],
};
