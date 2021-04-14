const cssClass = require('./class');
const cssVariable = require('./variable');

const getCustomStyleString = function(variableString, classString) {
  return `${variableString}\n${classString}`;
};

module.exports = {
  style: {
    color: cssVariable.color,
  },
  layout: {
    center: cssClass.center,
  },
  styleString: getCustomStyleString(cssVariable.style, cssClass.style),
};
