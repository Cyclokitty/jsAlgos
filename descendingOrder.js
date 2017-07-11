function descendingOrder(n){
  var num = n.toString().split('');
  num.sort((a, b) => b - a);
  return parseInt(num.join(''));
}

descendingOrder(743982108); // 988743210

// or bring to one line:

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a,b) => b - a).join(''));
}
