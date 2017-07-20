function product(values) {
  return values === null || values.length === 0  ? null : values.reduce((accum, i) => accum * i, 1);
}

product([5, 4, 1, 3, 9]);  // 540
//product([]); // null
//product(null); // null

// even more es6:

const product = values => values === null || values.length === 0  ? null : values.reduce((accum, i) => accum * i, 1);
