function add() {
  let list = [...arguments];
  return list.reduce((accum, item, pos) => {
    return accum + (item * (pos + 1));
  }, 0);
}

add(100, 200, 300);
