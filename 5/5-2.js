(function(a) {
  var niceStrings = 0;
  var matchesPair = /((\w){2})(.*)\1+/;
  var matchesSameLettersWithSeparator = /((\w){1})\w{1}\1+/;

  for (var i = 0; i < a.length; i++) {
    var pair = a[i].match(matchesPair) && a[i].match(matchesPair).length || 0;
    var sameLetters = a[i].match(matchesSameLettersWithSeparator) && a[i].match(matchesSameLettersWithSeparator).length || 0;
    if (pair && sameLetters) niceStrings++;
  }

  return niceStrings;
}(arr));