// long version

function uniTotal() {
  let args = Array.from(arguments).toString('');
  if (args.length === 0) {
    return 0;
  }
  let total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args.charCodeAt(i);
  }
  return total;
}

// 
const uniTotal = (arg) =>  [...arg].reduce((accum, item) =>  accum + item.charCodeAt(0), 0);


uniTotal('Mary Had A Little Lamb');
