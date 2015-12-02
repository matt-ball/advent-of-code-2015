(function(a) {
  var total = 0;

  for (var i = 0; i < a.length; i++) {
    var iteree = a[i].split('x');
    var w = iteree[0] * iteree[1];
    var h = iteree[1] * iteree[2];
    var l = iteree[0] * iteree[2];
    var min = Math.min(w, h, l);
    total += (2 * w) + (2 * h) + (2 * l) + min;
  }
  
  return total;
}(arr));