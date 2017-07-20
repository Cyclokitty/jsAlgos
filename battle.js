function battle(x, y) {
  var power = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', countA = 0, countB = 0;

  for (var i = 0; i < x.length; i++) {
    countA += power.indexOf(x[i]) + 1;
  }

  for (var j = 0; j < y.length; j++) {
    countB += power.indexOf(y[j]) + 1;
  }

  if (countA > countB) {
    return x;
  } else if (countA < countB) {
    return y;
  } else if (countA === countB) {
    return 'Tie!';
  }
}


battle("ONE", "TWO"); // "TWO"
