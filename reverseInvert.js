// good grief, what a mass:

function reverseInvert(array){
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      array[i] = array[i].toString().split('').reverse().join('');
      if (array[i].includes('-')) {
        result.push(parseInt(array[i]) * -1);
      } else {
        result.push(parseInt(array[i]));
      }
    }
  }
  return result.map(item => {
      return item * -1;
    });

}

reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]); // [-1,-21,-78,24,-5])
