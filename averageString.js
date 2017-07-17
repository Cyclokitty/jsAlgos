function averageString(str) {
  if (str === '') {
    return 'n/a';
  }
  let digits = str.split(' ');
  let total = 0;
  let result;
  const nums = {nine: 9, eight: 8, seven: 7, six: 6, five: 5, four: 4, three: 3, two: 2, one: 1, zero: 0};
  for (var i = 0; i < digits.length; i++) {
    total += nums[digits[i]];
  }
  let answer = Math.floor(total / digits.length);
  if (answer > 9) return 'n/a';
  for (var propname in nums) {
    if (nums[propname] === answer) {
      result = propname;
    }
  }
  if (result === undefined) {
    return 'n/a';
  } else {
    return result;
  }
}

averageString('zero zero nine eight nine eight nine nine nine nine nine nine nine six four one one two nine nine');
