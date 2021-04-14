const postcssJs = require('postcss-js')
const autoprefixer = require('autoprefixer')

const prefixer = postcssJs.sync([ autoprefixer ])

const style = prefixer({
  width: '10px',
  marginBottom: '10px'
})

console.log(style);