function avgArray(arr) {
  var len = arr.length;
  var result = [];
  for (var i = 0; i < arr[0].length; i++) {
    count = 0;
    for (var j = 0; j < arr.length; j++) {
      count += arr[j][i];
    }
    result.push(count/len);
  }
  return result;
}


avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]);  // [3, 4, 5, 6])
