function highAndLow(numbers){
  let nums = numbers.split(' ');
  let numArray = nums.map(item => {
    return parseInt(item);
  });
  let min = Math.min.apply(null, nums);
  let max = Math.max.apply(null, nums);
  return max + " " + min;
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"); // "542 -214");
