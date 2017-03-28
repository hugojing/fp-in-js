const compose = (f, g) => x => f(g(x))

const first = arr => arr[0]

const reverse = arr => arr.reverse()

const id = x => x

const last = compose(first, reverse)

console.log(
  last([1, 2, 5, 6, 13, 99])
)

// compose multi functions. For example, compose(f,g,h) = (...args) => f(g(h(...args)))
const compose1 = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

const last1 = compose1(id, first, reverse)

console.log(
  last1([1, 2, 5, 6, 13, 99])
)
