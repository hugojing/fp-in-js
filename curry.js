const { curry } = require('lodash')

const match = curry((reg, str) => str.match(reg))
const filter = curry((f, arr) => arr.filter(f))

const haveSpace = match(/\s+/g)

console.log(
  haveSpace('ffffffff')
)
console.log(
  haveSpace('ddd ddd')
)

console.log(
  filter(haveSpace)(['wwwwww', 'hello world'])
)
