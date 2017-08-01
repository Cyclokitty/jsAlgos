function elimination(arr){
const matchy = arr.filter((item, pos) => {
  return arr.indexOf(item) !== pos;
});
  return parseInt(matchy);
}

let elimination = (arr) => {
  const matchy = arr.filter((item, pos) => {
    return arr.indexOf(item) !== pos;
  });
  return matchy.length === 0 ? null : parseInt(matchy);
};

// but this is nice

let elimination = (arr) => {
  const matchy = arr.filter((item, pos) => arr.indexOf(item) !== pos);
  return matchy.length === 0 ? null : parseInt(matchy);
};



elimination([2,5,34,1,22,1]); // 1, "twins are 1s"
