export const nodeKinds = {
  add: {
    inputs: { a: null, b: null },
    outputs: { sum: null },
    backgroundColor: 'lavender',
    name: 'Addition',
  },
  sub: {
    inputs: { a: null, b: null },
    outputs: { result: null },
    backgroundColor: 'teal',
    name: 'Subtraction',
  },
  div: {
    inputs: { dividend: null, divisor: null },
    outputs: { quotient: null, remainder: null },
    backgroundColor: 'darksalmon',
    name: 'Division',
  },
  mult: {
    inputs: { multiplier: null, multiplicand: null },
    outputs: { product: null },
    backgroundColor: 'red',
    name: 'Multiplication',
  },
};
