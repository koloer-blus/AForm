/**
 * 字符串驼峰转中划线
 */
const hyphenate = function(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
};

/**
 * 将js转为css变量
 * @param {object<string: string>} varObj
 * @param {string} preName
 * @returns {string} mountName
 */
const translateJsToCssVariable = function(varObj, preName = '') {
  const NameDesc = `Aform${preName}`;
  const styleString = Object.keys(varObj).reduce((prev, curr) => {
    const varName = hyphenate(`${NameDesc}-${curr}`);
    return `${prev}--${varName}: ${varObj[curr]};\n`;
  }, '');
  return `<style>
  :root {
      ${styleString}
  }\n
  </style>`;
};

/**
 * 将styleObject转为string
 * @param {object} style
 * @returns {string} styleString
 */
const styleToString = style =>
  Object.keys(style).reduce(
    (acc, key) =>
      `${acc +
        key
          .split(/(?=[A-Z])/)
          .join('-')
          .toLowerCase()}:${style[key]};\n`,
    ''
  );

/**
 * 将js转为css的class
 * @param {object<string: string>} classObj
 * @param {string} preName 首字母必须大写
 * @returns {string} mountName
 */
const translateJsToCssClass = function(classObj, preName = '') {
  const NameDesc = `Aform${preName}`;
  const styleString = Object.keys(classObj).reduce((prev, curr) => {
    const styleString = styleToString(classObj[curr]);
    const varName = hyphenate(`${NameDesc}-${curr}`);
    return `${prev}.${varName}: {
      ${styleString}
    };\n`;
  }, '');
  return `<style>\n${styleString}</style>`;
};

module.exports = {
  translateJsToCssClass,
  translateJsToCssVariable,
};
