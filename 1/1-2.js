(function(i) {
  i = i.split('');
  var floor = 0;

  for (var j = 0; j < i.length; j++) {
    i[j] === "(" ? floor++ : floor--;
    if (floor < 0) return j + 1;
  }
}(input));