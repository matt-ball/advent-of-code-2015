(function(a) {
  var niceStrings = 0;
  var matchesVowels = /a|e|i|o|u/g;
  var matchesBadString = /ab|cd|pq|xy/;
  var matchesDoubleLetter = /(\w)\1+/;

  for (var i = 0; i < a.length; i++) {
    var vowels = a[i].match(matchesVowels) && a[i].match(matchesVowels).length || 0;
    var badString = a[i].match(matchesBadString) && a[i].match(matchesBadString).length || 0;
    var doubleLetter = a[i].match(matchesDoubleLetter) && a[i].match(matchesDoubleLetter).length || 0;
    if (vowels >= 3 && badString === 0 && doubleLetter >= 1) niceStrings++;
  }

  return niceStrings;
}(arr));