String.prototype.toAlternatingCase = function () {
  var phrase = this.split('');
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i].toUpperCase() === this[i]) {
      phrase[i] = phrase[i].toLowerCase();
    } else if (phrase[i].toLowerCase() === this[i]) {
      phrase[i] = phrase[i].toUpperCase();
    }
  }
  return phrase.join('');
};

"HELLO WORLD".toAlternatingCase();
