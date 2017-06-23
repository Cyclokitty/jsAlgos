// from codewars.com 

function high(x){
  var alpha = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };
  var words = x.split(' ');
  var scores;
  var wordsArr = [];
  for (var i = 0; i < words.length; i++) {
    var total = 0;
    for (var j = 0; j < words[i].length; j++) {
      var wordScore = [];
       total += alpha[words[i][j]];
    }
    scores = [words[i], total];
    wordsArr.push(scores);
  }
  var longest = wordsArr[0];
  for (var k = 0; k < wordsArr.length; k++) {
    if (wordsArr[k][1] > longest[1]) {
      longest = wordsArr[k];
    }
  }
  return longest[0];
}

high('what time are we climbing up the volcano'); //'volcano'
