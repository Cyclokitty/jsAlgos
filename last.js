function last(list){
  if (list.length === 1) {
    return arguments[arguments.length - 1];
  }
  if (Array.isArray(list)) {
    return list.pop();
  } else if (typeof list === 'string'){
    return list.split('').pop();
  } else if (typeof arguments === 'object') {
    return Array.from(arguments).pop();
  }
}

// but this is shorter:

function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}
