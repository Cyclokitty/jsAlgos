// From Hackerrank. With an array find the largest total and the smallest total from it. Note: numbers can be as high as 32 bit.

// arr = [10, 3, 600, 56, 43];
arr = [156873294, 719583602, 581240736, 605827319, 895647130];

var numbers = new Uint32Array(arr);
var arranged = numbers.sort();
var range = Array.from(arranged);

var minRange = range.slice(0, 4);
var maxRange = range.slice(1, 5);

function sum(group) {
  const total = group.reduce((accum, item) => {
    return accum + item;
  }, 0);
  return total;
}

var min = sum(minRange);
var max = sum(maxRange);
console.log("The smallest total: " + min + ". \rThe largest total: " + max);
