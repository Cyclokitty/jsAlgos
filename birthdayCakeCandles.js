function birthdayCakeCandles(n, ar) {
  var tallest = 0;
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > tallest) {
      tallest = ar[i];
    }
  }

  const count = ar.filter(item => {
    if (item === tallest) {
      return item;
    }
  });
  return count.length;
}

birthdayCakeCandles(5, [3, 6, 5, 1, 6]);

// return the number of the tallest candles
