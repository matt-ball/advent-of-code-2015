(function(a) {
  var total = 0;

  for (var i = 0; i < a.length; i++) {
    var iteree = a[i].split('x');
    var bow = iteree.reduce(function(a, b) {return a * b;});
    var lowest = Math.min.apply(Math, iteree);
    iteree.splice(iteree.indexOf(lowest.toString()), 1);
    total += (lowest * 2) + (Math.min.apply(Math, iteree) * 2) + bow;
  }

  return total;
}(arr));