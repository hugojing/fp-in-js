const compose = (f, g) => x => f(g(x))

const first = arr => arr[0]

const reverse = arr => arr.reverse()

const last = compose(first, reverse)

console.log(
  last([1, 2, 5, 6, 13, 99])
)
